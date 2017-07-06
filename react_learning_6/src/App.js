import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/lib/Button';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import * as ReactBootstrap from 'react-bootstrap';

//import image
const img = require("./images/t3.jpg");
const img1 = require("./images/t4.jpg");
const img2 = require("./images/t5.jpg");
const img3 = require("./images/t6.jpg");

class Header extends Component{
  render(){
    return(
      <ReactBootstrap.Navbar inverse collapseOnSelect staticTop>
        <div id="img1">
          <ReactBootstrap.Image src={img} circle height="100vh"/>
        </div>
        <div className="row" style={{paddingBottom: "2%"}}>
            <ReactBootstrap.Button id="testBtn" className="col-xs-3" bsStyle="primary">Button1</ReactBootstrap.Button>
            <ReactBootstrap.Button id="testBtn" className="col-xs-3" bsStyle="info">Button2</ReactBootstrap.Button>
            <ReactBootstrap.Button id="testBtn" className="col-xs-3" bsStyle="warning">Button3</ReactBootstrap.Button>
            <ReactBootstrap.Button id="testBtn" className="col-xs-3" bsStyle="danger">Button4</ReactBootstrap.Button>
          
        </div>
      </ReactBootstrap.Navbar>
    );
  }
}

class BodyOne extends Component{
  render(){
    return(
      <div className="container-fluid" id="bgBodyOne">
        <div className="container" id="mainBodyOne">
          <div id="blockBodyOne">
            <h1>Sample Text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse commodi, dignissimos. Maxime aliquam quod, ad eum! Nobis earum dolorum accusamus, et maxime debitis ipsa, reiciendis neque cum! Consectetur, illo, quisquam?</p>
          </div>
        </div>
      </div>
    );
  }
}

class BodyTwo extends Component{
  render(){
    return(
      <div className="container" id="BodyTwo" style={{textAlign: "center", alignItems: "center"}}>
        <div style={{display: "inline-block"}}>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img1} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat quod obcaecati perferendis ipsum ipsa vel vero possimus quis minima, ratione praesentium officiis aliquam, fuga temporibus, reprehenderit alias porro.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img1} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nostrum ut neque tenetur at nobis voluptates eos quae, quasi, minima tempora voluptatum. Quibusdam, asperiores, excepturi? Aspernatur, quos perspiciatis id inventore.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img1} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium aliquid debitis dolore consectetur fugiat beatae provident. Consectetur tenetur earum alias iure quaerat, nostrum similique debitis, quibusdam officiis labore rerum.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img1} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime odit beatae nesciunt dolor fuga, a eveniet vitae rerum modi voluptas ad voluptatum molestias, consequuntur, ab cumque eius quia minima harum!</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
        </div>
        <div style={{display: "inline-block"}}>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img2} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse, suscipit tenetur numquam. Hic consectetur recusandae iste quaerat, laborum sint excepturi earum esse labore. Culpa fugiat aut expedita minima quaerat.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img2} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse, suscipit tenetur numquam. Hic consectetur recusandae iste quaerat, laborum sint excepturi earum esse labore. Culpa fugiat aut expedita minima quaerat.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img2} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum possimus molestias pariatur quam. Nesciunt optio porro repellat nemo quam officia nostrum ratione! Harum quidem reprehenderit, expedita facere eius cumque incidunt.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
            <ReactBootstrap.Thumbnail src={img2} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quam deleniti eaque praesentium porro facere sit voluptatum. Maxime fugit dolor consectetur voluptates repellat iure quis vero illum, neque eius ut.</p>
            </ReactBootstrap.Thumbnail>
          </ReactBootstrap.Col>
        </div>
      </div>
    );
  }
}

class Footer extends Component{
  render(){
    return(
      <footer className="container-fluid">
        <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
           <h3>Sample text</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Repellendus, sapiente. At commodi facere laboriosam aliquam sequi eum omnis molestiae repellat ea
           </p>
         </ReactBootstrap.Col>
         <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
           <h3>Sample text</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
             Amet officia eligendi culpa accusamus asperiores unde velit explicabo modi voluptates 
           </p>
         </ReactBootstrap.Col>
         <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
           <h3>Sample text</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, 
             itaque provident ipsum magni sequi doloremque consequuntur facere maxime rem. 
           </p>
         </ReactBootstrap.Col>
         <ReactBootstrap.Col xs={6} sm={6} md={3} lg={3}>
           <h3>Sample text</h3>
           <ReactBootstrap.Image src={img} className="imgFooter" circle/>
           <ReactBootstrap.Image src={img} className="imgFooter" circle/>
           <ReactBootstrap.Image src={img} className="imgFooter" circle/>
         </ReactBootstrap.Col>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BodyOne/>
        <BodyTwo style={{backgroundColor: "darkgray"}}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
