import React from "react";

function BookListItem(props) {

  return (
    <div className="card-panel">
      <div className="row">
        <div className="col s9">
          <p>{props.title}</p>
          <p>{props.authors && props.authors.join(", ")}</p>
        </div>
        <div className="col s3">
          <a className="btn" target="_blank" rel="noopener noreferrer" href={props.link}>
            View
          </a>
          {!props.saved && <button className="btn" onClick={()=>{props.handleSaveClick({props})}} >Save</button>}
          {props.saved && <button className="btn" onClick={()=>{props.handleDeleteClick({props})}}>Delete</button>}
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="col s9">{props.description}</div>
      </div>
    </div>
  );
}

export default BookListItem;
