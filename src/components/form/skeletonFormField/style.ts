import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

interface IContainer {
  variant?: string;
}
export const Container = styled.div<IContainer>`
  width: 100%;
  min-width: 150px;
  height: 36px;
  position: relative;
  overflow-x: hidden;
  border-radius: ${(props) => {
    switch (props.variant) {
      case 'tiny':
        return '16px';
      case 'outlined':
        return '4px';
      case 'filled':
        return '4px';
      default:
        return '4px';
    }
  }};
  background: ${variables.colors.black_850};
`;
