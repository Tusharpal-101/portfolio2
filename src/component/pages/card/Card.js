import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "./card.module.css";
import { cards } from "../card/Carddata";

// Simple card component
const Card = React.memo(({ card }) => (
  <div className={`${styles.card} ${styles[card.color]}`}>
    <div className={styles.cardImage}>
      <img src={card.img} alt={card.title} loading="lazy" />
    </div>
    <div className={styles.cardBody}>
      <h3>{card.title}</h3>
      <p>{card.subtitle}</p>
      <div className={styles.progress}>
        <span>Progress</span>
        <div className={styles.progressBar}>
          <div className={styles.fill} style={{ width: `${card.progress}%` }} />
        </div>
        <span>{card.progress}%</span>
      </div>
    </div>
    <div className={styles.cardFooter}>
      <a
        href="#"
        className={styles.btnLive}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
    </div>
  </div>
));

export default function CardSection() {
  const { name } = useParams();
  const categoryName = (name || "").toLowerCase();

  // Filter cards or show all
  const filteredCards = useMemo(() => {
    if (!categoryName || categoryName === "all") {
      return cards; // sab cards dikhayega
    }
    return cards.filter(
      (card) => (card.category || "").toLowerCase() === categoryName
    );
  }, [categoryName]);

  return (
    <section className={styles.cardSection}>
      <h2 className={styles.heading}>
        {categoryName === "all" ? "All Projects" : `${name} Projects`}
      </h2>

      <div className={styles.cardsGrid}>
        {filteredCards.length ? (
          filteredCards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <p style={{ color: "#fff" }}>No projects found for this category.</p>
        )}
      </div>
    </section>
  );
}
