import React from "react";
import { FaGithub } from "../../../node_modules/react-icons/fa";
import { FiX } from "../../../node_modules/react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"></FaGithub>
      Pedro Dias
      <FiX color="#737380" className={styles.closeIcon}></FiX>
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417"></FaGithub>
      Sign In with Github
    </button>
  );
}
