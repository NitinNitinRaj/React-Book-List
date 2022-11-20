import React, { useState } from "react"
import useBooksContext from "../hooks/use-books-context"

const BookCreate = () => {
  const [title, setTitle] = useState("")

  const { createBook } = useBooksContext()

  const onFormSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle("")
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  )
}

export default BookCreate
