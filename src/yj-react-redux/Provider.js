import { Context } from "./Context";
// 跨层级数据传递
// context 三步走
// step1：创建一个 context 对象

// step2：Provider 传递 store
export function Provider({ store, children }) {
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}

// step3：子孙组件接收 store
// 1）Consumer
// 2）contextType
// 3）useContext