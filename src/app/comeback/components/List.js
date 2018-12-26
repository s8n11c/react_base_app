import React from 'react';
// for the lists
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class CustomList extends React.Component {
  render() {
    console.log(this.props);
    return(<List
        component="nav">
        <ListItem button>
          <ListItemText inset primary="Sent mail" />
        </ListItem>

        <ListItem button>
          <ListItemText inset primary="Drafts" />
        </ListItem>
      </List>);
  }
}


export default CustomList;
