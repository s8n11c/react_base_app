import React from 'react';

import Websocket from 'react-websocket';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ComeBack extends React.Component {
// you need to run ws script
  constructor(props){
      super(props);
    this.handleData=this.handleData.bind(this);
    this.handleChange=this.handleChange.bind(this);

    this.sendData=this.sendData.bind(this);
    this.state={dataReceived: "",SocketBuffer: "----",}

    console.log("current props", this.props)

  }
  handleData(data) {
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


                <br />
                <br />
                <br />

                <h3> grapping data from service </h3>
                <Button onClick={()=>this.props.custom_request_data()}>custom middleware </Button>
                <Button onClick={()=>this.props.thunk_request_data()}>thunk</Button>
                <Button onClick={()=>this.props.saga_request_data()}>saga</Button>

          </div>

    ;
  }

  componentDidMount(){

  }
}


export default ComeBack;
