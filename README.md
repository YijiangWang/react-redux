### react-redux
- 主要提供了两个强大的 api：Provider 和 connect
##### Provider
- 为后代组件提供 store；
  ```js
  <Provider store={store}>
    ...
  </Provider>
  ```
##### connect
- `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`；
- 连接 React 组件与 Redux store；
- 返回一个新的已与 Redux store 连接的组件类。
###### mapStateToProps(state, [ownProps]): statePRops
- 是一个函数；
- 该回调函数会返回一个纯对象，这个对象会与组件的 props 合并；
- 如果定义该参数，组件将会监听 Redux store 的变化，否则不监听；
- ownProps 是当前组件自身的 props，如果指定了，那么只要组件接收到新的 props，mapStateToProps 就会被调用，被重新计算，mapDispatchToProps 也会被调用，需要注意性能。
###### mapDispatchToProps(dispatch, [ownProps])：dispatchProps
- 是一个 Object 或者 Function；
- 如果省略 mapDispatchToProps，默认情况下，会将 dispatch 注入到组件 props 中；
- 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中 dispatch 方法会将 action creator 的返回值当作参数执行。这些属性会被合并到组件的 props 中；
- 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：可能会用到 Redux 的辅助函数 bindActionCreators()）；
- ownProps 的作用与影响同 mapStateToProps。
###### mergeProps(stateProps, dispatchProps, ownProps)
- 如果省略这个参数，则默认返回 `Object.assign({}, ownProps, stateProps, dispatchProps)`;
- 可以用这个回调函数根据过滤 props 中的部分数据，或者把 props 中的某个特定变量与 action creator 绑定在一起。
###### options
- 可以定制 connector 的行为；
- pure = true，如果为 true，connector 将执行 shouldComponentUpdate 并且浅对比 mergeProps 的结果，避免不必要的更新。前提是当前组件是一个“纯组件”，不依赖于任何输入或 state 而只依赖于 props 和 Redux store 的 state。默认值为 true；
- withRef = false，如果为 true，connector 会保存一个对被包装组件实例的引用，改引用通过 `getWrappedInstance()` 方法获得。默认值为 false。

### 首先先学习一下函数组件中的所有的 Hooks API
##### useState
- `const [state, setState] = useState(init);`

##### useReducer
- `const [state, dispatch] = useReducer(reducer, initialState, initFunc);`
- 这是 `useState` 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及其配套的 dispatch 方法；
- 如果状态值比较简单时可以使用 useState；当 state 处理逻辑相对复杂，需要复用时可以使用；
- initFunc：是对初始值进行处理的函数，比如将初始值由字符串转化为数字等；

##### useEffect
- 副作用处理；
- 可以类比类组件中的三个生命周期函数：componentDidMount、componentDidUpdate、componentWillUnmount；
- 不过这里 return 的函数做的比 componentWillUnmount 要多，在组件卸载之前和更新之前都会执行；
- 详见[这里](https://www.jianshu.com/p/105dd6f98ad5)；
- 赋值给 useEffect 的函数会在组件渲染到屏幕之后延迟执行。

##### useLayoutEffect
- 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用该函数，可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新；
- 尽可能使用标准的 useEffect 以避免阻塞视觉更新；
- 在 DOM 更新的同时需要订阅的一些操作，就需要使用这个 API；

### Provider 和 connect 实现

### Hooks API
- useSelector 获取 store state
  ```js
    const count = useSelector(state => state.count);
  ```
- useDispatch 获取 dispatch
  ```js
    const dispatch = useDispatch();
  ```