import React, { useContext } from 'react'
import checkOut from "../assets/icons/checkout.svg"
import { BookContext } from '../context'
import { getImgUrl } from '../utils/book-utility';
import Delete from "../assets/delete.svg"
import { toast } from 'react-toastify';
function CartDetails({ onClose }) {
  const { state, dispatch } = useContext(BookContext);
  const handleBookDataDelete = (book) => {
    dispatch(
      {
        type: "REMOVE_FROM_CART",
        payload: book
      }
    )
    toast.warn(`${book.name}" বইটি কার্ড থেকে ডিলিট করা হয়েছে"`)
  }
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto"
      >
        <div
          className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9"
        >
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">আপনার ব্যাগ</h2>
          <div
            className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
          >
            {
              state.cartData.length === 0 ? <p className='text-2xl text-red-500 font-medium'> আপনার ব্যাগে কোন বই নাই ☹️ </p> : state.cartData.map((book) => <div key={book.id} className="grid grid-cols-[1fr_auto] gap-4">
                <div className="flex items-center gap-4">
                  <img
                    className="rounded overflow-hidden"
                    src={getImgUrl(book.cover)}
                    alt={book.name}
                    height={"50px"}
                    width={"50px"}
                  />
                  <div>
                    <h3 className="text-base md:text-xl font-bold">{book.name}</h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                      {book.author}
                    </p>
                    <span className="max-md:text-xs">৳{book.dprice} </span>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white" onClick={() => handleBookDataDelete(book)}
                  >
                    <img className="w-5 h-5" src={Delete} alt="" />
                    <span className="max-md:hidden">বাতিল</span>
                  </button>
                </div>
              </div>)
            }
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkOut} width="24" height="24" alt="" />
              <span>চেক আউট</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#" onClick={onClose}
            >
              বাতিল
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartDetails