import React, { useState } from "react"
import useBooksContext from "../hooks/use-books-context"

const BookEdit = ({ book, onSave }) => {
  const { editBook } = useBooksContext()

  const [title, setTitle] = useState(book.title)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSave()
    editBook({ id: book.id, title })
  }
  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit
