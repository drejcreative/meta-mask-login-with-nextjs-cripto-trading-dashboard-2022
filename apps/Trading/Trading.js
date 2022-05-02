import { useState } from "react";

import { Loader } from "../../components/Loader/Loader";
import fetcher from "../../utils/fetcher";
import CurencySelector from "../Deposit/CurencySelector";
import Orders from "./Orders";

import styles from "./Trading.module.scss";

const PRICES = {
  ETH: 2771,
  USDT: 1,
  DVF: 5,
};

const Trading = () => {
  const [token, setToken] = useState("ETH");
  const [ammount, setAmmount] = useState("");
  const [loading, setLoading] = useState(false);

  const onBuy = async () => {
    setLoading("buy");
    await fetcher("api/placeOrder", "POST", {
      side: "buy",
      ammount,
      token,
      price: PRICES[token],
      auth: "auth",
    });
    setLoading(false);
    setAmmount("");
  };

  const onSell = async () => {
    setLoading("sell");
    await fetcher("api/placeOrder", "POST", {
      side: "sell",
      ammount,
      token,
      price: PRICES[token],
      auth: "auth",
    });
    setAmmount("");
    setLoading(false);
  };

  return (
    <div className={styles.trading}>
      <h2>Trading</h2>
      <CurencySelector
        checked={token}
        setChecked={setToken}
        trading
        prices={PRICES}
      />

      <div className={styles.form}>
        <h3>Amount</h3>
        <input
          type="number"
          placeholder="0.00"
          onChange={(e) => setAmmount(e.target.value.toString())}
          value={ammount}
        />

        <div className={styles.footer}>
          <span
            className={`${styles.button} ${!ammount ? styles.disabled : ""}`}
            onClick={ammount ? onBuy : null}
            disabled={!ammount}
          >
            {loading === "buy" ? <Loader small /> : "BUY"}
          </span>
          <span
            className={`${styles.button} ${styles.secoundary} ${
              !ammount ? styles.disabled : ""
            }`}
            onClick={ammount ? onSell : null}
            disabled={!ammount}
          >
            {loading === "sell" ? <Loader small /> : "SELL"}
          </span>
        </div>
      </div>
      <Orders />
    </div>
  );
};

export default Trading;
