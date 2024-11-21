import { useContext, useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BookContext, ThemeContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);


  return (

    <div className={`${darkMode ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BookContext.Provider value={{ cartData, setCartData }}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <BookList />
            </div>
          </main>

        </BookContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}