(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apiario-apiario-module"],{

/***/ "./src/app/apiario/apiario.component.html":
/*!************************************************!*\
  !*** ./src/app/apiario/apiario.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let colmeia of colmeias\" class=\"col-md-4 col-12 honey-div mb-4\">\n      <div class=\"honey-content d-flex\">\n        <div class=\"col-7 honey\">\n          <span class=\"title-honey\">{{colmeia.nome}}</span>\n          <div class=\"pot\">\n          </div>\n        </div>\n        <div class=\"col-5 variables py-4\">\n          <div class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Preenchido</div>\n            <div class=\"variable-value\">{{colmeia.porcentagem}}%</div>\n          </div>\n          <div class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Peso</div>\n            <div class=\"variable-value\">{{colmeia.peso}} Kg</div>\n          </div>\n          <div data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"openGraph(colmeia.peso)\" class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Gráfico</div>\n            <div class=\"variable-btn\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog m-4\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <canvas id=\"line-chart\" ></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/apiario/apiario.component.scss":
/*!************************************************!*\
  !*** ./src/app/apiario/apiario.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.modal-dialog {\n  max-width: unset; }\n.card-body,\n.exampleChart {\n  position: relative;\n  min-height: 75vh; }\n.honey-content {\n  box-shadow: 7px 9px 15px -5px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  height: 300px;\n  padding: 20px 10px;\n  background-color: white; }\n.honey-content .honey {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.honey-content .variables {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.honey-content .pot {\n    background: url(\"/assets/img/honey-jar.png\") center no-repeat;\n    background-size: contain;\n    height: 100%; }\n.honey-content .title-honey {\n    font-size: 22px;\n    font-weight: bold; }\n.honey-content .col-5 {\n    padding: 0px; }\n.honey-content .variable-content {\n    font-size: 18px;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n.honey-content .variable-content .variable-title {\n      font-weight: bold; }\n.honey-content .variable-content .variable-btn {\n      padding: 10px 15px;\n      border: 1px solid #777;\n      margin-top: 10px;\n      border-radius: 10px; }\n@media (max-width: 767.98px) {\n  .container {\n    padding: 0px; }\n  .honey-div {\n    padding: 0px; } }\n"

/***/ }),

/***/ "./src/app/apiario/apiario.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apiario/apiario.component.ts ***!
  \**********************************************/
/*! exports provided: ApiarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiarioComponent", function() { return ApiarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiarioComponent = /** @class */ (function () {
    function ApiarioComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.openGraph = function (peso) {
            _this.lineChart(peso);
        };
        this.colmeias = [];
    }
    ApiarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.params = params; });
        if (this.params && this.params.id) {
            if (this.params.id == 1) {
                this.colmeias = [
                    {
                        nome: "Colmeia 1",
                        porcentagem: "88",
                        peso: "8.8"
                    },
                    {
                        nome: "Colmeia 2",
                        porcentagem: "37",
                        peso: "3.7"
                    },
                    {
                        nome: "Colmeia 3",
                        porcentagem: "23",
                        peso: "2.3"
                    },
                    {
                        nome: "Colmeia 4",
                        porcentagem: "64",
                        peso: "6.4"
                    },
                    {
                        nome: "Colmeia 5",
                        porcentagem: "45",
                        peso: "4.5"
                    },
                ];
            }
            else if (this.params.id == 2) {
                this.colmeias = [
                    {
                        nome: "Colmeia 6",
                        porcentagem: "92",
                        peso: "9.2"
                    },
                    {
                        nome: "Colmeia 7",
                        porcentagem: "14",
                        peso: "1.4"
                    },
                    {
                        nome: "Colmeia 8",
                        porcentagem: "56",
                        peso: "5.6"
                    }
                ];
            }
        }
    };
    ApiarioComponent.prototype.lineChart = function (peso) {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('hour');
        var dates = [];
        var t = 84;
        while (t--) {
            dates.push(startDate.format('DD/MM - hh:mma'));
            startDate.subtract(120, 'minute');
        }
        var values = [];
        var value = parseFloat(peso) - 0.4;
        var format = 'DD/MM - hh:mma';
        // var time = moment() gives you current time. no format required.
        var beforeTime = moment__WEBPACK_IMPORTED_MODULE_3__('09:00am', format), afterTime = moment__WEBPACK_IMPORTED_MODULE_3__('20:00pm', format);
        dates.forEach(function (element) {
            var time = moment__WEBPACK_IMPORTED_MODULE_3__(element, format);
            if (time.isBetween(beforeTime, afterTime)) {
                value += Math.random() / 50;
            }
            else {
                value += Math.random() / 1000;
            }
            values.push(value);
        });
        if (this._line) {
            console.log(this._line);
            this._line.destroy();
        }
        this._line = new chart_js__WEBPACK_IMPORTED_MODULE_2__(document.getElementById('line-chart'), {
            type: 'line',
            data: {
                labels: dates.reverse(),
                datasets: [{
                        data: values,
                        label: 'Peso do melgueira',
                        borderColor: '#fbba26',
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Peso da melgueira de acordo com o tempo (Últimos 7 dias)'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ApiarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apiario',
            template: __webpack_require__(/*! ./apiario.component.html */ "./src/app/apiario/apiario.component.html"),
            styles: [__webpack_require__(/*! ./apiario.component.scss */ "./src/app/apiario/apiario.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ApiarioComponent);
    return ApiarioComponent;
}());



/***/ }),

/***/ "./src/app/apiario/apiario.module.ts":
/*!*******************************************!*\
  !*** ./src/app/apiario/apiario.module.ts ***!
  \*******************************************/
/*! exports provided: ApiarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiarioModule", function() { return ApiarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _apiario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiario.component */ "./src/app/apiario/apiario.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { NewApiarioComponent } from './new-categories/new-categories.component';

var routes = [
    { path: ':id', component: _apiario_component__WEBPACK_IMPORTED_MODULE_2__["ApiarioComponent"] },
];
var ApiarioModule = /** @class */ (function () {
    function ApiarioModule() {
    }
    ApiarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_apiario_component__WEBPACK_IMPORTED_MODULE_2__["ApiarioComponent"]]
        })
    ], ApiarioModule);
    return ApiarioModule;
}());



/***/ })

}]);
//# sourceMappingURL=apiario-apiario-module.js.map