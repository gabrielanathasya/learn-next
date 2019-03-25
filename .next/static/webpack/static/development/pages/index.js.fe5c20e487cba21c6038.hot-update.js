webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _containers_user_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/user-list */ "./containers/user-list.jsx");
/* harmony import */ var _containers_user_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/user-detail */ "./containers/user-detail.jsx");
/* harmony import */ var _containers_taskList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/taskList */ "./containers/taskList.jsx");
/* harmony import */ var _containers_DoneList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/DoneList */ "./containers/DoneList.jsx");
/* harmony import */ var _reducers_reducer_task_checked__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers/reducer-task-checked */ "./reducers/reducer-task-checked.jsx");
/* harmony import */ var _actions_addTask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/addTask */ "./actions/addTask.jsx");
/* harmony import */ var _actions_deleteTask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/deleteTask */ "./actions/deleteTask.jsx");
/* harmony import */ var _actions_addDue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/addDue */ "./actions/addDue.jsx");
/* harmony import */ var _actions_deleteDue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actions/deleteDue */ "./actions/deleteDue.jsx");







var _jsxFileName = "/home/gabrielanathasya/learn-next/components/App.jsx";















var todolist =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(todolist, _Component);

  function todolist(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, todolist);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(todolist).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateInput", function (event) {
      _this.setState({
        tempText: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateDueDate", function (event) {
      _this.setState({
        tempDue: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      if (_this.state.tempText != "") {
        var due = _this.state.tempDue == "" ? "1970-01-01" : _this.state.tempDue;
        var task = {
          id: _this.props.taskChecked.length,
          due: due,
          text: _this.state.tempText,
          status: _this.state.tempStatus
        };

        _this.props.addTask(task);

        _this.props.addDue(task);

        _this.setState({
          tempDue: "",
          tempText: "",
          tempStatus: "N"
        });
      } else {
        alert("Please input task first");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDelete", function (task) {
      _this.props.deleteTask(task);

      if (_this.props.taskChecked.filter(function (item) {
        return item.due == task.due;
      }).length == 0) {
        console.log("delete due");

        _this.props.deleteDue(task);
      }
    });

    _this.state = {
      tempDue: "",
      tempText: "",
      tempStatus: "N"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(todolist, [{
    key: "render",
    value: function render() {
      //console.log(this.props.taskChecked);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-451588613" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-451588613" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Insert New Task"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        border: "0",
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Task Name")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Due Date")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "taskInput",
        type: "text",
        placeholder: "insert task...",
        value: this.state.tempText,
        onChange: this.updateInput,
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "dueInput",
        type: "date",
        value: this.state.tempDue,
        onChange: this.updateDueDate,
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleSubmit,
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Add"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-451588613" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "To Do List"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_taskList__WEBPACK_IMPORTED_MODULE_13__["default"], {
        task: this.props.taskChecked,
        delTask: this.handleDelete,
        duedate: this.props.duedate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-451588613" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-451588613",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Completed"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_DoneList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        task: this.props.taskChecked,
        delTask: this.handleDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "451588613",
        __self: this
      }, ".card.jsx-451588613{background:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);padding:2px 16px 16px 16px;margin:15px 20% 15px 20%;}.app.jsx-451588613{background:#f0f8ff;font-family:Arial,Helvetica,sans-serif;overflow:auto;}h2.jsx-451588613{color:#297CBB;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEhZLEFBQ3VCLEFBQXVILEFBQTBFLGNBQUMsR0FBMUosRUFBeUgscUNBQTdGLEVBQTRHLGNBQUMsV0FBbkYseUJBQUMiLCJmaWxlIjoiL2hvbWUvZ2FicmllbGFuYXRoYXN5YS9sZWFybi1uZXh0L2NvbXBvbmVudHMvQXBwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gXCIuLi9jb250YWluZXJzL3VzZXItbGlzdFwiO1xuaW1wb3J0IFVzZXJEZXRhaWwgZnJvbSBcIi4uL2NvbnRhaW5lcnMvdXNlci1kZXRhaWxcIjtcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi4vY29udGFpbmVycy90YXNrTGlzdFwiO1xuaW1wb3J0IERvbmVMaXN0IGZyb20gXCIuLi9jb250YWluZXJzL0RvbmVMaXN0XCI7XG5pbXBvcnQgdGFza0NoZWNrZWQgZnJvbSBcIi4uL3JlZHVjZXJzL3JlZHVjZXItdGFzay1jaGVja2VkXCI7XG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4uL2FjdGlvbnMvYWRkVGFza1wiO1xuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuLi9hY3Rpb25zL2RlbGV0ZVRhc2tcIjtcbmltcG9ydCB7IGFkZER1ZSB9IGZyb20gXCIuLi9hY3Rpb25zL2FkZER1ZVwiO1xuaW1wb3J0IHsgZGVsZXRlRHVlIH0gZnJvbSBcIi4uL2FjdGlvbnMvZGVsZXRlRHVlXCI7XG5pbXBvcnQgdGFza0xpc3QgZnJvbSBcIi4uL2NvbnRhaW5lcnMvdGFza0xpc3RcIjtcblxuY2xhc3MgdG9kb2xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZW1wRHVlOiBcIlwiLFxuICAgICAgdGVtcFRleHQ6IFwiXCIsXG4gICAgICB0ZW1wU3RhdHVzOiBcIk5cIlxuICAgIH07XG4gIH1cblxuICB1cGRhdGVJbnB1dCA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBUZXh0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICB1cGRhdGVEdWVEYXRlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcER1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnRlbXBUZXh0ICE9IFwiXCIpIHtcbiAgICAgIGxldCBkdWUgPSB0aGlzLnN0YXRlLnRlbXBEdWUgPT0gXCJcIiA/IFwiMTk3MC0wMS0wMVwiIDogdGhpcy5zdGF0ZS50ZW1wRHVlO1xuXG4gICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMudGFza0NoZWNrZWQubGVuZ3RoLFxuICAgICAgICBkdWU6IGR1ZSxcbiAgICAgICAgdGV4dDogdGhpcy5zdGF0ZS50ZW1wVGV4dCxcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXRlLnRlbXBTdGF0dXNcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmFkZFRhc2sodGFzayk7XG4gICAgICB0aGlzLnByb3BzLmFkZER1ZSh0YXNrKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRlbXBEdWU6IFwiXCIsXG4gICAgICAgIHRlbXBUZXh0OiBcIlwiLFxuICAgICAgICB0ZW1wU3RhdHVzOiBcIk5cIlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGlucHV0IHRhc2sgZmlyc3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURlbGV0ZSA9IHRhc2sgPT4ge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlVGFzayh0YXNrKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnRhc2tDaGVja2VkLmZpbHRlcihpdGVtID0+IGl0ZW0uZHVlID09IHRhc2suZHVlKS5sZW5ndGggPT0gMFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgZHVlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5kZWxldGVEdWUodGFzayk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMudGFza0NoZWNrZWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aDI+SW5zZXJ0IE5ldyBUYXNrPC9oMj5cbiAgICAgICAgICA8dGFibGUgYm9yZGVyPVwiMFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGI+VGFzayBOYW1lPC9iPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGI+RHVlIERhdGU8L2I+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwidGFza0lucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5zZXJ0IHRhc2suLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVtcFRleHR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImR1ZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlbXBEdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVEdWVEYXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxoMj5UbyBEbyBMaXN0PC9oMj5cbiAgICAgICAgICA8VGFza0xpc3RcbiAgICAgICAgICAgIHRhc2s9e3RoaXMucHJvcHMudGFza0NoZWNrZWR9XG4gICAgICAgICAgICBkZWxUYXNrPXt0aGlzLmhhbmRsZURlbGV0ZX1cbiAgICAgICAgICAgIGR1ZWRhdGU9e3RoaXMucHJvcHMuZHVlZGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGgyPkNvbXBsZXRlZDwvaDI+XG4gICAgICAgICAgPERvbmVMaXN0IHRhc2s9e3RoaXMucHJvcHMudGFza0NoZWNrZWR9IGRlbFRhc2s9e3RoaXMuaGFuZGxlRGVsZXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIi5jYXJkIHtiYWNrZ3JvdW5kOndoaXRlOyBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7IHBhZGRpbmc6IDJweCAxNnB4IDE2cHggMTZweDsgbWFyZ2luOiAxNXB4IDIwJSAxNXB4IDIwJTt9IC5hcHB7YmFja2dyb3VuZDogI2YwZjhmZjsgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IG92ZXJmbG93OiBhdXRvO30gaDJ7Y29sb3I6ICMyOTdDQkJ9XCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b2RvOiBzdGF0ZS50b2RvLFxuICAgIHRhc2tDaGVja2VkOiBzdGF0ZS50YXNrQ2hlY2tlZCxcbiAgICBkdWVkYXRlOiBzdGF0ZS5kdWVSZWR1Y2VyXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG4gICAgeyBhZGRUYXNrLCBkZWxldGVUYXNrLCBhZGREdWUsIGRlbGV0ZUR1ZSB9LFxuICAgIGRpc3BhdGNoXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKSh0b2RvbGlzdCk7XG5cbi8qXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgyPlVzZXJuYW1lIExpc3Q8L2gyPlxuICAgICAgICA8VXNlckxpc3QgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMj5Vc2VybmFtZSBEZXRhaWxzPC9oMj5cbiAgICAgICAgPFVzZXJEZXRhaWwgLz5cbiAgICA8L2Rpdj5cbilcbiovXG4iXX0= */\n/*@ sourceURL=/home/gabrielanathasya/learn-next/components/App.jsx */"));
    }
  }]);

  return todolist;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    todo: state.todo,
    taskChecked: state.taskChecked,
    duedate: state.dueReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    addTask: _actions_addTask__WEBPACK_IMPORTED_MODULE_16__["addTask"],
    deleteTask: _actions_deleteTask__WEBPACK_IMPORTED_MODULE_17__["deleteTask"],
    addDue: _actions_addDue__WEBPACK_IMPORTED_MODULE_18__["addDue"],
    deleteDue: _actions_deleteDue__WEBPACK_IMPORTED_MODULE_19__["deleteDue"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(todolist));
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

/***/ })

})
//# sourceMappingURL=index.js.fe5c20e487cba21c6038.hot-update.js.map