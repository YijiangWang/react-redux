import { useContext } from "react";
import { Context } from "./Context";

export function useSelector(selector) {
  const store = useContext(Context);
  const selectedState = selector(store.getState());
  return selectedState;
}