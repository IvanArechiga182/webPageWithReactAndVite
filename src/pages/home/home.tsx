import { useLocation } from "react-router-dom";
import ButtonAlert from "../../components/buttonAlert/ButtonAlert";
import styles from "./home.module.css";

export function HomePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get("name") || "Invitado";
  const alertaSaludo = (name: string) => {
    if (name !== "") return alert(`Hola ${name} espero te encuentres bien!`);
    alert("No has introducido tu nombre!");
  };

  return (
    <div className={styles.container}>
      <p>Hola {userName} este boton es para saludarte!</p>
      <ButtonAlert
        label="Da click!"
        onClick={() => alertaSaludo(userName)}
      ></ButtonAlert>
    </div>
  );
}
