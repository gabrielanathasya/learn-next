webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reducers/reducer-due.jsx":
/*!**********************************!*\
  !*** ./reducers/reducer-due.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_reducer_duedate_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/reducer-duedate-data */ "./reducers/reducer-duedate-data.jsx");

var dueDate = Object(_reducers_reducer_duedate_data__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dueDate;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;
  console.log("def state duedate", state);

  switch (action.type) {
    case "ADD_DUE":
      if (state.filter(function (item) {
        return item.due == action.payload.due;
      }).length < 1) {
        newState = state.concat({
          due: action.payload.due
        });
        console.log("ADD_DUE newState", newState);
        return newState;
      }

    case "DELETE_DUE":
      newState = state.filter(function (item) {
        return item.due != action.payload.due;
      });
      return newState;
  }

  return state;
});

/***/ })

})
//# sourceMappingURL=index.js.03c9ecefa58fb14fd590.hot-update.js.map