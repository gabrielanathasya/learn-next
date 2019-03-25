import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserList from "../containers/user-list";
import UserDetail from "../containers/user-detail";
import TaskList from "../containers/taskList";
import DoneList from "../containers/DoneList";
import taskChecked from "../reducers/reducer-task-checked";
import { addTask } from "../actions/addTask";
import { deleteTask } from "../actions/deleteTask";
import { addDue } from "../actions/addDue";
import { deleteDue } from "../actions/deleteDue";
import taskList from "../containers/taskList";

class todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempDue: "",
      tempText: "",
      tempStatus: "N"
    };
  }

  updateInput = event => {
    this.setState({
      tempText: event.target.value
    });
  };

  updateDueDate = event => {
    this.setState({
      tempDue: event.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.tempText != "") {
      let due = this.state.tempDue == "" ? "1970-01-01" : this.state.tempDue;

      let task = {
        id: this.props.taskChecked.length,
        due: due,
        text: this.state.tempText,
        status: this.state.tempStatus
      };
      this.props.addTask(task);

      if (
        this.props.taskChecked.filter(item => item.due == task.due).length < 1
      ) {
        this.props.addDue(task);
      }

      this.setState({
        tempDue: "",
        tempText: "",
        tempStatus: "N"
      });
    } else {
      alert("Please input task first");
    }
  };

  handleDelete = task => {
    this.props.deleteTask(task);

    if (
      this.props.taskChecked.filter(item => item.due == task.due).length == 1
    ) {
      console.log("delete due");
      this.props.deleteDue(task);
    }
  };

  render() {
    //console.log(this.props.taskChecked);
    return (
      <div className="app">
        <div className="card">
          <h2>Insert New Task</h2>
          <table border="0">
            <tr>
              <td>
                <b>Task Name</b>
              </td>
              <td>
                <b>Due Date</b>
              </td>
              <td> </td>
            </tr>
            <tr>
              <td>
                <input
                  id="taskInput"
                  type="text"
                  placeholder="insert task..."
                  value={this.state.tempText}
                  onChange={this.updateInput}
                />
              </td>
              <td>
                <input
                  id="dueInput"
                  type="date"
                  value={this.state.tempDue}
                  onChange={this.updateDueDate}
                />
              </td>
              <td>
                <button onClick={this.handleSubmit}>Add</button>
              </td>
            </tr>
          </table>
        </div>
        <div className="card">
          <h2>To Do List</h2>
          <TaskList
            task={this.props.taskChecked}
            delTask={this.handleDelete}
            duedate={this.props.duedate}
          />
        </div>
        <div className="card">
          <h2>Completed</h2>
          <DoneList task={this.props.taskChecked} delTask={this.handleDelete} />
        </div>
        <style jsx>
          {
            ".card {background:white; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); padding: 2px 16px 16px 16px; margin: 15px 20% 15px 20%;} .app{background: #f0f8ff; font-family: Arial, Helvetica, sans-serif; overflow: auto;} h2{color: #297CBB}"
          }
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    taskChecked: state.taskChecked,
    duedate: state.dueReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addTask, deleteTask, addDue, deleteDue },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todolist);

/*
const App = () => (
    <div>
        <h2>Username List</h2>
        <UserList />
        <br />
        <h2>Username Details</h2>
        <UserDetail />
    </div>
)
*/
