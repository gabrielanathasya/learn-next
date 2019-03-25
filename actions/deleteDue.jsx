export const deleteDue = task => {
  console.log("deleteDue");
  return {
    type: "DELETE_DUE",
    payload: task
  };
};
