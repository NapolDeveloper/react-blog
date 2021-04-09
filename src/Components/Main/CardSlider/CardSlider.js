import React from 'react';
// import Slider from 'react-slick';
import Slider from 'react-slick';
import Card from '../Card/Card';
import styled from 'styled-components';

// styles
import { SlideUpAnimation } from '../../../Styles/Animation';

export default class CardSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const cardData = [
      {
        title: 'Kim Hyunjae',
        des: 'Frontend Developer'
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

    const cardList = cardData.map((testList, index) => (
      <div>
        <Card key={index} title={testList.title} des={testList.des} profile={testList.profile} handleInfo={this.props.handleInfo}></Card>
      </div>
    ));
    const settings = {
      slide: 'div',
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      variableWidth: true,
      centerMode: true
    };

    return (
      <React.Fragment>
        <SlideUpAnimation style={{ animationDelay: '.9s' }}>
          <div>
            <Slider {...settings}>{cardList}</Slider>
          </div>
        </SlideUpAnimation>
      </React.Fragment>
    );
  }
}
