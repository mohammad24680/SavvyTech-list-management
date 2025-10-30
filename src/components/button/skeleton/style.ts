import styled from "styled-components";
import variables from "../../../constants/styleVariables";

interface ContainerProps {
  size: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  overflow-x: hidden;
  background: ${variables.colors.black_850};
  border-radius: 4px;
  margin-right: 8px;
  ${({ size }: { size?: string }) => {
    switch (size) {
      case "lg":
        return `
					width: 200px;
					height: 54px;
				`;
      case "md":
        return `
					width: 150px;
					height: 48px;
				`;
      case "sm":
        return `
					width: 75px;
					height: 36px;
				`;
      case "lg-wide":
        return `
					width: 100%;
					height: 54px;
				`;
      case "md-wide":
        return `
					width: 100%;
					height: 48px;
				`;
      case "sm-wide":
        return `
					width: 100%;
					height: 36px;
				`;
    }
  }};
`;
export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;
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
export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;
