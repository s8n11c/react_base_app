import React from 'react';
import Paper  from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../assets/ui/sassMe/Main.scss';

import ListingItems from '../containers/ListemAll';
class ComeBack extends React.Component {


  render() {
    return <div className='container'>
            <h1>  TodoList </h1>
            <Paper> in order to Any comeback to redux you must perform the most basic react example : (TODO LIST)</Paper>

            <div className="todo_controllers">
              <TextField helperText="what do you wanna TODO ?? "/>
              <Fab color="primary" aria-label="Add" >
                <AddIcon />
              </Fab>

              </div>
              <ListingItems />



          </div>

    ;
  }
}


export default ComeBack;
