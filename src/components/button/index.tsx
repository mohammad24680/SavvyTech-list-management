import React from "react";
import { ButtonWrapper, Icon } from "./style";
import ButtonSkeleton from "./skeleton";

/**
 * A button component with ability to change its color and size.
 * */

interface ButtonInterface {
  children?: React.ReactNode;
  color?: string;
  onClick?: (e: any) => void;
  size?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  rest?: any;
  leftIcon?: string;
  rightIcon?: string;
}

const Button = ({
  children,
  color,
  onClick,
  size = "md",
  loading = false,
  disabled = false,
  leftIcon = "",
  rightIcon = "",
  className = "",
  type,
  ...rest
}: ButtonInterface) => {
  return (
    <ButtonWrapper
      data-testid="button-component"
      disabled={disabled}
      className="no-select"
      color={color}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {!loading ? (
        <button
          data-testid="button-element"
          disabled={disabled}
          onClick={loading ? () => false : onClick}
          className={`button-component ${className}`}
          type={type}
          color={color}
          {...rest}
        >
          {rightIcon && (
            <Icon
              data-testid={"button-icon"}
              color={color}
              size={size}
              className={rightIcon}
              disabled={disabled}
            />
          )}
          <span>{children}</span>
          {leftIcon && (
            <Icon
              data-testid={"button-icon"}
              color={color}
              size={size}
              className={leftIcon}
              disabled={disabled}
            />
          )}
        </button>
      ) : (
        <ButtonSkeleton
          data-testid={"button-skeleton-loader"}
          size={size}
          {...rest}
        />
      )}
    </ButtonWrapper>
  );
};

export default Button;
