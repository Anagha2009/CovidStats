import React, { PureComponent } from 'react';
import {
  AreaChart,Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Day1=({result})=> {
    console.log(result.map(res=>res.Active))
     const day=result.map(res=>res.Active)
     const Rday=result.map(res=>res.Recovered)
     const Dday=result.map(res=>res.Deaths)

     const data = [
        {
          name: '0-50', Active: day.slice(0,50).slice(-1)[0]
        },
        {
          name: '50-100', Active: day.slice(51,100).slice(-1)[0]
        },
        {
          name: '100-150', Active: day.slice(101,150).slice(-1)[0]
        },
        {
          name: '150-200', Active: day.slice(151,200).slice(-1)[0]
        },
        {
          name: '200-250', Active: day.slice(201,250).slice(-1)[0]
        },
        {
          name: '250-300', Active: day.slice(251,300).slice(-1)[0]
        },
        {
          name: 'Present', Active: day.slice(300).slice(-1)[0]
        },
      ];
      const Rdata = [
        {
          name: '0-50', Recovered: Rday.slice(0,50).slice(-1)[0]
        },
        {
          name: '50-100', Recovered: Rday.slice(51,100).slice(-1)[0]
        },
        {
          name: '100-150', Recovered: Rday.slice(101,150).slice(-1)[0]
        },
        {
          name: '150-200', Recovered: Rday.slice(151,200).slice(-1)[0]
        },
        {
          name: '200-250', Recovered: Rday.slice(201,250).slice(-1)[0]
        },
        {
          name: '250-300', Recovered: Rday.slice(251,300).slice(-1)[0]
        },
        {
          name: 'Present', Active: Rday.slice(300).slice(-1)[0]
        },
      ];
      const Ddata = [
        {
          name: '0-50', Deaths: Dday.slice(0,50).slice(-1)[0]
        },
        {
          name: '50-100', Deaths: Dday.slice(51,100).slice(-1)[0]
        },
        {
          name: '100-150', Deaths: Dday.slice(101,150).slice(-1)[0]
        },
        {
          name: '150-200', Deaths: Dday.slice(151,200).slice(-1)[0]
        },
        {
          name: '200-250', Deaths: Dday.slice(201,250).slice(-1)[0]
        },
        {
          name: '250-300', Deaths: Dday.slice(251,300).slice(-1)[0]
        },
        {
          name: 'Present', Deaths: Dday.slice(300).slice(-1)[0]
        },
      ];
    return (
        <div>
            <AreaChart  width={1000} height={250} data={data}
                margin={{ top: 35, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(112, 118, 152, 0.7)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="rgba(112, 118, 152, 0.3)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"  />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Active" stroke="rgba(112, 118, 152, 1)" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        {/* <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 35, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Active" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart> */}
      <div className="row">
          <div className="col-6">
          <LineChart
        width={450}
        height={300}
        data={Rdata}
        margin={{
          top: 55, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Recovered" stroke="rgba(115, 152, 112, 1)" activeDot={{ r: 8 }} />
      </LineChart>
          </div>
          <div className="col-6">
          <LineChart
        width={450}
        height={300}
        data={Ddata}
        margin={{
          top: 55, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Deaths" stroke="rgba(182, 0, 0, 1)" activeDot={{ r: 8 }} />
      </LineChart>
      </div>
      </div>
        </div>
    )
}
export default Day1;