import styled, { keyframes } from 'styled-components';
// import reset from 'styled-reset';

// 왼쪽 -> 오른쪽 슬라이드
const MoveLeftToRight = keyframes`
  0% {
    transform: translateX(1400px);
    opacity: 0;
  }
  80%{
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const PageLoadAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  height: 100%;
  z-index: -10;
  animation: ${MoveLeftToRight} 0.8s ease-in-out forwards 0.3s;
`;

// 슬라이드 업
const SlideUp = keyframes`
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const SlideUpAnimation = styled.div`
  opacity: 0;
  animation: ${SlideUp} 0.8s ease-out forwards;
  /* animation-delay: ${(props) => props.delay}; */
`;

// eslint-disable-next-line import/no-anonymous-default-export
export { PageLoadAnimation, SlideUpAnimation };
