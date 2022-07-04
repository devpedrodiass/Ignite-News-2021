import React from "react";
import { SignInButton } from "../SignInButton/index";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* CENTERED CONTENT */}
      <div className={styles.headerContent}>
        {/* LOGO */}
        <img src="/images/logo.svg" alt="ig.news logo" />
        {/* NAV BAR */}
        <nav>
          <a href="#" className={styles.active}>
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        {/* GITHUB SIG IN */}
        <SignInButton></SignInButton>
      </div>
    </header>
  );
}
