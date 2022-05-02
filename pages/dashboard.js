import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

import Header from "../components/Header/Header";
import { selectUser } from "../store/reducers/userSlice";
import Subheader from "../components/Subheader/Subheader";
import Trading from "../apps/Trading/Trading";
import Deposit from "../apps/Deposit/Deposit";
import Balance from "../apps/Balance/Balance";

import styles from "./dashboard.module.scss";

export default function Dashboard() {
  const currentUser = useSelector(selectUser);
  const [current, setCurrent] = useState("deposit");

  useEffect(() => {
    if (!currentUser) {
      Router.push("/");
    }
  }, [currentUser]);

  return (
    <div>
      <Header />
      <Subheader current={current} setCurrent={setCurrent} />
      <div className={styles.dashboardWrap}>
        <Balance />
        {current === "deposit" ? <Deposit /> : <Trading />}
      </div>
    </div>
  );
}
