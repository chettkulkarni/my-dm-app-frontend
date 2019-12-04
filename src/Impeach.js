import React from "react";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Graph from "./Graph";
import ButtonAppBar from './appbar.js';
import WordCloud from './wordcloud.js'
import WordCloud2 from './wordcloud2.js'
import { Row, Col, Card } from "reactstrap";
import Water from './water.js'

class Impeach extends Component {
    state = {
        Predicted_Class: [],pos:[],neg:[],water:[]
    };
    componentDidMount() {
        // alert('in impeach')
        axios.post("http://0.0.0.0:80/pred").then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ Predicted_Class: res.data })
        });

        axios.post("http://0.0.0.0:80/pos").then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ pos: res.data })
      
        });
      
        axios.post("http://0.0.0.0:80/neg").then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({ neg: res.data })});

        axios.post("http://0.0.0.0:80/water").then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ water: res.data })});

    };
    render() {
        return (
            <div >
                <ButtonAppBar/>
                <Graph Predicted_Class={this.state.Predicted_Class} />
                {/* <Graph Predicted_Class={this.state.Predicted_Class_2} /> */}
                <h1>tweet distribution on a timeline
                </h1>
                <Water data={this.state.water}/>
                <Row>
                <Col>
                <h1>Wordcloud of words in postive tweet
                </h1>
                <WordCloud2 data={this.state.pos}/>
                </Col>

                <Col>
                <h1>Wordcloud of words in negative tweet
                </h1>
                <WordCloud2 data={this.state.neg}/>
                </Col>
                </Row>
            </div>
        );
    }
}

export default Impeach;
