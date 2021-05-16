import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import BookResults from "../../components/BookResults";
import API from "../../utils/API";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    console.log(value);
    setBookSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  const handleSaveClick = (props) => {
    const selectedBook = props.props
    console.log(selectedBook);
    API.saveBook(selectedBook)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SearchForm
        name="bookSearch"
        value={bookSearch}
        handleInputChange={handleInputChange}
        placeholder="Search For a Book"
        handleFormSubmit={handleFormSubmit}
      />
      {books.length ? (
        <BookResults
          books={books}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Books;
