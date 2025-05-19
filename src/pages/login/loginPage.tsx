import { icons } from "../../assets/icons";
import InputWithIcons from "../../components/inputsWithIcons/LoginInputWithIcons";
import styles from "./loginPage.module.css";

export function LoginPage() {
  return (
    <div className={styles.container}>
      <InputWithIcons></InputWithIcons>
      <p>O regístrate usando</p>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="">
              <svg viewBox="0 0 16 16">
                <path d={icons.facebook} />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg viewBox="0 0 16 16">
                <path d={icons.facebook} />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg viewBox="0 0 16 16">
                <path d={icons.facebook} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.otherSignupOption}>
        <p>O regístrate usando</p>
        <a href="">Registrarse</a>
      </div>
    </div>
  );
}
