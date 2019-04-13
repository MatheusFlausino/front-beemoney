(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apiario-apiario-module"],{

/***/ "./src/app/apiario/apiario.component.html":
/*!************************************************!*\
  !*** ./src/app/apiario/apiario.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let colmeia of colmeias\" class=\"col-md-4 col-12 honey-div mb-4\">\n      <div class=\"honey-content d-flex\">\n        <div class=\"col-7 honey\">\n          <span class=\"title-honey\">{{colmeia.colmeia.nome}}</span>\n          <!-- <div class=\"pot\"></div>           -->\n          <div class=\"position-relative d-flex\">\n            <img #gray src=\"/assets/img/honey-jar.png\" class=\"img-fluid m-auto gray-image\" alt=\"\">\n            <img [ngStyle]=\"{'margin': customMargin,'clip-path': 'inset(' +(100-colmeia.percent)+'%' + ' 0 0 0)'}\" *ngIf=\"customMargin\"\n              src=\"/assets/img/honey-jar.png\" class=\"img-fluid copy\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"col-5 variables py-4\">\n          <div class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Preenchido</div>\n            <div *ngIf=\"colmeia && colmeia.percent\" class=\"variable-value\">{{colmeia.percent}}%</div>\n          </div>\n          <!-- <div class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Peso</div>\n            <div class=\"variable-value\">{{colmeia.peso}} Kg</div>\n          </div> -->\n          <div data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"openGraph(colmeia.last_med)\" class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Gráfico</div>\n            <div class=\"variable-btn\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></div>\n          </div>\n          <div data-toggle=\"modal\" data-target=\"#myModal2\" class=\"variable-content d-flex\">\n            <div class=\"variable-title\">Detalhes</div>\n            <div class=\"variable-btn\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog m-4\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <canvas id=\"line-chart\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal\" id=\"myModal2\">\n    <div class=\"modal-dialog m-2\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">          \n            <div class=\"rt-body\">\n              <!-- <canvas id=\"line-chart\"></canvas> -->\n              <div class=\"rt-title\">ACOMPANHAMENTO DA COLMÉIA</div>\n              <div class=\"rt-body\">\n                <div *ngIf=\"colmeia && colmeia.percent\" class=\"rt-container\">\n                  <div class=\"primary\">\n                    <div class=\"label\">Porcentagem da colméia preenchida</div>\n                    <div class=\"value\">{{colmeia.percent}}<span class=\"detail\">%</span></div>\n                    <div class=\"label\">Peso atual da(s) melgueira(s)</div>\n                    <div class=\"value\">{{colmeia.last_med}}<span class=\"detail\">Kg</span></div>\n                    <div class=\"rt-footer\">\n                        <div class=\"ft-content\">\n                          <span class=\"ct-day\">{{colmeia.last_med_day}}</span>\n                          <span class=\"ct-txt\">Último peso<br>registrado</span>\n                          <span class=\"ct-value\">{{colmeia.last_med_yest}} Kg</span>\n                        </div>\n                        <div class=\"ft-content\">\n                          <span class=\"ct-day\">{{colmeia.last_med_day_short}}</span>\n                          <span class=\"ct-txt\">Ganho até<br>o momento</span>\n                          <span class=\"ct-value\">{{colmeia.gain}} Kg</span>\n                        </div>\n                      </div>    \n                  <div class=\"limit\">\n                    <span>Valor limite: {{colmeia.colmeia.peso_cheio}} Kg</span>                    \n                  </div>     \n         \n                </div>\n                <div class=\"detail\"><i>Última Atualização</i></div>\n                <div class=\"detail\"><i>{{colmeia.last_med_day_formated}}</i></div>\n              </div>\n            </div>          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/apiario/apiario.component.scss":
/*!************************************************!*\
  !*** ./src/app/apiario/apiario.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.modal-dialog {\n  max-width: unset; }\n.modal-body {\n  background: #f8f9fa;\n  padding: 0px; }\n.modal-header {\n  background: #f8f9fa; }\n.card-body,\n.exampleChart {\n  position: relative;\n  min-height: 75vh; }\n.rt-body {\n  min-height: 70vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column; }\n.rt-body .rt-title {\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    border-top: 2px solid black;\n    border-bottom: 2px solid black;\n    width: 102%;\n    background: #fbba26; }\n.rt-body .rt-container {\n    text-align: center;\n    width: 100%;\n    padding: 0px 20px; }\n.rt-body .rt-container .detail {\n      line-height: 1;\n      font-size: 16px; }\n.rt-body .rt-container .primary {\n      border: 2px solid lightgray;\n      box-shadow: 7px 9px 15px -5px rgba(0, 0, 0, 0.75);\n      border-radius: 10px;\n      background: white;\n      width: 100%;\n      padding: 15px 20px 10px;\n      position: relative;\n      margin-bottom: 10px;\n      display: flex;\n      align-items: center;\n      flex-direction: column; }\n.rt-body .rt-container .primary .label {\n        line-height: 1; }\n.rt-body .rt-container .primary .limit {\n        width: 120%;\n        background: #fbba26;\n        margin-top: 20px;\n        font-weight: bold;\n        border-top: 2px solid black;\n        border-bottom: 2px solid black;\n        padding: 5px; }\n.rt-body .rt-container .primary .value {\n        font-size: 49px;\n        font-weight: bold;\n        line-height: 1.2; }\n.rt-body .rt-container .primary .value .detail {\n          font-size: 16px !important; }\n.rt-body .rt-footer {\n    display: flex;\n    line-height: 1;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 5px; }\n.rt-body .rt-footer .ft-content {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      text-align: center;\n      border: 1px solid;\n      border-radius: 5px;\n      padding: 5px;\n      margin-top: 10px;\n      background: #fbba26;\n      width: 125%; }\n.rt-body .rt-footer .ft-content .ct-txt {\n        padding: 5px 0px; }\n.rt-body .rt-footer .ft-content .ct-day {\n        border-bottom: 1px solid;\n        font-weight: bold; }\n.rt-body .rt-footer .ft-content .ct-value {\n        font-weight: bold; }\n.honey-content {\n  box-shadow: 7px 9px 15px -5px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  height: 300px;\n  padding: 20px 10px;\n  background-color: white; }\n.honey-content .honey {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.honey-content .variables {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.honey-content .pot {\n    background: url(\"/assets/img/honey-jar.png\") center no-repeat;\n    background-size: contain;\n    height: 100%; }\n.honey-content .pot:before {\n    content: \"\"; }\n.honey-content .title-honey {\n    font-size: 22px;\n    font-weight: bold; }\n.honey-content .gray-image {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n.honey-content .copy {\n    /* Safari */\n    transition: -webkit-clip-path 1s;\n    transition: clip-path 1s;\n    transition: clip-path 1s, -webkit-clip-path 1s;\n    position: absolute; }\n.honey-content .col-5 {\n    padding: 0px; }\n.honey-content .variable-content {\n    font-size: 18px;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n.honey-content .variable-content .variable-title {\n      font-weight: bold; }\n.honey-content .variable-content .variable-btn {\n      padding: 10px 15px;\n      border: 1px solid #777;\n      border-radius: 10px; }\n@media (max-width: 767.98px) {\n  .container {\n    padding: 0px; }\n  .honey-div {\n    padding: 0px; } }\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
    function ApiarioComponent(route, http, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.router = router;
        this.openGraph = function (peso) {
            _this.lineChart(peso);
        };
        this.colmeias = [];
        // this.customMargin = '40px 0px';
        this.colmeia = { percent: 0 };
        this.showImage = true;
        this.porcentagem = 0;
        this.pathRoute = this.router.url.split('/')[1];
        this.configs = __webpack_require__(/*! ../../configs/fw_configs.json */ "./src/configs/fw_configs.json");
        this.config = this.configs.pages[this.pathRoute];
        this.http['get'](this.configs.api + '/colmeias/get-infos?col_id=1').subscribe(function (data) {
            // this.router.navigate(['/'+ this.pathRoute])
            _this.colmeias = [
                data
            ];
            var x = data['percent'];
            data['percent'] = 0;
            _this.colmeia = data;
            // this.colmeia.percent = 10;
            setTimeout(function () {
                _this.colmeia.percent = x;
            }, 500);
        }, function (err) {
            console.log(err);
            console.log("Error occured.");
        });
    }
    ApiarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        // /api/colmeias/get-infos?col_id=1
        this.route.params.subscribe(function (params) { return _this.params = params; });
        // setInterval(() => {
        //   this.http['get'](this.configs.api + '/colmeias/get-infos?col_id=1').subscribe(
        //     data => {
        //       // this.router.navigate(['/'+ this.pathRoute])
        //       this.colmeias = [
        //         data
        //       ]
        //       this.colmeia = data
        //     },
        //     err => {
        //       console.log(err);
        //       console.log("Error occured.")
        //     }
        //   );
        // }, 5000);
        // location.reload();
        // if (this.params && this.params.id) {
        //   if (this.params.id == 1) {
        //     this.colmeias = [
        //       {
        //         nome: "Colmeia 1",
        //         porcentagem: "88",
        //         peso: "8.8"
        //       }
        //     ]
        //   } else if (this.params.id == 2) {
        //     this.colmeias = [
        //       {
        //         nome: "Colmeia 6",
        //         porcentagem: "92",
        //         peso: "9.2"
        //       },
        //       {
        //         nome: "Colmeia 7",
        //         porcentagem: "14",
        //         peso: "1.4"
        //       },
        //       {
        //         nome: "Colmeia 8",
        //         porcentagem: "56",
        //         peso: "5.6"
        //       }
        //     ]
        //   }
        // }
        // this.colmeias = [
        //   {
        //     nome: "Colméia 1",
        //     porcentagem: "88",
        //     peso: "8.8"
        //   }
        // ]
    };
    ApiarioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var element = _this.gray.nativeElement;
            var style = element.currentStyle || window.getComputedStyle(element);
            _this.customMargin = style.marginTop + ' 0px';
        }, 500);
    };
    ApiarioComponent.prototype.lineChart = function (peso) {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_4__().startOf('hour');
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
        var beforeTime = moment__WEBPACK_IMPORTED_MODULE_4__('09:00am', format), afterTime = moment__WEBPACK_IMPORTED_MODULE_4__('20:00pm', format);
        dates.forEach(function (element) {
            var time = moment__WEBPACK_IMPORTED_MODULE_4__(element, format);
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
        this._line = new chart_js__WEBPACK_IMPORTED_MODULE_3__(document.getElementById('line-chart'), {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gray'),
        __metadata("design:type", Object)
    ], ApiarioComponent.prototype, "gray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('color'),
        __metadata("design:type", Object)
    ], ApiarioComponent.prototype, "color", void 0);
    ApiarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apiario',
            template: __webpack_require__(/*! ./apiario.component.html */ "./src/app/apiario/apiario.component.html"),
            styles: [__webpack_require__(/*! ./apiario.component.scss */ "./src/app/apiario/apiario.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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