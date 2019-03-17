(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "./src/app/invoice/invoice.component.html":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  invoice works!\n  <a [routerLink]=\"'./new'\">New</a>\n  <br>\n  <a [routerLink]=\"'./edit/1'\">Edit</a>\n</p> -->\n\n<h5 class=\"mb-4\"><b>FATURAS</b></h5>\n<div class=\"card\">\n  <div class=\"card-body d-flex flex-column\">\n    <button type=\"button\" (click)=\"createInvoice()\" class=\"btn ml-auto btn-primary\"><i class=\"material-icons\">note_add</i>\n      Adicionar Fatura</button>\n    <table id=\"data_table\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"display table responsive no-wrap\">\n      <tbody *ngIf=\"data?.length != 0\">\n        <tr *ngFor=\"let v of data; let i = index \">\n          <td> <p class=\"my-3\"> {{ i + 1 }} </p></td>\n          <td> <p class=\"my-3\"> {{ v.date_start ? v.date_start : null }} </p></td>\n          <td> <p class=\"my-3\"> {{ v.date_end ? v.date_end : null }} </p></td>\n          <td> <p class=\"my-3\"> {{ v.status_close }} </p></td>\n          <td> <p class=\"my-3\"> {{ v.status_paid }} </p></td>\n          <td >\n            <button type=\"button\" class=\"btn float-right m-1 btn-danger btn-just-icon\"><i class=\"material-icons\">cancel</i></button>\n            <button type=\"button\" class=\"btn float-right m-1 btn-primary btn-just-icon\"><i class=\"material-icons\">remove_red_eye</i></button>\n            <button type=\"button\" class=\"btn float-right m-1 btn-dark  btn-just-icon\"><i class=\"material-icons\">edit</i></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/invoice/invoice.component.scss":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_js_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/services */ "./src/assets/js/services/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    return Invoice;
}());
var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(_router, faturaApi) {
        this._router = _router;
        this.faturaApi = faturaApi;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.pathRoute = _router.url;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.pathRoute = this._router.url;
        this.dtOptions = {
            language: {
                "lengthMenu": "Show _MENU_",
                searchPlaceholder: "Search",
                zeroRecords: ''
            },
            columns: [
                {
                    title: '#',
                    data: 'id'
                },
                {
                    title: 'Abertura',
                    data: 'date_start'
                },
                {
                    title: 'Fechamento',
                    data: 'date_end'
                },
                {
                    title: 'Fatura Fechada',
                    data: 'status_close'
                },
                {
                    title: 'Fatura Pago',
                    data: 'status_paid'
                },
                {
                    title: ''
                }
            ]
        };
        this.faturaApi.find({}).subscribe(function (resp) {
            resp.forEach(function (v, k) {
                resp[k].date_start = v.date_start ? moment__WEBPACK_IMPORTED_MODULE_3__(v.date_start).format('DD/MM/YYYY HH:mm') : null;
                resp[k].date_end = v.date_end ? moment__WEBPACK_IMPORTED_MODULE_3__(v.date_end).format('DD/MM/YYYY HH:mm') : null;
            });
            _this.data = resp;
            _this.dtTrigger.next();
        });
    };
    InvoiceComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    InvoiceComponent.prototype.createInvoice = function () {
        var _this = this;
        this.faturaApi.create({
            'date_start': new Date()
        }).subscribe(function (resp) {
            resp.date_start = resp.date_start ? moment__WEBPACK_IMPORTED_MODULE_3__(resp.date_start).format('DD/MM/YYYY HH:mm') : null;
            resp.date_end = resp.date_end ? moment__WEBPACK_IMPORTED_MODULE_3__(resp.date_end).format('DD/MM/YYYY HH:mm') : null;
            _this.data.push(resp);
            _this.dtElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
                // Call the dtTrigger to rerender again
                _this.dtTrigger.next();
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], InvoiceComponent.prototype, "dtElement", void 0);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _assets_js_services__WEBPACK_IMPORTED_MODULE_2__["FaturaApi"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.module.ts":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-invoice/new-invoice.component */ "./src/app/invoice/new-invoice/new-invoice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"] },
    { path: 'new', component: _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_3__["NewInvoiceComponent"] },
    { path: 'edit/:id', component: _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_3__["NewInvoiceComponent"], data: { id: 'teste' } }
];
var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
            ],
            declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"], _new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_3__["NewInvoiceComponent"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "./src/app/invoice/new-invoice/new-invoice.component.html":
/*!****************************************************************!*\
  !*** ./src/app/invoice/new-invoice/new-invoice.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-invoice works!\n</p>\n"

/***/ }),

/***/ "./src/app/invoice/new-invoice/new-invoice.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/invoice/new-invoice/new-invoice.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/new-invoice/new-invoice.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/invoice/new-invoice/new-invoice.component.ts ***!
  \**************************************************************/
/*! exports provided: NewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceComponent", function() { return NewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewInvoiceComponent = /** @class */ (function () {
    function NewInvoiceComponent() {
    }
    NewInvoiceComponent.prototype.ngOnInit = function () {
    };
    NewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-invoice',
            template: __webpack_require__(/*! ./new-invoice.component.html */ "./src/app/invoice/new-invoice/new-invoice.component.html"),
            styles: [__webpack_require__(/*! ./new-invoice.component.scss */ "./src/app/invoice/new-invoice/new-invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewInvoiceComponent);
    return NewInvoiceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map