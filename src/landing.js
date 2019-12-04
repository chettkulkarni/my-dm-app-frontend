import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
import ButtonAppBar from './appbar.js';
import {Label, Input, Button, Card, Row, Col} from 'reactstrap';
import SearchBar from './searchbar'
import { Jumbotron } from "react-bootstrap";
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
          <h1>Tweet Sentiment Analysis of Impeach data set mined during recent impeachment hearing,Also From Custom Tweet search</h1>
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
