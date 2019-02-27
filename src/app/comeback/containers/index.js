import { connect } from 'react-redux';
import ComeBack from '../components';
import { test_action } from '../actions';
const mapStateToProps=(state)=>{return {Messages : state.mainReducer}; }
const mapDispatchToProps = (dispatch) => { return { onClick: () => dispatch(test_action()) } }
export default connect(mapStateToProps,mapDispatchToProps)(ComeBack);
