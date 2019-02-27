import React from 'react';
// material ui components
import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Archive from '@material-ui/icons/Archive';
import {Link} from 'react-router-dom';

const  styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: "none"
  }
};

class TopBar extends React.Component {


  state = {
    anchorEl: null,
  };

  handleChange = event => {
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
    return(
  <AppBar position='fixed'>
      <Toolbar style={{display: "flex" , flexDirection: "row-reverse", justifyContent: "space-between"}}>


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
                        <Link to="/" style={styles.link}> <MenuItem onClick={this.handleClose} > Home </MenuItem>  </Link>
                
                      </Menu>
                    </div>

                    <h3 onClick={this.props.damn}>
                          Playground
                    </h3>
                </Toolbar>
              </AppBar>
)}
}


export default TopBar;
