import { useState } from "react";
import {
  OutlinedInputContainer,
  OutlinedInputWrapper,
  OutlinedFormField,
  OutlineLabel,
  MessageWrapper,
} from "./style";
import { Field, ErrorMessage } from "formik";
import type { FieldProps } from "formik";
import FormFieldSkeleton from "../../skeletonFormField";

interface IMessageComponent {
  children?: React.ReactNode;
  type?: string;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean | undefined;
}

interface FormControlProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  loading?: boolean;
  name: string;
  variant?: "outlined" | "filled" | "standard";
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

const InputOutlinedComponent = ({
  field,
  form,
  type,
  label,
  disabled,
  ...props
}: {
  field: FieldProps["field"];
  form: any;
  type: string;
  label: string;
  disabled?: boolean;
}) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const error: boolean = form.touched[field.name] && form.errors[field.name];

  field.onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setLabelOnTop(false);
    form.handleBlur(e);
  };

  return (
    <>
      {label && (
        <OutlineLabel
          isFilled={!!field.value}
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
        <OutlinedInputWrapper
          onFocus={() => setLabelOnTop(true)}
          error={error}
          labelOnTop={labelOnTop}
          disabled={disabled}
          type={type}
          {...field}
          {...props}
        />
      </OutlinedFormField>
      <ErrorMessage name={field.name} component={MessageComponent} />
    </>
  );
};

const FormControl: React.FC<FormControlProps> = ({
  loading,
  name,
  variant = "outlined",
  ...props
}) => {
  return (
    <OutlinedInputContainer>
      {!loading ? (
        <Field name={name} {...props} component={InputOutlinedComponent} />
      ) : (
        <FormFieldSkeleton variant={variant} />
      )}
    </OutlinedInputContainer>
  );
};

export default FormControl;
