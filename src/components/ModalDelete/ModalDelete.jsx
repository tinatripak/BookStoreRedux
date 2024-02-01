import React from "react";
import classes from "./ModalDelete.module.scss";
import { RxCross1 } from "react-icons/rx";
import { removeBook } from "../../services/reducers/bookStoreReducers";
import { useDispatch, useSelector } from "react-redux";

function ModalDelete({ setOpenModal, id }) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const bookById = books.find((book) => book.id === id);

  const removeThisBook = (bookId) => {
    dispatch(removeBook({ id: bookId }));
    setOpenModal(false)
  };

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
          <div className={classes.title}>
            <h1>Are you sure that you want to delete this book?</h1>
          </div>
          <div className={classes.modalFooter}>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className={classes.cancelBtn}
            >
              Cancel
            </button>
            <button onClick={() => removeThisBook(id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDelete;
