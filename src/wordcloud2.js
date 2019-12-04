import React, { Component } from 'react';
import AnyChart from 'anychart-react';
import { Card, CardBody, CardTitle, CardText,Row } from "reactstrap";
import { TagCloud } from 'react-tagcloud'
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import WordCloud from 'react-d3-cloud';

class WordCloud2 extends Component {


    render() {
        console.log('in word',this.props.data)
        var data=[]
        for (var i in this.props.data){
            data.push(this.props.data[i])
        }
        console.log(data)
        

        const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

        
        console.log(this.props.data)
        return (
            <div>
                <Card>

<WordCloud
    data={data}
    fontSizeMapper={fontSizeMapper}
    rotate={rotate}
  />
</Card>
            </div>
        )
    }
}


export default WordCloud2;