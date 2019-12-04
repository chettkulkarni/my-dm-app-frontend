import React, { Component } from 'react';
import AnyChart from 'anychart-react';
import { Card, CardBody, CardTitle, CardText,Row } from "reactstrap";

class WordCloud extends Component {

    render() {
        console.log(this.props.data)
        return (
            <div className='container'>
                <Card>
                    <AnyChart
                        type="tagCloud"
                        data={this.props.data}
                        title="Simple pie chart"
                        width={600}
                        height={600}               
                    />
                </Card>
            </div>
        )
    }
}

export default WordCloud;