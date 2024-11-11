/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from printMe Func!');
}


/***/ }),

/***/ "./src/services/schemaService.ts":
/*!***************************************!*\
  !*** ./src/services/schemaService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSchemaList: () => (/* binding */ getSchemaList)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dataSchemaList = [
    { type: "OFFICER", display: "Officer" },
    { type: "EDUCATION", display: "Education" },
    { type: "PROPERTY", display: "Property" },
    { type: "ARREST_RECORD", display: "Arrest Recordaaa" }
];
var mockFetch = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(dataSchemaList);
        }, 1000);
    });
};
var getSchemaList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mockFetch()];
            case 1:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
        }
    });
}); };

//fetching schemas and details
// 2 things need to happen here 
//first fetching the schema list
//display the user the list
//then wait for user to choose which type he have chosen
//second thing is to fetch the details of the chosen type
//parse the response so it can be generated in the html
//Simulating the fetch of this list 
/* const schemasList = [
  { type: "OFFICER", display: "Officer" },
  { type: "EDUCATION", display: "Education" },
  { type: "PROPERTY", display: "Property" },
  { type: "ARREST_RECORD", display: "Arrest Record" }
]; */
//**Schema Details by Type**
//**OFFICER Schema**
/*     ```json
    {
      "type": "OFFICER",
      "scheme": {
        "officerURL": "{\"type\":\"String\",\"required\":true}",
        "name": { "full": "{\"type\":\"String\"}" },
        "employment": {
          "jobTitle": "{\"type\":\"String\"}",
          "company": "{\"type\":\"String\"}",
          "startDate": "{\"type\":\"Date\"}",
          "relationType": "{\"type\":\"Enum\",\"enumValues\":[\"OTHER_ACTIVITY\",\"RELATED\",\"TOP_EXECUTIVE\",\"ADVISORY_BOARD\",\"EMPLOYEE\",\"BOARD\",\"INVESTOR\",\"OWNER\"]}",
          "status": "{\"type\":\"Enum\",\"enumValues\":[\"Active\",\"InActive\"]}",
          "endDate": "{\"type\":\"Date\"}",
          "isMainEmployment": "{\"type\":\"Boolean\",\"value\":false}"
        }
      }
    }
    ``` */
//**EDUCATION Schema**
/*
    ```json
    {
      "type": "EDUCATION",
      "scheme": {
        "institution": "{\"type\":\"String\",\"required\":true}",
        "degreeType": "{\"type\":\"String\"}",
        "startDate": "{\"type\":\"Date\"}",
        "endDate": "{\"type\":\"Date\"}",
        "verificationStatus": "{\"type\":\"Enum\",\"enumValues\":[\"COULDNT_VERIFY\",\"NOT_VERIFIED\",\"VERIFIED\",\"PENDING\",\"NOT_CHECKED\"]}"
      }
    }
    ``` */ 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _services_schemaService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/schemaService */ "./src/services/schemaService.ts");


window.getSchemaList = _services_schemaService__WEBPACK_IMPORTED_MODULE_1__.getSchemaList;
(0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
var greeting = 'Hello, Webpack and TypeScript!!!';
console.log(greeting);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLDZJQUE2SSxjQUFjO0FBQzNKLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLG1DQUFtQyxTQUFTO0FBQzVDLG1DQUFtQyxXQUFXLFVBQVU7QUFDeEQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSw4R0FBOEcsT0FBTztBQUNySCxpRkFBaUYsaUJBQWlCO0FBQ2xHLHlEQUF5RCxnQkFBZ0IsUUFBUTtBQUNqRiwrQ0FBK0MsZ0JBQWdCLGdCQUFnQjtBQUMvRTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsVUFBVSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQ3RELG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUNBQXFDO0FBQzNDLE1BQU0seUNBQXlDO0FBQy9DLE1BQU0sdUNBQXVDO0FBQzdDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUN3QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLHlDQUF5QztBQUM3QyxJQUFJLHVDQUF1QztBQUMzQyxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQ0FBc0M7QUFDOUQsa0JBQWtCLFVBQVUsb0JBQW9CLEdBQUc7QUFDbkQ7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDLHVCQUF1QixvQkFBb0I7QUFDM0MseUJBQXlCLGtCQUFrQjtBQUMzQyw0QkFBNEIscUpBQXFKO0FBQ2pMLHNCQUFzQiwyREFBMkQ7QUFDakYsdUJBQXVCLGtCQUFrQjtBQUN6QyxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRCx3QkFBd0Isb0JBQW9CO0FBQzVDLHVCQUF1QixrQkFBa0I7QUFDekMscUJBQXFCLGtCQUFrQjtBQUN2QyxnQ0FBZ0MsZ0hBQWdIO0FBQ2hKO0FBQ0E7QUFDQTs7Ozs7OztVQzdHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QjtBQUM0QjtBQUN6RCx1QkFBdUIsa0VBQWE7QUFDcEMsaURBQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8uL3NyYy9zZXJ2aWNlcy9zY2hlbWFTZXJ2aWNlLnRzIiwid2VicGFjazovL2R5bmFtaWMtZm9ybS1idWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtZm9ybS1idWlsZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLWZvcm0tYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtZm9ybS1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnRNZSBGdW5jIScpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBkYXRhU2NoZW1hTGlzdCA9IFtcbiAgICB7IHR5cGU6IFwiT0ZGSUNFUlwiLCBkaXNwbGF5OiBcIk9mZmljZXJcIiB9LFxuICAgIHsgdHlwZTogXCJFRFVDQVRJT05cIiwgZGlzcGxheTogXCJFZHVjYXRpb25cIiB9LFxuICAgIHsgdHlwZTogXCJQUk9QRVJUWVwiLCBkaXNwbGF5OiBcIlByb3BlcnR5XCIgfSxcbiAgICB7IHR5cGU6IFwiQVJSRVNUX1JFQ09SRFwiLCBkaXNwbGF5OiBcIkFycmVzdCBSZWNvcmRhYWFcIiB9XG5dO1xudmFyIG1vY2tGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGFTY2hlbWFMaXN0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59O1xudmFyIGdldFNjaGVtYUxpc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtb2NrRmV0Y2goKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgZ2V0U2NoZW1hTGlzdCB9O1xuLy9mZXRjaGluZyBzY2hlbWFzIGFuZCBkZXRhaWxzXG4vLyAyIHRoaW5ncyBuZWVkIHRvIGhhcHBlbiBoZXJlIFxuLy9maXJzdCBmZXRjaGluZyB0aGUgc2NoZW1hIGxpc3Rcbi8vZGlzcGxheSB0aGUgdXNlciB0aGUgbGlzdFxuLy90aGVuIHdhaXQgZm9yIHVzZXIgdG8gY2hvb3NlIHdoaWNoIHR5cGUgaGUgaGF2ZSBjaG9zZW5cbi8vc2Vjb25kIHRoaW5nIGlzIHRvIGZldGNoIHRoZSBkZXRhaWxzIG9mIHRoZSBjaG9zZW4gdHlwZVxuLy9wYXJzZSB0aGUgcmVzcG9uc2Ugc28gaXQgY2FuIGJlIGdlbmVyYXRlZCBpbiB0aGUgaHRtbFxuLy9TaW11bGF0aW5nIHRoZSBmZXRjaCBvZiB0aGlzIGxpc3QgXG4vKiBjb25zdCBzY2hlbWFzTGlzdCA9IFtcbiAgeyB0eXBlOiBcIk9GRklDRVJcIiwgZGlzcGxheTogXCJPZmZpY2VyXCIgfSxcbiAgeyB0eXBlOiBcIkVEVUNBVElPTlwiLCBkaXNwbGF5OiBcIkVkdWNhdGlvblwiIH0sXG4gIHsgdHlwZTogXCJQUk9QRVJUWVwiLCBkaXNwbGF5OiBcIlByb3BlcnR5XCIgfSxcbiAgeyB0eXBlOiBcIkFSUkVTVF9SRUNPUkRcIiwgZGlzcGxheTogXCJBcnJlc3QgUmVjb3JkXCIgfVxuXTsgKi9cbi8vKipTY2hlbWEgRGV0YWlscyBieSBUeXBlKipcbi8vKipPRkZJQ0VSIFNjaGVtYSoqXG4vKiAgICAgYGBganNvblxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIk9GRklDRVJcIixcbiAgICAgIFwic2NoZW1lXCI6IHtcbiAgICAgICAgXCJvZmZpY2VyVVJMXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiU3RyaW5nXFxcIixcXFwicmVxdWlyZWRcXFwiOnRydWV9XCIsXG4gICAgICAgIFwibmFtZVwiOiB7IFwiZnVsbFwiOiBcIntcXFwidHlwZVxcXCI6XFxcIlN0cmluZ1xcXCJ9XCIgfSxcbiAgICAgICAgXCJlbXBsb3ltZW50XCI6IHtcbiAgICAgICAgICBcImpvYlRpdGxlXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiU3RyaW5nXFxcIn1cIixcbiAgICAgICAgICBcImNvbXBhbnlcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJTdHJpbmdcXFwifVwiLFxuICAgICAgICAgIFwic3RhcnREYXRlXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiRGF0ZVxcXCJ9XCIsXG4gICAgICAgICAgXCJyZWxhdGlvblR5cGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJFbnVtXFxcIixcXFwiZW51bVZhbHVlc1xcXCI6W1xcXCJPVEhFUl9BQ1RJVklUWVxcXCIsXFxcIlJFTEFURURcXFwiLFxcXCJUT1BfRVhFQ1VUSVZFXFxcIixcXFwiQURWSVNPUllfQk9BUkRcXFwiLFxcXCJFTVBMT1lFRVxcXCIsXFxcIkJPQVJEXFxcIixcXFwiSU5WRVNUT1JcXFwiLFxcXCJPV05FUlxcXCJdfVwiLFxuICAgICAgICAgIFwic3RhdHVzXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiRW51bVxcXCIsXFxcImVudW1WYWx1ZXNcXFwiOltcXFwiQWN0aXZlXFxcIixcXFwiSW5BY3RpdmVcXFwiXX1cIixcbiAgICAgICAgICBcImVuZERhdGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJEYXRlXFxcIn1cIixcbiAgICAgICAgICBcImlzTWFpbkVtcGxveW1lbnRcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJCb29sZWFuXFxcIixcXFwidmFsdWVcXFwiOmZhbHNlfVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYGBgICovXG4vLyoqRURVQ0FUSU9OIFNjaGVtYSoqXG4vKlxuICAgIGBgYGpzb25cbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJFRFVDQVRJT05cIixcbiAgICAgIFwic2NoZW1lXCI6IHtcbiAgICAgICAgXCJpbnN0aXR1dGlvblwiOiBcIntcXFwidHlwZVxcXCI6XFxcIlN0cmluZ1xcXCIsXFxcInJlcXVpcmVkXFxcIjp0cnVlfVwiLFxuICAgICAgICBcImRlZ3JlZVR5cGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJTdHJpbmdcXFwifVwiLFxuICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIntcXFwidHlwZVxcXCI6XFxcIkRhdGVcXFwifVwiLFxuICAgICAgICBcImVuZERhdGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJEYXRlXFxcIn1cIixcbiAgICAgICAgXCJ2ZXJpZmljYXRpb25TdGF0dXNcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJFbnVtXFxcIixcXFwiZW51bVZhbHVlc1xcXCI6W1xcXCJDT1VMRE5UX1ZFUklGWVxcXCIsXFxcIk5PVF9WRVJJRklFRFxcXCIsXFxcIlZFUklGSUVEXFxcIixcXFwiUEVORElOR1xcXCIsXFxcIk5PVF9DSEVDS0VEXFxcIl19XCJcbiAgICAgIH1cbiAgICB9XG4gICAgYGBgICovIFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBnZXRTY2hlbWFMaXN0IH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hU2VydmljZVwiO1xud2luZG93LmdldFNjaGVtYUxpc3QgPSBnZXRTY2hlbWFMaXN0O1xucHJpbnRNZSgpO1xudmFyIGdyZWV0aW5nID0gJ0hlbGxvLCBXZWJwYWNrIGFuZCBUeXBlU2NyaXB0ISEhJztcbmNvbnNvbGUubG9nKGdyZWV0aW5nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==