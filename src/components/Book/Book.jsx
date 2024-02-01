import React, { useState } from "react";
import { useSelector } from "react-redux";
import UpdateBook from "../UpdateBook/UpdateBook";
import Popup from "reactjs-popup";
import classes from "./Book.module.scss";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalUpdate from "../ModalUpdate/ModalUpdate";

const Book = () => {
  const books = useSelector((state) => state.books);
  const [idForDeleting, setIdForDeleting] = useState();
  const [idForUpdating, setIdForUpdating] = useState();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenForUpdating, setModalOpenForUpdating] = useState(false);

  if (books.length > 0) {
    const renderList = books?.map((book) => {
      const { id, name, price, category } = book;

      const handleDeleteClick = (id) => {
        setModalOpen(true);
        setIdForDeleting(id);
      };

      const handleUpdateClick = (id) => {
        setModalOpenForUpdating(true);
        setIdForUpdating(id);
      };

      return (
        <div className={classes.book} key={id}>
          <div className={classes.details}>
            <div className={classes.name}>Title of the book: {name}</div>
            <div className={classes.price}>Price: ${price}</div>
            <div className={classes.category}>Category: {category}</div>
          </div>
          <div className={classes.actions}>
            <button
              className={classes.updateButton}
              onClick={() => handleUpdateClick(id)}
            >
              Update
            </button>
            {modalOpenForUpdating && idForUpdating === id && (
              <ModalUpdate
                setOpenModal={setModalOpenForUpdating}
                id={idForUpdating}
              />
            )}

            <button
              className={classes.deleteButton}
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </button>
            {modalOpen && (
              <ModalDelete setOpenModal={setModalOpen} id={idForDeleting} />
            )}
          </div>
        </div>
      );
    });
    return <>{renderList}</>;
  } else {
    return <>Nothing found in the bookstore</>;
  }
};

export default Book;
