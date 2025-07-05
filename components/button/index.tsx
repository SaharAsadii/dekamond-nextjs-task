import styles from "./button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  children,
  onClick,
  type,
  loading,
  disabled,
}: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? "در حال بارگذاری..." : children}
    </button>
  );
};
