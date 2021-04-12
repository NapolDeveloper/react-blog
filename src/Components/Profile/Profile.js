import React from 'react';
import styled from 'styled-components';

// components
import ProfileCharts from './ProfileCharts/ProfileCharts';
import ProfileImage from './ProfileImage/ProfileImage';

// style

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <ProfileImage />
        <ProfileCharts />
      </React.Fragment>
    );
  }
}
