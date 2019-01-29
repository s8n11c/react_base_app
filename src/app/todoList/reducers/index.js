import {TEST_ACTION} from '../actions';

const InitialState={todoList: [{i: 1,context: "cont 1", at: "01:00"},
{i: 2,context: "cont 2", at: "01:30"}]};

const mainReducer = (state=InitialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      console.log("actions is tested ")
      return state
    default:
      return state
  }
};
export default mainReducer;
