import React, { useContext } from 'react'
import { useState } from "react";
import { getImgUrl } from "../utils/book-utility";
import ReviewStart from "./ReviewStart";
import Dialogbox from './Dialogbox';
import { BookContext } from '../context';
import { toast } from 'react-toastify';

function BookCard({ book }) {
  const { state, dispatch } = useContext(BookContext);


  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  }
  const handleBookSelection = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  }


  const handleCartAddData = (event, book) => {
    event.stopPropagation();
    const availBook = state.cartData.find((b) => b.id === book.id);
    if (!availBook) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...book
        }
      });
      toast.success(`“${book.name}” বইটি ব্যাগে যোগ করা সফল হয়েছে"`, {
        position: "top-right"
      });

    } else {
      toast.error(`“${book.name}” বইটি ইতমধ্যে ব্যাগে যোগ করা করা আছে`, {
        position: "top-right"
      });
    }



  }



  return (
    <>
      {
        showModal &&
        <Dialogbox handleClose={handleCloseModal} selectedBook={selectedBook} handleCartData={handleCartAddData} />
      }
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl" >
        <a href="#" onClick={() => handleBookSelection(book)}>
          <div className="aspect-[400/500]">
            <img className="size-full object-cover" src={getImgUrl(book.cover)} alt="" />
          </div>
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{book.name}</h3>
            <p className="text-[#575A6E] text-sm mb-2"> লেখকঃ {book.author}</p>
            <div className="flex items-center space-x-1 mb-5">


              <ReviewStart rating={book.ratings} /> ({book.price})
            </div>
            <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#" onClick={(event) => handleCartAddData(event, book)}>
              <img src="./assets/tag.svg" alt="" />
              <span>৳{book.dprice} | কার্টে যোগ করুন</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  )
}

export default BookCard