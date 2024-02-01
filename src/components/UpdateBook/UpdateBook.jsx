import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../services/reducers/bookStoreReducers";
import classes from "./UpdateBook.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBook = ({ id }) => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const bookById = books.find((book) => book.id === id);

  const [name, setName] = useState(bookById?.name);
  const [price, setPrice] = useState(bookById?.price);
  const [category, setCategory] = useState(bookById?.category);
  const [description, setDescription] = useState(bookById?.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (name !== "") &
      (price > 0) &
      (category !== "") &
      (description !== "")
    ) {
      dispatch(updateBook({ id, name, price, category, description }));
      toast.success("The book was updated");
    } else {
      setName(bookById?.name);
      setPrice(bookById?.price);
      setCategory(bookById?.category);
      setDescription(bookById?.description);
      toast.error("You can't do this so I returned it to the fist view");
    }
  };

  return (
    <div className={classes.updateBook}>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />{" "}
        <br />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />{" "}
        <br />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />{" "}
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <input type="submit" value="Update" className={classes.updateButton} />
      </form>
    </div>
  );
};

export default UpdateBook;
