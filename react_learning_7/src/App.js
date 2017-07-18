import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
///
import * as RB from 'react-bootstrap';
import $ from "jquery";
var urlBase = "https://api.github.com";
var result = {};

class App extends Component {
  state = {data: false};
  handEnter = (e) =>{
    if(e.key === "Enter")
    {
      this.handleBtn();
    }
  }
  handleBtn() {
    console.log("function handbtn");
    let _this = this;
    let username = document.getElementById('username').value;
    /// get user
    let getUser = urlBase + "/users/" + username;
    $.get(getUser, function(res){
      result.image = res.avatar_url;
      result.name = res.login;
      result.bio = res.bio;
      /// get followers
      let getFollower = urlBase + "/users/" + username + "/followers";
      $.get(getFollower, function(res){
        let followers = [];
        let len = res.length;
        if(len > 3) len = 3; 
        for(let i = 0; i < len; i++){
          let item = {
            name: res[i].login,
            image: res[i].avatar_url,
            url: res[i].url
          };
          followers.push(item);
        }
        result.followers = followers;
        /// get repos
        let getRepos = urlBase + "/users/" + username + "/repos";
        $.get(getRepos, function(res){
          let repos = [];
          let len = res.length;
          if(len > 3) len = 3; 
          for(let i = 0; i < len; i++){
            let item = {
              name: res[i].name,
              url: res[i].html_url
            };
            repos.push(item);
          }
          result.repos = repos;
          document.getElementById('username').value = "";
          _this.setState({data: true});
        }); /// end get repos
      }); /// end get followers
    }); /// end get user
  }
  renderDefault(){
    return(
      <div className="App">
        <input id="username" type="text" onKeyUp={this.handEnter}/>
        <RB.Button id="testBtn" bsStyle="primary" onClick={this.handleBtn.bind(this)}>OK</RB.Button>
      </div>
    );
  }
  renderResult(){
    return(
      <div className="App container-fluid">
        <div className="input_box">
          <input id="username" type="text" onKeyUp={this.handEnter}/>
          <RB.Button id="testBtn" bsStyle="primary" onClick={this.handleBtn.bind(this)}>OK</RB.Button>
        </div>
        <div className="row">
          <div className="col-xs-3" style={{display: "block"}}>
            <RB.Image src={result.image} circle className="imgProfile"/>
          </div>
           <div className="col-xs-9" style={{display: "block"}}>
            <h3 className="detailProfile">{result.name}</h3>
            <p className="detailProfile">Bio: {result.bio}</p>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
              <h3>Followers:</h3>
              {
                result.followers.map(
                  (follower, index) => {
                    return(
                      <div className="col-xs-12" key={follower.name}>
                        <a href={follower.url}>
                          <RB.Image src={follower.image} circle className="imgFollower"/>
                            <h4 className="col-xs-12">{follower.name}</h4>
                        </a>
                      </div>
                    );
                  }
                )
              }
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
              <h3>Repository:</h3>
              {
                result.repos.map(
                  (repo, index) => {
                    return(
                      <div className="col-xs-12" key={repo.name}>
                        <a href={repo.url}>
                          <h4>{repo.name}</h4>
                        </a>
                      </div>
                    );
                  }
                )
              }
            </div>
          </div>
         </div> 
      </div>
    );
  }
  render() {
    // let imgProfile = null;
    var result = {};
      if(!this.state.data) return this.renderDefault();
      else return this.renderResult();
  }
}


export default App;
