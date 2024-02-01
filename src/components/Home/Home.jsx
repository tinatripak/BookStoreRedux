import React, { useState } from "react";
import Book from "../Book/Book";
import "reactjs-popup/dist/index.css";
import classes from "./Home.module.scss";
import ModalAdd from "../ModalAdd/ModalAdd";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Bookstore 'Garden'</h1>

      <button
        className={classes.addButton}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add new book
      </button>

      {modalOpen && <ModalAdd setOpenModal={setModalOpen} />}

      <div className={classes.books}>
        <Book />
      </div>
    </div>
  );
};

export default Home;
