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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSecrAMb603zUDU73IxPmUBSDGVkaBj6bBC1_3Sb_k_Cf5aEyQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
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
        <div className="form-container">
          <h1>Send Us A Message</h1>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name*</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" onChange={e => this.setState(
                { name: e.target.value }
              )} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Phone*</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="555-555-5555" onChange={e => this.setState(
                { phone: e.target.value }
              )} />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message*</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => this.setState(
                { message: e.target.value }
              )}></textarea>
            </div>
            <a className="submit"
              href={`mailto:contact@qlstransport.com?&subject=${subject}&body=${body}`}
            ><button type="submit" class="btn btn-primary">Submit</button>      </a>
          </form>
        </div>
        <div className="contact-box">
          <h2>Contact Information</h2>
          <ul className="contact-list">
            <li>6105 Denton Hwy, Suite 50
Haltom City, TX 76244</li>
            <li>817-676-6846 or
            817-438-8009</li>
            <li>contact@qlstransport.com</li>
          </ul>
        </div>
      </div>

    </div>;
  }
}

export default App;
