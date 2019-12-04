import React,{Component} from 'react';
// import Plot from 'react-plotly.js';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell} from 'recharts';
import { Card, CardBody, CardTitle, CardText,Row, Col } from "reactstrap";

 class Water2 extends Component {
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
  <XAxis dataKey={[data.date,data.hour,data.min]} />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar  name="#Positive" dataKey="Tweet_y" fill="#8884d8" />
  <Bar name="#Negative" dataKey="Tweet_x" fill="#82ca9d" />
</BarChart>

                
                </Card>
                </Col>
                </Row>
            </div>
        );
    }
}
export default Water2;


