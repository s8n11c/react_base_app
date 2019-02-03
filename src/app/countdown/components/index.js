import React from 'react';
import '../../assets/ui/sassMe/CountDown.scss';

// custom css

import '../../assets/ui/countDownui/css/ie.css';
import '../../assets/ui/countDownui/css/font-awesome.min.css';
import '../../assets/ui/countDownui/css/loader.css';
import '../../assets/ui/countDownui/css/normalize.css';
import '../../assets/ui/countDownui/css/style.css';


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
    return(
    <div className="wrapper">
        <ul className="scene unselectable" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15" id="scene">
            <li className="layer" data-depth="0.00">
            </li>
            <li className="layer" data-depth="0.10">
                <div className="background">
                </div>
            </li>


            <li className="layer" data-depth="0.20">
                <div className="title">

                    <span className="line"></span>
                </div>
            </li>

            <li className="layer" data-depth="0.25">
                <div className="sphere">
                    <img alt="sphere" src="/countdown/images/sphere.png" />
                </div>
            </li>

            <li className="layer" data-depth="0.30">
                <div className="hero">
                    <h1 id="countdown">
                      {this.state.years}:{this.state.month}:{this.state.day}
                    </h1>

                    <p className="sub-title">
                    {this.state.hours}:{this.state.min}:{this.state.seconds}
                    </p>
                </div>
            </li>
          //flakes

            <li className="layer" data-depth="0.40">
                <div className="depth-1 flake1">
                    <img alt="flake" src="/countdown/images/flakes/depth1/flakes1.png" />
                </div>

                <div className="depth-1 flake2">
                    <img alt="flake" src="/countdown/images/flakes/depth1/flakes2.png" />
                </div>

                <div className="depth-1 flake3">
                    <img alt="flake" src="/countdown/images/flakes/depth1/flakes3.png" />
                </div>

                <div className="depth-1 flake4">
                    <img alt="flake" src="/countdown/images/flakes/depth1/flakes4.png" />
                </div>
            </li>

            <li className="layer" data-depth="0.50">
                <div className="depth-2 flake1">
                    <img alt="flake" src="/countdown/images/flakes/depth2/flakes1.png" />
                </div>

                <div className="depth-2 flake2">
                    <img alt="flake" src="/countdown/images/flakes/depth2/flakes2.png" />
                </div>
            </li>

            <li className="layer" data-depth="0.60">
                <div className="depth-3 flake1">
                    <img alt="flake" src="/countdown/images/flakes/depth3/flakes1.png" />
                </div>

                <div className="depth-3 flake2">
                    <img alt="flake" src="/countdown/images/flakes/depth3/flakes2.png" />
                </div>

                <div className="depth-3 flake3">
                    <img alt="flake" src="/countdown/images/flakes/depth3/flakes3.png" />
                </div>

                <div className="depth-3 flake4">
                    <img alt="flake" src="/countdown/images/flakes/depth3/flakes4.png" />
                </div>
            </li>

            <li className="layer" data-depth="0.80">
                <div className="depth-4">
                    <img alt="flake" src="/countdown/images/flakes/depth4/flakes.png" />
                </div>
            </li>

            <li className="layer" data-depth="1.00">
                <div className="depth-5">
                    <img alt="flake" src="/countdown/images/flakes/depth5/flakes.png" />
                </div>
            </li>
        </ul>
        <script src="../../assets/ui/countDownui/js/plugins.js"></script>
        <script src="../../assets/ui/countDownui/js/jquery.countdown.min.js"></script>
        <script src="../../assets/ui/countDownui/js/main.js"></script>

    </div>);
  }
  componentDidMount(){
    this.interval = setInterval(this.updateStateToDate, 1000);
  }
  componentWillUnmount() {
   clearInterval(this.interval);
}


}



export default CountDown;
