import React from 'react';

import {
  BrowserRouter as Router,
 // for server rendering
  Route,Link
  // etc.
} from "react-router-dom";
// material ui components//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import TodoList from '../../todoList/components';

import CustomList from './List';
import TopBar from './TopBar';
class ComeBack extends React.Component {
  render() {
    console.log(this.props);
    return(
    <Router >
   <div style={{ marginTop: '7%'}}>
      <TopBar />
      <Route path="/list" exact component={TodoList} />
   </div>
</Router>);
  }
}


export default ComeBack;
