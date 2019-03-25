import dueDateFn from "../reducers/reducer-duedate-data";

const dueDate = dueDateFn();

export default function(state = dueDate, action) {
  let newState;
  switch (action.type) {
    case "ADD_DUE":
      newState = state.concat({
        due: action.payload.due
      });
      return newState;

    case "DELETE_DUE":
      newState = state.filter(item => item.due != action.payload.due);
      return newState;
  }
  return state;
}
