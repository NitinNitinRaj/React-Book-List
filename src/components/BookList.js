import React from "react"
import BookShow from "./BookShow"

const BookList = ({ books, editBook, deleteBook }) => {
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
  return <div className="book-list">{renderedBooks}</div>
}

export default BookList
