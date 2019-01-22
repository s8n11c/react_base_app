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
// import { unstable_Box as Box } from '@material-ui/core/Box';
import CustomList from './List';
import TopBar from './TopBar';
import sassPlayground from '../../sassPlayground/components';

const styles = theme => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar,
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "green"
  }
});
class ComeBack extends React.Component {
  render() {
    console.log(this.props);
    return(
    <Router>
   <div style={{width: '100%',height: '100%', position: 'fixed'}}>
        <TopBar />
        <div style={{width: '100%',height: '50%'}}>
          <Route style={{width: '100%',height: '100%', backgroundColor: "green"}} path="/list" exact component={TodoList} />
          <Route style={{width: '100%',height: '100%', backgroundColor: "yellow"}} path="/sasspg" exact component={sassPlayground} />
        </div>
  </div>
</Router>);
  }
}


export default ComeBack;
