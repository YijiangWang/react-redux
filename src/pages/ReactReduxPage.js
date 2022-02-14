import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
  state=>({count: state.count}),
  // 1.直接使用 Object 形式
  // {
  //   add: () => ({type: 'ADD'})
  // }
  // 2.使用 function 形式
  // dispatch => {
  //   return ({
  //     add: () => dispatch({type: 'ADD'}),
  //     minus: () => dispatch({type: 'MINUS'}),
  //     dispatch,
  //   })
  // }
  // 3.使用 bindActionCreator，（原理为2）
  dispatch => {
    let creators = {
      add: () => ({type: 'ADD'}),
      minus: () => ({type: 'MINUS'})
    }
    creators = bindActionCreators(creators, dispatch);
    return {...creators, dispatch};
  },
  (stateProps, dispatchProps, ownProps) => {
    return {...stateProps, ...dispatchProps, a:123}
  }
)

class ReactReduxPage extends React.PureComponent {
  dispatchAdd = () => {
    this.props.dispatch({type: 'ADD'});
  }

  render() {
    const { count, add, minus } = this.props;
    return (<div>
      <h3>ReactReduxPage</h3>
      <p>{count}</p>
      <button onClick={add}>add</button>
      <button onClick={this.dispatchAdd}>dispatchAdd</button>
      <button onClick={minus}>mixins</button>
    </div>) 
  }
}

export default ReactReduxPage;