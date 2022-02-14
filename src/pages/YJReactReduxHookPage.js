import { useCallback } from 'react';
import { useSelector, useDispatch } from '../yj-react-redux';

function YJReactReduxHookPage() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({type: 'ADD'});
  }, []);
  const minus = useCallback(() => {
    dispatch({type: 'MINUS'});
  }, []);
  
  return (
    <div>
      <h3>YJReactReduxHookPage</h3>
      <p>{count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  )
}

export default YJReactReduxHookPage;