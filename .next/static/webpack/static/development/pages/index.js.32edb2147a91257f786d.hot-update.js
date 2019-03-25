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
        return due;
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
        }, "ul.jsx-244948902{list-style:none;}.DeleteBtn.jsx-244948902{background-color:red;color:white;}.dateList.jsx-244948902{list-style-position:inside;padding-left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGMsQUFDbUIsQUFBa0MsQUFBb0QsZ0JBQXJGLEtBQThDLE1BQXVELE1BQXRELFNBQXVEIiwiZmlsZSI6Ii9ob21lL2dhYnJpZWxhbmF0aGFzeWEvbGVhcm4tbmV4dC9jb250YWluZXJzL3Rhc2tMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY2hlY2tUb0RvIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2hlY2tUb0RvXCI7XG5cbmNsYXNzIFRhc2tMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBkYXRlVmFsaWRhdGlvbiA9IGR1ZSA9PiB7XG4gICAgaWYgKGR1ZSA9PSBcIjE5NzAtMDEtMDFcIikge1xuICAgICAgcmV0dXJuIFwiTm8gRHVlIERhdGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGR1ZTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIHRhc2tcIiwgdGhpcy5wcm9wcy50YXNrKTtcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlciBkdWVcIiwgdGhpcy5wcm9wcy5kdWVkYXRlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnRhc2suZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT0gXCJOXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRhdGVMaXN0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kdWVkYXRlLm1hcChkYXRlSXRlbSA9PlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhc2suZmlsdGVyKFxuICAgICAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5kdWUgPT0gZGF0ZUl0ZW0uZHVlICYmIGl0ZW0uc3RhdHVzID09IFwiTlwiXG4gICAgICAgICAgICAgICkubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtkYXRlSXRlbS5kdWV9PlxuICAgICAgICAgICAgICAgICAgPGgzPkR1ZSBvbjoge3RoaXMuZGF0ZVZhbGlkYXRpb24oZGF0ZUl0ZW0uZHVlKX08L2gzPlxuXG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9PiBpdGVtLnN0YXR1cyA9PSBcIk5cIiAmJiBpdGVtLmR1ZSA9PSBkYXRlSXRlbS5kdWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZHVlID4gYi5kdWUpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCh0YXNrID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnByb3BzLmNoZWNrVG9Ebyh0YXNrKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbGV0ZUJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxUYXNrKHRhc2spfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidWwge2xpc3Qtc3R5bGU6bm9uZTt9IC5EZWxldGVCdG4ge2JhY2tncm91bmQtY29sb3I6IHJlZDsgY29sb3I6IHdoaXRlO30gLmRhdGVMaXN0eyBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7IHBhZGRpbmctbGVmdDogMDt9XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8cD5ubyBpdGVtPC9wPjtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IHN0YXRlLnRvZG9cbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IGNoZWNrVG9EbzogY2hlY2tUb0RvIH0sIGRpc3BhdGNoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRhc2tMaXN0KTtcbiJdfQ== */\n/*@ sourceURL=/home/gabrielanathasya/learn-next/containers/taskList.jsx */"));
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
//# sourceMappingURL=index.js.32edb2147a91257f786d.hot-update.js.map