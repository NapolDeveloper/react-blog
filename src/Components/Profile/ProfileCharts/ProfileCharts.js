import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styled from 'styled-components';

// animation
import { SlideUpAnimation } from '../../../Styles/Animation';

// profile chart
const ChartContainer = styled.div`
  display: flex;
  // 정렬은 없애야 할 수도 있음
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
const data = [
  {
    name: 'React.js',
    now: 50,
    goal: 100
  },
  {
    name: 'React.Native',
    now: 30,
    goal: 100
  },
  {
    name: 'Svelte',
    now: 0,
    goal: 100
  },
  {
    name: 'Node.js',
    now: 20,
    goal: 100
  },
  {
    name: 'Vue.js',
    now: 0,
    goal: 100
  },
  {
    name: 'Japanese',
    now: 30,
    goal: 100
  }
];

export default function ProfileCharts(props) {
  return (
    <React.Fragment>
      <SlideUpAnimation style={{ animationDelay: '0.6s' }}>
        <ChartContainer>
          <BarChart width={950} height={250} data={data} animationDelay={200}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='goal' fill='#8884d8' />
            <Bar dataKey='now' fill='#82ca9d' />
          </BarChart>
        </ChartContainer>
      </SlideUpAnimation>
    </React.Fragment>
  );
}
