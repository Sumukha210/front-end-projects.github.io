import React, { useState, useEffect } from "react";

const useLocalStorage = (item) => {
  const [localItem, setLocalItem] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      const newItems = JSON.parse(localStorage.getItem("notes"));
      setLocalItem([...localItem, newItems]);
    } else {
      localItem.push(item);
      localStorage.setItem("notes", JSON.stringify([localItem]));
    }
  }, [item]);
  return [localItem, setLocalItem];
};

export default useLocalStorage;
