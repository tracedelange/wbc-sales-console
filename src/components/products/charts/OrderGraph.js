import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'
import { monthStrings } from '../../../globals'

const OrderGraph = ({ data, graphData }) => {


    let graph_data = Object.keys(graphData).map(item => {
        return {
            "date": monthStrings[item],
            "Orders": graphData[item]
        }
    })


    return (
        <div className='graph-background'>
            <h2>Order Trends for {data.product_name}</h2>
            <ResponsiveContainer width='80%' height='80%'>
                <LineChart data={graph_data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" dy={10} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dot={false} type="monotone" dataKey="Orders" stroke="#C64033" />
                </LineChart>
            </ ResponsiveContainer >
        </div>
    )
}

export default OrderGraph
