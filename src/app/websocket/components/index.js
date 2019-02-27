import React from 'react';

import Websocket from 'react-websocket';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const _header = {fontSize: "3vw",textAlign: "center" }
const _body = {textAlign: "center"}
class ComeBack extends React.Component {
// you need to run ws script
  constructor(props){
      super(props);
      this.tf = React.createRef();
    this.handleData=this.handleData.bind(this);
    this.onSocketServerDisconnect=this.onSocketServerDisconnect.bind(this);
    this.onSocketServerConnect=this.onSocketServerConnect.bind(this);
    this.sendData=this.sendData.bind(this);
    this.state={dataReceived: "",SocketBuffer: "----",openSocket: false}
  }

  handleData(data) {
    // let result = JSON.parse(data);
     this.setState({dataReceived: this.state.dataReceived+"--"+data});
   }

   onSocketServerDisconnect(){
         this.setState({openSocket: false})
     this.setState({dataReceived: "Server is Down ---- tying to reconnect "})

   }

    onSocketServerConnect(){
      this.setState({openSocket: true})
    }

   sendData(){
         console.log(this.state);
     (this.state.openSocket=== true)?this.refWebSocket.sendMessage(this.tf.current.props.value):console.log("still connecting");
      // this.setState={SocketBuffer: "-"}
   }


  render() {
    return <div style={_body}>
            <h1 style={_header}>  Websocket test  </h1>
            <div style={{display: "inline-block" ,flexDirection: "column", width: "50vw" , align: "center"}}>
              <TextField ref={this.tf} multiline={true} rows={3} style={{width: "50vw"}} value={this.state.SocketBuffer}  />
              <Button onClick={() => this.sendData()}>Send </Button>
              <Paper>
                  <Typography>
                          {this.state.dataReceived}
                  </Typography>
              </Paper>
            </div>
            <Websocket url='ws://localhost:8080/'
    onMessage={this.handleData}
                debug={true}
                onOpen={this.onSocketServerConnect}
                onClose={this.onSocketServerDisconnect}
                ref={Websocket => {this.refWebSocket = Websocket;}} />

                <h3> grapping data from service </h3>
                <div style={{flexDirection: "row", justifyContent: "space-around"}}>
                  <Button onClick={()=>this.props.custom_request_data()}>custom middleware </Button>
                  <Button onClick={()=>this.props.thunk_request_data()}>thunk</Button>
                  <Button onClick={()=>this.props.saga_request_data()}>saga</Button>
                </div>

          </div>

    ;
  }

  componentDidMount(){

  }
}


export default ComeBack;
