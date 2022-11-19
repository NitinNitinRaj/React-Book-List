import React, { useState } from "react"

const BookEdit = ({ editTitle, onSave }) => {
  const [title, setTitle] = useState(editTitle)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSave(title)
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
