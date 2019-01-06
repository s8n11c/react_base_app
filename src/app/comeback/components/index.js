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
import sassPlayground from '../../sassPlayground/components';
class ComeBack extends React.Component {
  render() {
    console.log(this.props);
    return(
    <Router>
   <div style={{display: "flex", flexDirection: "row", backgroundColor: "red"}}>
      <TopBar style={{position: 'absolute', zIndex: 1}} />
      <div style={{ zIndex: 1, backgroundColor: "yellow"}}>
        <Route path="/list" exact component={TodoList} />
        <Route path="/sasspg" exact component={sassPlayground} />
      </div>
   </div>
</Router>);
  }
}


export default ComeBack;
