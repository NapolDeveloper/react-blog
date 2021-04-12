import React from 'react';
import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
import Slider from 'react-slick';
import Card from '../Card/Card';
import styled from 'styled-components';

// import card profile images
import CardProfile from '../../../Images/profile.jpeg';
import ReactBlack from '../../../Images/react-black.png';
import ReactNative from '../../../Images/react-native.png';
import NodeJs from '../../../Images/nodejs.png';
import Svelte from '../../../Images/svelte.png';
import Vue from '../../../Images/vuejs.jpeg';

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
        des: 'Frontend Developer',
        img: CardProfile,
        link: '/profile'
      },
      {
        title: 'React.js',
        des: 'About React.js',
        img: ReactBlack
      },
      {
        title: 'React.Native',
        des: 'About React.Native',
        img: ReactNative
      },
      {
        title: 'Svelte',
        des: 'About Svelte',
        img: Svelte
      },
      {
        title: 'Node.js',
        des: 'About Node.js',
        img: NodeJs
      },
      {
        title: 'Vue.js',
        des: 'About Vue.js',
        img: Vue
      }
    ];

    const cardList = cardData.map((cardList, index) => (
      <div>
        <Link to={cardList.link} style={{ textDecoration: 'none' }}>
          <Card key={index} title={cardList.title} des={cardList.des} img={cardList.img} />
        </Link>
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
