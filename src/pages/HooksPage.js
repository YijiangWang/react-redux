import { useEffect, useReducer, useState } from "react";
import { counterReducer } from "../store/store";

const initFunc = (initValue) => initValue - 2;

export default function HooksPage() {
  const [num, setNum] = useState(3);
  const [count, dispatch] = useReducer(counterReducer, '2', initFunc);

  useEffect(() => {
    console.log('组件加载完成|更新完成');

    return () => {
      console.log('组件更新前和卸载前会更新');
    }
  })

  return (
    <div>
      <h3>HooksPage：掌握所有的 Hooks 方法</h3>
      <p>{count}</p>
      <button onClick={()=>{dispatch({type: 'ADD'})}}>add</button>
    </div>
  )
}