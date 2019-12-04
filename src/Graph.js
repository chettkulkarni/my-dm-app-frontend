import React,{Component} from 'react';
// import Plot from 'react-plotly.js';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell} from 'recharts';
import { Card, CardBody, CardTitle, CardText,Row, Col } from "reactstrap";

 class Graph extends Component {
    render() {
        console.log('graph obje',this.props.Predicted_Class)
        const data = [
            {
                "column": "Positive",
                "count": this.props.Predicted_Class[0]
            },
            {
                "column": "Negative",
                "count": this.props.Predicted_Class[1]
            }
        ]
        const COLORS = ['green','red']
        console.log(data)
        return (
            <div>
                
                <Card>
                <Row>
                <Col className='col-md-4'>
                
                     <h1>Tweet Distribution</h1>
                <BarChart width={500} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="column" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d">
                        {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                        }
                    </Bar>
                </BarChart>
                    </Col>
                    <Col>

                <PieChart width={500} height={500}>
                    <Pie data={data} dataKey="count" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" >
                        {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                        }</Pie>
                     <Tooltip />
                    <h>Red=Negative,Green=Positive</h>
                </PieChart>
                
                
                </Col>
                </Row>
                </Card>
            </div>
        );
    }
}
export default Graph;


