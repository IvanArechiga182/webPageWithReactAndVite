import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons";
import styles from "./ImputWithIcons.module.css";

function InputWithIcons() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/home?name=${encodeURIComponent(name)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className={styles.inputContainer}>
        <label>Usuario</label>
        <svg viewBox="0 -960 960 960" width="20" height="20">
          <path d={icons.user} />
        </svg>
        <input
          type="text"
          placeholder="Escribe tu usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputContainer}>
        <label>Contraseña</label>
        <svg viewBox="0 -960 960 960" width="20" height="20">
          <path d={icons.password} />
        </svg>

        <input
          type="password"
          required
          placeholder="Escribe tucontraseña"
          name=""
          id=""
        />
      </div>
      <a href="">¿Olvidaste tu contraseña?</a>
      <button type="submit">ENTRAR</button>
    </form>
  );
}

export default InputWithIcons;
