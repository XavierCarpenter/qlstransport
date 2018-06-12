import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      learn: false,
      nav: false,
      name: "",
      phone: "",
      message: ""
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
    console.log(this.state.name);
    console.log(this.state.phone);
    console.log(this.state.message);

    let subject = `${this.state.name} from my website`;
    let body = `Hi,
    ${this.state.message} 
${this.state.name}
    Phone:${this.state.phone} `
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
              <p className="subtext3 history">
                <span className="bold">QLS Transport LLC</span> was founded on over 20 years of combined experience in the trucking and logistics industry. We take pride in going the extra mile in providing on-time deliveries, exceptional customer service, and a safe, stable and profitable working environment for our drivers. With dedication to our customers and drivers at the forefront of everything we do, we have built a foundation of excellence that drives our success now and into the future.
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
            <button onClick={() => this.learnActive()} className="btn btn1">
              {" "}
              <a  href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
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
          <h2 onClick={() => this.learnActive()} >
          
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Apply Now
                </a>
          </h2>

        </div>
      </div>
      {/* <div className="box contactPic" /> */}
      <div className="box contact" id="contact">
        <div id="contact-title-box">
          <h1>Get In Touch</h1>
        </div>
        <div className="info-wrapper">
          <div className="info-box">
            <h1>Send Us A Message</h1>
            <form action="xavier.carpenter16@gmail.com" method="post">
              <input type="text" name="name" required placeholder="Name" onChange={e => this.setState(
                { name: e.target.value }
              )} />
              <input type="email" name="email" required placeholder="Email" />
              <input type="text" name="phone" required placeholder="Phone" onChange={e => this.setState(
                { phone: e.target.value }
              )} />
              <textarea name="message" rows="8" placeholder="Message" onChange={e => this.setState(
                { message: e.target.value }
              )} />

            </form>
            <a className="submit"
              href={`mailto:contact@qlstransport.com?&subject=${subject}&body=${body}`}
            >
              Email Us
              </a>
          </div>
          <div className="contact-box">
            <h2>Contact Information</h2>
            <i class="fas fa-location-arrow"></i>
            <p>6105 Denton Hwy, Suite 50
Haltom City, TX 76244</p>
            <div className="Numbers">
              <i class="fas fa-phone"></i>
              <p>817-676-6846</p>
              <p>817-438-8009</p>
            </div>
            <i class="fas fa-envelope-open"></i>
            <p>contact@qlstransport.com</p>
          </div>
        </div>

      </div>
    </div>;
  }
}

export default App;
