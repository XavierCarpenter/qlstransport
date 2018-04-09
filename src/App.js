import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      learn: false
    };
  }
  learnActive() {
    this.setState({ learn: true });
  }
  backActive() {
    this.setState({ learn: false });
  }
  render() {
    return <div className="App">
        <nav>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>|</li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank">
                Apply Now
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="box intro">
          <div className="title-box">
            <h1 className="big-text">DESIGNED TO RESPOND</h1>
            <h1 className="big-text">BUILT TO DELIVER</h1>
          </div>
          <div className="sub-box">
            <p className="subtext">
              A Safety First Transportation Solutions Provider. This is
              Landstar.
            </p>
            <button className="btn btn1">Contact Us</button>
          </div>
        </div>
        <div className="box about" id="about">
          <div className="title-box">
            <h1 className="big-text">OWNER</h1>
            <h1 className="big-text">OPERATORS</h1>
          </div>
          <div className="sub-box">
            <p className="subtext">
              <span className="bold">
                With Landstar, you’re in control.
              </span>
              You decide what and when to haul and our advanced technology ensures you're only a click away from the right choice for you. You've never known freedom like this before.
            </p>
            <button onClick={() => this.learnActive()} className="btn btn2">
              Learn More
            </button>
          </div>
        </div>
        {this.state.learn == false ? <div className="box c">
            <div className="sub-box">
              <p className="subtext2">
                Landstar gives you the freedom to succeed on your own terms
                without any blood, sweat or tears. Explore our interactive
                diagram to find out more.
              </p>
            </div>
          </div> : <div className="box p">
            <div className="extra-box">
              <div className="infoBox">
                <p className="subtext3">
                  <span className="bold">
                    With Landstar, you can grow your business
                  </span> on your own terms. You choose the loads that meet your business needs. You go home when you want and head back out when you’re ready, plus with Landstar’s percentage pay, as rates go up, so do your settlements.
                </p>
              </div>
              <div className="infoBox">
                <h2 className="bluetext">FREEDOM: BE YOUR OWN BOSS</h2>
                <p className="subtext3">
                  With Landstar you are your own boss, you choose what you
                  want to haul, when to haul and when to return home. We
                  won't get in your way.
                </p>
              </div>
              <div className="infoBox">
                <h2 className="bluetext">
                  SECURITY: YOU'LL ALWAYS BE IN DEMAND
                </h2>
                <p className="subtext3">
                  There are thousands of loads available every day. There's
                  always something waiting for you.
                </p>
              </div>
              <div className="infoBox">
                <h2 className="bluetext">
                  SUPPORT: WE’LL HELP YOU ALL THE WAY
                </h2>
                <p className="subtext3">
                  Landstar is committed to your success. We'll help you get
                  to where you're going - because that helps us get to where
                  we're going.
                </p>
              </div>
              <p className="subtext3 bold">
                Call us today for more details at 855-578-7226.
              </p>
              <button onClick={() => this.learnActive()} className="btn btn2"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank">
                Apply Now
              </a></button>
              <button onClick={() => this.backActive()} className="btn btn2">
                Back
              </button>
            </div>
          </div>}
        <div className="box d" id="contact">
          <div className="title-box">
            <h1 className="big-text">CONTACT</h1>
          </div>
        </div>
        <div className="box e">
          <div className="info-wrapper">
            <div className="name-box">
              <h2>QLS Transport – Corporate Headquarters/Dallas</h2>
            </div>
            <div className="contact-box">
              <ul>
                <li>13410 Sutton Park Drive, South</li>
                <li>Jacksonville, Florida 32224</li>
                <li>817-438-0865</li>
                <li>natalieamos@qlstransport.com</li>
              </ul>
              <i class="fab fa-facebook-square" />
            </div>
          </div>
        </div>
      </div>;
  }
}

export default App;
