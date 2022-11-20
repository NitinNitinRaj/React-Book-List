import { createContext, useState } from "react"
import axios from "axios"

const BookContext = createContext()

function Provider({ children }) {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

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

  const valueToShare = {
    books,
    getAllBooks,
    createBook,
    editBook,
    deleteBook,
  }

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  )
}

export { Provider }
export default BookContext
