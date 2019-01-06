import React from 'react';

// material ui components
import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Archive from '@material-ui/icons/Archive';
import {Link} from 'react-router-dom';
const  styles =theme=> ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer+1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});

class TopBar extends React.Component {


  state = {
    anchorEl: null,
  };

  handleChange = event => {
    console.log("changed")
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const menuIcon = {
      position : "absolute",
      marginLeft : '1000 px',
      border : '5 px solid pink'
    }
    return(
  <AppBar>
      <Toolbar style={{display: "flex" , flexDirection: "row-reverse"}}>
                    <div>
                      <IconButton
                  //      style={this.menuIcon}
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                      >
                      <Archive />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                      >
                        <MenuItem onTouchTap={this.handleClose}  href="/">Home</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}  href="/todoList" ><a href="/list">Todo List </a></MenuItem>
                        <MenuItem onTouchTap={this.handleClose}  href="/SassPLayground" ><a href="/sasspg">sass play ground </a></MenuItem>

                      </Menu>
                    </div>

                </Toolbar>
              </AppBar>
)}
}


export default TopBar;
