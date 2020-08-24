import React, { useContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { DataContext } from "./Context/DataContext";
import { FormReducer, ACTIONS } from "./Reducers/FormReducer";
import Alert from "./Alert";

const Editor = ({ match }) => {
  const [alert, setAlert] = useState(false);
  const [state, dispatch] = useContext(DataContext);

  const result = state.filter((item) => item.id === match.params.id);

  const [stateForm, dispatchForm] = useReducer(
    FormReducer,
    {
      note: "",
      content: "",
    },
    () => {
      if (match.params.id) {
        return { note: result[0].note, content: result[0].content };
      } else {
        return { note: "", content: "" };
      }
    }
  );
  const { note, content } = stateForm;

  const HandleSubmit = (e) => {
    e.preventDefault();

    const res = state.find((item) => item.id === match.params.id);

    if (note === "" || content === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    } else {
      if (res) {
        dispatch({
          type: "modify_items",
          payload: { oldId: match.params.id, note, content },
        });
        dispatchForm({ type: ACTIONS.NOTE, payload: "" });
        dispatchForm({ type: ACTIONS.CONTENT, payload: "" });
      } else {
        dispatch({
          type: "Add_items",
          payload: { id: uuidv4(), note, content },
        });
        dispatchForm({ type: ACTIONS.NOTE, payload: "" });
        dispatchForm({ type: ACTIONS.CONTENT, payload: "" });
      }
    }
  };

  return (
    <div className="container">
      {alert === true && <Alert />}
      <div className="card">
        <div className="card-header text-center display-6">Editor</div>
        <div className="card-body">
          <form className="" onSubmit={HandleSubmit}>
            <input
              type="text"
              value={stateForm.note}
              name="note"
              className="form-control"
              onChange={(e) =>
                dispatchForm({ type: ACTIONS.NOTE, payload: e.target.value })
              }
            />
            <textarea
              name="content"
              cols="30"
              className="form-control my-3"
              value={stateForm.content}
              onChange={(e) =>
                dispatchForm({ type: ACTIONS.CONTENT, payload: e.target.value })
              }
              rows="10"></textarea>
            <div className="d-flex  align-items-center justify-content-around">
              <button className="btn btn-info" type="submit">
                Save
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                onClick={() => {
                  dispatchForm({ type: "clear" });
                }}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editor;
