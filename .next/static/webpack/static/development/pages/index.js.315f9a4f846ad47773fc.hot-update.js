webpackHotUpdate("static/development/pages/index.js",{

/***/ "./colors/index.js":
/*!*************************!*\
  !*** ./colors/index.js ***!
  \*************************/
/*! exports provided: color, size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variable_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable-color */ "./colors/variable-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _variable_color__WEBPACK_IMPORTED_MODULE_0__["color"]; });

/* harmony import */ var _variable_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variable-size */ "./colors/variable-size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _variable_size__WEBPACK_IMPORTED_MODULE_1__["size"]; });




/***/ }),

/***/ "./colors/variable-color.js":
/*!**********************************!*\
  !*** ./colors/variable-color.js ***!
  \**********************************/
/*! exports provided: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
var color = {
  primary: '#fc3',
  primaryDark: '#ccc'
};

/***/ }),

/***/ "./colors/variable-size.js":
/*!*********************************!*\
  !*** ./colors/variable-size.js ***!
  \*********************************/
/*! exports provided: size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
var size = {
  padding: '20px 50px',
  fontSize: '16px',
  margin: '50px'
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors */ "./colors/index.js");
var _jsxFileName = "/home/tassanai/Documents/nextjsTest/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    style: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_2__["color"].primary,
      fontSize: _colors__WEBPACK_IMPORTED_MODULE_2__["size"].fontSize,
      padding: _colors__WEBPACK_IMPORTED_MODULE_2__["size"].padding,
      margin: _colors__WEBPACK_IMPORTED_MODULE_2__["size"].margin
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Index Page")));
}

/***/ })

})
//# sourceMappingURL=index.js.315f9a4f846ad47773fc.hot-update.js.map