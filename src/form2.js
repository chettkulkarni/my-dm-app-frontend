import React, { Component } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Impeach from './Impeach'
import {Redirect} from 'react-router-dom';
import axios from "axios";
import Graph from "./Graph";
import ButtonAppBar from './appbar.js';
import WordCloud2 from './wordcloud2.js'
import WordCloud from './wordcloud.js'
import Water from './water.js'
import { Row } from "reactstrap";
import SearchBar from './searchbar'




class form extends Component {

  state = {
    Predicted_Class: [],pos:[],neg:[],water:[]
};
  componentDidMount() {
    console.log()
    var id = window.location.search
    id=id.replace('?form=','')
    // alert(id)
    axios.post("http://0.0.0.0:80/tweets/"+id).then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ Predicted_Class: res.data })

    });

    axios.post("http://0.0.0.0:80/custompos/"+id).then(res => {
      console.log(res);
      console.log('pos out',res.data);
      this.setState({ pos: res.data })

  });

  axios.post("http://0.0.0.0:80/customwater/"+id).then(res => {
    console.log(res);
    console.log(res.data);
    this.setState({ water: res.data })

});

  axios.post("http://0.0.0.0:80/customneg/"+id).then(res => {
    console.log(res);
    console.log(res.data);
    this.setState({ neg: res.data })
    console.log(this.state.neg)

});
  };
    render() {
        return (
            <div>
                <ButtonAppBar/>
                <SearchBar/>
                <Graph Predicted_Class={this.state.Predicted_Class} />
                <Water data={this.state.water}/>
                <Row>
                
                <div>
                <Col>
                <h1>Negative Tweets Wordcloud</h1>
                <WordCloud2 data={this.state.neg}/>
                </Col>
                </div>
                
                <div>
                <Col>

                <h1>Positive Tweets wordcloud</h1>
                <WordCloud2 data={this.state.pos}/>
                </Col>
                </div>
                
                </Row>
            </div>
        )
    }
}
export default form;