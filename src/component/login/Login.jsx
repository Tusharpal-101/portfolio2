import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.centerPage}>
      <div className={styles.ring}>
        {/* Glow animated rings */}
        <i style={{ "--clr": "#ec4899" }}></i>
        <i style={{ "--clr": "#8b5cf6" }}></i>
        <i style={{ "--clr": "#3b82f6" }}></i>

        <div className={styles.login}>
          <h2>Login</h2>

          <div className={styles.inputBx}>
            <input type="text" placeholder="Username" />
          </div>

          <div className={styles.inputBx}>
            <input type="password" placeholder="Password" />
          </div>

          <div className={styles.inputBx}>
            <input type="submit" value="Sign in" />
          </div>

          {/* ✅ Links row */}
          <div className={styles.links}>
            <a href="#">Forget Password</a>
            <Link to="/signup" className={`${styles.linkBtn} `}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
