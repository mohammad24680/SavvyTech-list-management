import styled from "styled-components";
import variables from "../../../../constants/styleVariables";

interface IFilledInputWrapper {
  leftIcon?: string;
  rightIcon?: string;
  labelOnTop?: boolean;
  error?: boolean;
  disabled?: boolean;
  type?: string;
  isFilled?: boolean;
}
interface IMessageWrapper {
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
  isFilled?: boolean;
}
interface IOutlinedInputWrapper {
  leftIcon?: string;
  rightIcon?: string;
  onFocus?: (e: any) => void;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
  placeholderWidth?: any;
  length?: any;
}
interface IField_IconWrapper {
  labelOnTop?: boolean;
  error?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}
interface ILabel {
  rightIcon?: string;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;
export const FilledInputContainer = styled(InputContainer)`
  margin-bottom: 4.5vh;
`;
export const OutlinedInputContainer = styled(InputContainer)`
  margin-bottom: 2vh;
`;
export const FilledInputWrapper = styled.input<IFilledInputWrapper>`
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return "calc(100% - 80px)";
    } else if (!props.leftIcon && props.rightIcon) {
      return "calc(100% - 40px)";
    } else if (props.leftIcon && !props.rightIcon) {
      return "calc(100% - 40px)";
    } else {
      return "calc(100% - 20px)";
    }
  }};
  padding-right: ${(props) => {
    if (props.rightIcon) {
      return "0";
    } else {
      return "22px";
    }
  }};
  z-index: 1;
  padding-top: ${(props) => (props.labelOnTop ? "6px" : "2px")};
  background-color: transparent !important;
  border: unset !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-self: flex-start;
  border-radius: 8px 8px 0 0;
  color: ${variables.colors.black_87};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  min-height: 17px;
`;
export const OutlinedInputWrapper = styled.input<IOutlinedInputWrapper>`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    ${(props) =>
      props.disabled &&
      ` -webkit-text-fill-color: ${variables.colors.black_38} !important`};
  }
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return "calc(100% - 40px)";
    } else if (!props.leftIcon && props.rightIcon) {
      return "calc(100% - 20px)";
    } else if (props.leftIcon && !props.rightIcon) {
      return "calc(100% - 20px)";
    } else {
      return "calc(100% - 0px)";
    }
  }};
  z-index: 1;
  background-color: transparent;
  border: unset !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-self: flex-start;
  border-radius: 0;
  color: ${variables.colors.black_87};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  min-height: 17px;
  margin-right: 4px;
`;
export const FilledFormField = styled.div<IField_IconWrapper>`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white_100};
  border: unset;
  border-bottom: 1px solid
    ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : "unset"} !important;
  border-radius: 8px 8px 0 0;
  padding: 16px 0 8px 0;
  ${(props) =>
    props.disabled && `background: ${variables.colors.white_100} !important`}
  &:hover {
    ${(props) =>
      !props.labelOnTop &&
      !props.disabled &&
      `border-bottom: 1px solid ${variables.colors.black_87}`};
  }
  ${(props) =>
    !props.error &&
    props.isFilled &&
    props.labelOnTop &&
    `border-bottom: 1px solid ${variables.colors.black_60} !important`}
`;
export const OutlinedFormField = styled.div<IField_IconWrapper>`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? `${variables.colors.error} !important`
        : props.labelOnTop
        ? `${variables.colors.primary} !important`
        : `${variables.colors.black_12}`};
  border-radius: 4px;
  padding: 8px 16px;
  ${(props) =>
    props.disabled &&
    `background: linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%) !important`}
  ${(props) =>
    !props.labelOnTop &&
    `&: hover {
    border: 1px solid ${variables.colors.black_38}}`}
    & i {
    color: ${(props) =>
      props.disabled
        ? variables.colors.black_38
        : variables.colors.black_60} !important;
  }
`;
export const MessageWrapper = styled.div<IMessageWrapper>`
  font-weight: 400;
  font-size: 10px;
  line-height: 17px;
  color: ${(props) =>
    props.type === "error"
      ? variables.colors.error
      : props.labelOnTop && !props.isFilled
      ? variables.colors.primary
      : variables.colors.black_60};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  text-align: right;
  margin-top: 4px;
  padding-right: 10px;
`;
export const FilledIconWrapper = styled.div<IField_IconWrapper>`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start !important;
  i {
    &:before {
      color: ${variables.colors.black_60};
      font-size: 20px;
      ${(props) =>
        props.disabled && `color: ${variables.colors.black_38} !important`}
    }
  }
  i[class*="leftIcon"]:before {
    color: ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_60};
    ${(props) => props.isFilled && `color: ${variables.colors.black_60}`}
  }
`;
export const OutlinedIconWrapper = styled.div<IField_IconWrapper>`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    &:before {
      color: ${variables.colors.black_60};
      font-size: 20px;
      ${(props) =>
        props.disabled && `color: ${variables.colors.black_38} !important`}
    }
  }
  i[class*="leftIcon"]:before {
    color: ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_60};
  }
`;
export const FilledLabel = styled.label<ILabel>`
  position: absolute;
  top: 16px;
  right: ${(props) => {
    if (props.rightIcon) {
      return "40px";
    } else {
      return "12px";
    }
  }};
  z-index: 1;
  font-size: 14px;
  color: ${(props) =>
    props.error
      ? variables.colors.error
      : props.labelOnTop && !props.isFilled
      ? variables.colors.primary
      : variables.colors.black_87};
  transition: 0.1s;
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  ${(props) => {
    if (props.labelOnTop) {
      return `
				top: 0;
				font-size: 10px;
				padding-top: 4px;
			`;
    }
  }};
`;
export const OutlineLabel = styled.label<ILabel>`
  position: absolute;
  top: 12px;
  right: ${(props) => {
    if (props.rightIcon) {
      return "40px";
    } else {
      return "12px";
    }
  }};
  font-size: 14px;
  z-index: 1;
  color: ${(props) =>
    props.error
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : variables.colors.black_60};
  transition: 0.1s;
  height: 17px;
  background-color: ${(props) =>
    props.disabled
      ? props.labelOnTop || props.isFilled
        ? variables.colors.white
        : "transparent"
      : props.labelOnTop || props.isFilled
      ? variables.colors.white
      : "transparent"};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
        padding: 0 4px;
				top: -8px;
				font-size: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
			`;
    }
  }};
`;
export const TinyInputContainer = styled(InputContainer)`
  margin-bottom: 0.5rem;
  height: 28px;
`;
export const TinyInputWrapper = styled.input<IOutlinedInputWrapper>`
  min-width: ${(props) => `${props.placeholderWidth + 0.7}px`};
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return "calc(100% - 40px)";
    } else if (!props.leftIcon && props.rightIcon) {
      return "calc(100% - 20px)";
    } else if (props.leftIcon && !props.rightIcon) {
      return !props.length
        ? `${props.placeholderWidth + 0.7}px`
        : `${props.length * 6 + 10}px`;
    } else {
      return "calc(100% - 0px)";
    }
  }};
  max-width: 38ch;
  margin-left: 10px;
  z-index: 1;
  background-color: transparent;
  border: unset !important;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  align-self: flex-start;
  border-radius: 0;
  color: ${variables.colors.black_87};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important;`};
  ${(props) =>
    props.disabled &&
    ` &::placeholder {
    color: #fff !important;
  }`}
  min-height: 18px;
`;
export const TinyFormField = styled.div<IField_IconWrapper>`
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_12} !important;
  border-radius: 16px;
  padding: 4px 8px;
  &:hover {
    ${(props) =>
      !props.labelOnTop &&
      !props.disabled &&
      `border: 1px solid ${variables.colors.black_38} !important`};
  }
`;
export const TinyIconWrapper = styled.div<IField_IconWrapper>`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    &:before {
      color: ${variables.colors.black_60};
      font-size: 20px;
      ${(props) =>
        props.disabled && `color: ${variables.colors.black_38} !important`}
    }
  }
  i[class*="leftIcon"]:before {
    color: ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_60};
    ${(props) => props.isFilled && `color: ${variables.colors.black_60}`}
  }
`;

export const TinyPlaceHolder = styled.div<IOutlinedInputWrapper>`
  width: ${(props) =>
    props.placeholderWidth
      ? `${props.placeholderWidth + 0.7}px`
      : "max-content"};
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  margin-left: 10px;
`;
