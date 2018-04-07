import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <nav>
          <ul>
            <li>About Us</li>
            <li>Apply Now</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="box a">
          <div className="title-box">
            <h1 className="big-text">DESIGNED TO RESPOND</h1>
            <h1 className="big-text">BUILT TO DELIVER</h1>
          </div>
          <div>
            <p>
              A Safety First Transportation Solutions Provider. This is
              Landstar.
            </p>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="box b">
          <div className="title-box">
            <h1 className="big-text">OWNER</h1>
            <h1 className="big-text">OPERATORS</h1>
          </div>
          <div>
            <p>
              <span className="bold">
                With Landstar, you’re in control.
              </span> You decide what and when to haul and our advanced technology ensures you're only a click away from the right choice for you. You've never known freedom like this before.
            </p>
          </div>
          <button>Learn More</button>
        </div>
        <div className="box c">
          <div>
            {" "}
            <p>
              Landstar gives you the freedom to succeed on your own terms
              without any blood, sweat or tears. Explore our interactive
              diagram to find out more.
            </p>
          </div>
        </div>
        <div className="box d">D</div>
      </div>;
  }
}

export default App;
