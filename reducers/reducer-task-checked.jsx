import DefaultStateFn from "../reducers/reducer-todolist";

const defaultState = DefaultStateFn();

export default function(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case "TASK_CHECKED":
      // state = {
      //     ...state,
      //     status: 'Y'
      // };

      //   newState = state;
      //   newState[action.payload].status = "Y";

      newState = state.map((s, i) =>
        i === action.payload.id ? { ...s, status: "Y" } : s
      );
      return newState;

    case "TASK_UNCHECKED":
      newState = state.map((s, i) =>
        i === action.payload.id ? { ...s, status: "N" } : s
      );
      return newState;

    case "ADD_TASK":
      newState = state.concat(action.payload);
      return newState;

    case "DELETE_TASK":
      newState = state.filter(item => item.id != action.payload.id);
      return newState;
  }
  return state;
}
