import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

import styled from 'styled-components';

// animation
import { SlideUpAnimation } from '../../../Styles/Animation';

// profile chart
const ChartContainer = styled.div`
  display: flex;
  // 정렬은 없애야 할 수도 있음
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const data = [
  {
    subject: 'Javascript',
    A: 70,
    fullMark: 150
  },
  {
    subject: 'React.js',
    A: 50,
    fullMark: 150
  },
  {
    subject: 'React.Native',
    A: 10,
    fullMark: 150
  },
  {
    subject: 'Svelte',
    A: 0,
    fullMark: 150
  },
  {
    subject: 'Node.js',
    A: 30,
    fullMark: 150
  },
  {
    subject: 'Japanese',
    A: 30,
    fullMark: 150
  }
];

export default function ProfileCharts(props) {
  return (
    <React.Fragment>
      <SlideUpAnimation style={{ animationDelay: '0.6s' }}>
        <ChartContainer>
          <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name='Kim Hyunjae' dataKey='A' stroke='#82ca9d' fill='#82ca9d' fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ChartContainer>
      </SlideUpAnimation>
    </React.Fragment>
  );
}
