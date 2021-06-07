import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      stateCheck: 'false',
      sliderIndex: 0,
      sliderTwoIndex: 0,
      sliderThreeIndex:0,
      sliderIndexMax: 1,
      sliderTwoIndexMax: 1,
      sliderThreeIndexMax:1,
      items: [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
      ],

    };

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  sliderLeftClicked = () => {
    let index = this.state.sliderIndex === 0? 0 : this.state.sliderIndex - 1;
    this.setState({sliderIndex: index})
  }

  
  sliderRightClicked = () => {
    let index = this.state.sliderIndex === this.state.sliderIndexMax?this.state.sliderIndexMax:this.state.sliderIndex + 1;
    this.setState({sliderIndex: index})
  }

  sliderTwoLeftClicked = () => {
    let index = this.state.sliderTwoIndex === 0? 0 : this.state.sliderTwoIndex - 1;
    this.setState({sliderTwoIndex: index})
  }

  
  sliderTwoRightClicked = () => {
    let index = this.state.sliderTwoIndex === this.state.sliderTwoIndexMax?this.state.sliderTwoIndexMax:this.state.sliderTwoIndex + 1;
    this.setState({sliderTwoIndex: index})
  }
  
  // : 0, sliderTwoLeftClicked sliderTwoRightClicked
  // SliderThreeIndex:0,

  atoggleFunc = () => {
    this.setState({expanded:!this.state.expanded})    
  };
  

  cItem = () => {
    let item = <span class="sunrightinner"> 
                  <div class="imgdiv">
                      <img src="./img/leagalupdates.png" />
                  </div>
                  <div class="headingtxt">
                      <h1 class="big_heading">Legal Updates</h1>
                  </div>
                  <div class="txtdiv">
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                      <p>Three dots</p>
                  </div>
              </span>;
      return item;        
  }

  getToggle = () => {
    let button = null;
       if(this.state.expanded){
          
             button =   <a class="a_toggle" href="#">    
                              <ul class="nar_margin_left_5vw toggle_menu">
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Our Services</a></li>
                                  <li><a href="#">Team</a></li>
                                  <li><a href="#">Our Client</a></li>
                                  <li><a href="#">Resources</a></li>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="#">Sign Up</a></li>
                              </ul>
                          </a>;
        }else {
          button = null;
        }                  
    return button;   
  }

  render() {
    return (
      <div className="App">
         <header>
            <div class="top_header">
                <div class="container">
                    <ul class="top_left">
                        <li><img src="./img/email.png" /><span class="mailtop">operations@payrollventures.in</span></li>
                    </ul>
                    <ul class="top_right">
                        <li><img src="./img/fb.png" /></li>
                        <li><img src="./img/in.png" /></li>
                        <li><img src="./img/twitter.png" /></li>
                        <li><img src="./img/youtube.png" /></li>
                    </ul>
                </div>
            </div>
            <nav>
                <div class="menu">
                    <div class="container">
                        <div class="logo_nd_toggle_wrap">
                            <span><a onClick={this.atoggleFunc} ><img src="./img/mobile_icon.png" class="toggle" /></a></span>
                            <span><a><img class="logo" src="./img/final_logo_png.png" /></a></span>
                        </div>
                        <ul class="nar_margin_left_5vw menutop">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Our Services</Link></li>
                            <li><Link to="/about">Team</Link></li>
                            <li><Link to="/about">Our Client</Link></li>
                            <li><Link to="/about">Resources</Link></li>
                            <li><Link to="/about">Contact Us</Link></li>
                        </ul>
                        <button class="btn signup nar_margin_left_5vw">Sign Up</button>
                        {/* <a onClick={this.atoggleFunc} href="#">
                          <img src="./img/mobile_icon.png" class="toggle" />
                          {this.getToggle()}
                        </a> */}
                        <span>
                          {this.getToggle()}
                        </span>
                    </div>
                </div>    
            </nav>
        </header> 
       
     
        <div className="App-intro">
          <Switch>
            <Route
              exact
              path='/'
              // component={Home}
              render={(props) => 
                <Home 
                  {...props} 
                  isMe={this} 
                  slClick={this.sliderLeftClicked} 
                  srClick={this.sliderRightClicked}
                  sliderIndex={this.state.sliderIndex}
                  slTwoClick={this.sliderTwoLeftClicked} 
                  srTwoClick={this.sliderTwoRightClicked}
                  sliderTwoIndex={this.state.sliderTwoIndex}
                  cItem={this.cItem} 
                  itemsR={this.state.items}
                  />
                }
            />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About}
              // render={(props) => 
              //   <About 
              //     {...props} 
        
              //     />
              //   }
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
