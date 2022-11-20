import React, { useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import BookContext from "./context/books"

const App = () => {
  const { getAllBooks } = useContext(BookContext)

  useEffect(() => {
    getAllBooks()
  }, [getAllBooks])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
