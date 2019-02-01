import React from 'react';
import '../../assets/ui/sassMe/CountDown.scss';
class CountDown extends React.Component {

  constructor() {
     super();
     this.state={years: "0", month: "0", day: "0", hours: "0", min: "0", seconds: "0"};

     this.until={years: 2019, month: 3 , day: 1 , hours: 0, min: 0 , seconds: 0};
     this.updateStateToDate=this.updateStateToDate.bind(this);
   }

   updateStateToDate(){
      const  oneDay = 24*60*60*1000;
      let currentDate=new Date();
      let untilDate=new Date(Date.UTC(this.until.years,this.until.month-1,this.until.day,this.until.hours,this.until.min,this.until.seconds));
      let durationDate=Math.floor(Math.abs((currentDate.getTime() - untilDate.getTime())/(oneDay)))

      let months=Math.floor(durationDate/30)
      let years=Math.floor(durationDate/365)
      this.setState({years: years ,
                    month: months ,
                    day:    durationDate%30 ,
                    hours: Math.abs(24-currentDate.getHours()) ,
                    min: Math.abs(60-currentDate.getMinutes()) ,
                    seconds: Math.abs(60-currentDate.getSeconds()) });
   }

  render() {
    return <div className='container' >
              <h1>|| Count Down ||</h1>


              <h6> {this.state.years}/{this.state.month}/{this.state.day}   --- {this.state.hours}:{this.state.min}:{this.state.seconds}</h6>
          </div>;
  }
  componentDidMount(){
    this.interval = setInterval(this.updateStateToDate, 1000);
  }
  componentWillUnmount() {
   clearInterval(this.interval);
}


}



export default CountDown;
