import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell
} from 'recharts';



const PresentChart =({con,dead,reco})=> {
    const data = [
        {
          name: 'Confirmed',  Cases: con
        },
        {
          name: 'Recovered',  Cases: reco
        },
        {
          name: 'Deaths', Cases: dead
        }
       
      ];
      const colors = ['#000000','#739870','#B60000']
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={40}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis type="number" domain={[0, 'dataMax +100']} /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3"/>
        <Bar dataKey="Cases">
        {
            data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
         }
        </Bar>
       
      </BarChart>
    );
  }

export default PresentChart;