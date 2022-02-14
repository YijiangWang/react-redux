import { useContext, useLayoutEffect } from "react";
import { useForceUpdate } from "./forceUpdate";
import { Context } from "./Context";

export function useDispatch() {
  const store = useContext(Context);
  const forceUpdate = useForceUpdate();
  useLayoutEffect(() => {
    store.subscribe(() => {
      forceUpdate()
    })
  }, []);
  return store.dispatch;
}