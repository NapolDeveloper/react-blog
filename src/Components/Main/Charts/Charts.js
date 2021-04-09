import React from 'react';
import { RadialBarChart, RadialBar, Tooltip, Legend, Pie, Cell, PieChart } from 'recharts';
// Chart's data
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8'
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed'
  },
  {
    name: '30-34',
    uv: -15.69,
    pv: 1398,
    fill: '#8dd1e1'
  },
  {
    name: 'React.JS',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d'
  },
  {
    name: 'Javascript',
    uv: -8.63,
    pv: 3908,
    fill: '#a4de6c'
  },
  {
    name: 'CSS',
    uv: -2.63,
    pv: 4800,
    fill: '#d0ed57'
  },
  {
    name: 'HTML',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658'
  }
];

export default function Charts(props) {
  return (
    <React.Fragment>
      <RadialBarChart width={730} height={250} innerRadius='10%' outerRadius='80%' data={data} startAngle={180} endAngle={0} barGap={10}>
        <RadialBar minAngle={15} background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align='right' />
        <Tooltip />
      </RadialBarChart>
    </React.Fragment>
  );
}
