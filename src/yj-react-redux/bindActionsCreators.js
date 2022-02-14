export function bindActionCreators(creators, dispatch) {
  let boundActionCreators = {};
  for(let key in creators) {
    if(typeof creators[key] === 'function') {
      boundActionCreators[key] = (...args) => dispatch(creators[key].apply(this, args))
    }
  }
  return boundActionCreators;
}