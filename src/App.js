import React, { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

const App = () => {
  const [books, setBooks] = useState([])

  const createBook = (newBook) => {
    setBooks([...books, newBook])
  }

  const editBook = (editedBook) => {
    const newBooks = books.map((book) => {
      if (book.id === editedBook.id) {
        return { ...book, title: editedBook.title }
      } else {
        return book
      }
    })
    setBooks(newBooks)
  }

  const deleteBook = (bookId) => {
    const newBooks = books.filter((book) => book.id !== bookId)
    setBooks(newBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
      <BookCreate createBook={createBook} />
    </div>
  )
}

export default App
