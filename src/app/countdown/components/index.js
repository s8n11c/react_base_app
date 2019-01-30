import React from 'react';
import '../../assets/ui/sassMe/Main.scss';
class CountDown extends React.Component {

  constructor() {
     super();
     this.state={years: "0", month: "0", day: "0", hours: "0", min: "0", seconds: "0"};
     //until 1-3-2019
     this.until={years: 2019, month: "3" , day: "1" , hours: "0", min: "0" , seconds: "0"};
     this.updateStateToDate=this.updateStateToDate.bind(this);
   }

   updateStateToDate(){
      let currentDate=Date.now();
      console.log(currentDate);
   }


  render() {
    console.log("current state"+this.state);
    return <div className='container'>
              <h1> Count Down </h1>

              <a> {this.state.currentTime}</a>
          </div>;
  }
  componentDidMount(){
    this.interval = setInterval(() => this.updateStateToDate, 1000);
  }
  componentWillUnmount() {
   clearInterval(this.interval);
}
}


export default CountDown;
