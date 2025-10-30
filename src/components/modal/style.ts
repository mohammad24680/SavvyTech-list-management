import styled from "styled-components";
import variables from "../../constants/styleVariables";

interface ModalWrapperInterface {
  show?: boolean;
}
interface AlertInterface {
  type: any;
}
export const ModalWrapper = styled.div<ModalWrapperInterface>`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 8px 12px rgba(9, 30, 66, 0.15), 0 0 1px rgba(9, 30, 66, 0.31);
`;
interface ContainerInterface {
  modalIcon?: boolean;
  size?: string;
  type?: string;
  variant?: string;
}
export const Container = styled.div<ContainerInterface>`
  z-index: 9999;
  padding: ${(props) =>
    props.type === "delete"
      ? "28px 12px 12px 12px"
      : props.variant === "tabbed"
      ? "0 12px 12px 12px"
      : "12px"};
  text-align: justify;
  ${(props) => {
    if (props.size === "sm") {
      return `
				width: 300px;
				min-width: 300px;
				min-height: 159px;
			`;
    } else if (props.size === "md") {
      return `
				width: 500px;
				min-width: 500px;
				min-height: 159px;
			`;
    } else if (props.size === "lg") {
      return `
        width:100%;
				max-width: 800px;
				min-height: 209px;
			`;
    } else if (props.size === "full-width") {
      return `
				width: 100%;
				min-height: 100vh;
			`;
    } else if (props.size === "xl") {
      return `
        width : 960px;
        min-height: 209px;
      `;
    } else {
      return `
				min-width: 300px;
				min-height: 159px;
			`;
    }
  }};
  ${(props) => {
    if (props.type === "delete") {
      return `border-top: 3px solid ${variables.colors.error};`;
    } else if (props.type === "normal") {
      return `border-top: 3px solid ${variables.colors.primary};`;
    }
  }};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.colors.white};
  box-shadow: 0 4px 8px 2px rgba(73, 73, 73, 0.25);
  border-radius: 4px 4px 8px 8px;
  display: flex;
  justify-content: ${(props) =>
    props.size === "full-width" ? "space-between" : "space-around"};
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 976px) {
    width: 100%;
  }
`;
interface TitleInterface {
  modalIcon?: string;
  size?: string;
  type?: string;
}
export const Title = styled.div<TitleInterface>`
  width: 100%;
  min-height: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  color: ${(props) =>
    props.type === "delete"
      ? `${variables.colors.black_87}`
      : `${variables.colors.blue_900}`};
`;
interface BodyInterface {
  type?: string;
  marginLess?: string;
  variant?: string;
}
export const Body = styled.div<BodyInterface>`
  width: 100%;
  min-height: 17px;
  flex-wrap: wrap;
  height: auto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: ${(props) =>
    props.type === "delete" ? "center" : "flex-start"};
  justify-content: flex-start;
  text-align: right;
  color: ${variables.colors.black_87};
  margin: ${(props) =>
    props.variant === "tabbed" ? "0 0 16px 0" : "12px auto"};
`;
interface FooterInterface {
  buttonPosition?: string;
}
export const Footer = styled.div<FooterInterface>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
  width: 100%;
`;
interface CircleInterface {
  type?: string;
}
export const Circle = styled.div<CircleInterface>`
  position: absolute;
  top: -24px;
  right: calc(50% - 24px);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.type === "delete"
      ? variables.colors.error
      : variables.colors.primary};
  display: ${(props) => (props.type === "delete" ? "flex" : "none")};
  box-shadow: 0 0 12px 6px rgba(255, 202, 187, 0.25);
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.i`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: 24px;
    color: ${variables.colors.white};
  }
`;
export const Logo = styled.div`
  width: 34px;
  height: 34px;
  background: red;
  background-size: 34px 34px;
  border: unset !important;
  outline: 0 !important;
  box-shadow: unset !important;
`;

export const CloseButton = styled.button<AlertInterface>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variables.colors.white};
  border-radius: 50%;
  outline: none;
  position: absolute;
  left: 14px;
  top: 14px;
  z-index: 9999;
  cursor: pointer;
  border: 1px solid
    ${(props) => {
      switch (props.type) {
        case "normal":
          return variables.colors.blue_800;
        case "delete":
          return variables.colors.error;
        default:
          return variables.colors.gray_200;
      }
    }};
`;

export const CloseButtunIcon = styled.i<AlertInterface>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => {
      switch (props.type) {
        case "normal":
          return variables.colors.blue_800;
        case "delete":
          return variables.colors.error;
        default:
          return variables.colors.gray_200;
      }
    }};
  }
`;
