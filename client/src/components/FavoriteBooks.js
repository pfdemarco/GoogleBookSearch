import React from "react";
import BookListItem from "./BookListItem";

function FavoriteBooks({ savedBooks, handleDeleteClick }) {
  return (
    <div className="card-panel" style={{backgroundColor: "blanchedalmond"}}>
      <p>Results</p>

      {savedBooks.length ? (
        savedBooks.map((book) => {
          return (
            <BookListItem
              title={book.title}
              authors={book.authors}
              link={book.link}
              description={book.description}
              image={book.image}
              key={book._id}
              id={book._id}
              handleDeleteClick={handleDeleteClick}
              saved={true}
            />
          );
        })
      ) : (
        <BookListItem books="Nothing Here" />
      )}
    </div>
  );
}

export default FavoriteBooks;
