import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      learn: false,
      nav: false
    };
  }
  learnActive() {
    this.setState({ learn: true });
  }
  backActive() {
    this.setState({ learn: false });
  }
  navActive() {
    this.setState({ nav: true })
  }
  navInactive() {
    this.setState({ nav: false });
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Apply Now
              </a>
          </li>
          <li>|</li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="navBars">
        <i onClick={() => this.navActive()} className="fas fa-bars" />
      </div>
      {this.state.nav === true ? <div className="dropdown">
        <div className="x">
          <i onClick={() => this.navInactive()} class="fas fa-times" />
        </div>
        <ul>
          <li>
            <a onClick={() => this.navInactive()} href="#about">
              About Us
                </a>
          </li>
          <li>|</li>
          <li>
            <a onClick={() => this.navInactive()} href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Apply Now
                </a>
          </li>
          <li>|</li>
          <li>
            <a onClick={() => this.navInactive()} href="#contact">
              Contact Us
                </a>
          </li>
        </ul>
      </div> : null}
      <div className="box intro">
        <div className="title-box">
          <h1 className="big-text">DESIGNED TO RESPOND</h1>
          <h1 className="big-text">BUILT TO DELIVER</h1>
        </div>
        <div className="sub-box">
          <p className="subtext">
            A Safety First Transportation Solutions Provider. This is QLS
              Transport.
            </p>
          <button className="btn btn1">
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </div>
      <div className="box about" id="about">
        <div className="title-box">
          <h1 className="big-text">OWNER</h1>
          <h1 className="big-text">OPERATORS</h1>
        </div>
        <div className="sub-box">
          <p className="subtext ">
          With QLS Transport, you can grow your business on your own terms. With no forced dispatch you have the freedom to choose the loads you want to haul, when to haul, and when to return home. You choose the loads that meet your business and personal needs and with QLS Transport’s percentage pay as load rates go up, so does your settlement. 
            </p>
          <button onClick={() => this.learnActive()} className="btn btn2">
            Learn More
            </button>
        </div>
      </div>
      {this.state.learn === false ? <div className="box about2" id="changeHeader">
        <div className="sub-box">
          <p className="subtext2">
            QLS Transport is dedicated to providing job security for all of our drivers. Internal dispatchers work diligently to ensure you haul the loads you want and with thousands of loads available every day you will always be in demand.
              </p>
        </div>
      </div> : <div className="box about3">
          <div className="extra-box">
            <div className="infoBox">
              <p className="subtext3">
                QLS Transport LLC was founded on over 20 years of combined experience in the trucking and logistics industry. We take pride in going the extra mile in providing on-time deliveries, exceptional customer service, and a safe, stable and profitable working environment for our drivers. With dedication to our customers and drivers at the forefront of everything we do, we have built a foundation of excellence that drives our success now and into the future.
                </p>
            </div>
            <div className="infoBox">
              <h2 className="bluetext">Contracting with QLS Transport</h2>
              <ul className="benefits">
                <li>No forced dispatch</li>
                <li>Choose what you want to haul, when to haul, and when to return home</li>
                <li>No touch local and over-the-road deliveries </li>
                <li>Percentage based compensation plan </li>
                <li>Weekly pay</li>
                <li>Discounts on fuel</li>
                <li>Discounts on tires and service work performed at preferred service centers</li>
              </ul>
            </div>

            <p className="subtext3 bold">
              Call us today for more details at 855-578-7226.
              </p>
            <button onClick={() => this.learnActive()} className="btn btnApply">
              {" "}
              <a className="btn3a" href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                Apply Now
                </a>
            </button>
            <button onClick={() => this.backActive()} className="btn btn3">
              Back
              </button>
          </div>
        </div>}
      <div className="box pMobile">
        <div className="extra-box">
          <div className="infoBox">
            <p className="subtext3">
              <span className="bold">
                With QLS Transport, you can grow your business
                  </span> on your own terms. You choose the loads that meet your business needs. You go home when you want and head back out when you’re ready, plus with Landstar’s percentage pay, as rates go up, so do your settlements.
                </p>
          </div>
          <div className="infoBox">
            <h2 className="bluetext">FREEDOM: BE YOUR OWN BOSS</h2>
            <p className="subtext3">
              With QLS Transport you are your own boss, you choose what
                  you want to haul, when to haul and when to return home. We
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
              QLS Transport is committed to your success. We'll help you
                  get to where you're going - because that helps us get to
                  where we're going.
                </p>
          </div>
          <p className="subtext3 bold">
            Call us today for more details at 855-578-7226.
              </p>
          <h2 onClick={() => this.learnActive()} >
            {" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Apply Now
                </a>
          </h2>

        </div>
      </div>
      {/* <div className="box contactPic" /> */}
      <div className="box contact" id="contact">
        <div className="title-box" id="contact-title-box">
          <h1 className="big-text " id="cTitle">Get In Touch</h1>
        </div>
        <div className="info-wrapper">
          <div className="info-box">
            <h2>Headquarters</h2>
            <p>Dallas, Texas</p>
            <h2>Phone</h2>
            <p>817-438-0865</p>
            <h2>Email</h2>
            <p>natalieamos@qlstransport.com</p>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default App;
