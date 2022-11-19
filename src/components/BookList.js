import React, { useContext } from "react"
import BookContext from "../context/books"
import BookShow from "./BookShow"

const BookList = ({ books, editBook, deleteBook }) => {
  const { count, incrementCount } = useContext(BookContext)
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        editBook={editBook}
        deleteBook={deleteBook}
      />
    )
  })
  return (
    <div className="book-list">
      {count}
      <button
        onClick={() => {
          incrementCount()
        }}
      >
        Count
      </button>
      {renderedBooks}
    </div>
  )
}

export default BookList
