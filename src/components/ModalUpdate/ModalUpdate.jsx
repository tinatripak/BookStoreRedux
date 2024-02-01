import React from "react";
import classes from "./ModalUpdate.module.scss";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import UpdateBook from "../UpdateBook/UpdateBook";

function ModalUpdate({ setOpenModal, id }) {
  const books = useSelector((state) => state.books);
  const bookById = books.find((book) => book.id === id);

  return (
    <div className={classes.modalBackground}>
      {bookById && (
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
          <div className={classes.updateBook}>
            <h1 className={classes.title}>Update book by id</h1>
            <UpdateBook id={id}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalUpdate;
