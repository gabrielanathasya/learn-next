export const checkToDo = task => {
  if (task.status == "N") {
    return {
      type: "TASK_CHECKED",
      payload: task
    };
  } else if (task.status == "Y") {
    return {
      type: "TASK_UNCHECKED",
      payload: task
    };
  }
};
