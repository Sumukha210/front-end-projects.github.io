import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "./Context/DataContext";

const Note = ({ id, note, content }) => {
  const [state, dispatch] = useContext(DataContext);
  return (
    <div className="card my-4">
      <div
        className="card-header bg-info"
        data-toggle="collapse"
        href={`#collapse${id}`}
        role="button"
        aria-expanded="false"
        aria-controls={id}>
        <span className="h3 text-light">{note}</span>
        <span>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 16 16"
            className="bi bi-arrow-down-short"
            fill="white"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
            />
            <path
              fillRule="evenodd"
              d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </span>
      </div>
      <div className="card-body">
        <div className="collapse show" id={`collapse${id}`}>
          <p className="card card-body border-none">{content}</p>
        </div>
        <div className="d-flex align-items center justify-content-around">
          <button className="btn btn-dark">
            <Link
              className="text-light text-decoration-none"
              to={`/editor/${id}`}>
              Edit
            </Link>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "delete_items", payload: id })}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
