import React from 'react';
import '../../assets/ui/sassMe/Main.scss';

import Websocket from 'react-websocket';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class ComeBack extends React.Component {
// you need to run ws script
  constructor(props){
      super(props);
    this.handleData=this.handleData.bind(this);
    this.handleChange=this.handleChange.bind(this);

    this.sendData=this.sendData.bind(this);
    this.state={dataReceived: "",SocketBuffer: "----",}
  }
  handleData(data) {
    console.log(data)
    // let result = JSON.parse(data);
     this.setState({dataReceived: this.state.dataReceived+"--"+data});
   }

   sendData(){

       this.refWebSocket.sendMessage(this.state.SocketBuffer);
      // this.setState={SocketBuffer: "-"}
   }
   handleChange =  event => {
     this.setState({SocketBuffer: event.target.value});
 };


  render() {
    return <div className='container'>
            <h1>  Websocket test  </h1>
            <TextField value={this.state.SocketBuffer} onChange={this.handleChange}  />
            <button onClick={() => this.sendData()}>Send </button>
            <Paper>
                <Typography>
                          {this.state.dataReceived}
                </Typography>
            </Paper>
            <Websocket url='ws://51.51.51.20:8080'
    onMessage={this.handleData.bind(this)}
                debug={true}
                ref={Websocket => {this.refWebSocket = Websocket;}} />
          </div>

    ;
  }
}


export default ComeBack;
