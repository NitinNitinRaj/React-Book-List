import React, { useState } from "react"
import useBooksContext from "../hooks/use-books-context"
import BookEdit from "./BookEdit"

const BookShow = ({ book }) => {
  const [edit, setEdit] = useState(false)

  const { deleteBook } = useBooksContext()

  const onSave = () => {
    setEdit(!edit)
  }

  const handleEditClick = () => {
    setEdit(!edit)
  }

  const handleDeleteClick = () => {
    deleteBook(book.id)
  }
  let content = <h3>{book.title}</h3>
  if (edit) {
    content = <BookEdit book={book} onSave={onSave} />
  }
  return (
    <div className="book-show">
      <img
        alt={book.title}
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
