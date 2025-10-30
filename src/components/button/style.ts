import styled from "styled-components";
import variables from "../../constants/styleVariables";

interface ButtonWrapperInterface {
  rightIcon?: string;
  leftIcon?: string;
  size: string;
  disabled: boolean;
  color?: string;
}

export const ButtonWrapper = styled.div<ButtonWrapperInterface>`
  ${({
    size,
    rightIcon,
  }: {
    size?: string;
    leftIcon?: string;
    rightIcon?: string;
  }) => {
    switch (size) {
      case "md-wide":
      case "lg-wide":
      case "sm-wide":
        return `
					width: 100%;
					height: inherit;
					&:last-child {
						margin-left: 0;
					}
				`;
    }
    if (rightIcon) {
      return `position: relative`;
    }
  }};
  button.button-component {
    outline: 0;
    border: unset;
    cursor: ${({ disabled }: { disabled?: boolean }) =>
      disabled ? "not-allowed" : "pointer"};
    text-align: center;
    position: relative;
    direction: rtl;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    ${({ size }) => {
      switch (size) {
        case "lg":
          return `
					padding: 8px 23px;
					font-size: ${variables.fontSize.h2};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 8px;
					height: 54px;
					width: 200px;
					min-width: 200px;
					max-width: 200px;
					min-height: 54px;
				`;
        case "lg-wide":
          return `
					padding: 8px 12px;
					font-size: ${variables.fontSize.h2};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 8px;
					width: 100%;
					height: 54px;
					min-width: max-content;
					min-height: 54px;
				`;
        case "md":
          return `
					padding: 8px 12px;
					font-size: ${variables.fontSize.h6};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 4px;
					min-width: max-content;
					min-height: 36px !important;
					width: max-content;
				`;
        case "md-wide":
          return `
					padding: 12px 0;
					font-size: ${variables.fontSize.h6};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 8px;
					min-width: max-content;
					min-height: 48px;
					width: 100%;
				`;
        case "sm":
          return `
					padding: 8px 14px;
					min-width: max-content;
					font-size: ${variables.fontSize.h6};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 4px;
					min-height: 36px;
					box-sizing: border-box;
				`;
        case "sm-wide":
          return `
					width: calc(100% - 10px);
					margin: 0 5px;
					padding: 8px 19px;
					font-size: ${variables.fontSize.h6};
					font-weight: ${variables.fontWeight.bold};
					border-radius: 4px;
					min-height: 36px;
				`;
      }
    }};
    ${({ color, disabled }) => {
      if (!disabled) {
        switch (color) {
          case "primary":
            return `
		  		background: linear-gradient(90deg, ${variables.colors.blue_500} 0%, ${variables.colors.primary_variant} 100%);
				color: ${variables.colors.white};
				min-height: fit-content;
				&:hover{
					background: ${variables.colors.primary};
					box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
				}
				&:active{
					background:${variables.colors.primary_variant};
					box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
				}
			`;
          case "secondary":
            return `
				background-color: ${variables.colors.blue_300};
				color: ${variables.colors.white};
				border: 1px solid ${variables.colors.blue_300};
				min-height: fit-content;
			`;
          case "info":
            return `
				background-color: ${variables.colors.blue_200};
				color: ${variables.colors.white};
				border: 1px solid ${variables.colors.blue_200};
				min-height: fit-content;
			`;
          case "danger":
            return `
				background-color: ${variables.colors.error};
				color: ${variables.colors.white};
				border: 1px solid ${variables.colors.error};
				min-height: fit-content;
				&:hover{
					background-color:#A00810;
					box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
				}
				&:active{
					background-color: #950005;
					box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
				}
			`;
          case "primary-outline":
            return `
				background-color: ${variables.colors.white};
				min-height: fit-content;
				color: ${variables.colors.primary};
				border: 1px solid ${variables.colors.primary};
				&:hover{
					background-color: rgba(232, 234, 246, 0.4);
				}
				&:active{
					border: 1px solid transparent;
					background-color: transparent
				}
			`;
          case "secondary-outline":
            return `
				background-color: ${variables.colors.white};
				min-height: fit-content;
				color: ${variables.colors.blue_300};
				border: 1px solid ${variables.colors.blue_300};
			`;
          case "info-outline":
            return `
				background-color: ${variables.colors.white};
				min-height: fit-content;
				color: ${variables.colors.blue_200};
				border: 1px solid ${variables.colors.blue_200};
			`;
          case "danger-outline":
            return `
				background-color: ${variables.colors.white};
				min-height: fit-content;
				color: ${variables.colors.error};
				border: 1px solid ${variables.colors.error};
			`;
          case "default-outline":
            return `
				background-color: ${variables.colors.white};
				min-height: fit-content;
				color: ${variables.colors.black_60};
				border: 1px solid transparent;
				&:hover{
					background: rgba(0, 0, 0, 0.12);
				}
				&:active{
					background:${variables.colors.white};
				}
			`;
        }
      } else {
        switch (color) {
          case "primary":
            return `
			  background-color: ${variables.colors.white_100} !important;
			  min-height: fit-content;
			  color:${variables.colors.black_38};
			  `;
          case "secondary":
            return `
			background-color: ${variables.colors.white_100} !important;
			min-height: fit-content;
			color:${variables.colors.black_38};
				  
			  `;
          case "info":
            return `
			background-color: ${variables.colors.white_100} !important;
			min-height: fit-content;
			color:${variables.colors.black_38};
			  `;
          case "danger":
            return `
			background-color: ${variables.colors.white_100} !important;
			color:${variables.colors.black_38};
			min-height: fit-content;
			  `;
          case "primary-outline":
            return `
			background-color: transparent;
			color:${variables.colors.black_38};
			border: 1px solid ${variables.colors.black_12};
			min-height: fit-content;
			  `;
          case "secondary-outline":
            return `
			background-color: transparent;
			color:${variables.colors.black_38};
			border: 1px solid ${variables.colors.black_38};
			min-height: fit-content;
			  `;
          case "info-outline":
            return `
			background-color: transparent;
			color:${variables.colors.black_38};
			border: 1px solid ${variables.colors.black_12};
			min-height: fit-content;
			  `;
          case "danger-outline":
            return `
			background-color: transparent;
			color:${variables.colors.black_38};
			border: 1px solid ${variables.colors.black_12};
			min-height: fit-content;
			  `;
          case "default-outline":
            return `
			background-color: transparent;
			color:${variables.colors.black_38};
			min-height: fit-content;
			  `;
        }
      }
    }};
    ${({ rightIcon }) => {
      if (rightIcon) {
        return `text-align: right`;
      }
    }};
  }
`;
export const Icon = styled.i<ButtonWrapperInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    padding: 0;
    margin: 0;
    ${(props) =>
      props.disabled && `color:${variables.colors.black_38} !important`};
    ${(props) => {
      switch (props.color) {
        case "primary":
          return `
				color: ${variables.colors.white};
			`;
        case "secondary":
          return `
				color: ${variables.colors.white};
			`;
        case "info":
          return `
				color: ${variables.colors.white};
			`;
        case "primary-outline":
          return `
				color: ${variables.colors.primary};
			`;
        case "secondary-outline":
          return `
				color: ${variables.colors.blue_300};
			`;
        case "info-outline":
          return `
				color: ${variables.colors.blue_200};
			`;
        case "default-outline":
          return `
				color: ${variables.colors.black_60};
			`;
      }
    }};
    ${({ size }: { size: string }) => {
      switch (size) {
        case "lg":
          return `
					font-size: 25px;
				`;
        case "md":
          return `
					font-size: 20px;
				`;
        case "sm":
          return `
					font-size: 14px;
				`;
      }
    }};
  }

  ${({ size }) => {
    switch (size) {
      case "lg":
        return `
					width: 20px;
					height: 20px;
				`;
      case "md":
        return `
					width: 18px;
					height: 18px;
				`;
      case "sm":
        return `
					width: 10px;
					height: 10px;
				`;
    }
  }};
`;
