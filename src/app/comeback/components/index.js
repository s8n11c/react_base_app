import React from 'react';

import {
  BrowserRouter as Router,
 // for server rendering
  Route,Link
  // etc.
} from "react-router-dom";
import TodoList from '../../todoList/components';
class ComeBack extends React.Component {
  render() {
    console.log(this.props);
    return  <Router>
    <div>
        <h1 onClick={this.props.onClick}> ComeBack Tutorials ,  {this.props.Messages.welcome}</h1>
        <h2> {this.props.Messages.h1} </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list"> todo list </Link>
          </li>
        </ul>



      <Route path="/list" exact component={TodoList} />
    </div>
  </Router>

    ;
  }
}


export default ComeBack;
