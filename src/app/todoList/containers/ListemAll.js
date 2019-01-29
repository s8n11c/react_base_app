import { connect } from 'react-redux';
import ListingItems from '../components/ListingItems';
const mapStateToProps=(state)=>{ return {todoList : state.todoList}; }
//const mapDispatchToProps = (dispatch) => { return { onClick: () => dispatch(test_action()) } }
export default connect(mapStateToProps)(ListingItems);
