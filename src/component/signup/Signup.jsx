import React from "react";
import styles from "./signup.module.css";
import { Link } from "react-router-dom"; // ✅ yaha se import karo

export default function Signup() {   // ✅ component ka naam bhi Signup hi rakho
  return (
    <div className={styles.centerPage}>
      <div className={styles.ring}>
        {/* Pink */}
        <i style={{ "--clr": "#ec4899" }}></i>
        {/* Purple */}
        <i style={{ "--clr": "#8b5cf6" }}></i>
        {/* Blue */}
        <i style={{ "--clr": "#3b82f6" }}></i>

        <div className={styles.login}>
          <h2>Signup</h2>
          <div className={styles.inputBx}>
            <input type="text" placeholder="Username" />
          </div>
          <div className={styles.inputBx}>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.inputBx}>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className={styles.inputBx}>
            <input type="submit" value="Sign Up" />
          </div>

          {/* ✅ Links */}
          <div className={styles.links}>
            {/* <a href="#">Forget Password</a> */}
            <Link to="/login" className={styles.linkBtn}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
