import { getAllBooks } from "../data/Books"
import BookCard from "./BookCard";

const allBooks = getAllBooks();

export default function BookList() {
    return (
        <>
            <div className="content">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    {
                        allBooks.map((book) =>
                            <BookCard key={book.id} book={book} />
                        )
                    }
                </div>
            </div>
        </>
    )
}