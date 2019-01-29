 import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import TodoList from '../../todoList/components';
import TopBar from './TopBar';
import sassPlayground from '../../sassPlayground/components';

import { withStyles } from '@material-ui/core/styles';
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

    return(
    <Router>
   <div>
        <TopBar position='fixed' />
        <div  className={this.props.classes.toolbar} />
        <div>
          <Route style={{width: '100%',height: '100%', backgroundColor: "green"}} path="/list" exact component={TodoList} />
          <Route style={{width: '100%',height: '100%', backgroundColor: "yellow"}} path="/sasspg" exact component={sassPlayground} />
        </div>
  </div>
</Router>);
  }
}

export default withStyles(styles)(ComeBack);
