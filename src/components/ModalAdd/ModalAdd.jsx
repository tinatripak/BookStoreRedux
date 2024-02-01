import React from "react";
import classes from "./ModalAdd.module.scss";
import AddBook from '../AddBook/AddBook'
import { RxCross1 } from "react-icons/rx";


function ModalAdd({ setOpenModal }) {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>
        <div className={classes.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <div className={classes.title}>
          <p>Fill in the fields to add a new book</p>
        </div>
        <AddBook/>
      </div>
    </div>
  );
}

export default ModalAdd;
