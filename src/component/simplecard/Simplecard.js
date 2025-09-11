import React from "react";
import styles from "./simplecard.module.css";
import personImg from "../../../src/Assets/portfolioimage-removebg-preview.png"; // Replace with your image path

export default function SimpleCard() {
  return (
    <section className={styles.hero}>
      <div className={styles.contentBox}>
        <div className={styles.text}>
          <h1>
            Hi, I’m <span style={{ color: "#00ff84" }}>Tushar Pal</span> <br />
            A Passionate Web Developer
          </h1>
          <p>
            I help businesses and startups build modern, responsive, and user-friendly
            websites using <strong>ReactJS</strong>, <strong>JavaScript</strong>, and <strong>UI/UX design</strong>.
            <br />
            From clean code to creative designs — I bring your ideas to life.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>View My Work</button>
            <button className={styles.secondaryBtn}>Hire Me</button>
          </div>
        </div>
        <div className={styles.imageBox}>
          <img src={personImg} alt="Freelancer" />
        </div>
      </div>
    </section>
  );
}
