import { useState } from "react";

import { Loader } from "../../components/Loader/Loader";
import fetcher from "../../utils/fetcher";
import CurencySelector from "./CurencySelector";

import styles from "./Deposit.module.scss";

const Deposit = () => {
  const [token, setToken] = useState("ETH");
  const [ammount, setAmmount] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    await fetcher("api/deposit", "POST", { ammount, token, auth: "auth" });
    setAmmount("");
    setLoading(false);
  };

  return (
    <div className={styles.deposit}>
      <h2>Deposit</h2>
      <CurencySelector checked={token} setChecked={setToken} />
      <div className={styles.form}>
        <h3>Amount</h3>
        <input
          type="number"
          placeholder="0.00"
          onChange={(e) => setAmmount(e.target.value.toString())}
          value={ammount}
        />
        <span
          className={`${styles.button} ${!ammount ? styles.disabled : ""}`}
          onClick={ammount ? submit : null}
          disabled={!ammount}
        >
          {loading ? <Loader small /> : "Deposit"}
        </span>
      </div>
    </div>
  );
};

export default Deposit;
