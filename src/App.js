import React, { useState, useEffect } from "react"
import axios from "axios"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

const App = () => {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    })
    setBooks([...books, response.data])
  }

  const editBook = async (editedBook) => {
    const response = await axios.put(
      `http://localhost:3001/books/${editedBook.id}`,
      {
        title: editedBook.title,
      }
    )
    const newBooks = books.map((book) => {
      if (book.id === editedBook.id) {
        return { ...book, ...response.data }
      } else {
        return book
      }
    })
    setBooks(newBooks)
  }

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`)
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
