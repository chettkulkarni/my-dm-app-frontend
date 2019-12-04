import React,{Component} from 'react';
// import Plot from 'react-plotly.js';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell} from 'recharts';
import { Card, CardBody, CardTitle, CardText,Row, Col } from "reactstrap";

 class Water extends Component {
    render() {
        // console.log(this.props.Predicted_Class)
        const data = (this.props.data)
        
        
        return (
            <div>
                <Row>
                <Col>
                 <Card md={6}>
                 <BarChart width={1000} height={500} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar  name="#Positive" dataKey="Cleaned_Tweet_x" fill="#8884d8" />
  <Bar name="#Negative" dataKey="Cleaned_Tweet_y" fill="#82ca9d" />
</BarChart>

                
                </Card>
                </Col>
                </Row>
            </div>
        );
    }
}
export default Water;


