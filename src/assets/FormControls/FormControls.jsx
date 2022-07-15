import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";

export const FormControl = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const CreateField = (
  placeholder,
  name,
  type,
  validators,
  component,
  text = ""
) => (
  <div>
    <Field
      validate={validators}
      placeholder={placeholder}
      name={name}
      component={component}
      type={type}
    />
    {text}
  </div>
);
