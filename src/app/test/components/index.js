 import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import TopBar from './TopBar';

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
    console.log(this.props)
    return(
    <Router>
   <div>
        <TopBar damn={this.props.onClick}  position='fixed' />
        <div  className={this.props.classes.toolbar} />


          <h1 style={{fontSize: "4vw", textAlign: "center"}}> React Base Project </h1>

          <h1 style={{fontSize: "4vw", textAlign: "center"}}> keep it simple </h1>

          <h1 style={{fontSize: "4vw", textAlign: "center"}}> Make it great </h1>


  </div>
</Router>);
  }
}

export default withStyles(styles)(ComeBack);
