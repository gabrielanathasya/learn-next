import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkToDo } from "../actions/checkToDo";

class DoneList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.task.filter(item => item.status == "Y").length > 0) {
      return (
        <div>
          <ul>
            {this.props.task
              .filter(item => item.status == "Y")
              .map(task => (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={true}
                    value={task.id}
                    onChange={() => this.props.checkToDo(task)}
                  />
                  <button
                    className="DeleteBtn"
                    onClick={() => this.props.delTask(task)}
                  >
                    X
                  </button>{" "}
                  <s>{task.text}</s>
                </li>
              ))}
          </ul>
          <style jsx>
            {
              "ul {list-style:none;} .DeleteBtn {background-color: red; color: white;}"
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
)(DoneList);
