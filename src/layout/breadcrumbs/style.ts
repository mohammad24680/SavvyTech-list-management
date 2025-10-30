import styled from "styled-components";
import variables from "../../constants/styleVariables";

export const Container = styled.div`
  //z-index: 99;
  div.breadcrumbs-item {
    width: fit-content;
    position: relative;
    &:before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${variables.colors.black_60};
      content: " ";
      position: absolute;
      right: -4px;
      top: calc(50% - 2px);
    }
    &:first-child {
      margin-right: 4px;
    }
    padding-right: 4px;
    margin-right: 12px;
    height: 26px;
  }
  div.items-container {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    display: flex;
    height: 62px;
    width: fit-content;
  }
  a.breadcrumbs-link {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    width: fit-content;
  }
  height: 62px;
  min-height: 62px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${variables.colors.surface};
  width: 100%;
  max-width: 1310px;
  //padding-right: 20px;
  //padding-left: 20px;
  margin: 0 auto 16px auto;
  color: ${variables.colors.black_60};
  @media only screen and (max-width: 1023px) {
    justify-content: flex-start;
    align-items: flex-start;
    div.items-container {
      justify-content: space-around;
      padding-top: 4px;
      padding-bottom: 4px;
    }
    div.breadcrumbs-item:last-child:not(:only-child) {
      width: calc(70%);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    div.description-container {
      width: 100%;
    }
    div.description-container > div {
      width: 100%;
    }
    div.description-container > div > div {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: calc(95%);
    }
  }
  @media only screen and (max-width: 780px) {
    div.description-container > div > div {
      width: calc(70%);
    }
  }
  @media only screen and (max-width: 684px) {
    div.description-container > div > div {
      width: calc(50%);
    }
  }
  @media only screen and (max-width: 576px) {
    div.description-container > div > div {
      width: calc(30%);
    }
  }
  @media only screen and (max-width: 1030px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  div.description-container {
    height: 62px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media only screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    div.description-container {
      align-items: flex-start;
    }
    div.description-container > div > div {
      width: calc(95%);
    }
    div.description-container > div {
      border: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export const PageTitleContainer = styled.div`
  border-right: 1px solid ${variables.colors.black_38};
  height: 26px;
  width: fit-content;
  margin-right: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  @media only screen and (max-width: 1023px) {
    border-right: 1px solid ${variables.colors.black_38};
    padding-right: 12px;
    margin-right: 12px;
  }
`;

export const Text = styled.div`
  height: 26px;
  width: fit-content;
  font-size: 14px;
  font-weight: 400;
`;
