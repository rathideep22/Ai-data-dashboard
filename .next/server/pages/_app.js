/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.ts":
/*!*********************!*\
  !*** ./lib/gtag.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gtag = (...args)=>{\n    if (true) return;\n    if (typeof window?.gtag === \"undefined\") {\n        window.dataLayer = window.dataLayer || [];\n        window.gtag = function gtag() {\n            window.dataLayer.push(arguments);\n        };\n    }\n    window.gtag(...args);\n};\nclass GA {\n    constructor(){\n        this._loadGA = (GA_ID, nonce, gtagUrl = \"https://www.googletagmanager.com/gtag/js\")=>{\n            if (this._hasLoadedGA) return;\n            const script = document.createElement(\"script\");\n            script.async = true;\n            script.src = `${gtagUrl}?id=${GA_ID}`;\n            if (nonce) {\n                script.setAttribute(\"nonce\", nonce);\n            }\n            document.body.appendChild(script);\n            window.dataLayer = window.dataLayer || [];\n            window.gtag = function gtag() {\n                window.dataLayer.push(arguments);\n            };\n            this._hasLoadedGA = true;\n        };\n        this.initialize = (options)=>{\n            if (true) return;\n            if (this._isInitialized) return;\n            let GA_ID = \"\";\n            let nonce = undefined;\n            let gtagUrl = undefined;\n            if (typeof options === \"string\") {\n                GA_ID = options;\n            }\n            if (typeof options === \"object\") {\n                GA_ID = options.measurementId;\n                nonce = options.nonce;\n                gtagUrl = options.gtagUrl;\n            }\n            if (!GA_ID) {\n                console.error(\"The measurement ID is required. You should find more info on https://developers.google.com/analytics/devguides/collection/ga4\");\n            }\n            this._loadGA(GA_ID, nonce, gtagUrl);\n            gtag(\"js\", new Date());\n            gtag(\"config\", GA_ID);\n            this._isInitialized = true;\n        };\n        // https://developers.google.com/analytics/devguides/collection/ga4/events?client_type=gtag\n        this.report = (...args)=>{\n            gtag(...args);\n        };\n        this._isInitialized = false;\n        this._hasLoadedGA = false;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GA());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBV0EsTUFBTUEsT0FBTyxDQUFDLEdBQUdDO0lBQ2YsSUFBSSxJQUE2QixFQUFFO0lBQ25DLElBQUksT0FBUUMsUUFBZ0JGLFNBQVMsYUFBYTtRQUMvQ0UsT0FBZUMsU0FBUyxHQUFHLE9BQWdCQSxTQUFTLElBQUksRUFBRTtRQUMxREQsT0FBZUYsSUFBSSxHQUFHLFNBQVNBO1lBQzdCRSxPQUFlQyxTQUFTLENBQUNDLElBQUksQ0FBQ0M7UUFDakM7SUFDRjtJQUVDSCxPQUFlRixJQUFJLElBQUlDO0FBQzFCO0FBRUEsTUFBTUs7SUFHSkMsYUFBYzthQUtOQyxVQUFVLENBQ2hCQyxPQUNBQyxPQUNBQyxVQUFrQiwwQ0FBMEM7WUFFNUQsSUFBSSxJQUFJLENBQUNDLFlBQVksRUFBRTtZQUN2QixNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQUM7WUFDdENGLE9BQU9HLEtBQUssR0FBRztZQUNmSCxPQUFPSSxHQUFHLEdBQUcsQ0FBQyxFQUFFTixRQUFRLElBQUksRUFBRUYsTUFBTSxDQUFDO1lBQ3JDLElBQUlDLE9BQU87Z0JBQ1RHLE9BQU9LLFlBQVksQ0FBQyxTQUFTUjtZQUMvQjtZQUNBSSxTQUFTSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1A7WUFFekJYLE9BQWVDLFNBQVMsR0FBRyxPQUFnQkEsU0FBUyxJQUFJLEVBQUU7WUFDMURELE9BQWVGLElBQUksR0FBRyxTQUFTQTtnQkFDN0JFLE9BQWVDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQztZQUNqQztZQUNBLElBQUksQ0FBQ08sWUFBWSxHQUFHO1FBQ3RCO2FBQ0FTLGFBQWEsQ0FBQ0M7WUFDWixJQUFJLElBQTZCLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUNDLGNBQWMsRUFBRTtZQUV6QixJQUFJZCxRQUFRO1lBQ1osSUFBSUMsUUFBNEJjO1lBQ2hDLElBQUliLFVBQThCYTtZQUVsQyxJQUFJLE9BQU9GLFlBQVksVUFBVTtnQkFDL0JiLFFBQVFhO1lBQ1Y7WUFFQSxJQUFJLE9BQU9BLFlBQVksVUFBVTtnQkFDL0JiLFFBQVFhLFFBQVFHLGFBQWE7Z0JBQzdCZixRQUFRWSxRQUFRWixLQUFLO2dCQUNyQkMsVUFBVVcsUUFBUVgsT0FBTztZQUMzQjtZQUVBLElBQUksQ0FBQ0YsT0FBTztnQkFDVmlCLFFBQVFDLEtBQUssQ0FDWDtZQUVKO1lBQ0EsSUFBSSxDQUFDbkIsT0FBTyxDQUFDQyxPQUFPQyxPQUFPQztZQUMzQlgsS0FBSyxNQUFNLElBQUk0QjtZQUNmNUIsS0FBSyxVQUFVUztZQUVmLElBQUksQ0FBQ2MsY0FBYyxHQUFHO1FBQ3hCO1FBQ0EsMkZBQTJGO2FBQzNGTSxTQUFTLENBQUMsR0FBRzVCO1lBQ1hELFFBQVFDO1FBQ1Y7UUF4REUsSUFBSSxDQUFDc0IsY0FBYyxHQUFHO1FBQ3RCLElBQUksQ0FBQ1gsWUFBWSxHQUFHO0lBQ3RCO0FBdURGO0FBRUEsaUVBQWUsSUFBSU4sSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtdml6LWdwdC8uL2xpYi9ndGFnLnRzPzUzYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElPcHRpb25zR0Ege1xyXG4gIG1lYXN1cmVtZW50SWQ6IHN0cmluZztcclxuICBub25jZT86IHN0cmluZztcclxuICBndGFnVXJsPzogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJR0Ege1xyXG4gIGluaXRpYWxpemU6IChvcHRpb25zPzogc3RyaW5nIHwgSU9wdGlvbnNHQSkgPT4gdm9pZDtcclxuICAvLyBUT0RPOiBJbXByb3ZlIHRoZSBhcmd1bWVudHMgdHlwZVxyXG4gIHJlcG9ydDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBndGFnID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuICBpZiAodHlwZW9mICh3aW5kb3cgYXMgYW55KT8uZ3RhZyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLmRhdGFMYXllciA9ICh3aW5kb3cgYXMgYW55KS5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAod2luZG93IGFzIGFueSkuZ3RhZyA9IGZ1bmN0aW9uIGd0YWcoKSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5kYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gICh3aW5kb3cgYXMgYW55KS5ndGFnKC4uLmFyZ3MpO1xyXG59O1xyXG5cclxuY2xhc3MgR0EgaW1wbGVtZW50cyBJR0Ege1xyXG4gIHByaXZhdGUgX2hhc0xvYWRlZEdBOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9oYXNMb2FkZWRHQSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbG9hZEdBID0gKFxyXG4gICAgR0FfSUQ6IHN0cmluZyxcclxuICAgIG5vbmNlPzogc3RyaW5nLFxyXG4gICAgZ3RhZ1VybDogc3RyaW5nID0gXCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzXCJcclxuICApID0+IHtcclxuICAgIGlmICh0aGlzLl9oYXNMb2FkZWRHQSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICBzY3JpcHQuc3JjID0gYCR7Z3RhZ1VybH0/aWQ9JHtHQV9JRH1gO1xyXG4gICAgaWYgKG5vbmNlKSB7XHJcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLmRhdGFMYXllciA9ICh3aW5kb3cgYXMgYW55KS5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAod2luZG93IGFzIGFueSkuZ3RhZyA9IGZ1bmN0aW9uIGd0YWcoKSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5kYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuX2hhc0xvYWRlZEdBID0gdHJ1ZTtcclxuICB9O1xyXG4gIGluaXRpYWxpemUgPSAob3B0aW9ucz86IHN0cmluZyB8IElPcHRpb25zR0EpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBHQV9JRCA9IFwiXCI7XHJcbiAgICBsZXQgbm9uY2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICAgIGxldCBndGFnVXJsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIEdBX0lEID0gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgR0FfSUQgPSBvcHRpb25zLm1lYXN1cmVtZW50SWQ7XHJcbiAgICAgIG5vbmNlID0gb3B0aW9ucy5ub25jZTtcclxuICAgICAgZ3RhZ1VybCA9IG9wdGlvbnMuZ3RhZ1VybDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUdBX0lEKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgXCJUaGUgbWVhc3VyZW1lbnQgSUQgaXMgcmVxdWlyZWQuIFlvdSBzaG91bGQgZmluZCBtb3JlIGluZm8gb24gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2dhNFwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sb2FkR0EoR0FfSUQsIG5vbmNlLCBndGFnVXJsKTtcclxuICAgIGd0YWcoXCJqc1wiLCBuZXcgRGF0ZSgpKTtcclxuICAgIGd0YWcoXCJjb25maWdcIiwgR0FfSUQpO1xyXG5cclxuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH07XHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2dhNC9ldmVudHM/Y2xpZW50X3R5cGU9Z3RhZ1xyXG4gIHJlcG9ydCA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgZ3RhZyguLi5hcmdzKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgR0EoKTtcclxuIl0sIm5hbWVzIjpbImd0YWciLCJhcmdzIiwid2luZG93IiwiZGF0YUxheWVyIiwicHVzaCIsImFyZ3VtZW50cyIsIkdBIiwiY29uc3RydWN0b3IiLCJfbG9hZEdBIiwiR0FfSUQiLCJub25jZSIsImd0YWdVcmwiLCJfaGFzTG9hZGVkR0EiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhc3luYyIsInNyYyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImluaXRpYWxpemUiLCJvcHRpb25zIiwiX2lzSW5pdGlhbGl6ZWQiLCJ1bmRlZmluZWQiLCJtZWFzdXJlbWVudElkIiwiY29uc29sZSIsImVycm9yIiwiRGF0ZSIsInJlcG9ydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/gtag.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.ts\");\n\n\n\n_lib_gtag__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"D:\\\\ai-data-dashboard\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBRUE7QUFFL0JBLDREQUFlLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsK0JBQStCO0FBRTVDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQU8sOERBQUNEO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS12aXotZ3B0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgZ3RhZyBmcm9tIFwiLi4vbGliL2d0YWdcIjtcclxuXHJcbmd0YWcuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTX0lEKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuIl0sIm5hbWVzIjpbImd0YWciLCJpbml0aWFsaXplIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1NfSUQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();