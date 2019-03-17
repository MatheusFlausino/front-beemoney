(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"boo-wrapper\">\n    <div class=\"boo\">\n      <div class=\"face\"></div>\n    </div>\n    <div class=\"shadow\"></div>\n    <h1>Whoops!</h1>\n    <p>\n      We couldn't find the page you\n      <br /> were looking for.\n    </p>\n    <a class=\"btn btn-light\" [routerLink]=\"'/'\"> <i class=\"material-icons\">keyboard_backspace</i> Back To Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n@-webkit-keyframes floating {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes floating {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@-webkit-keyframes floatingShadow {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes floatingShadow {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.container {\n  color: #9b9b9b;\n  position: relative;\n  height: 100vh;\n  text-align: center;\n  font-size: 16px; }\n.container h1 {\n    font-size: 32px;\n    margin-top: 32px; }\n.boo-wrapper {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding-top: 64px;\n  padding-bottom: 64px; }\n.boo {\n  width: 160px;\n  height: 184px;\n  background-color: #eee;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3.39393939px solid #9b9b9b;\n  border-bottom: 0;\n  overflow: hidden;\n  border-radius: 80px 80px 0 0;\n  box-shadow: -16px 0 0 2px rgba(225, 225, 225, 0.5) inset;\n  position: relative;\n  padding-bottom: 32px;\n  -webkit-animation: floating 3s ease-in-out infinite;\n          animation: floating 3s ease-in-out infinite; }\n.boo::after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: -18.82352941px;\n    bottom: -8.31168831px;\n    width: calc(100% + 32px);\n    height: 32px;\n    background-repeat: repeat-x;\n    background-size: 32px 32px;\n    background-position: left bottom;\n    background-image: linear-gradient(-45deg, #eee 16px, transparent 0), linear-gradient(45deg, #eee 16px, transparent 0), linear-gradient(-45deg, #9b9b9b 18.82352941px, transparent 0), linear-gradient(45deg, #9b9b9b 18.82352941px, transparent 0); }\n.boo .face {\n    width: 24px;\n    height: 3.2px;\n    border-radius: 5px;\n    background-color: #9b9b9b;\n    position: absolute;\n    left: 50%;\n    bottom: 56px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.boo .face::before, .boo .face::after {\n      content: '';\n      display: block;\n      width: 6px;\n      height: 6px;\n      background-color: #9b9b9b;\n      border-radius: 50%;\n      position: absolute;\n      bottom: 40px; }\n.boo .face::before {\n      left: -24px; }\n.boo .face::after {\n      right: -24px; }\n.shadow {\n  width: 128px;\n  height: 16px;\n  background-color: rgba(225, 225, 225, 0.75);\n  margin-top: 40px;\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 50%;\n  -webkit-animation: floatingShadow 3s ease-in-out infinite;\n          animation: floatingShadow 3s ease-in-out infinite; }\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'notfound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"]
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map