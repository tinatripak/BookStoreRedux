import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../services/reducers/bookStoreReducers";
import classes from './AddBook.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name!=='' & price>0 & category!=='' & description!==''){
      const bookId = books.length > 0 ? books[books.length - 1].id + 1 : 0
      dispatch(
        addBook({
          id: bookId,
          name,
          price,
          category,
          description,
        })
      );
      toast.success("The book was added");
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
    } else{
      toast.error("You need to fill all gaps");
    }
  };
  return (
    <div className={classes.addBook}>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        <br/>
        <label>
          Price:
        </label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        <br/>
        <label>
          Category:
        </label>
          <input
            type="text"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        <br/>
        <label>
          Description:
        </label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        <br/>
        <input type="submit" value="Add" className={classes.submitButton}/>
      </form>
    </div>
  );
};

export default AddBook;
