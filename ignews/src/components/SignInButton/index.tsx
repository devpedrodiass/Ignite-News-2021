import React from "react";
import { FaGithub } from "../../../node_modules/react-icons/fa";
import { FiX } from "../../../node_modules/react-icons/fi";
import styles from "./styles.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

export function SignInButton(props) {
  const { data: session } = useSession();
  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361"></FaGithub>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}></FiX>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417"></FaGithub>
      Sign In with Github
    </button>
  );
}
