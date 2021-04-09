import React from 'react';
import styled from 'styled-components';

// components
import Charts from '../Main/Charts/Charts';
import ProfileImage from './ProfileImage/ProfileImage';

// style
import { SlideUpAnimation } from '../../Styles/Animation';

// profile chart
const ChartContainer = styled.div`
  display: flex;
  // 정렬은 없애야 할 수도 있음
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <SlideUpAnimation>
          <ProfileImage />
          <ChartContainer>
            <Charts />
          </ChartContainer>
        </SlideUpAnimation>
      </React.Fragment>
    );
  }
}
