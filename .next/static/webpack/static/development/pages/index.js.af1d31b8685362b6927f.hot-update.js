webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/taskList.jsx":
/*!*********************************!*\
  !*** ./containers/taskList.jsx ***!
  \*********************************/
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
/* harmony import */ var _actions_checkToDo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/checkToDo */ "./actions/checkToDo.jsx");







var _jsxFileName = "/home/gabrielanathasya/learn-next/containers/taskList.jsx";






var TaskList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TaskList, _Component);

  function TaskList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TaskList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dateValidation", function (due) {
      if (due == "1970-01-01") {
        return "No Due Date";
      } else {
        return due.getMonth();
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TaskList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("render task", this.props.task);
      console.log("render due", this.props.duedate);

      if (this.props.task.filter(function (item) {
        return item.status == "N";
      }).length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-244948902",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          className: "jsx-244948902" + " " + "dateList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, this.props.duedate.map(function (dateItem) {
          return _this2.props.task.filter(function (item) {
            return item.due == dateItem.due && item.status == "N";
          }).length > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
            key: dateItem.due,
            className: "jsx-244948902",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
            className: "jsx-244948902",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "Due on: ", _this2.dateValidation(dateItem.due)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
            className: "jsx-244948902",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, _this2.props.task.filter(function (item) {
            return item.status == "N" && item.due == dateItem.due;
          }).sort(function (a, b) {
            return a.due > b.due;
          }).map(function (task) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
              key: task.id,
              className: "jsx-244948902",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
              type: "checkbox",
              checked: false,
              value: task.id,
              onChange: function onChange() {
                return _this2.props.checkToDo(task);
              },
              className: "jsx-244948902",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
              onClick: function onClick() {
                return _this2.props.delTask(task);
              },
              className: "jsx-244948902" + " " + "DeleteBtn",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            }, "X"), " ", task.text);
          }))) : null;
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "244948902",
          __self: this
        }, "ul.jsx-244948902{list-style:none;}.DeleteBtn.jsx-244948902{background-color:red;color:white;}.dateList.jsx-244948902{list-style-position:inside;padding-left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGMsQUFDbUIsQUFBa0MsQUFBb0QsZ0JBQXJGLEtBQThDLE1BQXVELE1BQXRELFNBQXVEIiwiZmlsZSI6Ii9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY2hlY2tUb0RvIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2hlY2tUb0RvXCI7XG5cbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBkYXRlVmFsaWRhdGlvbiA9IGR1ZSA9PiB7XG4gICAgaWYgKGR1ZSA9PSBcIjE5NzAtMDEtMDFcIikge1xuICAgICAgcmV0dXJuIFwiTm8gRHVlIERhdGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGR1ZS5nZXRNb250aCgpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJyZW5kZXIgdGFza1wiLCB0aGlzLnByb3BzLnRhc2spO1xuICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGR1ZVwiLCB0aGlzLnByb3BzLmR1ZWRhdGUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudGFzay5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PSBcIk5cIikubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZGF0ZUxpc3RcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmR1ZWRhdGUubWFwKGRhdGVJdGVtID0+XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGFzay5maWx0ZXIoXG4gICAgICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmR1ZSA9PSBkYXRlSXRlbS5kdWUgJiYgaXRlbS5zdGF0dXMgPT0gXCJOXCJcbiAgICAgICAgICAgICAgKS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2RhdGVJdGVtLmR1ZX0+XG4gICAgICAgICAgICAgICAgICA8aDM+RHVlIG9uOiB7dGhpcy5kYXRlVmFsaWRhdGlvbihkYXRlSXRlbS5kdWUpfTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFza1xuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0uc3RhdHVzID09IFwiTlwiICYmIGl0ZW0uZHVlID09IGRhdGVJdGVtLmR1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5kdWUgPiBiLmR1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKHRhc2sgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMucHJvcHMuY2hlY2tUb0RvKHRhc2spfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVsZXRlQnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbFRhc2sodGFzayl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2sudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ1bCB7bGlzdC1zdHlsZTpub25lO30gLkRlbGV0ZUJ0biB7YmFja2dyb3VuZC1jb2xvcjogcmVkOyBjb2xvcjogd2hpdGU7fSAuZGF0ZUxpc3R7IGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTsgcGFkZGluZy1sZWZ0OiAwO31cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwPm5vIGl0ZW08L3A+O1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgaXRlbTogc3RhdGUudG9kb1xuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgY2hlY2tUb0RvOiBjaGVja1RvRG8gfSwgZGlzcGF0Y2gpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoVGFza0xpc3QpO1xuIl19 */\n/*@ sourceURL=/home/gabrielanathasya/learn-next/containers/taskList.jsx */"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "no item");
      }
    }
  }]);

  return TaskList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    item: state.todo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    checkToDo: _actions_checkToDo__WEBPACK_IMPORTED_MODULE_11__["checkToDo"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(TaskList));

/***/ })

})
//# sourceMappingURL=index.js.af1d31b8685362b6927f.hot-update.js.map