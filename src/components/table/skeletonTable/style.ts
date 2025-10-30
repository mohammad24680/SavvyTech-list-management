import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const Container = styled.div`
  width: 100%;
  background-color: ${variables.colors.white};
  border-radius: 4px;
  //z-index: 9999;
  position: absolute;
  //overflow-x: hidden;
  top: 0;
  right: 0;
`;
export const HeaderRow = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${variables.colors.black_900};
  border-radius: 8px 8px 0 0;
  margin-bottom: 5px;
  padding: 9px 11px;
`;
export const Row = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 9px 11px;
  border-bottom: 1px solid ${variables.colors.black_900};
  &:last-child {
    margin-bottom: 0;
  }
`;
export const HeaderCell = styled.div`
  width: calc(100% - 3%);
  height: 20px;
  background-color: ${variables.colors.white};
  border-radius: 4px;
  margin-left: 3%;
  &:last-child {
    margin-left: 0;
  }
`;
export const HeaderIconCell = styled.div`
  width: calc(50% - 3%);
  height: 20px;
  background-color: transparent;
  border-radius: 4px;
  margin-left: 3%;
  &:last-child {
    margin-left: 0;
  }
  align-self: center;
`;
export const HeaderBadgeCell = styled.div`
  width: calc(100% - 3%);
  height: 20px;
  margin-left: 3%;
  &:last-child {
    margin-left: 0;
  }
  position: relative;
  &:after {
    min-width: 50px;
    max-width: calc(80% - 3%);
    width: 10%;
    height: inherit;
    content: ' ';
    background-color: ${variables.colors.white};
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
interface ITextCell {
  width?: number;
}
export const TextCell = styled.div<ITextCell>`
  width: calc(100% - 3%);
  height: 19px;
  margin-left: 3%;
  &:last-child {
    margin-left: 0;
  }
  position: relative;
  &:after {
    min-width: 40px;
    max-width: calc(100% - 3%);
    width: ${(props) => props.width}px;
    height: inherit;
    content: ' ';
    background-color: ${variables.colors.black_900};
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: calc(50% - 10px);
  }
`;
export const BadgeCell = styled.div`
  width: calc(100% - 3%);
  height: 25px;
  margin-left: 3%;
  &:last-child {
    margin-left: 0;
  }
  position: relative;
  &:after {
    min-width: 50px;
    max-width: calc(80% - 3%);
    width: 10%;
    height: inherit;
    content: ' ';
    background-color: ${variables.colors.black_900};
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
export const IconCell = styled.div`
  width: calc(50% - 3%);
  height: 19px;
  margin-left: 3%;
  align-self: center;
  &:last-child {
    margin-left: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Circle = styled.div`
  margin: 0 auto;
  content: ' ';
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${variables.colors.black_900};
`;
