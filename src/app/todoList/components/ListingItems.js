import React from 'react';
import Paper  from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../../assets/ui/sassMe/Main.scss';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class ListingItems extends React.Component {


  render() {
    return <Paper className={this.props.classes.root}>
      <Table className={this.props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">idnex</TableCell>
            <TableCell align="right">what do u want to do </TableCell>
            <TableCell align="right">when</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.todoList.todoList.map(todo=> (
          <TableRow key={todo.i} >
              <TableCell> {todo.i} </TableCell>
              <TableCell> {todo.context} </TableCell>
              <TableCell> {todo.at} </TableCell>
          </TableRow>

        ))}
          </TableBody>
      </Table>
    </Paper>

    ;
  }
}


export default withStyles(styles)(ListingItems);
