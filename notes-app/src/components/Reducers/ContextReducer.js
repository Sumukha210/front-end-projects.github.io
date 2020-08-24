const ContextReducer = (state, action) => {
  switch (action.type) {
    case "Add_items":
      return [...state, action.payload];
    case "modify_items":
      state
        .filter((item) => item.id === action.payload.oldId)
        .map(
          (item) => (
            (item.note = action.payload.note),
            (item.content = action.payload.content)
          )
        );
      return [...state];
    case "delete_items":
      const newState = state.filter((item) => item.id !== action.payload);
      return [...newState];
    default:
      return state;
  }
};

export default ContextReducer;
