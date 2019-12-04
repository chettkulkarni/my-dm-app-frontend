import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
import ButtonAppBar from './appbar.js';
import SearchBar from './searchbar'
import { Paper } from "@material-ui/core";

class index extends Component {

  state = {
    text: ""
  }

  onClickHandler = () => {
    window.href="";
  }

  render() {
    return (
      <div>
        <ButtonAppBar/>
        <SearchBar/>
<Paper>


        <div>
          <h1>Sentiment Analysis of tweets mined during recent impeachment hearing</h1>
          
          <p>   </p>
          <p>   </p>
          <h2>And real time tweet Sentiment Analysis</h2>
          <p><b>Team Members</b></p>
          <p>Chetan Kulkarni</p>
          <p>Ronak Mehta </p>
          <p>Lokesh </p>
          <p>Nupur </p>
        </div>
        </Paper>
      </div>
    );
  }
}
  export default index;
