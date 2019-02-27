import { connect } from 'react-redux';
import ComeBack from '../components';
import { data_recieved } from '../actions';
import { error } from '../actions';
import { request_data } from '../actions';
import { request_data_p2 } from '../actions';

import { getData } from '../actions'


const mapStateToProps=(state)=>{console.log("state is ",state); return {daemoner : state.daemoner}; }
const mapDispatchToProps = (dispatch) => { return { thunk_request_data: () => dispatch(getData())  ,
                                                      custom_request_data: () => dispatch(request_data() ),
                                                      saga_request_data: () => dispatch(request_data_p2()) }}
export default connect(mapStateToProps,mapDispatchToProps)(ComeBack);
