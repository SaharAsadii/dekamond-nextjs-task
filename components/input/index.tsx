"use client";

import styles from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ type = "text", label, error, id, ...rest }: Props) => {
  return (
    <>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        id={id}
        autoComplete="on"
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};
