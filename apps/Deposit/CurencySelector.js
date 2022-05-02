import { TiInputChecked } from "react-icons/ti";

import styles from "./CurencySelector.module.scss";

const CurencySelector = ({ checked, setChecked, trading, prices }) => {
  return (
    <div className={styles.currenty}>
      <h3>Crypro currency</h3>
      <ul>
        <li
          className={checked === "ETH" ? styles.checked : ""}
          onClick={() => setChecked("ETH")}
        >
          <span>
            <img src="/images/ethereum-eth-logo.svg" />
            <span className={styles.currentyName}> ETH</span>
            {trading && (
              <>
                <span className={styles.info}>
                  <span>Price</span>
                  <span>${prices.ETH}</span>
                </span>
                <span className={styles.info}>
                  <span>Change (24h)</span>
                  <span>2.54%</span>
                </span>
              </>
            )}
          </span>
          <span>
            {checked === "ETH" && (
              <TiInputChecked size={26} color="var(--main)" />
            )}
          </span>
        </li>
        <li
          className={checked === "USDT" ? styles.checked : ""}
          onClick={() => setChecked("USDT")}
        >
          <span>
            <img src="/images/tether-usdt-logo.svg" />
            <span className={styles.currentyName}> USDT</span>
            {trading && (
              <>
                <span className={styles.info}>
                  <span>Price</span>
                  <span>${prices.USDT}</span>
                </span>
                <span className={styles.info}>
                  <span>Change (24h)</span>
                  <span>2.01%</span>
                </span>
              </>
            )}
          </span>
          <span>
            {checked === "USDT" && (
              <TiInputChecked size={26} color="var(--main)" />
            )}
          </span>
        </li>
        <li
          className={checked === "DVF" ? styles.checked : ""}
          onClick={() => setChecked("DVF")}
        >
          <span>
            <img src="/images/dvf.png" />
            <span className={styles.currentyName}> DVF</span>
            {trading && (
              <>
                <span className={styles.info}>
                  <span>Price</span>
                  <span>${prices.DVF}</span>
                </span>
                <span className={styles.info}>
                  <span>Change (24h)</span>
                  <span>1.51%</span>
                </span>
              </>
            )}
          </span>
          <span>
            {checked === "DVF" && (
              <TiInputChecked size={26} color="var(--main)" />
            )}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurencySelector;
