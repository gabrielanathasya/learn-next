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

  switch (action.type) {
    case "ADD_DUE":
      newState = state.concat({
        due: action.payload.due
      });
      return newState;

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
//# sourceMappingURL=index.js.70d0737127165754f1db.hot-update.js.map