import styled from "styled-components";
import variables from "../../../../constants/styleVariables";

interface IOutlinedInputWrapper {
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
}

interface IFieldIconWrapper {
  labelOnTop?: boolean;
  error?: boolean;
  disabled?: boolean;
}

interface ILabel {
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
  type?: string;
}

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;

export const OutlinedInputContainer = styled(InputContainer)`
  margin-bottom: 2vh;
`;

export const OutlinedInputWrapper = styled.input<IOutlinedInputWrapper>`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    ${(props) =>
      props.disabled &&
      `-webkit-text-fill-color: ${variables.colors.black_38} !important`};
  }

  width: 100%;
  z-index: 1;
  background-color: transparent;
  border: unset !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-self: flex-start;
  color: ${variables.colors.black_87};
  ${(props) =>
    props.disabled && `color: ${variables.colors.black_38} !important`};
  min-height: 17px;
  margin-right: 4px;
`;

export const OutlinedFormField = styled.div<IFieldIconWrapper>`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_12};
  border-radius: 4px;
  padding: 8px 16px;

  ${(props) =>
    props.disabled &&
    `background: linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%) !important`};

  &:hover {
    ${(props) =>
      !props.labelOnTop &&
      !props.disabled &&
      `border: 1px solid ${variables.colors.black_38}`};
  }

  & i {
    color: ${(props) =>
      props.disabled ? variables.colors.black_38 : variables.colors.black_60};
  }
`;

export const OutlineLabel = styled.label<ILabel>`
  position: absolute;
  top: 12px;
  right: 12px;
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

  ${(props) =>
    props.labelOnTop || props.isFilled
      ? `
    padding: 0 4px;
    top: -8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
  `
      : ""}
`;

export const MessageWrapper = styled.div<ILabel>`
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
