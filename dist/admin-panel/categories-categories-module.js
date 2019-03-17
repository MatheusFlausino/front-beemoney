(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  categories works!\n\n\n\n  <a [routerLink]=\"'./new'\">New</a>\n  <br>\n  <a [routerLink]=\"'./edit/1'\">Edit</a>\n</p> -->\n\n<h5 class=\"mb-4\"><b>Categorias</b></h5>\n<div class=\"card\">\n  <div class=\"card-body d-flex flex-column\">\n      <button [routerLink]=\"'./new'\" type=\"button\" class=\"btn ml-auto btn-primary\"><i class=\"material-icons\">note_add</i>\n        Adicionar Categoria</button>\n    <table id=\"data_table\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"display table responsive no-wrap\">\n      <tbody *ngIf=\"data?.length != 0\">\n        <tr *ngFor=\"let v of data; let i = index\">\n          <td>\n            <p class=\"my-3\">{{ i }}</p>\n          </td>\n          <td>\n            <p class=\"my-3\">{{ v.name }}</p>\n          </td>\n          <td>\n            <p class=\"my-3\"><i class=\"material-icons\">{{ v.icon }}</i></p>\n          </td>\n          <td>\n            <button (click)=\"delete(v.id)\" type=\"button\" class=\"btn float-right m-1 btn-danger btn-just-icon\"><i class=\"material-icons\">cancel</i></button>\n            <!-- <button type=\"button\" class=\"btn float-right m-1 btn-primary btn-just-icon\"><i class=\"material-icons\">remove_red_eye</i></button> -->\n            <button [routerLink]=\"'./edit/'+v.id\" type=\"button\" class=\"btn float-right m-1 btn-dark  btn-just-icon\"><i class=\"material-icons\">edit</i></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_js_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/services */ "./src/assets/js/services/index.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(_router, CategoriaApi) {
        this._router = _router;
        this.CategoriaApi = CategoriaApi;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.pathRoute = _router.url;
    }
    CategoriesComponent.prototype.delete = function (id) {
        var _this = this;
        //CategoriaApi
        this.CategoriaApi.deleteById(id).subscribe(function (response) {
            _this.data = _this.data.filter(function (obj) { return obj.id !== id; });
            _this.dtElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
                // Call the dtTrigger to rerender again
                _this.dtTrigger.next();
            });
        });
    };
    CategoriesComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    title: 'Categoria',
                    data: 'name'
                },
                {
                    title: 'Ícone',
                    data: 'icon'
                },
                {
                    title: "",
                    className: "action-head"
                }
            ],
        };
        this.CategoriaApi.find({}).subscribe(function (resp) {
            // resp.forEach((v, k) => {
            //   resp[k].date_start = v.date_start ? moment(v.date_start).format('DD/MM/YYYY HH:mm') : null;
            //   resp[k].date_end = v.date_end ? moment(v.date_end).format('DD/MM/YYYY HH:mm') : null;
            // });
            // debugger;
            _this.data = resp;
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], CategoriesComponent.prototype, "dtElement", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _assets_js_services__WEBPACK_IMPORTED_MODULE_2__["CategoriaApi"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_categories_new_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-categories/new-categories.component */ "./src/app/categories/new-categories/new-categories.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] },
    { path: 'new', component: _new_categories_new_categories_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoriesComponent"] },
    { path: 'edit/:id', component: _new_categories_new_categories_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoriesComponent"], data: { id: 'teste' } }
];
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"], _new_categories_new_categories_component__WEBPACK_IMPORTED_MODULE_5__["NewCategoriesComponent"]]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/categories/new-categories/new-categories.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/categories/new-categories/new-categories.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  new-categories works!\n  id: {{data.id}}\n</p> -->\n\n<h5 class=\"mb-4\"><b>{{params.id ? 'Editar Categoria' : 'Nova Categoria'}}</b></h5>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f)\">\n      <!-- <form > -->\n      <div class=\"form-group row\">\n        <div class=\"col-sm-6 col-xs-12\">\n          <label class=\"col-form-label\">Categoria</label>\n          <input name=\"name\" ngModel=\"{{category.name}}\" type=\"text\" class=\"form-control\" placeholder=\"Categoria\">\n        </div>\n        <div class=\"col-sm-6 col-xs-12\">\n          <label class=\"col-form-label\">Ícone</label>\n          <div class=\"form-group input-group\">\n            <div class=\"input-group-prepend\">\n              <div style=\"width:48px\" class=\"input-group-text\"><i class=\"material-icons\">{{form.form.value.icon}}</i></div>\n            </div>\n            <input name=\"icon\" ngModel=\"{{category.icon}}\" type=\"text\" class=\"form-control\" placeholder=\"Ícone\">\n          </div>\n\n        </div>\n        <div class=\"col-sm-12 d-flex justify-content-center mt-4\">\n          <button [routerLink]=\"'/categories'\" type=\"button\" class=\"btn w-13 w-sm-80 m-3 btn-danger\">VOLTAR</button>\n          <button type=\"submit\" class=\"btn w-13 w-sm-80 m-3 btn-primary\">SALVAR</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/new-categories/new-categories.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/categories/new-categories/new-categories.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/new-categories/new-categories.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/categories/new-categories/new-categories.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoriesComponent", function() { return NewCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assets_js_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/services */ "./src/assets/js/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCategoriesComponent = /** @class */ (function () {
    function NewCategoriesComponent(route, router, CategoriaApi) {
        this.route = route;
        this.router = router;
        this.CategoriaApi = CategoriaApi;
        this.category = {};
    }
    NewCategoriesComponent.prototype.save = function (f) {
        var _this = this;
        if (f.form.valid && f.form.value.name != '' && f.form.value.icon != '') {
            var obj = { name: f.form.value.name, icon: f.form.value.icon };
            this.params.id ? obj['id'] = this.params.id : null;
            this.CategoriaApi.upsert(obj).subscribe(function (response) {
                f.form.reset();
                _this.router.navigate(['/categories']);
            });
        }
    };
    NewCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.params = params; });
        if (this.params && this.params.id) {
            this.CategoriaApi.findById(this.params.id).subscribe(function (response) {
                _this.category.name = response.name;
                _this.category.icon = response.icon;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], NewCategoriesComponent.prototype, "form", void 0);
    NewCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-categories',
            template: __webpack_require__(/*! ./new-categories.component.html */ "./src/app/categories/new-categories/new-categories.component.html"),
            styles: [__webpack_require__(/*! ./new-categories.component.scss */ "./src/app/categories/new-categories/new-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _assets_js_services__WEBPACK_IMPORTED_MODULE_3__["CategoriaApi"]])
    ], NewCategoriesComponent);
    return NewCategoriesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map