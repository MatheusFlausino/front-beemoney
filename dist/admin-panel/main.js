(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../apiario/apiario.module": [
		"./src/app/apiario/apiario.module.ts",
		"apiario-apiario-module~calendar-calendar-module~charts-charts-module~dashboard-dashboard-module~invo~469a242c",
		"apiario-apiario-module~charts-charts-module~dashboard-dashboard-module",
		"common",
		"apiario-apiario-module"
	],
	"../calendar/calendar.module": [
		"./src/app/calendar/calendar.module.ts",
		"apiario-apiario-module~calendar-calendar-module~charts-charts-module~dashboard-dashboard-module~invo~469a242c",
		"calendar-calendar-module~dashboard-dashboard-module",
		"common",
		"calendar-calendar-module"
	],
	"../categories/categories.module": [
		"./src/app/categories/categories.module.ts",
		"common",
		"categories-categories-module"
	],
	"../charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"apiario-apiario-module~calendar-calendar-module~charts-charts-module~dashboard-dashboard-module~invo~469a242c",
		"apiario-apiario-module~charts-charts-module~dashboard-dashboard-module",
		"charts-charts-module~forms-forms-module~medida-medida-module",
		"common",
		"charts-charts-module"
	],
	"../components/components.module": [
		"./src/app/components/components.module.ts",
		"components-components-module"
	],
	"../editors/editors.module": [
		"./src/app/editors/editors.module.ts",
		"editors-editors-module"
	],
	"../forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"charts-charts-module~forms-forms-module~medida-medida-module",
		"common",
		"forms-forms-module"
	],
	"../invoice/invoice.module": [
		"./src/app/invoice/invoice.module.ts",
		"apiario-apiario-module~calendar-calendar-module~charts-charts-module~dashboard-dashboard-module~invo~469a242c",
		"common",
		"invoice-invoice-module"
	],
	"../maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module"
	],
	"../medida/medida.module": [
		"./src/app/medida/medida.module.ts",
		"charts-charts-module~forms-forms-module~medida-medida-module",
		"common",
		"medida-medida-module"
	],
	"../tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"common",
		"tables-tables-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"apiario-apiario-module~calendar-calendar-module~charts-charts-module~dashboard-dashboard-module~invo~469a242c",
		"apiario-apiario-module~charts-charts-module~dashboard-dashboard-module",
		"calendar-calendar-module~dashboard-dashboard-module",
		"dashboard-dashboard-module~pages-pages-module",
		"common",
		"dashboard-dashboard-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"dashboard-dashboard-module~pages-pages-module",
		"common",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _assets_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/js/index */ "./src/assets/js/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor */ "./src/app/interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = /** @class */ (function () {
    function AppModule() {
        var configs = __webpack_require__(/*! ../configs/fw_configs.json */ "./src/configs/fw_configs.json");
        _assets_js_index__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].setBaseURL(configs.api.split('/api')[0]);
        _assets_js_index__WEBPACK_IMPORTED_MODULE_6__["LoopBackConfig"].setApiVersion('api');
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _assets_js_index__WEBPACK_IMPORTED_MODULE_6__["SDKBrowserModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                // NotificationsModule,
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor__WEBPACK_IMPORTED_MODULE_8__["MyInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/interceptor.ts":
/*!********************************!*\
  !*** ./src/app/interceptor.ts ***!
  \********************************/
/*! exports provided: MyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/js */ "./src/assets/js/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyInterceptor = /** @class */ (function () {
    function MyInterceptor(LoopBackAuth) {
        this.LoopBackAuth = LoopBackAuth;
        this.token = this.LoopBackAuth.getAccessTokenId();
    }
    //function which will be called for all http calls
    MyInterceptor.prototype.intercept = function (request, next) {
        //how to update the request Parameters
        if (this.token) {
            request = request.clone({ headers: request.headers.set('Authorization', this.token) });
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        }
        //logging the updated Parameters to browser's console
        // console.log("Before making api call : ", request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            //logging the http response to browser's console in case of a success
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log("api call success :", event);
            }
        }, function (error) {
            //logging the http response to browser's console in case of a failuer
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log("api call error :", event);
            }
        }));
    };
    MyInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_assets_js__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"]])
    ], MyInterceptor);
    return MyInterceptor;
}());



/***/ }),

/***/ "./src/assets/js/index.ts":
/*!********************************!*\
  !*** ./src/assets/js/index.ts ***!
  \********************************/
/*! exports provided: SDKBrowserModule, CookieBrowser, StorageBrowser, LoopBackConfig, BaseStorage, InternalStorage, SDKStorage, Usuario, Storage, Faq, UsuarioPagamento, Projeto, Pagamento, Fatura, NotificacaoFatura, Categoria, ToDo, Mural, AccessToken, SDKToken, FireLoopRef, LoopBackAuth, ErrorHandler, RealTime, UsuarioApi, StorageApi, FaqApi, UsuarioPagamentoApi, ProjetoApi, PagamentoApi, FaturaApi, NotificacaoFaturaApi, CategoriaApi, ToDoApi, MuralApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBrowserModule", function() { return SDKBrowserModule; });
/* harmony import */ var _services_core_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/custom/logger.service */ "./src/assets/js/services/custom/logger.service.ts");
/* harmony import */ var _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/custom/SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage/storage.swaps */ "./src/assets/js/storage/storage.swaps.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage/cookie.browser */ "./src/assets/js/storage/cookie.browser.ts");
/* harmony import */ var _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/storage.browser */ "./src/assets/js/storage/storage.browser.ts");
/* harmony import */ var _sockets_socket_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sockets/socket.browser */ "./src/assets/js/sockets/socket.browser.ts");
/* harmony import */ var _sockets_socket_driver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sockets/socket.driver */ "./src/assets/js/sockets/socket.driver.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
/* harmony import */ var _services_core_real_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/core/real.time */ "./src/assets/js/services/core/real.time.ts");
/* harmony import */ var _services_custom_Usuario__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/custom/Usuario */ "./src/assets/js/services/custom/Usuario.ts");
/* harmony import */ var _services_custom_Storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/custom/Storage */ "./src/assets/js/services/custom/Storage.ts");
/* harmony import */ var _services_custom_Faq__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/custom/Faq */ "./src/assets/js/services/custom/Faq.ts");
/* harmony import */ var _services_custom_UsuarioPagamento__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/custom/UsuarioPagamento */ "./src/assets/js/services/custom/UsuarioPagamento.ts");
/* harmony import */ var _services_custom_Projeto__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/custom/Projeto */ "./src/assets/js/services/custom/Projeto.ts");
/* harmony import */ var _services_custom_Pagamento__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/custom/Pagamento */ "./src/assets/js/services/custom/Pagamento.ts");
/* harmony import */ var _services_custom_Fatura__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/custom/Fatura */ "./src/assets/js/services/custom/Fatura.ts");
/* harmony import */ var _services_custom_NotificacaoFatura__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/custom/NotificacaoFatura */ "./src/assets/js/services/custom/NotificacaoFatura.ts");
/* harmony import */ var _services_custom_Categoria__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/custom/Categoria */ "./src/assets/js/services/custom/Categoria.ts");
/* harmony import */ var _services_custom_ToDo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/custom/ToDo */ "./src/assets/js/services/custom/ToDo.ts");
/* harmony import */ var _services_custom_Mural__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/custom/Mural */ "./src/assets/js/services/custom/Mural.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./models/index */ "./src/assets/js/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Usuario"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Faq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamento", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["UsuarioPagamento"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projeto", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Projeto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagamento", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Pagamento"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fatura", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Fatura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFatura", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["NotificacaoFatura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Categoria"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["ToDo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mural", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["Mural"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["SDKToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _models_index__WEBPACK_IMPORTED_MODULE_25__["FireLoopRef"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/index */ "./src/assets/js/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["RealTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["UsuarioApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["StorageApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["FaqApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamentoApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["UsuarioPagamentoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetoApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["ProjetoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagamentoApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["PagamentoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaturaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["FaturaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFaturaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["NotificacaoFaturaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriaApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["CategoriaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDoApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["ToDoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuralApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["MuralApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_26__["BaseLoopBackApi"]; });

/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lb.config */ "./src/assets/js/lb.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return _lb_config__WEBPACK_IMPORTED_MODULE_27__["LoopBackConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["BaseStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["InternalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["SDKStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__["CookieBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__["StorageBrowser"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/

























/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["InternalStorage"],
            useClass: _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_8__["CookieBrowser"]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["LoopBackAuth"],
                _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
                _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
                _services_core_real_time__WEBPACK_IMPORTED_MODULE_13__["RealTime"],
                _services_custom_Usuario__WEBPACK_IMPORTED_MODULE_14__["UsuarioApi"],
                _services_custom_Storage__WEBPACK_IMPORTED_MODULE_15__["StorageApi"],
                _services_custom_Faq__WEBPACK_IMPORTED_MODULE_16__["FaqApi"],
                _services_custom_UsuarioPagamento__WEBPACK_IMPORTED_MODULE_17__["UsuarioPagamentoApi"],
                _services_custom_Projeto__WEBPACK_IMPORTED_MODULE_18__["ProjetoApi"],
                _services_custom_Pagamento__WEBPACK_IMPORTED_MODULE_19__["PagamentoApi"],
                _services_custom_Fatura__WEBPACK_IMPORTED_MODULE_20__["FaturaApi"],
                _services_custom_NotificacaoFatura__WEBPACK_IMPORTED_MODULE_21__["NotificacaoFaturaApi"],
                _services_custom_Categoria__WEBPACK_IMPORTED_MODULE_22__["CategoriaApi"],
                _services_custom_ToDo__WEBPACK_IMPORTED_MODULE_23__["ToDoApi"],
                _services_custom_Mural__WEBPACK_IMPORTED_MODULE_24__["MuralApi"],
                internalStorageProvider,
                { provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_4__["SDKStorage"], useClass: _storage_storage_browser__WEBPACK_IMPORTED_MODULE_9__["StorageBrowser"] },
                { provide: _sockets_socket_driver__WEBPACK_IMPORTED_MODULE_11__["SocketDriver"], useClass: _sockets_socket_browser__WEBPACK_IMPORTED_MODULE_10__["SocketBrowser"] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _services_core_error_service__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_12__["SocketConnection"]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./src/assets/js/lb.config.ts":
/*!************************************!*\
  !*** ./src/assets/js/lb.config.ts ***!
  \************************************/
/*! exports provided: LoopBackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./src/assets/js/models/BaseModels.ts":
/*!********************************************!*\
  !*** ./src/assets/js/models/BaseModels.ts ***!
  \********************************************/
/*! exports provided: AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./src/assets/js/models/Categoria.ts":
/*!*******************************************!*\
  !*** ./src/assets/js/models/Categoria.ts ***!
  \*******************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* tslint:disable */
var Categoria = /** @class */ (function () {
    function Categoria(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Categoria`.
     */
    Categoria.getModelName = function () {
        return "Categoria";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Categoria for dynamic purposes.
    **/
    Categoria.factory = function (data) {
        return new Categoria(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Categoria.getModelDefinition = function () {
        return {
            name: 'Categoria',
            plural: 'category',
            path: 'category',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "icon": {
                    name: 'icon',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Categoria;
}());



/***/ }),

/***/ "./src/assets/js/models/Faq.ts":
/*!*************************************!*\
  !*** ./src/assets/js/models/Faq.ts ***!
  \*************************************/
/*! exports provided: Faq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
/* tslint:disable */
var Faq = /** @class */ (function () {
    function Faq(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Faq`.
     */
    Faq.getModelName = function () {
        return "Faq";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Faq for dynamic purposes.
    **/
    Faq.factory = function (data) {
        return new Faq(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Faq.getModelDefinition = function () {
        return {
            name: 'Faq',
            plural: 'faqs',
            path: 'faqs',
            idName: 'id',
            properties: {
                "question": {
                    name: 'question',
                    type: 'string'
                },
                "answer": {
                    name: 'answer',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Faq;
}());



/***/ }),

/***/ "./src/assets/js/models/Fatura.ts":
/*!****************************************!*\
  !*** ./src/assets/js/models/Fatura.ts ***!
  \****************************************/
/*! exports provided: Fatura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fatura", function() { return Fatura; });
/* tslint:disable */
var Fatura = /** @class */ (function () {
    function Fatura(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Fatura`.
     */
    Fatura.getModelName = function () {
        return "Fatura";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Fatura for dynamic purposes.
    **/
    Fatura.factory = function (data) {
        return new Fatura(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Fatura.getModelDefinition = function () {
        return {
            name: 'Fatura',
            plural: 'invoice',
            path: 'invoice',
            idName: 'id',
            properties: {
                "date_start": {
                    name: 'date_start',
                    type: 'Date'
                },
                "date_end": {
                    name: 'date_end',
                    type: 'Date'
                },
                "status_paid": {
                    name: 'status_paid',
                    type: 'boolean',
                    default: false
                },
                "status_close": {
                    name: 'status_close',
                    type: 'boolean',
                    default: false
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Fatura;
}());



/***/ }),

/***/ "./src/assets/js/models/FireLoop.ts":
/*!******************************************!*\
  !*** ./src/assets/js/models/FireLoop.ts ***!
  \******************************************/
/*! exports provided: FireLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoop", function() { return FireLoop; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/assets/js/models/index.ts");
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new _index__WEBPACK_IMPORTED_MODULE_0__["FireLoopRef"](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());



/***/ }),

/***/ "./src/assets/js/models/FireLoopRef.ts":
/*!*********************************************!*\
  !*** ./src/assets/js/models/FireLoopRef.ts ***!
  \*********************************************/
/*! exports provided: FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return FireLoopRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* tslint:disable */


/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());



/***/ }),

/***/ "./src/assets/js/models/Mural.ts":
/*!***************************************!*\
  !*** ./src/assets/js/models/Mural.ts ***!
  \***************************************/
/*! exports provided: Mural */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mural", function() { return Mural; });
var Mural = /** @class */ (function () {
    function Mural(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Mural`.
     */
    Mural.getModelName = function () {
        return "Mural";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Mural for dynamic purposes.
    **/
    Mural.factory = function (data) {
        return new Mural(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Mural.getModelDefinition = function () {
        return {
            name: 'Mural',
            plural: 'dashboards',
            path: 'dashboards',
            idName: 'id',
            properties: {
                "message": {
                    name: 'message',
                    type: 'string'
                },
                "date": {
                    name: 'date',
                    type: 'Date'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "id_u": {
                    name: 'id_u',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_u',
                    keyTo: 'id'
                },
            }
        };
    };
    return Mural;
}());



/***/ }),

/***/ "./src/assets/js/models/NotificacaoFatura.ts":
/*!***************************************************!*\
  !*** ./src/assets/js/models/NotificacaoFatura.ts ***!
  \***************************************************/
/*! exports provided: NotificacaoFatura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFatura", function() { return NotificacaoFatura; });
var NotificacaoFatura = /** @class */ (function () {
    function NotificacaoFatura(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `NotificacaoFatura`.
     */
    NotificacaoFatura.getModelName = function () {
        return "NotificacaoFatura";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of NotificacaoFatura for dynamic purposes.
    **/
    NotificacaoFatura.factory = function (data) {
        return new NotificacaoFatura(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    NotificacaoFatura.getModelDefinition = function () {
        return {
            name: 'NotificacaoFatura',
            plural: 'invoice-notification',
            path: 'invoice-notification',
            idName: 'id',
            properties: {
                "check_indebted": {
                    name: 'check_indebted',
                    type: 'boolean'
                },
                "check_payer": {
                    name: 'check_payer',
                    type: 'boolean'
                },
                "amount": {
                    name: 'amount',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "id_i": {
                    name: 'id_i',
                    type: 'any'
                },
                "id_ui": {
                    name: 'id_ui',
                    type: 'any'
                },
                "id_up": {
                    name: 'id_up',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {
                invoice: {
                    name: 'invoice',
                    type: 'Fatura',
                    model: 'Fatura',
                    relationType: 'belongsTo',
                    keyFrom: 'id_i',
                    keyTo: 'id'
                },
                user_indebted: {
                    name: 'user_indebted',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_ui',
                    keyTo: 'id'
                },
                user_payer: {
                    name: 'user_payer',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_up',
                    keyTo: 'id'
                },
            }
        };
    };
    return NotificacaoFatura;
}());



/***/ }),

/***/ "./src/assets/js/models/Pagamento.ts":
/*!*******************************************!*\
  !*** ./src/assets/js/models/Pagamento.ts ***!
  \*******************************************/
/*! exports provided: Pagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagamento", function() { return Pagamento; });
var Pagamento = /** @class */ (function () {
    function Pagamento(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Pagamento`.
     */
    Pagamento.getModelName = function () {
        return "Pagamento";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Pagamento for dynamic purposes.
    **/
    Pagamento.factory = function (data) {
        return new Pagamento(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Pagamento.getModelDefinition = function () {
        return {
            name: 'Pagamento',
            plural: 'payment',
            path: 'payment',
            idName: 'id',
            properties: {
                "amount": {
                    name: 'amount',
                    type: 'string'
                },
                "date": {
                    name: 'date',
                    type: 'Date'
                },
                "description": {
                    name: 'description',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "id_u": {
                    name: 'id_u',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
                "id_i": {
                    name: 'id_i',
                    type: 'any'
                },
                "id_c": {
                    name: 'id_c',
                    type: 'any'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_u',
                    keyTo: 'id'
                },
                invoice: {
                    name: 'invoice',
                    type: 'Fatura',
                    model: 'Fatura',
                    relationType: 'belongsTo',
                    keyFrom: 'id_i',
                    keyTo: 'id'
                },
                category: {
                    name: 'category',
                    type: 'Categoria',
                    model: 'Categoria',
                    relationType: 'belongsTo',
                    keyFrom: 'id_c',
                    keyTo: 'id'
                },
            }
        };
    };
    return Pagamento;
}());



/***/ }),

/***/ "./src/assets/js/models/Projeto.ts":
/*!*****************************************!*\
  !*** ./src/assets/js/models/Projeto.ts ***!
  \*****************************************/
/*! exports provided: Projeto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projeto", function() { return Projeto; });
/* tslint:disable */
var Projeto = /** @class */ (function () {
    function Projeto(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Projeto`.
     */
    Projeto.getModelName = function () {
        return "Projeto";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Projeto for dynamic purposes.
    **/
    Projeto.factory = function (data) {
        return new Projeto(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Projeto.getModelDefinition = function () {
        return {
            name: 'Projeto',
            plural: 'projects',
            path: 'projects',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "url": {
                    name: 'url',
                    type: 'string'
                },
                "description": {
                    name: 'description',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Projeto;
}());



/***/ }),

/***/ "./src/assets/js/models/Storage.ts":
/*!*****************************************!*\
  !*** ./src/assets/js/models/Storage.ts ***!
  \*****************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* tslint:disable */
var Storage = /** @class */ (function () {
    function Storage(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Storage`.
     */
    Storage.getModelName = function () {
        return "Storage";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Storage for dynamic purposes.
    **/
    Storage.factory = function (data) {
        return new Storage(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Storage.getModelDefinition = function () {
        return {
            name: 'Storage',
            plural: 'upload',
            path: 'upload',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Storage;
}());



/***/ }),

/***/ "./src/assets/js/models/ToDo.ts":
/*!**************************************!*\
  !*** ./src/assets/js/models/ToDo.ts ***!
  \**************************************/
/*! exports provided: ToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return ToDo; });
var ToDo = /** @class */ (function () {
    function ToDo(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ToDo`.
     */
    ToDo.getModelName = function () {
        return "ToDo";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ToDo for dynamic purposes.
    **/
    ToDo.factory = function (data) {
        return new ToDo(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ToDo.getModelDefinition = function () {
        return {
            name: 'ToDo',
            plural: 'todoList',
            path: 'todoList',
            idName: 'id',
            properties: {
                "message": {
                    name: 'message',
                    type: 'string'
                },
                "check": {
                    name: 'check',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "provider": {
                    name: 'provider',
                    type: 'string'
                },
                "authScheme": {
                    name: 'authScheme',
                    type: 'string'
                },
                "externalId": {
                    name: 'externalId',
                    type: 'string'
                },
                "profile": {
                    name: 'profile',
                    type: 'any'
                },
                "credentials": {
                    name: 'credentials',
                    type: 'any'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "modified": {
                    name: 'modified',
                    type: 'Date'
                },
                "id_u": {
                    name: 'id_u',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_u',
                    keyTo: 'id'
                },
            }
        };
    };
    return ToDo;
}());



/***/ }),

/***/ "./src/assets/js/models/Usuario.ts":
/*!*****************************************!*\
  !*** ./src/assets/js/models/Usuario.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* tslint:disable */
var Usuario = /** @class */ (function () {
    function Usuario(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Usuario`.
     */
    Usuario.getModelName = function () {
        return "Usuario";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Usuario for dynamic purposes.
    **/
    Usuario.factory = function (data) {
        return new Usuario(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Usuario.getModelDefinition = function () {
        return {
            name: 'Usuario',
            plural: 'users',
            path: 'users',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "status": {
                    name: 'status',
                    type: 'string'
                },
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
                identities: {
                    name: 'identities',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'usuarioId'
                },
                credentials: {
                    name: 'credentials',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'usuarioId'
                },
            }
        };
    };
    return Usuario;
}());



/***/ }),

/***/ "./src/assets/js/models/UsuarioPagamento.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/models/UsuarioPagamento.ts ***!
  \**************************************************/
/*! exports provided: UsuarioPagamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamento", function() { return UsuarioPagamento; });
var UsuarioPagamento = /** @class */ (function () {
    function UsuarioPagamento(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `UsuarioPagamento`.
     */
    UsuarioPagamento.getModelName = function () {
        return "UsuarioPagamento";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of UsuarioPagamento for dynamic purposes.
    **/
    UsuarioPagamento.factory = function (data) {
        return new UsuarioPagamento(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    UsuarioPagamento.getModelDefinition = function () {
        return {
            name: 'UsuarioPagamento',
            plural: 'user-payment',
            path: 'user-payment',
            idName: 'id',
            properties: {
                "amount": {
                    name: 'amount',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "id_u": {
                    name: 'id_u',
                    type: 'any'
                },
                "createdAt": {
                    name: 'createdAt',
                    type: 'Date'
                },
                "updatedAt": {
                    name: 'updatedAt',
                    type: 'Date'
                },
                "id_p": {
                    name: 'id_p',
                    type: 'any'
                },
            },
            relations: {
                usuario: {
                    name: 'usuario',
                    type: 'Usuario',
                    model: 'Usuario',
                    relationType: 'belongsTo',
                    keyFrom: 'id_u',
                    keyTo: 'id'
                },
                pagamento: {
                    name: 'pagamento',
                    type: 'Pagamento',
                    model: 'Pagamento',
                    relationType: 'belongsTo',
                    keyFrom: 'id_p',
                    keyTo: 'id'
                },
            }
        };
    };
    return UsuarioPagamento;
}());



/***/ }),

/***/ "./src/assets/js/models/index.ts":
/*!***************************************!*\
  !*** ./src/assets/js/models/index.ts ***!
  \***************************************/
/*! exports provided: Usuario, Storage, Faq, UsuarioPagamento, Projeto, Pagamento, Fatura, NotificacaoFatura, Categoria, ToDo, Mural, AccessToken, SDKToken, FireLoopRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario */ "./src/assets/js/models/Usuario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return _Usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]; });

/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/assets/js/models/Storage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _Storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]; });

/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq */ "./src/assets/js/models/Faq.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return _Faq__WEBPACK_IMPORTED_MODULE_2__["Faq"]; });

/* harmony import */ var _UsuarioPagamento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsuarioPagamento */ "./src/assets/js/models/UsuarioPagamento.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamento", function() { return _UsuarioPagamento__WEBPACK_IMPORTED_MODULE_3__["UsuarioPagamento"]; });

/* harmony import */ var _Projeto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projeto */ "./src/assets/js/models/Projeto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projeto", function() { return _Projeto__WEBPACK_IMPORTED_MODULE_4__["Projeto"]; });

/* harmony import */ var _Pagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagamento */ "./src/assets/js/models/Pagamento.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagamento", function() { return _Pagamento__WEBPACK_IMPORTED_MODULE_5__["Pagamento"]; });

/* harmony import */ var _Fatura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fatura */ "./src/assets/js/models/Fatura.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fatura", function() { return _Fatura__WEBPACK_IMPORTED_MODULE_6__["Fatura"]; });

/* harmony import */ var _NotificacaoFatura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotificacaoFatura */ "./src/assets/js/models/NotificacaoFatura.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFatura", function() { return _NotificacaoFatura__WEBPACK_IMPORTED_MODULE_7__["NotificacaoFatura"]; });

/* harmony import */ var _Categoria__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Categoria */ "./src/assets/js/models/Categoria.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return _Categoria__WEBPACK_IMPORTED_MODULE_8__["Categoria"]; });

/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToDo */ "./src/assets/js/models/ToDo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDo", function() { return _ToDo__WEBPACK_IMPORTED_MODULE_9__["ToDo"]; });

/* harmony import */ var _Mural__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Mural */ "./src/assets/js/models/Mural.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mural", function() { return _Mural__WEBPACK_IMPORTED_MODULE_10__["Mural"]; });

/* harmony import */ var _BaseModels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseModels */ "./src/assets/js/models/BaseModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_11__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_11__["SDKToken"]; });

/* harmony import */ var _FireLoopRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FireLoopRef */ "./src/assets/js/models/FireLoopRef.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FireLoopRef", function() { return _FireLoopRef__WEBPACK_IMPORTED_MODULE_12__["FireLoopRef"]; });

/* tslint:disable */















/***/ }),

/***/ "./src/assets/js/services/core/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/assets/js/services/core/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: LoopBackAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return LoopBackAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage/storage.swaps */ "./src/assets/js/storage/storage.swaps.ts");
/* harmony import */ var _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/BaseModels */ "./src/assets/js/models/BaseModels.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__["SDKToken"]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_2__["SDKToken"]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__["InternalStorage"])),
        __metadata("design:paramtypes", [_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_1__["InternalStorage"]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./src/assets/js/services/core/base.service.ts":
/*!*****************************************************!*\
  !*** ./src/assets/js/services/core/base.service.ts ***!
  \*****************************************************/
/*! exports provided: BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return BaseLoopBackApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return res.body; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(),
                _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["LoopBackAuth"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./src/assets/js/services/core/error.service.ts":
/*!******************************************************!*\
  !*** ./src/assets/js/services/core/error.service.ts ***!
  \******************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/assets/js/services/core/index.ts":
/*!**********************************************!*\
  !*** ./src/assets/js/services/core/index.ts ***!
  \**********************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, RealTime, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseLoopBackApi"]; });

/* harmony import */ var _real_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real.time */ "./src/assets/js/services/core/real.time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _real_time__WEBPACK_IMPORTED_MODULE_3__["RealTime"]; });

/* tslint:disable */






/***/ }),

/***/ "./src/assets/js/services/core/io.service.ts":
/*!***************************************************!*\
  !*** ./src/assets/js/services/core/io.service.ts ***!
  \***************************************************/
/*! exports provided: IO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());



/***/ }),

/***/ "./src/assets/js/services/core/real.time.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/services/core/real.time.ts ***!
  \**************************************************/
/*! exports provided: RealTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return RealTime; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io.service */ "./src/assets/js/services/core/io.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _models_FireLoop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/FireLoop */ "./src/assets/js/models/FireLoop.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new _io_service__WEBPACK_IMPORTED_MODULE_1__["IO"](this.connection);
            this.FireLoop = new _models_FireLoop__WEBPACK_IMPORTED_MODULE_3__["FireLoop"](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__["SocketConnection"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"])),
        __metadata("design:paramtypes", [_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_4__["SocketConnection"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_5__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"]])
    ], RealTime);
    return RealTime;
}());



/***/ }),

/***/ "./src/assets/js/services/custom/Categoria.ts":
/*!****************************************************!*\
  !*** ./src/assets/js/services/custom/Categoria.ts ***!
  \****************************************************/
/*! exports provided: CategoriaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaApi", function() { return CategoriaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Categoria` model.
 */
var CategoriaApi = /** @class */ (function (_super) {
    __extends(CategoriaApi, _super);
    function CategoriaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Categoria` object.)
     * </em>
     */
    CategoriaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/category";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Categoria id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Categoria` object.)
     * </em>
     */
    CategoriaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/category/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Categoria`.
     */
    CategoriaApi.prototype.getModelName = function () {
        return "Categoria";
    };
    CategoriaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], CategoriaApi);
    return CategoriaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Faq.ts":
/*!**********************************************!*\
  !*** ./src/assets/js/services/custom/Faq.ts ***!
  \**********************************************/
/*! exports provided: FaqApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqApi", function() { return FaqApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Faq` model.
 */
var FaqApi = /** @class */ (function (_super) {
    __extends(FaqApi, _super);
    function FaqApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Faq` object.)
     * </em>
     */
    FaqApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/faqs";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Faq id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Faq` object.)
     * </em>
     */
    FaqApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/faqs/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Faq`.
     */
    FaqApi.prototype.getModelName = function () {
        return "Faq";
    };
    FaqApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], FaqApi);
    return FaqApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Fatura.ts":
/*!*************************************************!*\
  !*** ./src/assets/js/services/custom/Fatura.ts ***!
  \*************************************************/
/*! exports provided: FaturaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaturaApi", function() { return FaturaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Fatura` model.
 */
var FaturaApi = /** @class */ (function (_super) {
    __extends(FaturaApi, _super);
    function FaturaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Fatura` object.)
     * </em>
     */
    FaturaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Fatura id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Fatura` object.)
     * </em>
     */
    FaturaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Fatura`.
     */
    FaturaApi.prototype.getModelName = function () {
        return "Fatura";
    };
    FaturaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], FaturaApi);
    return FaturaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Mural.ts":
/*!************************************************!*\
  !*** ./src/assets/js/services/custom/Mural.ts ***!
  \************************************************/
/*! exports provided: MuralApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralApi", function() { return MuralApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Mural` model.
 */
var MuralApi = /** @class */ (function (_super) {
    __extends(MuralApi, _super);
    function MuralApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation user.
     *
     * @param {any} id Mural id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Mural` object.)
     * </em>
     */
    MuralApi.prototype.getUser = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/dashboards/:id/user";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Mural` object.)
     * </em>
     */
    MuralApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/dashboards";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Mural id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Mural` object.)
     * </em>
     */
    MuralApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/dashboards/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Mural`.
     */
    MuralApi.prototype.getModelName = function () {
        return "Mural";
    };
    MuralApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], MuralApi);
    return MuralApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/NotificacaoFatura.ts":
/*!************************************************************!*\
  !*** ./src/assets/js/services/custom/NotificacaoFatura.ts ***!
  \************************************************************/
/*! exports provided: NotificacaoFaturaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFaturaApi", function() { return NotificacaoFaturaApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `NotificacaoFatura` model.
 */
var NotificacaoFaturaApi = /** @class */ (function (_super) {
    __extends(NotificacaoFaturaApi, _super);
    function NotificacaoFaturaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation invoice.
     *
     * @param {any} id NotificacaoFatura id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `NotificacaoFatura` object.)
     * </em>
     */
    NotificacaoFaturaApi.prototype.getInvoice = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice-notification/:id/invoice";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation user_indebted.
     *
     * @param {any} id NotificacaoFatura id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `NotificacaoFatura` object.)
     * </em>
     */
    NotificacaoFaturaApi.prototype.getUser_indebted = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice-notification/:id/user_indebted";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation user_payer.
     *
     * @param {any} id NotificacaoFatura id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `NotificacaoFatura` object.)
     * </em>
     */
    NotificacaoFaturaApi.prototype.getUser_payer = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice-notification/:id/user_payer";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `NotificacaoFatura` object.)
     * </em>
     */
    NotificacaoFaturaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice-notification";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id NotificacaoFatura id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `NotificacaoFatura` object.)
     * </em>
     */
    NotificacaoFaturaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/invoice-notification/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `NotificacaoFatura`.
     */
    NotificacaoFaturaApi.prototype.getModelName = function () {
        return "NotificacaoFatura";
    };
    NotificacaoFaturaApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], NotificacaoFaturaApi);
    return NotificacaoFaturaApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Pagamento.ts":
/*!****************************************************!*\
  !*** ./src/assets/js/services/custom/Pagamento.ts ***!
  \****************************************************/
/*! exports provided: PagamentoApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamentoApi", function() { return PagamentoApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Pagamento` model.
 */
var PagamentoApi = /** @class */ (function (_super) {
    __extends(PagamentoApi, _super);
    function PagamentoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation user.
     *
     * @param {any} id Pagamento id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.getUser = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment/:id/user";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation invoice.
     *
     * @param {any} id Pagamento id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.getInvoice = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment/:id/invoice";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation category.
     *
     * @param {any} id Pagamento id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.getCategory = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment/:id/category";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Pagamento id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Receive a payment and save
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Pagamento` object.)
     * </em>
     */
    PagamentoApi.prototype.savePayment = function (data, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/payment/save-payment";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Pagamento`.
     */
    PagamentoApi.prototype.getModelName = function () {
        return "Pagamento";
    };
    PagamentoApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], PagamentoApi);
    return PagamentoApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Projeto.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/services/custom/Projeto.ts ***!
  \**************************************************/
/*! exports provided: ProjetoApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoApi", function() { return ProjetoApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Projeto` model.
 */
var ProjetoApi = /** @class */ (function (_super) {
    __extends(ProjetoApi, _super);
    function ProjetoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/projects";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Projeto id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/projects/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Projeto`.
     */
    ProjetoApi.prototype.getModelName = function () {
        return "Projeto";
    };
    ProjetoApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ProjetoApi);
    return ProjetoApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/SDKModels.ts":
/*!****************************************************!*\
  !*** ./src/assets/js/services/custom/SDKModels.ts ***!
  \****************************************************/
/*! exports provided: SDKModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return SDKModels; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Usuario */ "./src/assets/js/models/Usuario.ts");
/* harmony import */ var _models_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Storage */ "./src/assets/js/models/Storage.ts");
/* harmony import */ var _models_Faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Faq */ "./src/assets/js/models/Faq.ts");
/* harmony import */ var _models_UsuarioPagamento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/UsuarioPagamento */ "./src/assets/js/models/UsuarioPagamento.ts");
/* harmony import */ var _models_Projeto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Projeto */ "./src/assets/js/models/Projeto.ts");
/* harmony import */ var _models_Pagamento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Pagamento */ "./src/assets/js/models/Pagamento.ts");
/* harmony import */ var _models_Fatura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/Fatura */ "./src/assets/js/models/Fatura.ts");
/* harmony import */ var _models_NotificacaoFatura__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/NotificacaoFatura */ "./src/assets/js/models/NotificacaoFatura.ts");
/* harmony import */ var _models_Categoria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/Categoria */ "./src/assets/js/models/Categoria.ts");
/* harmony import */ var _models_ToDo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/ToDo */ "./src/assets/js/models/ToDo.ts");
/* harmony import */ var _models_Mural__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/Mural */ "./src/assets/js/models/Mural.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */












var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            Usuario: _models_Usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"],
            Storage: _models_Storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            Faq: _models_Faq__WEBPACK_IMPORTED_MODULE_3__["Faq"],
            UsuarioPagamento: _models_UsuarioPagamento__WEBPACK_IMPORTED_MODULE_4__["UsuarioPagamento"],
            Projeto: _models_Projeto__WEBPACK_IMPORTED_MODULE_5__["Projeto"],
            Pagamento: _models_Pagamento__WEBPACK_IMPORTED_MODULE_6__["Pagamento"],
            Fatura: _models_Fatura__WEBPACK_IMPORTED_MODULE_7__["Fatura"],
            NotificacaoFatura: _models_NotificacaoFatura__WEBPACK_IMPORTED_MODULE_8__["NotificacaoFatura"],
            Categoria: _models_Categoria__WEBPACK_IMPORTED_MODULE_9__["Categoria"],
            ToDo: _models_ToDo__WEBPACK_IMPORTED_MODULE_10__["ToDo"],
            Mural: _models_Mural__WEBPACK_IMPORTED_MODULE_11__["Mural"],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./src/assets/js/services/custom/Storage.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/services/custom/Storage.ts ***!
  \**************************************************/
/*! exports provided: StorageApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageApi", function() { return StorageApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Storage` model.
 */
var StorageApi = /** @class */ (function (_super) {
    __extends(StorageApi, _super);
    function StorageApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Storage` object.)
     * </em>
     */
    StorageApi.prototype.getContainers = function (customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Storage` object.)
     * </em>
     */
    StorageApi.prototype.createContainer = function (options, customHeaders) {
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    StorageApi.prototype.destroyContainer = function (container, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Storage` object.)
     * </em>
     */
    StorageApi.prototype.getContainer = function (container, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Storage` object.)
     * </em>
     */
    StorageApi.prototype.getFiles = function (container, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container/files";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Storage` object.)
     * </em>
     */
    StorageApi.prototype.getFile = function (container, file, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    StorageApi.prototype.removeFile = function (container, file, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {object} data Request data.
     *
     *  - `req` – `{object}` -
     *
     *  - `res` – `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    StorageApi.prototype.upload = function (container, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container/upload";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @param {object} req
     *
     * @param {object} res
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    StorageApi.prototype.download = function (container, file, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/upload/:container/download/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Storage`.
     */
    StorageApi.prototype.getModelName = function () {
        return "Storage";
    };
    StorageApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], StorageApi);
    return StorageApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/ToDo.ts":
/*!***********************************************!*\
  !*** ./src/assets/js/services/custom/ToDo.ts ***!
  \***********************************************/
/*! exports provided: ToDoApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoApi", function() { return ToDoApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ToDo` model.
 */
var ToDoApi = /** @class */ (function (_super) {
    __extends(ToDoApi, _super);
    function ToDoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation user.
     *
     * @param {any} id ToDo id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ToDo` object.)
     * </em>
     */
    ToDoApi.prototype.getUser = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/todoList/:id/user";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ToDo` object.)
     * </em>
     */
    ToDoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/todoList";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ToDo id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ToDo` object.)
     * </em>
     */
    ToDoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/todoList/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ToDo`.
     */
    ToDoApi.prototype.getModelName = function () {
        return "ToDo";
    };
    ToDoApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], ToDoApi);
    return ToDoApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/Usuario.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/services/custom/Usuario.ts ***!
  \**************************************************/
/*! exports provided: UsuarioApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioApi", function() { return UsuarioApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `Usuario` model.
 */
var UsuarioApi = /** @class */ (function (_super) {
    __extends(UsuarioApi, _super);
    function UsuarioApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for identities.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for identities
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.findByIdIdentities = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for identities.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for identities
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.destroyByIdIdentities = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for identities.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for identities
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.updateByIdIdentities = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for credentials.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for credentials
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.findByIdCredentials = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for credentials.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for credentials
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.destroyByIdCredentials = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for credentials.
     *
     * @param {any} id Usuario id
     *
     * @param {any} fk Foreign key for credentials
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.updateByIdCredentials = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id Usuario id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UsuarioApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries identities of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.getIdentities = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in identities of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createIdentities = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all identities of this model.
     *
     * @param {any} id Usuario id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.deleteIdentities = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts identities of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UsuarioApi.prototype.countIdentities = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries credentials of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.getCredentials = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in credentials of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createCredentials = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all credentials of this model.
     *
     * @param {any} id Usuario id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.deleteCredentials = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts credentials of Usuario.
     *
     * @param {any} id Usuario id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UsuarioApi.prototype.countCredentials = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UsuarioApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Logs user out.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.userLogout = function (req, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/user-logout";
        var _routeParams = {};
        var _postBody = {
            req: req
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Changes a logged in user password.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.changePwd = function (req, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/change-pwd";
        var _routeParams = {};
        var _postBody = {
            req: req
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Action to reset user password
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioApi.prototype.resetPasswordAction = function (data, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in identities of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createManyIdentities = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/identities";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in credentials of this model.
     *
     * @param {any} id Usuario id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Usuario` object.)
     * </em>
     */
    UsuarioApi.prototype.createManyCredentials = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/users/:id/credentials";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.Usuario#getCurrent
     * @methodOf sdk.Usuario
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UsuarioApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() + "/users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.Usuario#login} or
     * {@link sdk.Usuario#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UsuarioApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.Usuario#login}
     *
     * @returns object An AccessToken instance.
     */
    UsuarioApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.Usuario#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UsuarioApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.Usuario#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UsuarioApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Usuario`.
     */
    UsuarioApi.prototype.getModelName = function () {
        return "Usuario";
    };
    UsuarioApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_8__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], UsuarioApi);
    return UsuarioApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/UsuarioPagamento.ts":
/*!***********************************************************!*\
  !*** ./src/assets/js/services/custom/UsuarioPagamento.ts ***!
  \***********************************************************/
/*! exports provided: UsuarioPagamentoApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamentoApi", function() { return UsuarioPagamentoApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base.service */ "./src/assets/js/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "./src/assets/js/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error.service */ "./src/assets/js/services/core/error.service.ts");
/* harmony import */ var _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sockets/socket.connections */ "./src/assets/js/sockets/socket.connections.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `UsuarioPagamento` model.
 */
var UsuarioPagamentoApi = /** @class */ (function (_super) {
    __extends(UsuarioPagamentoApi, _super);
    function UsuarioPagamentoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation usuario.
     *
     * @param {any} id UsuarioPagamento id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioPagamento` object.)
     * </em>
     */
    UsuarioPagamentoApi.prototype.getUsuario = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/user-payment/:id/usuario";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation pagamento.
     *
     * @param {any} id UsuarioPagamento id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioPagamento` object.)
     * </em>
     */
    UsuarioPagamentoApi.prototype.getPagamento = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/user-payment/:id/pagamento";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioPagamento` object.)
     * </em>
     */
    UsuarioPagamentoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/user-payment";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id UsuarioPagamento id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioPagamento` object.)
     * </em>
     */
    UsuarioPagamentoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getApiVersion() +
            "/user-payment/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `UsuarioPagamento`.
     */
    UsuarioPagamentoApi.prototype.getModelName = function () {
        return "UsuarioPagamento";
    };
    UsuarioPagamentoApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _sockets_socket_connections__WEBPACK_IMPORTED_MODULE_7__["SocketConnection"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandler"]])
    ], UsuarioPagamentoApi);
    return UsuarioPagamentoApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/assets/js/services/custom/index.ts":
/*!************************************************!*\
  !*** ./src/assets/js/services/custom/index.ts ***!
  \************************************************/
/*! exports provided: UsuarioApi, StorageApi, FaqApi, UsuarioPagamentoApi, ProjetoApi, PagamentoApi, FaturaApi, NotificacaoFaturaApi, CategoriaApi, ToDoApi, MuralApi, SDKModels, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario */ "./src/assets/js/services/custom/Usuario.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioApi", function() { return _Usuario__WEBPACK_IMPORTED_MODULE_0__["UsuarioApi"]; });

/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/assets/js/services/custom/Storage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageApi", function() { return _Storage__WEBPACK_IMPORTED_MODULE_1__["StorageApi"]; });

/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq */ "./src/assets/js/services/custom/Faq.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqApi", function() { return _Faq__WEBPACK_IMPORTED_MODULE_2__["FaqApi"]; });

/* harmony import */ var _UsuarioPagamento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsuarioPagamento */ "./src/assets/js/services/custom/UsuarioPagamento.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamentoApi", function() { return _UsuarioPagamento__WEBPACK_IMPORTED_MODULE_3__["UsuarioPagamentoApi"]; });

/* harmony import */ var _Projeto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projeto */ "./src/assets/js/services/custom/Projeto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetoApi", function() { return _Projeto__WEBPACK_IMPORTED_MODULE_4__["ProjetoApi"]; });

/* harmony import */ var _Pagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagamento */ "./src/assets/js/services/custom/Pagamento.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagamentoApi", function() { return _Pagamento__WEBPACK_IMPORTED_MODULE_5__["PagamentoApi"]; });

/* harmony import */ var _Fatura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fatura */ "./src/assets/js/services/custom/Fatura.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaturaApi", function() { return _Fatura__WEBPACK_IMPORTED_MODULE_6__["FaturaApi"]; });

/* harmony import */ var _NotificacaoFatura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotificacaoFatura */ "./src/assets/js/services/custom/NotificacaoFatura.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFaturaApi", function() { return _NotificacaoFatura__WEBPACK_IMPORTED_MODULE_7__["NotificacaoFaturaApi"]; });

/* harmony import */ var _Categoria__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Categoria */ "./src/assets/js/services/custom/Categoria.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriaApi", function() { return _Categoria__WEBPACK_IMPORTED_MODULE_8__["CategoriaApi"]; });

/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToDo */ "./src/assets/js/services/custom/ToDo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDoApi", function() { return _ToDo__WEBPACK_IMPORTED_MODULE_9__["ToDoApi"]; });

/* harmony import */ var _Mural__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Mural */ "./src/assets/js/services/custom/Mural.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuralApi", function() { return _Mural__WEBPACK_IMPORTED_MODULE_10__["MuralApi"]; });

/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDKModels */ "./src/assets/js/services/custom/SDKModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _SDKModels__WEBPACK_IMPORTED_MODULE_11__["SDKModels"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logger.service */ "./src/assets/js/services/custom/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"]; });

/* tslint:disable */















/***/ }),

/***/ "./src/assets/js/services/custom/logger.service.ts":
/*!*********************************************************!*\
  !*** ./src/assets/js/services/custom/logger.service.ts ***!
  \*********************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lb.config */ "./src/assets/js/lb.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_1__["LoopBackConfig"].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/assets/js/services/index.ts":
/*!*****************************************!*\
  !*** ./src/assets/js/services/index.ts ***!
  \*****************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, RealTime, UsuarioApi, StorageApi, FaqApi, UsuarioPagamentoApi, ProjetoApi, PagamentoApi, FaturaApi, NotificacaoFaturaApi, CategoriaApi, ToDoApi, MuralApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./src/assets/js/services/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealTime", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["RealTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["BaseLoopBackApi"]; });

/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/index */ "./src/assets/js/services/custom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UsuarioApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["StorageApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["FaqApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuarioPagamentoApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UsuarioPagamentoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjetoApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ProjetoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagamentoApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["PagamentoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaturaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["FaturaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificacaoFaturaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["NotificacaoFaturaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriaApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["CategoriaApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToDoApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["ToDoApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuralApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["MuralApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* tslint:disable */




/***/ }),

/***/ "./src/assets/js/sockets/socket.browser.ts":
/*!*************************************************!*\
  !*** ./src/assets/js/sockets/socket.browser.ts ***!
  \*************************************************/
/*! exports provided: SocketBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketBrowser", function() { return SocketBrowser; });
/* harmony import */ var socket_io_node_modules_socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io/node_modules/socket.io-client */ "./node_modules/socket.io/node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_node_modules_socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_node_modules_socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = /** @class */ (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return socket_io_node_modules_socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(url, options);
    };
    return SocketBrowser;
}());



/***/ }),

/***/ "./src/assets/js/sockets/socket.connections.ts":
/*!*****************************************************!*\
  !*** ./src/assets/js/sockets/socket.connections.ts ***!
  \*****************************************************/
/*! exports provided: SocketConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketConnection", function() { return SocketConnection; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.driver */ "./src/assets/js/sockets/socket.driver.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lb.config */ "./src/assets/js/lb.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onDisconnect: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onAuthenticated: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            onUnAuthorized: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(_lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].getPath(), {
                log: false,
                secure: _lb_config__WEBPACK_IMPORTED_MODULE_4__["LoopBackConfig"].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_socket_driver__WEBPACK_IMPORTED_MODULE_1__["SocketDriver"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])),
        __metadata("design:paramtypes", [_socket_driver__WEBPACK_IMPORTED_MODULE_1__["SocketDriver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());



/***/ }),

/***/ "./src/assets/js/sockets/socket.driver.ts":
/*!************************************************!*\
  !*** ./src/assets/js/sockets/socket.driver.ts ***!
  \************************************************/
/*! exports provided: SocketDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketDriver", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());



/***/ }),

/***/ "./src/assets/js/storage/cookie.browser.ts":
/*!*************************************************!*\
  !*** ./src/assets/js/storage/cookie.browser.ts ***!
  \*************************************************/
/*! exports provided: CookieBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return CookieBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./src/assets/js/storage/storage.browser.ts":
/*!**************************************************!*\
  !*** ./src/assets/js/storage/storage.browser.ts ***!
  \**************************************************/
/*! exports provided: StorageBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return StorageBrowser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./src/assets/js/storage/storage.swaps.ts":
/*!************************************************!*\
  !*** ./src/assets/js/storage/storage.swaps.ts ***!
  \************************************************/
/*! exports provided: BaseStorage, InternalStorage, SDKStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return BaseStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return SDKStorage; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/configs/fw_configs.json":
/*!*************************************!*\
  !*** ./src/configs/fw_configs.json ***!
  \*************************************/
/*! exports provided: api, pages, default */
/***/ (function(module) {

module.exports = {"api":"http://app.beemoney.co/api/","pages":{"medida":{"model":"Medida","apiRoute":"medidas","headers":"medida.json"}}};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/romano/casa/base-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map