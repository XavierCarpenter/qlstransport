import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <nav>
          <ul>
            <li>About Us</li>
            <li>|</li>
            <li>Apply Now</li>
            <li>|</li>
            <li>Contact Us</li>
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
        <div className="box about">
          <div className="title-box">
            <h1 className="big-text">OWNER</h1>
            <h1 className="big-text">OPERATORS</h1>
          </div>
          <div className="sub-box">
            <p className="subtext">
              <span className="bold">
                With Landstar, you’re in control.
              </span> You decide what and when to haul and our advanced technology ensures you're only a click away from the right choice for you. You've never known freedom like this before.
            </p>
          </div>
          <button className="btn btn2">Learn More</button>
        </div>
        <div className="box c">
          <div className="sub-box">
            <p className="subtext">
              Landstar gives you the freedom to succeed on your own terms
              without any blood, sweat or tears. Explore our interactive
              diagram to find out more.
            </p>
          </div>
        </div>
        <div className="box d">
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
