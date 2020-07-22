import React from "react";
import Notes from "./Notes";
import Layout from "./Layout";

// begin  Layout.js related functions
export const AddNotesBtnVisibility = (thiss) =>
  thiss.state.addNoteBtn && (
    <button
      onClick={thiss.HandleAddNote}
      className="btn-info text-capitalize mt-2 p-2 font-weight-normal"
    >
      add note
    </button>
  );

export const default_msg = (thiss) => {
  return thiss.state.Notes.length > 0 ? (
    <h2>{`there is ${thiss.state.Notes.length} notes....`}</h2>
  ) : (
    <h2>there is no notes....</h2>
  );
};

export const MapNotes = (thiss) => {
  return (
    thiss.state.editor === false &&
    thiss.state.Notes.map((item, i) => (
      <div key={i} className="container mx-auto mt-4 Notes">
        <Notes
          titleArr={thiss.HandleTitleArr}
          id={`item${i}`}
          title={item.title}
          content={item.content}
        />
      </div>
    ))
  );
};

// end of Layout.js related functions
