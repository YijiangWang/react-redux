import { useContext } from "react"
import { Context } from "./Context"

export const useStore = () => {
  const store = useContext(Context);
  return store;
}