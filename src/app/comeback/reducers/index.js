import {TEST_ACTION} from '../actions';
import {Rainbow} from '../../assets/multiCss';
const InitialState={welcome: "Home", h1: "We're Back"};
const mainReducer = (state=InitialState, action) => {
  switch (action.type) {
    case TEST_ACTION:

      //console.log('%c Action performed  ', 'background: #222; color: #bada55');

      console.log("%c Action performed ", Rainbow );
      return state
    default:
      return state
  }
};
export default mainReducer;
