import {TEST_ACTION} from '../actions';
const InitialState={welcome: "Home", h1: "we're BAck so fknstrong "};
const mainReducer = (state=InitialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log("actions is tested ")
      alert("the actions is working just fine ! ! ")
      return state
    default:
      return state
  }
};
export default mainReducer;
