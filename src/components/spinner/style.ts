import styled, { keyframes } from 'styled-components';
import styleVariables from '../../constants/styleVariables';
interface IContainer {
  size?: string;
}
const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.i<IContainer>`
  ${(props) => {
    if (props.size === 'sm') {
      return `
        width: 16px;
        height: 16px;
        `;
    } else if (props.size === 'md') {
      return `
        width: 44px;
        height: 44px;
        `;
    }
  }}
  border: 2px solid ${styleVariables.colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
