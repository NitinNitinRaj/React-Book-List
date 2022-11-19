import React, { useState } from "react"
import uuid from "react-uuid"

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("")

  const onFormSubmit = (e) => {
    e.preventDefault()
    createBook({ id: uuid(), title })
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
