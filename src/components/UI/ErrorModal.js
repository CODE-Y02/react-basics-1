import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, details, closeBtnName = "OK", onErrorClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onErrorClose}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p className={classes.message}>{details}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={onErrorClose}>{closeBtnName}</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
