import React from "react";
import style from "./Loader.module.scss";
const Loader = ({ warning, small }) => {
  return (
    <div
      className={`${style.loader} ${small ? style.small : ""} ${
        warning ? style.warning : ""
      }`}
    ></div>
  );
};

const LoaderWrap = ({ full, children }) => (
  <div className={`${style.loaderWrap} ${full ? style.full : ""}`}>
    {children}
  </div>
);

export { Loader, LoaderWrap };
