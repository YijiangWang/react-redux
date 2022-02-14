import { useState, useCallback } from "react";

export function useForceUpdate() {
  const [state, setState] = useState(0);

  const update = useCallback(() => {
    setState(prev => prev + 1);
  }, []);

  return update;
}