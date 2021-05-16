import React, { useEffect, useState } from "react";
import FavoriteBooks from "../../components/FavoriteBooks";
import API from "../../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);
  console.log(savedBooks);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getFavorites()
      .then((res) => setSavedBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the dbs
  const handleDeleteClick = (props) => {
    console.log(props.props.id);
    API.deleteBook(props.props.id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {savedBooks.length ? (
        <FavoriteBooks
          handleDeleteClick={handleDeleteClick}
          savedBooks={savedBooks}
        />
      ) : (
        "You Don't have any saved books!!!"
      )}
    </div>
  );
}

export default Saved;
