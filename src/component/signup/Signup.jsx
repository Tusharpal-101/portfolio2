import React, { useState } from "react";
import styles from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [popup, setPopup] = useState({ show: false, message: "", type: "" }); // ✅ popup state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPopup({ show: true, message: "Passwords do not match", type: "error" });
      return;
    }

    try {
      const res = await API.post("/register", { name: username, email, password });
      console.log(res.data);

      setPopup({ show: true, message: "Signup successful!", type: "success" });

      // Redirect after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setPopup({
        show: true,
        message: err.response?.data?.message || "Signup failed",
        type: "error",
      });
    }
  };

  return (
    <div className={styles.centerPage}>
      <div className={styles.ring}>
        <i style={{ "--clr": "#ec4899" }}></i>
        <i style={{ "--clr": "#8b5cf6" }}></i>
        <i style={{ "--clr": "#3b82f6" }}></i>

        <div className={styles.login}>
          <h2>Signup</h2>

          {/* ✅ Popup */}
          {popup.show && (
            <div
              style={{
                padding: "10px 20px",
                marginBottom: "10px",
                borderRadius: "5px",
                color: "#fff",
                backgroundColor: popup.type === "success" ? "#22c55e" : "#ef4444",
              }}
            >
              {popup.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputBx}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBx}>
              <input type="submit" value="Sign Up" />
            </div>
          </form>

          <div className={styles.links}>
            <Link to="/login" className={styles.linkBtn}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
