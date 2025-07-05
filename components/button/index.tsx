import styles from "./button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({ children, onClick, type, loading, disabled }: Props) => {
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
