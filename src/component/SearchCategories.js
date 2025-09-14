import React from "react";
import styles from "../component/css/SearchCategories.module.css";
import { Search, Monitor, Brush, PenTool, BarChart3, Grid } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchCategories() {
  const navigate = useNavigate();

  const categories = [
    { id: 0, icon: <Grid size={30} />, title: "All Projects" }, // ✅ All Projects Card
    { id: 1, icon: <Monitor size={30} />, title: "Web Development" },
    { id: 2, icon: <Brush size={30} />, title: "Design" },
    { id: 3, icon: <PenTool size={30} />, title: "Writing" },
    { id: 4, icon: <BarChart3 size={30} />, title: "Marketing" },
  ];

  const handleClick = (title) => {
    navigate(
      title.toLowerCase() === "all projects" ? `/category/all` : `/category/${title.toLowerCase()}`
    );
  };

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
          <div
            key={cat.id}
            className={styles.card}
            onClick={() => handleClick(cat.title)}
          >
            <div className={styles.icon}>{cat.icon}</div>
            <h3 className={styles.title}>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
