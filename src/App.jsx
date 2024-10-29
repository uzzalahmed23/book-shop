import BookList from "./components/BookList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {


  return (

    <>

      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <BookList />
        </div>
      </main>

    </>
  )
}