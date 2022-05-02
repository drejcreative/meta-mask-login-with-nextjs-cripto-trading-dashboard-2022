import Image from "next/image";
import { useDispatch } from "react-redux";

import { setUser } from "../../store/reducers/userSlice";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setUser(null));
  };

  return (
    <header className={styles.header}>
      <Image
        src="/images/MetaMask_Fox.png"
        alt="metamaskIcon"
        width={50}
        height={50}
        className={styles.metamaskIcon}
      />
      <p onClick={logout}>Logout</p>
    </header>
  );
};

export default Header;
