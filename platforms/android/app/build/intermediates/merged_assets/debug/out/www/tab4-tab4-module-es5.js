(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Paramètres\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  \n  <ion-list lines=\"full\">\n\n    <ion-item-divider color=\"light\">\n\n    </ion-item-divider>\n\n    <ion-item disabled button id=\"profil\">\n      <ion-avatar>\n        <img src=\"https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg\">\n      </ion-avatar>\n      <ion-label>Profil</ion-label> <ion-note slot=\"end\">(soon)</ion-note>\n    </ion-item>\n\n    <ion-item-divider color=\"light\">\n\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label>Activer/Desactiver Dark Mode</ion-label>\n      <ion-toggle slot=\"end\" (ionChange)=\"toggleColorTheme($event)\" [checked]=\"checked\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab4/tab4-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab4/tab4-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function srcAppTab4Tab4RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.module.ts ***!
      \*************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "./src/app/tab4/tab4-routing.module.ts");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "./src/app/tab4/tab4.page.ts");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab4/tab4.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/****    HEADER    ****/\n/****    CONTENT    ****/\n#profil {\n  --padding-top: 10px;\n  --inner-padding-bottom: 10px;\n}\nion-item ion-avatar {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUVBLHdCQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0FBREo7QUFLSTtFQUNJLGtCQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogICAgSEVBREVSICAgICoqKiovXHJcblxyXG4vKioqKiAgICBDT05URU5UICAgICoqKiovXHJcblxyXG4jcHJvZmlsIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab4/tab4.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab4/tab4.page.ts ***!
      \***********************************/

    /*! exports provided: Tab4Page */

    /***/
    function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_native_storage___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/native-storage/ */
      "./node_modules/@ionic-native/native-storage/index.js");

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(renderer) {
          _classCallCheck(this, Tab4Page);

          this.renderer = renderer;
          this.checked = false;

          if (document.body.getAttribute('color-theme') == 'dark') {
            this.checked = true;
          }
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleColorTheme",
          value: function toggleColorTheme(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var color, darkMode;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // VARIABLES LOCALES
                      color = '';
                      darkMode = false;

                      if (ev.detail.checked) {
                        // SI CHECKED
                        color = 'dark';
                        darkMode = true;
                      } else {
                        color = 'light';
                        darkMode = false;
                      } // CHANGE COLOR THEME + SET BOOL DARKMODE IN STORAGE


                      this.renderer.setAttribute(document.body, 'color-theme', color);
                      _context.next = 6;
                      return _ionic_native_native_storage___WEBPACK_IMPORTED_MODULE_2__["NativeStorage"].setItem('dark-mode', {
                        darkMode: darkMode
                      }).then(function () {
                        return console.log('Stored item');
                      }, function (error) {
                        return console.error('Error storing item', error);
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab4.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab4.page.scss */
        "./src/app/tab4/tab4.page.scss"))["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map