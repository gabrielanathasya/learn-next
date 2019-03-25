import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkToDo } from "../actions/checkToDo";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  dateValidation = due => {
    if (due == "1970-01-01") {
      return "No Due Date";
    } else {
      return due;
    }
  };

  render() {
    console.log("render task", this.props.task);
    console.log("render due", this.props.duedate);

    if (this.props.task.filter(item => item.status == "N").length > 0) {
      return (
        <div>
          <ul className="dateList">
            {this.props.duedate.map(dateItem =>
              this.props.task.filter(
                item => item.due == dateItem.due && item.status == "N"
              ).length > 0 ? (
                <li key={dateItem.due}>
                  <h3>Due on: {this.dateValidation(dateItem.due)}</h3>

                  <ul>
                    {this.props.task
                      .filter(
                        item => item.status == "N" && item.due == dateItem.due
                      )
                      .map(task => (
                        <li key={task.id}>
                          <input
                            type="checkbox"
                            checked={false}
                            value={task.id}
                            onChange={() => this.props.checkToDo(task)}
                          />
                          <button
                            className="DeleteBtn"
                            onClick={() => this.props.delTask(task)}
                          >
                            X
                          </button>{" "}
                          {task.text}
                        </li>
                      ))}
                  </ul>
                </li>
              ) : null
            )}
          </ul>
          <style jsx>
            {
              "ul {list-style:none;} .DeleteBtn {background-color: red; color: white;} .dateList{ list-style-position: inside; padding-left: 0;}"
            }
          </style>
        </div>
      );
    } else {
      return <p>no item</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ checkToDo: checkToDo }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
