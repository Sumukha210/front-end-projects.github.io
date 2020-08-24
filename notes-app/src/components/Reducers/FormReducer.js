export const ACTIONS = {
  NOTE: "note",
  CONTENT: "content",
  CLEAR: "clear",
  ALERT: "alert",
};

const { NOTE, CONTENT, CLEAR, ALERT } = ACTIONS;

export const FormReducer = (state, action) => {
  switch (action.type) {
    case NOTE:
      return { ...state, note: action.payload };
    case CONTENT:
      return { ...state, content: action.payload };
    case CLEAR:
      return {
        note: "",
        content: "",
      };
    case ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};
