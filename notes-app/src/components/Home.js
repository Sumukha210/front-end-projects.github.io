import React, { useContext } from "react";
import { DataContext } from "./Context/DataContext";
import Note from "./Note";

const Home = () => {
  const [state, dispatch] = useContext(DataContext);

  return (
    <div className="container">
      <p className="text-center text-secondary">
        {state.length
          ? `There are ${state.length} notes...`
          : "No notes to show....."}
      </p>
      {console.log(state)}
      {state.length &&
        state.map((item) => {
          const { id, note, content } = item;
          return <Note key={id} id={id} note={note} content={content} />;
        })}
    </div>
  );
};

export default Home;
