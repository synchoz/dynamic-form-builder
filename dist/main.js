"use strict";
(self["webpackChunkdynamic_form_builder"] = self["webpackChunkdynamic_form_builder"] || []).push([["main"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony import */ var _services_schemaService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/schemaService */ "./src/services/schemaService.ts");

/* import { SchemasList } from "./types/schema"; */

window.showSchemasList = _main__WEBPACK_IMPORTED_MODULE_0__.showSchemasList;
window.getSchemaList = _services_schemaService__WEBPACK_IMPORTED_MODULE_1__.getSchemaList;
(0,_main__WEBPACK_IMPORTED_MODULE_0__.printMe)();
var greeting = 'Hello, Webpack and TypeScript!!!';
console.log(greeting);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printMe: () => (/* binding */ printMe),
/* harmony export */   showSchemasList: () => (/* binding */ showSchemasList)
/* harmony export */ });
/* harmony import */ var _services_schemaService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/schemaService */ "./src/services/schemaService.ts");

/* import { SchemasList } from "./types/schema"; */
var list = document.querySelector("#list");
var form = document.getElementById("new-task-form");
var input = document.querySelector("#new-task-title");
var resultDiv = document.querySelector("#resultList");
function printMe() {
    console.log('I get called from printMe Func!');
}
function showSchemasList() {
    (0,_services_schemaService__WEBPACK_IMPORTED_MODULE_0__.getSchemaList)()
        .then(function (schemaList) {
        schemaList.forEach(function (schema) {
            var button = document.createElement('button');
            button.innerText = schema === null || schema === void 0 ? void 0 : schema.type;
            resultDiv.appendChild(button);
        });
    });
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
    { type: "ARREST_RECORD", display: "Arrest Record" }
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEQsWUFBWSxjQUFjLHVCQUF1QjtBQUNRO0FBQ3pELHlCQUF5QixrREFBZTtBQUN4Qyx1QkFBdUIsa0VBQWE7QUFDcEMsOENBQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B5RDtBQUN6RCxZQUFZLGNBQWMsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ29DOzs7Ozs7Ozs7Ozs7Ozs7QUNuQnBDLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsNklBQTZJLGNBQWM7QUFDM0osdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxQ0FBcUM7QUFDM0MsTUFBTSx5Q0FBeUM7QUFDL0MsTUFBTSx1Q0FBdUM7QUFDN0MsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ3dCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUNBQXFDO0FBQ3pDLElBQUkseUNBQXlDO0FBQzdDLElBQUksdUNBQXVDO0FBQzNDLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNDQUFzQztBQUM5RCxrQkFBa0IsVUFBVSxvQkFBb0IsR0FBRztBQUNuRDtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUMsdUJBQXVCLG9CQUFvQjtBQUMzQyx5QkFBeUIsa0JBQWtCO0FBQzNDLDRCQUE0QixxSkFBcUo7QUFDakwsc0JBQXNCLDJEQUEyRDtBQUNqRix1QkFBdUIsa0JBQWtCO0FBQ3pDLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9ELHdCQUF3QixvQkFBb0I7QUFDNUMsdUJBQXVCLGtCQUFrQjtBQUN6QyxxQkFBcUIsa0JBQWtCO0FBQ3ZDLGdDQUFnQyxnSEFBZ0g7QUFDaEo7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1mb3JtLWJ1aWxkZXIvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9keW5hbWljLWZvcm0tYnVpbGRlci8uL3NyYy9zZXJ2aWNlcy9zY2hlbWFTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNob3dTY2hlbWFzTGlzdCwgcHJpbnRNZSB9IGZyb20gXCIuL21haW5cIjtcbi8qIGltcG9ydCB7IFNjaGVtYXNMaXN0IH0gZnJvbSBcIi4vdHlwZXMvc2NoZW1hXCI7ICovXG5pbXBvcnQgeyBnZXRTY2hlbWFMaXN0IH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hU2VydmljZVwiO1xud2luZG93LnNob3dTY2hlbWFzTGlzdCA9IHNob3dTY2hlbWFzTGlzdDtcbndpbmRvdy5nZXRTY2hlbWFMaXN0ID0gZ2V0U2NoZW1hTGlzdDtcbnByaW50TWUoKTtcbnZhciBncmVldGluZyA9ICdIZWxsbywgV2VicGFjayBhbmQgVHlwZVNjcmlwdCEhISc7XG5jb25zb2xlLmxvZyhncmVldGluZyk7XG4iLCJpbXBvcnQgeyBnZXRTY2hlbWFMaXN0IH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hU2VydmljZVwiO1xuLyogaW1wb3J0IHsgU2NoZW1hc0xpc3QgfSBmcm9tIFwiLi90eXBlcy9zY2hlbWFcIjsgKi9cbnZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0XCIpO1xudmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWZvcm1cIik7XG52YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLXRpdGxlXCIpO1xudmFyIHJlc3VsdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0TGlzdFwiKTtcbmZ1bmN0aW9uIHByaW50TWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50TWUgRnVuYyEnKTtcbn1cbmZ1bmN0aW9uIHNob3dTY2hlbWFzTGlzdCgpIHtcbiAgICBnZXRTY2hlbWFMaXN0KClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHNjaGVtYUxpc3QpIHtcbiAgICAgICAgc2NoZW1hTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChzY2hlbWEpIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBzY2hlbWEgPT09IG51bGwgfHwgc2NoZW1hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY2hlbWEudHlwZTtcbiAgICAgICAgICAgIHJlc3VsdERpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHByaW50TWUsIHNob3dTY2hlbWFzTGlzdCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBkYXRhU2NoZW1hTGlzdCA9IFtcbiAgICB7IHR5cGU6IFwiT0ZGSUNFUlwiLCBkaXNwbGF5OiBcIk9mZmljZXJcIiB9LFxuICAgIHsgdHlwZTogXCJFRFVDQVRJT05cIiwgZGlzcGxheTogXCJFZHVjYXRpb25cIiB9LFxuICAgIHsgdHlwZTogXCJQUk9QRVJUWVwiLCBkaXNwbGF5OiBcIlByb3BlcnR5XCIgfSxcbiAgICB7IHR5cGU6IFwiQVJSRVNUX1JFQ09SRFwiLCBkaXNwbGF5OiBcIkFycmVzdCBSZWNvcmRcIiB9XG5dO1xudmFyIG1vY2tGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGFTY2hlbWFMaXN0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59O1xudmFyIGdldFNjaGVtYUxpc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtb2NrRmV0Y2goKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgZ2V0U2NoZW1hTGlzdCB9O1xuLy9mZXRjaGluZyBzY2hlbWFzIGFuZCBkZXRhaWxzXG4vLyAyIHRoaW5ncyBuZWVkIHRvIGhhcHBlbiBoZXJlIFxuLy9maXJzdCBmZXRjaGluZyB0aGUgc2NoZW1hIGxpc3Rcbi8vZGlzcGxheSB0aGUgdXNlciB0aGUgbGlzdFxuLy90aGVuIHdhaXQgZm9yIHVzZXIgdG8gY2hvb3NlIHdoaWNoIHR5cGUgaGUgaGF2ZSBjaG9zZW5cbi8vc2Vjb25kIHRoaW5nIGlzIHRvIGZldGNoIHRoZSBkZXRhaWxzIG9mIHRoZSBjaG9zZW4gdHlwZVxuLy9wYXJzZSB0aGUgcmVzcG9uc2Ugc28gaXQgY2FuIGJlIGdlbmVyYXRlZCBpbiB0aGUgaHRtbFxuLy9TaW11bGF0aW5nIHRoZSBmZXRjaCBvZiB0aGlzIGxpc3QgXG4vKiBjb25zdCBzY2hlbWFzTGlzdCA9IFtcbiAgeyB0eXBlOiBcIk9GRklDRVJcIiwgZGlzcGxheTogXCJPZmZpY2VyXCIgfSxcbiAgeyB0eXBlOiBcIkVEVUNBVElPTlwiLCBkaXNwbGF5OiBcIkVkdWNhdGlvblwiIH0sXG4gIHsgdHlwZTogXCJQUk9QRVJUWVwiLCBkaXNwbGF5OiBcIlByb3BlcnR5XCIgfSxcbiAgeyB0eXBlOiBcIkFSUkVTVF9SRUNPUkRcIiwgZGlzcGxheTogXCJBcnJlc3QgUmVjb3JkXCIgfVxuXTsgKi9cbi8vKipTY2hlbWEgRGV0YWlscyBieSBUeXBlKipcbi8vKipPRkZJQ0VSIFNjaGVtYSoqXG4vKiAgICAgYGBganNvblxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIk9GRklDRVJcIixcbiAgICAgIFwic2NoZW1lXCI6IHtcbiAgICAgICAgXCJvZmZpY2VyVVJMXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiU3RyaW5nXFxcIixcXFwicmVxdWlyZWRcXFwiOnRydWV9XCIsXG4gICAgICAgIFwibmFtZVwiOiB7IFwiZnVsbFwiOiBcIntcXFwidHlwZVxcXCI6XFxcIlN0cmluZ1xcXCJ9XCIgfSxcbiAgICAgICAgXCJlbXBsb3ltZW50XCI6IHtcbiAgICAgICAgICBcImpvYlRpdGxlXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiU3RyaW5nXFxcIn1cIixcbiAgICAgICAgICBcImNvbXBhbnlcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJTdHJpbmdcXFwifVwiLFxuICAgICAgICAgIFwic3RhcnREYXRlXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiRGF0ZVxcXCJ9XCIsXG4gICAgICAgICAgXCJyZWxhdGlvblR5cGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJFbnVtXFxcIixcXFwiZW51bVZhbHVlc1xcXCI6W1xcXCJPVEhFUl9BQ1RJVklUWVxcXCIsXFxcIlJFTEFURURcXFwiLFxcXCJUT1BfRVhFQ1VUSVZFXFxcIixcXFwiQURWSVNPUllfQk9BUkRcXFwiLFxcXCJFTVBMT1lFRVxcXCIsXFxcIkJPQVJEXFxcIixcXFwiSU5WRVNUT1JcXFwiLFxcXCJPV05FUlxcXCJdfVwiLFxuICAgICAgICAgIFwic3RhdHVzXCI6IFwie1xcXCJ0eXBlXFxcIjpcXFwiRW51bVxcXCIsXFxcImVudW1WYWx1ZXNcXFwiOltcXFwiQWN0aXZlXFxcIixcXFwiSW5BY3RpdmVcXFwiXX1cIixcbiAgICAgICAgICBcImVuZERhdGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJEYXRlXFxcIn1cIixcbiAgICAgICAgICBcImlzTWFpbkVtcGxveW1lbnRcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJCb29sZWFuXFxcIixcXFwidmFsdWVcXFwiOmZhbHNlfVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYGBgICovXG4vLyoqRURVQ0FUSU9OIFNjaGVtYSoqXG4vKlxuICAgIGBgYGpzb25cbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJFRFVDQVRJT05cIixcbiAgICAgIFwic2NoZW1lXCI6IHtcbiAgICAgICAgXCJpbnN0aXR1dGlvblwiOiBcIntcXFwidHlwZVxcXCI6XFxcIlN0cmluZ1xcXCIsXFxcInJlcXVpcmVkXFxcIjp0cnVlfVwiLFxuICAgICAgICBcImRlZ3JlZVR5cGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJTdHJpbmdcXFwifVwiLFxuICAgICAgICBcInN0YXJ0RGF0ZVwiOiBcIntcXFwidHlwZVxcXCI6XFxcIkRhdGVcXFwifVwiLFxuICAgICAgICBcImVuZERhdGVcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJEYXRlXFxcIn1cIixcbiAgICAgICAgXCJ2ZXJpZmljYXRpb25TdGF0dXNcIjogXCJ7XFxcInR5cGVcXFwiOlxcXCJFbnVtXFxcIixcXFwiZW51bVZhbHVlc1xcXCI6W1xcXCJDT1VMRE5UX1ZFUklGWVxcXCIsXFxcIk5PVF9WRVJJRklFRFxcXCIsXFxcIlZFUklGSUVEXFxcIixcXFwiUEVORElOR1xcXCIsXFxcIk5PVF9DSEVDS0VEXFxcIl19XCJcbiAgICAgIH1cbiAgICB9XG4gICAgYGBgICovIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9