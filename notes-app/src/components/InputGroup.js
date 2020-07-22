import React from "react";
export const InputGroup = (props) => {
  return (
    <div className="inputGroup py-2">
      <div className="container d-flex align-items-center justify-content-center">
        <input type="text" name="Filter" placeholder="Filter todos" />
        <select name="sort" id="select" onInput={props.HandleSelect}>
          <option value="edited">sort by last edited</option>
          <option value="created">sort by recently created</option>
          <option value="alphabetic">sort alphabetically</option>
        </select>
      </div>
    </div>
  );
};
