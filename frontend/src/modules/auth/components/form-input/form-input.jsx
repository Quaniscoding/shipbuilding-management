import React from "react";
import styles from "./form-input.module.scss";

export const FormInput = ({
  name,
  label,
  register,
  error,
  type = "text",
  containerClassName = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`${styles.formGroup} ${containerClassName}`}>
      <label htmlFor={name} className="text-md font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`${styles.input} ${
          error ? styles.inputError : ""
        } ${className}`}
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );
};
