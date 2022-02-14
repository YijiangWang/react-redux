import React from "react";
// import { connect } from "react-redux";
import { bindActionCreators } from "../yj-redux";
import { connect } from "../yj-react-redux";
@connect(
  ({ count }) => ({ count }),
  // {
  //   add: () => ({ type: "ADD", payload: 5 }),
  //   minus: () => ({ type: "MINUS", payload: 3}),
  // },
  (dispatch) => {
    let creators = {
      add: () => ({ type: "ADD", payload: 5 }),
      minus: () => ({ type: "MINUS", payload: 3}),
    };
    creators = bindActionCreators(creators, dispatch);
    return { ...creators, dispatch };
  }
)
class YJReactReduxPage extends React.PureComponent {
  render() {
    console.log('this.props: ', this.props);
    const { count, add, minus, dispatch } = this.props;
    return (
      <div> 
        <h3>YJReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={() => dispatch({type: 'ADD'})}>dispatchAdd</button>
      </div>
    );
  }
}

export default YJReactReduxPage;
