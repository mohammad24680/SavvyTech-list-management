import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 90px;
  height: 90px;
  width: 100%;
`;
export const Message = styled.div`
  padding-top: 24px;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  color: ${variables.colors.blue_600};
`;
