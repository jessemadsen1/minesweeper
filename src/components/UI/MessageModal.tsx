import React from 'react';
import ReactDOM from "react-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import classes from './MessageModal.module.css';

type MessageModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};



const ModalOverlay = ({ title, message, onConfirm }: MessageModalProps) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

const MessageModal = ({ title, message, onConfirm }: MessageModalProps) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("modal-root") as Element
      )}
    </React.Fragment>
  );
};

export default MessageModal;
