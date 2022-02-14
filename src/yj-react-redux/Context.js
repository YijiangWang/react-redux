import React from "react";
// 跨层级数据传递
// context 三步走
// step1：创建一个 context 对象
export const Context = React.createContext();

// step2：Provider 传递 store

// step3：子孙组件接收 store
// 1）Consumer
// 2）contextType
// 3）useContext