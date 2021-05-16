import React from "react";
import BookListItem from "./BookListItem";

function BookResults({ books, saved, handleSaveClick, handleDeleteClick }) {
  return (
    <div className="card-panel" style={{ backgroundColor: "blanchedalmond" }}>
      <p>Results</p>

      {books.length ? (
        books.map((book) => {
          return (
            <BookListItem
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              link={book.volumeInfo.infoLink}
              description={book.volumeInfo.description}
              image={
                book.volumeInfo.imageLinks === undefined
                  ? "https://via.placeholder.com/150"
                  : book.volumeInfo.imageLinks.thumbnail
              }
              key={book.etag}
              id={book.id}
              handleSaveClick={handleSaveClick}
              saved={saved}
            />
          );
        })
      ) : (
        <BookListItem books="Nothing Here" />
      )}
    </div>
  );
}

export default BookResults;
