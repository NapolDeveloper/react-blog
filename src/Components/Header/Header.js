import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  justify-contents: center;
  height: 50px;
`;

const Logo = styled.div`
  width: 20px;
  height: 20px;
  background: red;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;

  margin-left: auto;
`;

const Menu = styled.div`
  font-size: 15px;
  font-color: black;
  margin: 0 10px;
`;

const propTypes = {};

const defaultProps = {};

export default function Header(props) {
  return (
    <React.Fragment>
      <Container>
        <Logo />
        <MenuBar>
          <Menu>Features</Menu>
          <Menu>Github</Menu>
          <Menu>Documentation</Menu>
        </MenuBar>
      </Container>
    </React.Fragment>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
