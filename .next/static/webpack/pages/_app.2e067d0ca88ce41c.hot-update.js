"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                fontSize: \"xl\",\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQStDO0FBQ0Y7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ1hDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2RDLElBQUksRUFBRTtnQkFDRkMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLEVBQUUsRUFBRU4sNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUN4QztTQUNKO0tBQUM7Q0FDTDtBQUVELElBQU1JLFVBQVUsR0FBRztJQUNmQyxPQUFPLEVBQUU7UUFDTEMsUUFBUSxFQUFFO1lBQ04sZUFBZSxFQUFFO2dCQUNiQyxjQUFjLEVBQUUsV0FBVztnQkFDM0JMLFFBQVEsRUFBRSxFQUFFO2dCQUNaTSxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QkMsbUJBQW1CLEVBQUUsU0FBUztnQkFDOUJDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsWUFBWSxFQUFFLENBQUM7YUFDbEI7U0FDSjtLQUNKO0lBQ0RDLElBQUksRUFBRTtRQUNGQyxTQUFTLEVBQUVkLFNBQUFBLEtBQUs7bUJBQUs7Z0JBQ2pCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQ0csS0FBSyxDQUFDO2dCQUN4Q1EsbUJBQW1CLEVBQUUsQ0FBQzthQUN6QjtTQUFDO0tBQ0w7Q0FDSjtBQUVELElBQU1RLEtBQUssR0FBRztJQUNWQyxPQUFPLEVBQUUscUJBQXFCO0NBQ2pDO0FBRUQsSUFBTUMsTUFBTSxHQUFHO0lBQ1hDLFNBQVMsRUFBRSxTQUFTO0NBQ3ZCO0FBRUQsSUFBTUMsTUFBTSxHQUFHO0lBQ1hDLGdCQUFnQixFQUFFLE1BQU07SUFDeEJDLGtCQUFrQixFQUFFLElBQUk7Q0FDM0I7QUFFRCxJQUFNQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDO0lBQ3RCd0IsTUFBTSxFQUFOQSxNQUFNO0lBQ050QixNQUFNLEVBQU5BLE1BQU07SUFDTk0sVUFBVSxFQUFWQSxVQUFVO0lBQ1ZjLE1BQU0sRUFBTkEsTUFBTTtJQUNORixLQUFLLEVBQUxBLEtBQUs7Q0FDUixDQUFDO0FBRUYsK0RBQWVPLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAneGwnLFxyXG4gICAgICAgICAgICBiZzogbW9kZSgnI2YwZTdkYicsICcjMjAyMDIzJykocHJvcHMpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIEhlYWRpbmc6IHtcclxuICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAnc2VjdGlvbi10aXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIExpbms6IHtcclxuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICAgIGhlYWRpbmc6IFwiJ00gUExVUyBSb3VuZGVkIDFjJ1wiXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGdsYXNzVGVhbDogJyM4OGNjY2EnXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICAgIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIGNvbmZpZywgXHJcbiAgICBzdHlsZXMsIFxyXG4gICAgY29tcG9uZW50cyxcclxuICAgIGNvbG9ycywgXHJcbiAgICBmb250c1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiZm9udFNpemUiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});