import { useContext, useReducer, useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BookContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);


  return (

    <div className={`${darkMode ? "dark " : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BookContext.Provider value={{ state, dispatch }}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <BookList />
            </div>
          </main>
          <ToastContainer />
        </BookContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}