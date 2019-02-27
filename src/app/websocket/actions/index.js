export const TEST_ACTION='TEST_ACTION';
export const REQUEST_DATA='REQUEST_DATA';

export const REQUEST_DATA_P2='REQUEST_DATA_P2';
export const DATA_RECIEVED='DATA_RECIEVED';
export const ERROR='ERROR'


export const test_action = () => ({
  type: 'TEST_ACTION'
})


//thunk vs saga vs vanilla


export const request_data = () => ({
  type: REQUEST_DATA
})


export const request_data_p2 = () => ({
  type: REQUEST_DATA_P2
})

export const data_recieved = (data)=>({
  payload: data,
  type: DATA_RECIEVED
})
export const error = ()=>
({
  type: ERROR
})


// async fetching of the data

export const getData = () => {

  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch(data_recieved(json));
          console.log(json)
      });
  };
}
