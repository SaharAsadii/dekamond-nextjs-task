"use client";

import styles from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ type = "text", label, error, ...rest }: Props) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} type={type} {...rest} />
      {error && <span>{error}</span>}
    </>
  );
};
