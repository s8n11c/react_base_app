
// async fetching of the data
import {REQUEST_DATA} from '../actions'


export function customAsync({ dispatch }) {

  return function(next) {
    return function(action) {
      // do your stuff

      if (action.type === REQUEST_DATA) {

return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    dispatch({ type: "DATA_RECIEVED", payload: json })
    console.log(json)
  });
        }
      return next(action);
    };
  };
}
