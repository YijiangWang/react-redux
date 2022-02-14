import React, { useContext, useLayoutEffect } from 'react';
import { useForceUpdate } from './forceUpdate';
import { bindActionCreators } from './bindActionsCreators';
import { Context } from './Context';

// step1：创建一个 context 对象

// step2：Provider 传递 store

// step3：子孙组件接收 store
// 1）Consumer
// 2）contextType
// 3）useContext

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) =>  {
  // 子孙组件接受跨层级传递下来的 store
  const store = useContext(Context);
  const stateProps = mapStateToProps(store.getState());

  let dispatchProps = {dispatch: store.dispatch};
  if(typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(store.dispatch)
  } else if(typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
  }

  // 更新组件
  // 方案：
  // 1、类组件：this.setState()、this.forceUpdate()、以及全局更新的 ReactDOM.render()
  // 2、函数组件：使用 useState() 或者 useReducer() 中的地二个方法去更新
  // const [, forceUpdate] = useReducer(x=>x+1, 0);
  const forceUpdate = useForceUpdate();

  // useEffect 有延迟，在 DOM 变更之后执行
  // useLayoutEffect 没有延迟，在 DOM 变更的同时执行
  useLayoutEffect(() => {
    // 副作用不能写到函数体里面，会阻塞UI渲染
    store.subscribe(() => {
      forceUpdate();
    })
  }, [store]);

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}