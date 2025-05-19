import styles from "./ButtonAlert.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

function ButtonAlert({ label, onClick }: ButtonProps) {
  return (
    <button className={styles.btnAlerta} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonAlert;
