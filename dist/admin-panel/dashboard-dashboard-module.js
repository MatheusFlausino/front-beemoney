(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
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

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.navbarToggleValue = false;
        this.sidebarToggleValue = true;
        this.sidebarMiniToggleValue = false;
    }
    CommonService.prototype.sidebarToggle = function () {
        this.sidebarToggleValue = !this.sidebarToggleValue;
    };
    CommonService.prototype.sidebarMiniToggle = function () {
        this.sidebarMiniToggleValue = !this.sidebarMiniToggleValue;
    };
    CommonService.prototype.navbarToggle = function () {
        this.navbarToggleValue = !this.navbarToggleValue;
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/dashboard-home/dashboard-home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-home/dashboard-home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-12 card-apiario\">\n      <div class=\"body-apiario mb-4 d-flex\">\n        <div class=\"qtd-colmeias\"><img src=\"/assets/img/bee.png\"> 5 colmeias</div>\n        <div class=\"title\">Apiário - Capixingui</div>\n        <div class=\"desc-body mt-auto\">\n          <div class=\"desc mb-2\">Descrição de um apiário Capixingui</div>\n          <div class=\"location\"><i><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Ortigueira - PR</i></div>\n          <div class=\"time\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Criado a 42 dias</div>\n        </div>\n        <div [routerLink]=\"'/apiario/1'\" class=\"btn-show d-flex\">\n          <!-- <img src=\"/assets/img/honeypot.png\" alt=\"\"> -->\n          <div class=\"desc-show\">Detalhes da produção</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-12 card-apiario\">\n      <div class=\"body-apiario mb-4 d-flex\">\n        <div class=\"qtd-colmeias\"><img src=\"/assets/img/bee.png\"> 3 colmeias</div>\n        <div class=\"title\">Apiário - Jataí</div>\n        <div class=\"desc-body mt-auto\">\n          <div class=\"desc mb-2\">Descrição de um apiário de Jataí</div>\n          <div class=\"location\"><i><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Londrina - PR</i></div>\n          <div class=\"time\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Criado a 27 dias</div>\n        </div>\n        <div [routerLink]=\"'/apiario/2'\" class=\"btn-show d-flex\">\n          <!-- <img src=\"/assets/img/honeypot.png\" alt=\"\"> -->\n          <div class=\"desc-show\">Detalhes da produção</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-home/dashboard-home.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-home/dashboard-home.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.card-apiario .body-apiario {\n  box-shadow: 7px 9px 15px -5px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n  height: 200px;\n  padding: 30px;\n  background-color: white;\n  flex-direction: column; }\n.card-apiario .body-apiario img {\n    height: 18px; }\n.card-apiario .body-apiario .title {\n    font-size: 22px;\n    font-weight: bold; }\n.card-apiario .body-apiario .location {\n    color: #777777;\n    font-size: 14px; }\n.card-apiario .body-apiario .time {\n    font-size: 14px; }\n.card-apiario .body-apiario .qtd-colmeias {\n    position: absolute;\n    background: #fbba26;\n    padding: 5px 10px;\n    border-radius: 10px;\n    right: 30px; }\n.card-apiario .body-apiario .btn-show {\n    position: absolute;\n    bottom: 50px;\n    right: 30px;\n    border: black;\n    padding: 8px 10px;\n    border-radius: 10px;\n    border: 1px solid black;\n    cursor: pointer; }\n.card-apiario .body-apiario .btn-show img {\n      height: 30px; }\n.card-apiario .body-apiario .btn-show .desc-show {\n      font-weight: bold;\n      font-size: 14px; }\n@media (max-width: 767.98px) {\n  .container {\n    padding: 0px; }\n  .card-apiario {\n    padding: 0px; }\n  .body-apiario {\n    padding: 30px 10px !important; }\n  .btn-show {\n    right: 10px !important; }\n  .qtd-colmeias {\n    right: 10px !important; } }\n"

/***/ }),

/***/ "./src/app/dashboard-home/dashboard-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-home/dashboard-home.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fullcalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fullcalendar */ "./node_modules/fullcalendar/dist/fullcalendar.js");
/* harmony import */ var fullcalendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fullcalendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*!  */ "./node_modules//.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_js_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/js/services */ "./src/assets/js/services/index.ts");
/* harmony import */ var _assets_js___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/ */ "./src/assets/js/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent(MuralApi, CategoriaApi, ToDoApi, LoopBackAuth) {
        this.MuralApi = MuralApi;
        this.CategoriaApi = CategoriaApi;
        this.ToDoApi = ToDoApi;
        this.LoopBackAuth = LoopBackAuth;
        // activitys = [
        //   { icon: 'edit', head: 'heading', body: 'body' },
        //   { icon: 'map', head: 'heading', body: 'body' },
        //   { icon: 'edit', head: 'heading', body: 'body' },
        //   { icon: 'edit', head: 'heading', body: 'body' },
        //   { icon: 'map', head: 'heading', body: 'body' },
        //   { icon: 'map', head: 'heading', body: 'body' }
        // ];
        this.tasks = [];
        // msgs = [
        //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
        //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
        //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
        //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
        //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
        //   { me: true, date: "2018/09/01 19:30", text: 'Mensagem minha' },
        //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
        //   { me: false, date: "2018/09/01 19:30", text: 'Mensagem dos parça' },
        // ];
        this.msgs = [];
        this.userId = LoopBackAuth.getCurrentUserId();
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
        // this.getAllMsgs()
        // this.getAllTasks()
        // setInterval(() => this.getAllMsgs(), 3000);
        // console.log(localStorage.getItem());
        // this.salesChart();
        // this.dayChart();
        // this.fullChart();
        // this.calendar();
        // this.scrollToBottom();
    };
    DashboardHomeComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.ToDoApi.find({}).subscribe(function (response) {
            if (response.length != 0) {
                response.forEach(function (element) {
                    console.log(element);
                    _this.tasks.push({ text: element.message, check: element.check, id: element.id });
                });
                //this.msgs.reverse();
                console.log(_this.tasks);
            }
        });
    };
    DashboardHomeComponent.prototype.updateTask = function (data) {
        console.log(data);
        var _data = __assign({}, data);
        _data['message'] = _data.text;
        _data['check'] = !_data.check;
        delete _data['id'];
        this.ToDoApi.updateAttributes(data.id, _data).subscribe(function (response) {
            if (response.length != 0) {
                console.log(response);
            }
        });
    };
    DashboardHomeComponent.prototype.getAllMsgs = function () {
        var _this = this;
        if (this.msgs.length == 0) {
            this.MuralApi.find({ include: 'user', limit: 20, order: 'createdAt DESC' }).subscribe(function (response) {
                if (response.length != 0) {
                    response.forEach(function (element) {
                        _this.msgs.push({ me: (_this.userId === element.user.id) ? true : false, user: element.user.name, date: __WEBPACK_IMPORTED_MODULE_4__(element.date).format("YYYY/MM/DD HH:mm"), text: element.message });
                    });
                    _this.msgs.reverse();
                }
            });
        }
        else {
            this.MuralApi.find({ limit: 1, order: 'createdAt DESC' }).subscribe(function (response) {
                if (_this.msgs[_this.msgs.length - 1].text !== response[0].message) {
                    _this.msgs = [];
                    _this.getAllMsgs();
                }
            });
        }
    };
    DashboardHomeComponent.prototype.pushMsg = function (f) {
        var _this = this;
        if (f.form.valid && f.form.value.text != '') {
            this.MuralApi.create({ message: f.form.value.text, date: __WEBPACK_IMPORTED_MODULE_4__(), id_u: this.userId }).subscribe(function (response) {
                _this.msgs.push({ me: true, date: __WEBPACK_IMPORTED_MODULE_4__().format("YYYY/MM/DD HH:mm"), text: f.form.value.text });
                f.form.reset();
            });
        }
    };
    DashboardHomeComponent.prototype.pushTask = function (f2) {
        var _this = this;
        if (f2.form.valid && f2.form.value.text != '') {
            this.ToDoApi.create({ message: f2.form.value.text, check: false, id_u: this.userId }).subscribe(function (response) {
                _this.tasks.push({ check: false, text: f2.form.value.text, id: response.id });
                f2.form.reset();
            });
        }
    };
    DashboardHomeComponent.prototype.deleteTask = function (data) {
        this.tasks = this.tasks.filter(function (obj) { return obj !== data; });
        this.ToDoApi.deleteById(data.id).subscribe(function (response) {
        });
    };
    DashboardHomeComponent.prototype.calendar = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cal').fullCalendar({
            themeSystem: 'bootstrap4',
            fixedWeekCount: false,
            height: 400,
            header: {
                left: '  ',
                center: ' title ',
                right: 'prev next today'
            },
            buttonText: {
                today: ' '
            }
        });
    };
    DashboardHomeComponent.prototype.salesChart = function () {
        var sales = new chart_js__WEBPACK_IMPORTED_MODULE_2__(document.getElementById('month-sales-chart'), {
            type: 'line',
            data: {
                labels: [0, 20, 40, 30, 10, 25, 36],
                datasets: [{
                        data: [29, 25, 35, 30, 32, 25, 36],
                        borderColor: '#3ebb8c',
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        radius: 2
                    }],
            },
            options: {
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }]
                },
                title: false,
                legend: false,
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    }
                },
                maintainAspectRatio: false,
            }
        });
    };
    DashboardHomeComponent.prototype.dayChart = function () {
        var day = new chart_js__WEBPACK_IMPORTED_MODULE_2__(document.getElementById('day-sales-chart'), {
            type: 'line',
            data: {
                labels: [0, 20, 40, 30, 10, 25, 36],
                datasets: [{
                        data: [29, 25, 35, 30, 32, 25, 36],
                        borderColor: '#3ebb8c',
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        radius: 2
                    }],
            },
            options: {
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }]
                },
                title: false,
                legend: false,
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 0
                    }
                },
                maintainAspectRatio: false,
            }
        });
    };
    DashboardHomeComponent.prototype.fullChart = function () {
        var full = new chart_js__WEBPACK_IMPORTED_MODULE_2__(document.getElementById('full-chart'), {
            type: 'line',
            data: {
                labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [
                    {
                        data: [29, 25, 30, 25, 30, 25, 36, 30, 25, 29, 18, 30, 32, 25],
                        backgroundColor: 'rgba(144,146,165,.4)',
                        borderColor: '#9092a5',
                        borderWidth: 2,
                        radius: 2
                    },
                    {
                        data: [22, 15, 30, 34, 25, 39, 30, 36, 30, 20, 20, 34, 22, 39],
                        backgroundColor: 'rgba(62,187,140,.4)',
                        borderColor: '#3ebb8c',
                        borderWidth: 2,
                        radius: 2
                    }
                ],
            },
            options: {
                scales: {
                    xAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }],
                    yAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }]
                },
                title: false,
                legend: false,
                // layout: {
                //   padding: {
                //     left:5,
                //     right: 5,
                //     top: 5,
                //     bottom: 5
                //   }
                // },
                maintainAspectRatio: false,
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardHomeComponent.prototype, "chatDiv", void 0);
    DashboardHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-home',
            template: __webpack_require__(/*! ./dashboard-home.component.html */ "./src/app/dashboard-home/dashboard-home.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-home.component.scss */ "./src/app/dashboard-home/dashboard-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_assets_js_services__WEBPACK_IMPORTED_MODULE_5__["MuralApi"], _assets_js_services__WEBPACK_IMPORTED_MODULE_5__["CategoriaApi"], _assets_js_services__WEBPACK_IMPORTED_MODULE_5__["ToDoApi"], _assets_js___WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"]])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-home/dashboard-home.component */ "./src/app/dashboard-home/dashboard-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            { path: '', component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"] },
            { path: 'categories', loadChildren: '../categories/categories.module#CategoriesModule' },
            { path: 'apiario', loadChildren: '../apiario/apiario.module#ApiarioModule' },
            { path: 'invoice', loadChildren: '../invoice/invoice.module#InvoiceModule' },
            //template \/
            { path: 'components', loadChildren: '../components/components.module#ComponentsModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormsLocalModule' },
            { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'editors', loadChildren: '../editors/editors.module#EditorsModule' },
            { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarModule' }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logged\" class=\"wrapper\" [class.sidebar-mini]=\"commonService.sidebarMiniToggleValue\">\n  <div class=\"sidebar-panel\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"panel-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n<app-auth *ngIf=\"!logged\"></app-auth>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.wrapper {\n  display: flex; }\n.main-panel {\n  transition: all 0.2s ease-in-out; }\n.main-panel .panel-content {\n    margin: 50px;\n    margin-top: 100px; }\n@media (max-width: 1199.98px) {\n  .sidebar-panel {\n    width: 220px; }\n  .main-panel {\n    width: calc(100% - 220px); }\n    .main-panel .panel-content {\n      margin: 25px;\n      margin-top: 70px; } }\n@media (max-width: 991.98px) {\n  .sidebar-panel {\n    width: 62px; }\n  .main-panel {\n    width: calc(100% - 62px); } }\n@media (max-width: 767.98px) {\n  .sidebar-panel {\n    width: 0; }\n  .main-panel {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _assets_js_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/services */ "./src/assets/js/services/index.ts");
/* harmony import */ var _assets_js___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/ */ "./src/assets/js/index.ts");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, cs, renderer, UsuarioApi, LoopBackAuth) {
        this.router = router;
        this.cs = cs;
        this.renderer = renderer;
        this.UsuarioApi = UsuarioApi;
        this.LoopBackAuth = LoopBackAuth;
        this.commonService = cs;
        // this.LoopBackAuth.clear()
        this.logged = this.LoopBackAuth.getAccessTokenId();
        nprogress__WEBPACK_IMPORTED_MODULE_5__["configure"]({ showSpinner: false });
        this.renderer.addClass(document.body, 'preload');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.MenuApi.find({}).subscribe((response: any) => {
        //   console.log(response);      
        // });
        // this.UsuarioApi.login({email:"teste@teste.com",password:"123@teste"}).subscribe((response: any) => {
        //   LoopBackConfig.setAuthPrefix(response)     
        // });
        var _this = this;
        this.router.events.subscribe(function (obj) {
            if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                nprogress__WEBPACK_IMPORTED_MODULE_5__["start"]();
                nprogress__WEBPACK_IMPORTED_MODULE_5__["set"](0.4);
            }
            else if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                nprogress__WEBPACK_IMPORTED_MODULE_5__["set"](0.9);
                setTimeout(function () {
                    nprogress__WEBPACK_IMPORTED_MODULE_5__["done"]();
                    nprogress__WEBPACK_IMPORTED_MODULE_5__["remove"]();
                }, 500);
            }
            else if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.cs.navbarToggleValue = false;
                _this.cs.sidebarToggleValue = true;
                window.scrollTo(0, 0);
            }
        });
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderer.removeClass(document.body, 'preload');
        }, 300);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _assets_js_services__WEBPACK_IMPORTED_MODULE_3__["UsuarioApi"], _assets_js___WEBPACK_IMPORTED_MODULE_4__["LoopBackAuth"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard-home/dashboard-home.component */ "./src/app/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_6__["DashboardHomeComponent"],
                _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <!-- <div class=\"container\">\n    <p class=\"text-center\"><a href=\"https://www.github.com/yadav-saurabh/angular-admin-panel\" target=\"_blank\">Github Link <i class=\"material-icons\">launch</i> </a></p> </div> -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navigation-bar\"  [class.hidden]=\"commonService.navbarToggleValue\" [class.sidebar-hidden]=\"commonService.sidebarToggleValue\">\n  <div class=\"nav-toggle-btn\" [class.open]=\"!commonService.sidebarToggleValue\" (click)=\"commonService.sidebarToggle()\">\n    <span *ngFor=\"let number of [0,1,2]\"></span>\n  </div>\n  <div class=\"navbar-brand\">\n    <a href=\"/\">\n        <img class=\"brandImg\" height=\"40px\" src=\"/assets/img/logo.png\" alt=\"brandImg\">      \n    </a>\n    <a class=\"nav-item float-right\" (click)=\"logout()\"><i class=\"material-icons\">exit_to_app</i></a>\n  </div>\n  \n  <ul class=\"left-ul\">\n    <li>\n      <button id=\"minimizeSidebar\" class=\"btn btn-just-icon btn-round btn-light\" (click)=\"commonService.sidebarMiniToggle()\">\n        <i *ngIf=\"!commonService.sidebarMiniToggleValue\" class=\"material-icons sd-visible\">more_vert</i>\n        <i *ngIf=\"commonService.sidebarMiniToggleValue\" class=\"material-icons sdm-visible\">view_list</i>\n      </button>\n    </li>\n    <!-- <li  [routerLink]=\"'/'\" class=\"nav-item\"><img class=\"brandImg\" height=\"40px\" src=\"/assets/img/logo.png\" alt=\"brandImg\"></li> -->\n  </ul>\n  <ul class=\"right-ul\">\n    <!-- <li>\n      <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2 no-border\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn  btn-just-icon btn-round btn-light\" type=\"submit\"><i class=\"material-icons\">search</i></button>\n      </form>\n    </li> -->\n    <li class=\"nav-item\"><i class=\"material-icons\">notifications</i></li>\n    <li class=\"nav-item\"><i class=\"material-icons\">person</i></li>\n    <li class=\"nav-item\" (click)=\"logout()\"><i class=\"material-icons\">exit_to_app</i></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.navigation-bar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 0 1rem;\n  z-index: 1009;\n  height: 50px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  background-color: #fff; }\n.navigation-bar.hidden {\n    top: -50px; }\n.navigation-bar ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    align-items: center; }\n.navigation-bar ul li {\n      display: flex;\n      padding: 0.5em; }\n.navigation-bar .navbar-brand {\n    display: none;\n    text-align: center; }\n/* navbar burger button */\n.nav-item {\n  cursor: pointer; }\n.nav-item:hover {\n    background-color: rgba(27, 35, 42, 0.9);\n    color: white;\n    transition: 0.5s;\n    opacity: 1; }\n.nav-toggle-btn {\n  display: none;\n  width: 2.2rem;\n  padding: 1rem 0;\n  position: absolute; }\n.nav-toggle-btn span {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background: #000;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: .25s ease-in-out; }\n.nav-toggle-btn span:nth-child(1) {\n      top: 5px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n.nav-toggle-btn span:nth-child(2) {\n      top: 15px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n.nav-toggle-btn span:nth-child(3) {\n      top: 25px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n/* navbar burger button animation*/\n.nav-toggle-btn.open span:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  top: 2px;\n  left: 4px; }\n.nav-toggle-btn.open span:nth-child(2) {\n  width: 0%;\n  opacity: 0; }\n.nav-toggle-btn.open span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  top: 27px;\n  left: 4px; }\n@media (max-width: 1199.98px) {\n  .navigation-bar {\n    left: 220px; } }\n@media (max-width: 991.98px) {\n  #minimizeSidebar {\n    display: none; }\n  .nav-toggle-btn {\n    display: inline-block; }\n  .navigation-bar {\n    left: 62px; }\n    .navigation-bar:not(.sidebar-hidden) {\n      left: 0; }\n    .navigation-bar ul.left-ul {\n      display: none; }\n    .navigation-bar .navbar-brand {\n      display: block;\n      width: 40%; } }\n@media (max-width: 767.98px) {\n  .navigation-bar {\n    left: 0; }\n    .navigation-bar ul {\n      display: none; }\n    .navigation-bar .navbar-brand {\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _assets_js___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/ */ "./src/assets/js/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cs, LoopBackAuth) {
        var _this = this;
        this.cs = cs;
        this.LoopBackAuth = LoopBackAuth;
        this.previousScroll = 0;
        this.logout = function () {
            _this.LoopBackAuth.clear();
            window.location.reload();
        };
        this.hideNavbar = function () {
            setTimeout(function () {
                _this.cs.navbarToggleValue = true;
            }, 300);
        };
        this.showNavbar = function () {
            setTimeout(function () {
                _this.cs.navbarToggleValue = false;
            }, 300);
        };
        this.commonService = cs;
    }
    NavbarComponent.prototype.onWindowScroll = function (event) {
        var currentScroll = window.pageYOffset;
        if (currentScroll > 60 && currentScroll < $(document).height() - $(window).height()) {
            if (currentScroll > this.previousScroll) {
                this.hideNavbar();
            }
            else {
                this.showNavbar();
            }
            this.previousScroll = currentScroll;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onWindowScroll", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _assets_js___WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\"  [class.hide]=\"commonService.sidebarToggleValue\">\n  <div class=\"sidebar-header align-middle\">\n    <!-- <img class=\"brandImg\" src=\"/assets/img/logo.png\" alt=\"brandImg\"> -->\n    <span class=\"text-uppercase p-3\">BEE</span>\n    <strong [routerLink]=\"'/'\" class=\"heading text-uppercase d-inline-block mini-hide\"><img [routerLink]=\"'/'\" class=\"brandImg\" height=\"40px\" src=\"/assets/img/logo.png\" alt=\"brandImg\"></strong>\n  </div>\n  <hr class=\"underline\"> \n  <div class=\"sidebar-body\">\n    <ul>\n      <li *ngFor=\"let item of sidebarItems;let i = index;\" class=\"sidebar-item\" [class.active]=\"temp.isActive\" #temp=\"routerLinkActive\" routerLinkActive  [routerLinkActiveOptions]=\"{exact: true}\">\n        <a *ngIf=\"!item.subItem\" [routerLink]=\"item.link\" ><i class=\"material-icons\">{{item.icon}}</i><strong class=\"mini-hide text-capitalize \">{{item.label}}</strong>\n          <span class=\"arrow mini-hide\" ></span>\n        </a>\n        <!-- if menu contains children -->\n        <a *ngIf=\"item.subItem\" data-toggle=\"collapse\" [href]=\"'#'+item.label.split(' ').join('')\" [class.collapsed]=\"!temp.isActive\"  ><i class=\"material-icons\">{{item.icon}}</i><strong class=\"text-capitalize mini-hide\">{{item.label}}</strong><i class=\"toggle-icon material-icons\">expand_less</i></a>\n        <div *ngIf=\"!!item.subItem\" class=\"collapse\" [class.show]=\"temp.isActive\" [id]=\"item.label.split(' ').join('')\">\n          <li *ngFor=\"let subItem of item.subItem\" class=\"sidebar-sub-item\" routerLinkActive=\"active\"><a [routerLink]=subItem.link><span class=\"txt-icon text-uppercase\">{{subItem.icon}}</span><strong class=\"text-capitalize mini-hide\"> {{subItem.label}} </strong><span class=\"arrow mini-hide\"></span></a></li>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n<div *ngIf=\"!commonService.sidebarToggleValue\" class=\"sidebarOutside\" (click)=\"commonService.sidebarToggle()\" ></div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n/**** sidebar ****/\n.sidebar {\n  left: 0;\n  top: 0;\n  position: fixed;\n  overflow: hidden;\n  height: 100vh;\n  color: #fff;\n  z-index: 999;\n  box-shadow: 0 1rem 2.1rem -0.9rem rgba(0, 0, 0, 0.6), 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.12), 0 0.5rem 0.6rem 0.25rem rgba(0, 0, 0, 0.2);\n  background-color: rgba(27, 35, 42, 0.9);\n  /** header **/\n  /** body **/\n  /** items **/\n  /** sub items **/\n  /** hover and active **/\n  /** arrow **/ }\n.sidebar-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    height: 50px;\n    white-space: nowrap;\n    overflow: hidden; }\n.sidebar-body {\n    height: calc(100% - 50px);\n    overflow: hidden;\n    overflow-y: auto; }\n.sidebar-body::-webkit-scrollbar {\n      width: 0.3rem; }\n.sidebar-body::-webkit-scrollbar-thumb {\n      background: rgba(255, 255, 255, 0.7); }\n.sidebar-body::-webkit-scrollbar-thumb:hover {\n      background: rgba(255, 255, 255, 0.9); }\n.sidebar-body::-webkit-scrollbar-track {\n      background: transparent; }\n.sidebar-body ul {\n      padding: 0;\n      list-style: none; }\n.sidebar-body ul li {\n        position: relative; }\n.sidebar-item a {\n    color: #fff;\n    display: block;\n    margin: 0.9rem 0 0 0.6rem;\n    border-radius: 0.25rem 0 0 0.25rem;\n    padding: 0.5rem 0.8rem;\n    white-space: nowrap;\n    overflow: hidden; }\n.sidebar-item a .mini-hide {\n      padding-left: 1.2rem; }\n.sidebar-item span.arrow {\n    border: 1.3rem solid transparent; }\n.sidebar-sub-item a {\n    margin-left: 1rem;\n    padding: .3rem .7rem; }\n.sidebar-sub-item span.txt-icon {\n    display: inline-block;\n    width: 1.5rem; }\n.sidebar-sub-item span.arrow {\n    display: none;\n    border: 1rem solid transparent;\n    border-right: 1.5rem solid; }\n.sidebar-item, .sidebar-sub-item {\n    /* collapse icon anim */ }\n.sidebar-item:hover:not(.active) > a, .sidebar-sub-item:hover:not(.active) > a {\n      background-color: rgba(255, 255, 255, 0.2); }\n.sidebar-item:hover:not(.active) > a span.arrow, .sidebar-sub-item:hover:not(.active) > a span.arrow {\n        display: inline-block;\n        border-right-color: rgba(255, 255, 255, 0.3); }\n.sidebar-item.active > a, .sidebar-sub-item.active > a {\n      background-color: rgba(255, 255, 255, 0.4); }\n.sidebar-item.active > a span.arrow, .sidebar-sub-item.active > a span.arrow {\n        display: inline-block;\n        border-right-color: rgba(255, 255, 255, 0.6); }\n.sidebar-item.active > a:not([data-toggle=collapse]), .sidebar-sub-item.active > a:not([data-toggle=collapse]) {\n        background-color: #fbba26;\n        box-shadow: 0 0.15rem 1rem 0 rgba(255, 255, 255, 0.14), 0 0.3rem 0.5rem -2rem rgba(255, 255, 255, 0.4); }\n.sidebar-item > a[data-toggle=collapse] i.toggle-icon, .sidebar-sub-item > a[data-toggle=collapse] i.toggle-icon {\n      position: absolute;\n      right: .5rem;\n      top: .5rem;\n      transition: all 0.2s ease-in-out; }\n.sidebar-item > a[data-toggle=collapse].collapsed i.toggle-icon, .sidebar-sub-item > a[data-toggle=collapse].collapsed i.toggle-icon {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      transition: all 0.2s ease-in-out; }\n.sidebar span.arrow {\n    display: none;\n    position: absolute;\n    right: -.5rem;\n    top: 0;\n    border-right: 2rem solid; }\n.sidebar .mini-hide {\n    display: inline-block; }\n/*sidebar outside div (onclick close)*/\n.sidebarOutside {\n  display: none;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 50%;\n  z-index: 998;\n  background-color: rgba(0, 0, 0, 0.3); }\n/** media break points **/\n@media (max-width: 1199.98px) {\n  .sidebar {\n    width: 220px; } }\n@media (max-width: 991.98px) {\n  .sidebar {\n    width: 300px; }\n    .sidebar.hide {\n      width: 62px; }\n  .sidebarOutside {\n    display: block; } }\n@media (max-width: 767.98px) {\n  .sidebar {\n    width: 240px; }\n    .sidebar.hide {\n      width: 0;\n      left: -5%; }\n  .sidebar-header {\n    height: 49px; } }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(cs) {
        this.cs = cs;
        this.sidebarItems = [
            { link: '/', label: 'Apiários', icon: 'dashboard' },
        ];
        this.commonService = cs;
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map