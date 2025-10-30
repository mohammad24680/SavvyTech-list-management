import { useState, useRef, useEffect } from "react";
import {
  FilledInputContainer,
  OutlinedInputContainer,
  FilledInputWrapper,
  FilledFormField,
  MessageWrapper,
  FilledIconWrapper,
  FilledLabel,
  OutlinedFormField,
  OutlinedInputWrapper,
  OutlineLabel,
  OutlinedIconWrapper,
  TinyInputContainer,
  TinyInputWrapper,
  TinyFormField,
  TinyIconWrapper,
  TinyPlaceHolder,
} from "./style";
import { Field, ErrorMessage } from "formik";
import FormFieldSkeleton from "../../skeletonFormField";
import Spinner from "../../../spinner";

interface IMessageComponent {
  children?: any;
  type?: string;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean | undefined;
}
interface IInputComponent {
  field: { name: string; value: string; onBlur: (e: any) => void };
  form: any;
  leftIcon: string;
  rightIcon: string;
  type: string;
  label: string;
  notice: string;
  disabled?: boolean;
  spinner?: boolean;
}

const MessageComponent = ({
  children,
  type = "error",
  labelOnTop,
  disabled,
  isFilled,
}: IMessageComponent) => (
  <MessageWrapper
    type={type}
    labelOnTop={labelOnTop}
    disabled={disabled}
    isFilled={isFilled}
  >
    {children}
  </MessageWrapper>
);
const InputFilledComponent = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  notice,
  disabled,
  ...props
}: IInputComponent) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const error: boolean = form.touched[field.name] && form.errors[field.name];
  const [showPassword, togglePassword] = useState(false);
  const [leftIconClassName, setLeftIconClassName] = useState(
    type === "password"
      ? showPassword
        ? "me-Eye"
        : "me-Eye-closed"
      : leftIcon,
  );
  const passwordClickHandler = () => {
    if (type === "password") {
      if (!showPassword) {
        setLeftIconClassName("me-Eye");
      } else {
        setLeftIconClassName("me-Eye-closed");
      }
      togglePassword(!showPassword);
    } else {
      return false;
    }
  };
  field.onBlur = (e) => {
    setLabelOnTop(false);
    if (field.value) {
      setLabelOnTop(true);
    }
    form.handleBlur(e);
  };
  const showLabel = !(field.value && !labelOnTop);
  return (
    <>
      {label && showLabel && (
        <FilledLabel
          rightIcon={rightIcon}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
          disabled={disabled}
          isFilled={!!field.value}
        >
          {label}
        </FilledLabel>
      )}
      <FilledFormField
        error={error}
        labelOnTop={labelOnTop}
        disabled={disabled}
        isFilled={!!field.value}
      >
        {rightIcon && (
          <FilledIconWrapper
            error={error}
            labelOnTop={labelOnTop}
            disabled={disabled}
          >
            <i className={rightIcon} />
          </FilledIconWrapper>
        )}
        <FilledInputWrapper
          onFocus={() => {
            setLabelOnTop(true);
          }}
          error={error}
          labelOnTop={labelOnTop}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...field}
          {...props}
        />
        {leftIcon && (
          <FilledIconWrapper
            onClick={passwordClickHandler}
            error={error}
            labelOnTop={labelOnTop}
            disabled={disabled}
            isFilled={!!field.value}
          >
            <i
              className={
                type === "password"
                  ? leftIconClassName + " cursor-pointer leftIcon"
                  : leftIconClassName + " leftIcon"
              }
            />
          </FilledIconWrapper>
        )}
      </FilledFormField>
      {!error && notice && (
        <MessageComponent
          labelOnTop={labelOnTop}
          type="notice"
          disabled={disabled}
          isFilled={!!field.value}
        >
          {notice}
        </MessageComponent>
      )}
      <ErrorMessage name={field.name} component={MessageComponent} />
    </>
  );
};
const InputOutlinedComponent = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  notice,
  disabled,
  ...props
}: IInputComponent) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const error: boolean = form.touched[field.name] && form.errors[field.name];
  const [showPassword, togglePassword] = useState(false);
  const [leftIconClassName, setLeftIconClassName] = useState(
    type === "password"
      ? showPassword
        ? "me-Eye"
        : "me-Eye-closed"
      : leftIcon,
  );
  const passwordClickHandler = () => {
    if (type === "password") {
      if (!showPassword) {
        setLeftIconClassName("me-Eye");
      } else {
        setLeftIconClassName("me-Eye-closed");
      }
      togglePassword(!showPassword);
    } else {
      return false;
    }
  };
  field.onBlur = (e) => {
    setLabelOnTop(false);
    form.handleBlur(e);
  };
  return (
    <>
      {label && (
        <OutlineLabel
          isFilled={!!field.value}
          rightIcon={rightIcon}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
          disabled={disabled}
        >
          {label}
        </OutlineLabel>
      )}
      <OutlinedFormField
        error={error}
        labelOnTop={labelOnTop}
        disabled={disabled}
      >
        {rightIcon && (
          <OutlinedIconWrapper
            error={error}
            labelOnTop={labelOnTop}
            disabled={disabled}
          >
            <i className={rightIcon} />
          </OutlinedIconWrapper>
        )}
        <OutlinedInputWrapper
          onFocus={() => {
            setLabelOnTop(true);
          }}
          error={error}
          labelOnTop={labelOnTop}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...field}
          {...props}
        />
        {leftIcon && (
          <OutlinedIconWrapper
            onClick={passwordClickHandler}
            error={error}
            labelOnTop={labelOnTop}
            disabled={disabled}
          >
            <i
              className={
                type === "password"
                  ? leftIconClassName + " cursor-pointer leftIcon"
                  : leftIconClassName + " leftIcon"
              }
            />
          </OutlinedIconWrapper>
        )}
      </OutlinedFormField>
      {!error && notice && (
        <MessageComponent
          labelOnTop={labelOnTop}
          type="notice"
          disabled={disabled}
          isFilled={!!field.value}
        >
          {notice}
        </MessageComponent>
      )}
      <ErrorMessage name={field.name} component={MessageComponent} />
    </>
  );
};
const InputTinyComponent = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  notice,
  disabled,
  spinner,
  ...props
}: IInputComponent) => {
  const placeHolderRef = useRef<any>(null);
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  const [placeHolderWidth, setPlaceHolderWidth] = useState("");
  const error: boolean = form.touched[field.name] && form.errors[field.name];
  const [showPassword, togglePassword] = useState(false);
  const [leftIconClassName, setLeftIconClassName] = useState(
    type === "password"
      ? showPassword
        ? "me-Eye"
        : "me-Eye-closed"
      : leftIcon,
  );
  useEffect(() => {
    // setPlaceHolderWidth(placeHolderRef.current?.offsetWidth);
    setPlaceHolderWidth(
      !field?.value?.length
        ? placeHolderRef?.current?.offsetWidth
        : field.value.length,
    );
  }, [placeHolderRef]);
  const passwordClickHandler = () => {
    if (type === "password") {
      if (!showPassword) {
        setLeftIconClassName("me-Eye");
      } else {
        setLeftIconClassName("me-Eye-closed");
      }
      togglePassword(!showPassword);
    } else {
      return false;
    }
  };
  field.onBlur = (e) => {
    setLabelOnTop(false);
    setShowPlaceHolder(!showPlaceHolder);
    form.handleBlur(e);
  };
  return (
    <>
      <TinyFormField error={error} labelOnTop={labelOnTop} disabled={disabled}>
        {rightIcon && (
          <TinyIconWrapper
            error={error}
            labelOnTop={labelOnTop}
            disabled={disabled}
          >
            <i className={rightIcon} />
          </TinyIconWrapper>
        )}
        {showPlaceHolder && !field.value ? (
          <TinyPlaceHolder
            placeholderWidth={placeHolderWidth}
            ref={placeHolderRef}
            onClick={() => setShowPlaceHolder(!showPlaceHolder)}
          >
            {label}
          </TinyPlaceHolder>
        ) : (
          <TinyInputWrapper
            onFocus={() => {
              setLabelOnTop(true);
            }}
            placeholderWidth={placeHolderWidth}
            length={field?.value?.length}
            autoFocus
            error={error}
            labelOnTop={labelOnTop}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled={disabled}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            {...field}
            {...props}
          />
        )}

        {leftIcon && (
          <TinyIconWrapper
            onClick={passwordClickHandler}
            error={error}
            labelOnTop={labelOnTop}
            className="leftIcon"
            disabled={disabled}
          >
            {field.value && spinner ? (
              <Spinner size="sm" />
            ) : (
              <i
                className={
                  type === "password"
                    ? leftIconClassName + " cursor-pointer leftIcon"
                    : leftIconClassName + " leftIcon"
                }
              />
            )}
          </TinyIconWrapper>
        )}
      </TinyFormField>
      {!error && notice && (
        <MessageComponent
          labelOnTop={labelOnTop}
          type="notice"
          disabled={disabled}
        >
          {notice}
        </MessageComponent>
      )}
      <ErrorMessage name={field.name} component={MessageComponent} />
    </>
  );
};
const Input = ({
  loading,
  name,
  variant = "filled",
  ...props
}: {
  loading: boolean;
  name: string;
  variant: string;
  props: any;
}) => {
  if (variant === "outlined") {
    return (
      <OutlinedInputContainer>
        {!loading ? (
          <Field name={name} {...props} component={InputOutlinedComponent} />
        ) : (
          <FormFieldSkeleton variant={variant} />
        )}
      </OutlinedInputContainer>
    );
  } else if (variant === "tiny") {
    return (
      <TinyInputContainer>
        {!loading ? (
          <Field name={name} {...props} component={InputTinyComponent} />
        ) : (
          <FormFieldSkeleton variant={variant} />
        )}
      </TinyInputContainer>
    );
  }
  return (
    <FilledInputContainer>
      {!loading ? (
        <Field name={name} {...props} component={InputFilledComponent} />
      ) : (
        <FormFieldSkeleton variant={variant} />
      )}
    </FilledInputContainer>
  );
};

export default Input;
