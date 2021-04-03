import React from 'react';
import PropTypes from 'prop-types';
// import Slider from 'react-slick';
import Slider from 'react-slick';
import Card from '../Card/Card';
import styled from 'styled-components';

// import profile from '/Users/napol/Desktop/Develope/react-blog/src/Images/profile.jpeg';
import profileIcon from '../../../Images/profile.jpeg';
const test =
  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.apple.com%2Fac%2Fstructured-data%2Fimages%2Fknowledge_graph_logo.png%3F201812022340&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fkr%2F&tbnid=-TtEc9M5pE7LPM&vet=12ahUKEwiO6LPQ8dDvAhUKBaYKHTYSBx8QMygBegUIARDPAQ..i&docid=RWGbpV6HOVK4EM&w=302&h=302&q=apple&ved=2ahUKEwiO6LPQ8dDvAhUKBaYKHTYSBx8QMygBegUIARDPAQ';
const propTypes = {};

const defaultProps = {};

export default class CardSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cardData = [
      {
        title: 'Kim Hyunjae',
        des: 'Frontend Developer',
        profile: '/Users/napol/Desktop/Develope/react-blog/src/Images/logo.png'
      },
      {
        title: 'React.JS',
        des: 'About React.JS'
      },
      {
        title: 'Modern CSS',
        des: 'About Modern CSS like styled-component'
      },
      {
        title: 'React.Native',
        des: 'About React.Native'
      },
      {
        title: 'test2',
        des: 'test2'
      },
      {
        title: 'test3',
        des: 'test3'
      }
    ];

    const cardList = cardData.map((testList) => (
      <div>
        <Card title={testList.title} des={testList.des}></Card>
      </div>
    ));
    const settings = {
      slide: 'div',
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 20000,
      pauseOnHover: true,
      arrows: false,
      variableWidth: true,
      centerMode: true
    };

    return (
      <React.Fragment>
        <div>
          <Slider {...settings}>{cardList}</Slider>
        </div>
      </React.Fragment>
    );
  }
}

CardSlider.propTypes = propTypes;
CardSlider.defaultProps = defaultProps;
