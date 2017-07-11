import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class NavbarDesktop extends Component {
  
  render() {
    return (
      <div className="w3-bar" id="myNavbar">
        <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" title="Toggle Navigation Menu">
          <i className="fa fa-bars"></i>
        </a>
        <a href="#home" className="w3-bar-item w3-button">HOME</a>
        <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
        {/*<a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>*/}
      </div>
    );
  }
}

class NavbarMobile extends Component {
  render() {
    return (
      <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
        <a href="#about" className="w3-bar-item w3-button" >ABOUT</a>
        <a href="#portfolio" className="w3-bar-item w3-button" >PORTFOLIO</a>
        <a href="#contact" className="w3-bar-item w3-button" >CONTACT</a>
        <a href="#" className="w3-bar-item w3-button">SEARCH</a>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div id="testHeader">
        <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
          <div className="w3-display-middle" style={{"whiteSpace": "nowrap"}}>
            <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">I'm Developer</span>
          </div>
        </div>
      </div>
    );
  }
}

class NavbarMain extends Component {
  render() {
    return (
      <div className="w3-top">
        <NavbarDesktop/>
        <NavbarMobile/>
      </div>
    );
  }
}

class AboutMe extends Component {
  render() {
    const profileImg = require('./img/profile.jpg');
    return (
      <div className="w3-content w3-container w3-padding-64" id="about">
          <h3 className="w3-center">ABOUT ME</h3>
          <p>Hi, My name is Theeraporn Tiarawong. I am interested and enjoy in programming. At this moment I am interested in mobile application and develop website. In my free time I reads books, surf the internet and watch movies. I am reliable, honest and tolerant.</p>
          <div className="w3-center">
            <img src={profileImg} className="w3-circle w3-image w3-opacity w3-hover-opacity-off" width="200vw"/>
          </div>
          {/*<div className="w3-row">
              <div className="w3-col m6 w3-center w3-padding-large">
                  <p><b><i className="fa fa-user w3-margin-right"></i>My Name </b></p><br/>
                  <img src={profileImg} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
              </div>
              <div className="w3-col m6 w3-hide-small w3-padding-large">
                  <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>*/}
          <p className="w3-large w3-center w3-padding-16">Programming Skill:</p>
          <div className="w3-row-padding">
            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">HTML</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "90%"}}>90%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">PHP</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "50%"}}>50%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">CSS</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "40%"}}>40%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">Bootstarp</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "60%"}}>60%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">JQuery</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "80%"}}>80%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">AJAX</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "50%"}}>50%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">Javascript</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "70%"}}>70%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">React</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "20%"}}>20%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">NodeJS</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "20%"}}>20%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">ExpressJS</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "20%"}}>20%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">MySQL</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "60%"}}>60%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">MongoDB</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "20%"}}>20%</div>
              </div>
            </div>

            <div className="w3-col s12 m6 l6">
              <p className="w3-wide">C++</p>
              <div className="w3-light-grey">
                  <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{"width": "60%"}}>60%</div>
              </div>
            </div>

          </div>
      </div>
    );
  }
}

class PortfolioHeader extends Component{
  render(){
    return(
      <div className="bgimg-2 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
              <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
          </div>
      </div>
    );
  }
}

class PortfolioBody extends Component{
  render(){
    const p1 = require('./img/p1.jpg');
    const p2 = require('./img/p2.jpg');
    const p3 = require('./img/p3.jpg');
    const p4 = require('./img/p4.jpg');
    const p5 = require('./img/p5.jpg');
    const p6 = require('./img/p6.jpg');
    const p7 = require('./img/p7.jpg');
    const p8 = require('./img/p8.jpg');
    return(
      <div className="w3-content w3-container w3-padding-64" id="portfolio">
          <h3 className="w3-center">MY WORK</h3>
          <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br/> Click on the images to make them bigger</em></p><br/>

          <div className="w3-row-padding w3-center">
              <div className="w3-col m3">
                  <img src={p1} style={{"width": "100%"}} className="w3-hover-opacity" alt="The mist over the mountains"/>
              </div>

              <div className="w3-col m3">
                  <img src={p2} style={{"width": "100%"}} className="w3-hover-opacity" alt="Coffee beans"/>
              </div>

              <div className="w3-col m3">
                  <img src={p3} style={{"width": "100%"}} className="w3-hover-opacity" alt="Bear closeup"/>
              </div>

              <div className="w3-col m3">
                  <img src={p4} style={{"width": "100%"}} className="w3-hover-opacity" alt="Quiet ocean"/>
              </div>
          </div>

          <div className="w3-row-padding w3-center w3-section">
              <div className="w3-col m3">
                  <img src={p5} style={{"width": "100%"}} className="w3-hover-opacity" alt="The mist"/>
              </div>

              <div className="w3-col m3">
                  <img src={p6} style={{"width": "100%"}} className="w3-hover-opacity" alt="My beloved typewriter"/>
              </div>

              <div className="w3-col m3">
                  <img src={p7} style={{"width": "100%"}} className="w3-hover-opacity" alt="Empty ghost train"/>
              </div>

              <div className="w3-col m3">
                  <img src={p8} style={{"width": "100%"}} className="w3-hover-opacity" alt="Sailing"/>
              </div>
              {/*<button className="w3-button w3-padding-large w3-light-grey" style={{"marginTop": "64px"}}>LOAD MORE</button>*/}
          </div>
      </div>
    );
  }
}

class PortfolioMain extends Component{
  render(){
    return(
      <div>
        <PortfolioHeader/>
        <PortfolioBody/>
      </div>
    );
  }
}

class Footer extends Component{
  render(){
    return(
      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div className="w3-xlarge w3-section">
          {/*<i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>*/}
          <div className="w3-large w3-margin-bottom">
            <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Bangkok, Thailand<br/>
            <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +66 805537345<br/>
            <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: theeraporn.tia@gmail.com<br/>
          </div>
        </div>
        <p>Powered by Theeraporn T.</p>
      </footer>
    );
  }
}

class App extends Component {
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <NavbarMain/>
        <Header/>
        <AboutMe/>
        {/*<PortfolioMain/>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;
