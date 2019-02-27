import  {REQUEST_DATA} from '../actions';
import {DATA_RECIEVED} from '../actions';
import {ERROR} from '../actions'




const InitialState={error: "-" , data: [{id: 1, name: "dodnodn" , number: 2019222},{id: 1, name: "dodnodn" , number: 2019222}] };
const mainReducer = (state=InitialState, action) => {
  switch (action.type) {


    case REQUEST_DATA:

      console.log("data requested")


      return state
    case DATA_RECIEVED:
      console.log("data recieved")

      return state

    case ERROR:
        console.log("error occured")

        return state
    default:
      return state
  }
};
export default mainReducer;
