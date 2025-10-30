import styled from 'styled-components';

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;
  //overflow: hidden;
  z-index: 1;
  @keyframes loading {
    0% {
      transform: translate(-150%);
    }
    50% {
      transform: translate(-60%);
    }
    100% {
      transform: translate(150%);
    }
  }
`;
export const ShimmerContainer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
