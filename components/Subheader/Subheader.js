import styles from "./Subheader.module.scss";

const Subheader = ({ current, setCurrent }) => {
  return (
    <div className={styles.header}>
      <h1>Dashboard</h1>
      <div className={styles.headerRight}>
        <span
          className={`${styles.button} ${
            current === "deposit" ? styles.active : ""
          }`}
          onClick={() => setCurrent("deposit")}
        >
          DEPOSIT
        </span>
        <span
          className={`${styles.button} ${
            current === "trading" ? styles.active : ""
          }`}
          onClick={() => setCurrent("trading")}
        >
          TRADING
        </span>
      </div>
    </div>
  );
};

export default Subheader;
