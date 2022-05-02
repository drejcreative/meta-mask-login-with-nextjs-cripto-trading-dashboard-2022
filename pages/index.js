import { useEffect, useState } from "react";
import Image from "next/image";
import Web3 from "web3";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, setUser } from "../store/reducers/userSlice";
import { Loader } from "../components/Loader/Loader";

import styles from "./index.module.scss";

export default function Home() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [pluginWarning, setPulginWarning] = useState(false);
  const [error, serError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      setPulginWarning("You should install Metamask");
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      Router.push("/dashboard");
    }
  }, [currentUser]);

  const signIn = async () => {
    setLoading(true);
    serError("");
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const userAccount = await web3.eth.getAccounts();
      const account = userAccount[0];

      if (!account) {
        serError("Please sign in to your metamask extension");
        setLoading(false);
        return;
      }

      const signed = await web3.eth.personal.sign("auth", account);
      const signedAddress = await web3.eth.personal.ecRecover("auth", signed);
      dispatch(setUser(signedAddress));
      Router.push("/dashboard");
      setLoading(false);
    } catch (error) {
      serError(error.message);
      setLoading(false);
    }
  };

  if (pluginWarning)
    return (
      <main className={styles.main}>
        <div className={styles.auth}>
          <Image
            src="/images/MetaMask_Fox.png"
            alt="metamaskIcon"
            width={150}
            height={150}
            className={styles.metamaskIcon}
          />
          <h2>Please install Metamask</h2>
          <a href="https://metamask.io/download/">Get it here</a>
        </div>
      </main>
    );

  return (
    <main className={styles.main}>
      <div className={styles.auth}>
        <Image
          src="/images/MetaMask_Fox.png"
          alt="metamaskIcon"
          width={150}
          height={150}
          className={styles.metamaskIcon}
        />
        <h2>Welcome, please login</h2>
        <span className={styles.button} onClick={signIn}>
          {loading ? <Loader /> : <span>LOGIN</span>}
        </span>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </main>
  );
}
