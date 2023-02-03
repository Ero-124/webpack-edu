/*! For license information please see bundle33194d1a6afcafef83b6.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/List/styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://teacher/./src/List/styles.css?")},"./src/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/List/styles.css\");\n\nclass List {\n  render(...items){\n    let parent = document.createElement('ul');\n    items.forEach(elm => {\n      let child = document.createElement('li');\n      child.addEventListener('click', function () {\n        this.classList.toggle(\"active\");\n      });\n      child.innerText = elm;\n      parent.append(child);\n    });\n    document.body.append(parent);\n  }\n}\n\n//# sourceURL=webpack://teacher/./src/List/List.js?")},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List/List.js */ "./src/List/List.js");\n\nconst app = new _List_List_js__WEBPACK_IMPORTED_MODULE_0__.List();\napp.render("Angular", "React", "Vue", "Python");\n\n//# sourceURL=webpack://teacher/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();