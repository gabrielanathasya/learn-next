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
        return due.getDate();
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
        }, "ul.jsx-244948902{list-style:none;}.DeleteBtn.jsx-244948902{background-color:red;color:white;}.dateList.jsx-244948902{list-style-position:inside;padding-left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGMsQUFDbUIsQUFBa0MsQUFBb0QsZ0JBQXJGLEtBQThDLE1BQXVELE1BQXRELFNBQXVEIiwiZmlsZSI6Ii9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY2hlY2tUb0RvIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2hlY2tUb0RvXCI7XG5cbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBkYXRlVmFsaWRhdGlvbiA9IGR1ZSA9PiB7XG4gICAgaWYgKGR1ZSA9PSBcIjE5NzAtMDEtMDFcIikge1xuICAgICAgcmV0dXJuIFwiTm8gRHVlIERhdGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGR1ZS5nZXREYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlciB0YXNrXCIsIHRoaXMucHJvcHMudGFzayk7XG4gICAgY29uc29sZS5sb2coXCJyZW5kZXIgZHVlXCIsIHRoaXMucHJvcHMuZHVlZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy50YXNrLmZpbHRlcihpdGVtID0+IGl0ZW0uc3RhdHVzID09IFwiTlwiKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkYXRlTGlzdFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZHVlZGF0ZS5tYXAoZGF0ZUl0ZW0gPT5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YXNrLmZpbHRlcihcbiAgICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0uZHVlID09IGRhdGVJdGVtLmR1ZSAmJiBpdGVtLnN0YXR1cyA9PSBcIk5cIlxuICAgICAgICAgICAgICApLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZGF0ZUl0ZW0uZHVlfT5cbiAgICAgICAgICAgICAgICAgIDxoMz5EdWUgb246IHt0aGlzLmRhdGVWYWxpZGF0aW9uKGRhdGVJdGVtLmR1ZSl9PC9oMz5cblxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YXNrXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT0gXCJOXCIgJiYgaXRlbS5kdWUgPT0gZGF0ZUl0ZW0uZHVlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmR1ZSA+IGIuZHVlKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGFzayA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFzay5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5jaGVja1RvRG8odGFzayl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJEZWxldGVCdG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsVGFzayh0YXNrKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFzay50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInVsIHtsaXN0LXN0eWxlOm5vbmU7fSAuRGVsZXRlQnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IGNvbG9yOiB3aGl0ZTt9IC5kYXRlTGlzdHsgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlOyBwYWRkaW5nLWxlZnQ6IDA7fVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHA+bm8gaXRlbTwvcD47XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiBzdGF0ZS50b2RvXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBjaGVja1RvRG86IGNoZWNrVG9EbyB9LCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShUYXNrTGlzdCk7XG4iXX0= */\n/*@ sourceURL=/home/gabrielanathasya/learn-next/containers/taskList.jsx */"));
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
//# sourceMappingURL=index.js.feecc98f0dd9a8891592.hot-update.js.map