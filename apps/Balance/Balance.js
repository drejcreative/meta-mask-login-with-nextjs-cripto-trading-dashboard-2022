import { Loader } from "../../components/Loader/Loader";
import useBalance from "../../hooks/useBalance";

import styles from "./Balance.module.scss";

const Balance = () => {
  const { balance, loading } = useBalance();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.balance}>
      <div className={`${styles.one} ${styles.eth}`}>
        <div className={styles.ammount}>
          <h3>Main balance</h3>
          <p>{balance?.ETH}</p>
        </div>
        <div className={styles.crypto}>
          <img src="/images/ethereum-eth-logo.svg" alt="ETH LOGO" /> ETH
        </div>
      </div>

      <div className={`${styles.one} ${styles.usdt}`}>
        <div className={styles.ammount}>
          <h3>Main balance</h3>
          <p>{balance?.USDT}</p>
        </div>
        <div className={styles.crypto}>
          <img src="/images/tether-usdt-logo.svg" alt="USDT LOGO" /> USDT
        </div>
      </div>

      <div className={`${styles.one} ${styles.dvf}`}>
        <div className={styles.ammount}>
          <h3>Main balance</h3>
          <p>{balance?.DVF}</p>
        </div>
        <div className={styles.crypto}>
          <img src="/images/dvf.png" alt="DVF LOGO" /> DVF
        </div>
      </div>
    </div>
  );
};

export default Balance;
