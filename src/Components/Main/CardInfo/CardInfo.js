import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  margin: auto;
  width: 600px;
  height: 600px;
  background-color: green;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.15);
`;

const propTypes = {};

const defaultProps = {};

export default class CardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <InfoBox></InfoBox>
      </React.Fragment>
    );
  }
}

CardInfo.propTypes = propTypes;
CardInfo.defaultProps = defaultProps;
