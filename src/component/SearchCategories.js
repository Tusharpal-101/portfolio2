import React from "react";
import styles from "../component/css/SearchCategories.module.css";
import { Search, Monitor, Brush, PenTool, BarChart3 } from "lucide-react";

export default function SearchCategories() {
  const categories = [
    { id: 1, icon: <Monitor size={30} />, title: "Web Development" },
    { id: 2, icon: <Brush size={30} />, title: "Design" },
    { id: 3, icon: <PenTool size={30} />, title: "Writing" },
    { id: 4, icon: <BarChart3 size={30} />, title: "Marketing" },
  ];

  return (
    <section className={styles.section}>
      {/* Search Bar */}
      <div className={styles.searchWrapper}>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} size={20} />
          <input
            type="text"
            placeholder="Search for freelancers or jobs..."
            className={styles.input}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <div className={styles.icon}>{cat.icon}</div>
            <h3 className={styles.title}>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
