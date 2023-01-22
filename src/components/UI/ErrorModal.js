import React, { Fragment } from "react";

import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p className={classes.message}>{props.details}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onErrorClose}>
          {props.closeBtnName || "OK"}
        </Button>
      </footer>
    </Card>
  );
};

//{ title, details, closeBtnName = "OK", onErrorClose }
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onErrorClose={props.onErrorClose} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          details={props.details}
          closeBtnName={props.closeBtnName}
          onErrorClose={props.onErrorClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
