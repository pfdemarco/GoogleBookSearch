import React from "react";

function SearchForm(props) {
  return (
    <form className="card-panel" style={{ backgroundColor: "blanchedalmond" }}>
      <div className="form-group">
        <label htmlFor="language">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name={props.name}
          type="text"
          className="form-control"
          // style={{ "::placeholder": { color: "black" } }}
          placeholder={props.placeholder}
          text="black"
          
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
