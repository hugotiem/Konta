(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/add.component.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/add.component.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2AddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button fill=\"clear\" (click)=\"close(undefined)\" slot=\"start\">\n      <ion-label>Annuler</ion-label>\n    </ion-button>\n    <ion-title>Nouveau</ion-title>\n    <ion-button (click)=\"update()\" slot=\"end\" fill=\"clear\">\n      <ion-label *ngIf=\"!isAlreadySaved\">Ajouter</ion-label>\n      <ion-label *ngIf=\"isAlreadySaved\">Save</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar>\n    <ion-title size=\"large\">Ajouter item</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" style=\"--color: black\" (click)=\"openOptionsPopover($event)\">\n      <ion-icon name=\"chevron-down\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n  \n  <ion-list class=\"content\" lines=\"none\">\n\n    <ion-item mode=\"ios\">\n      <ion-input [(ngModel)]=\"title\" type=\"text\" placeholder=\"Title\"></ion-input>\n      <span class=\"input-feet\"></span>\n    </ion-item>  \n\n    <ion-list *ngIf=\"formule\">\n      <ion-item-sliding #slide *ngFor=\"let formule of formuleContent; let i = index\">\n        <ion-item id=\"formule-{{ i }}-item\" class=\"items\" (click)=\"openProduitsList($event, i)\">\n          <ion-note slot=\"start\">Item {{ i + 1 }} : </ion-note>\n          <ion-label> {{ formule.title }} </ion-label>\n          <span class=\"input-feet\"></span>\n          <ion-icon name=\"chevron-down\" class=\"focus-icon\" size=\"small\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item-options side=\"end\" style=\"width: 70px;\" (click)=\"delete(i, slide)\">\n          <ion-item-option color=\"danger\" style=\"width: 100%;\">\n            <ion-icon style=\"position: absolute; top: 25%; right: 50%; transform: translate(50%, -50%);\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item lines=\"full\" (click)=\"openQuantityModal('qte-' + i + '-item', formule)\" id=\"qte-{{i}}-item\">\n          <ion-note>Quantité : </ion-note>\n          <ion-label slot=\"end\" style=\"text-align: end;\"> {{formule.quantite}} </ion-label>\n          <span class=\"input-feet\"></span>\n          <ion-icon name=\"chevron-down\" class=\"focus-icon\" size=\"small\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n      </ion-item-sliding>\n\n      <ion-item>\n        <ion-button fill=\"clear\" expand=\"block\" (click)=\"addItems()\">\n          <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n          <ion-label>Ajouter item</ion-label>\n        </ion-button>\n      </ion-item>\n    </ion-list>\n\n    <ion-item mode=\"ios\" disabled>\n      <ion-label>Catégorie : </ion-label>\n     <ion-label slot=\"end\" style=\"text-align: end;\"> {{ category }} </ion-label>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-item mode=\"ios\">\n      <ion-input [disabled]=\"disabledForFormule\" [(ngModel)]=\"firstPrice\" type=\"number\" placeholder=\"prix à l'achat\"></ion-input>\n      <span class=\"input-feet second-size\"></span>\n      <ion-label>EUR</ion-label>\n      <ion-icon size=\"small\" name=\"chevron-down\"></ion-icon>\n    </ion-item>\n\n    <ion-item mode=\"ios\">\n      <ion-input [(ngModel)]=\"price\" type=\"number\" placeholder=\"prix à la revente\"></ion-input>\n      <span class=\"input-feet second-size\"></span>\n      <ion-label>EUR</ion-label>\n      <ion-icon size=\"small\" name=\"chevron-down\"></ion-icon>\n    </ion-item>\n\n    <ion-item button *ngIf=\"!formule\" id=\"modal\" detail=\"false\" (click)=\"openQuantityModal('modal', undefined)\">\n      <ion-note>Qantité : </ion-note>\n      <ion-label slot=\"end\" style=\"text-align: right;\">{{ stock }}</ion-label>\n      <ion-icon name=\"chevron-down\" class=\"focus-icon\" size=\"small\" slot=\"end\"></ion-icon>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"error\">\n      <ion-label style=\"font-size: 10pt;\" color=\"danger\">*REMPLIE TOUS LES CHAMPS SALE FDP</ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/options/options.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/options/options.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2AddOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-item button mode=\"ios\" detail=\"false\" lines=\"full\" (click)=\"produit()\">\n    <ion-label>Produit</ion-label>\n  </ion-item>\n  <ion-item button mode=\"ios\" detail=\"false\" lines=\"none\" (click)=\"formule()\">\n    <ion-label>Formule</ion-label>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/produits-list/produits-list.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/produits-list/produits-list.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2AddProduitsListProduitsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-list lines=\"full\" style=\"overflow: scroll;\">\n  <ion-radio-group>\n    <div *ngFor=\"let item of items\">\n      <ion-item *ngIf=\"!item.alreadyUsed\" mode=\"ios\" lines=\"none\" style=\"width: 100%;\" (click)=\"saveItemsInFormule($event, item)\">\n        <ion-label> {{ item.title }} </ion-label>\n        <ion-radio slot=\"end\" color=\"primary\"></ion-radio>\n    </ion-item>\n  </div>\n  </ion-radio-group>\n\n</ion-list>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/quantite/quantite.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/quantite/quantite.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2AddQuantiteQuantiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-button fill=\"clear\" (click)=\"close(false)\">\n    <ion-label>Annuler</ion-label>\n  </ion-button>\n\n  <ion-button slot=\"end\" fill=\"clear\" (click)=\"close(true)\">\n    <ion-label>Valider</ion-label>\n  </ion-button>\n</ion-toolbar>\n\n<ion-content id=\"card-modal\" style=\"--overflow: hidden;\">\n  <h1 style=\"text-align: center; font-size: 25pt; margin: 0;\"><strong>Quantité</strong></h1>\n\n  <ion-item lines=\"none\" style=\"--padding-top: 15%; --padding-start: 20%; --padding-end: 20%; --inner-padding-end: 0\">\n\n    <ion-button [disabled]=\"disabled\" fill=\"clear\" size=\"large\" style=\"margin: 0; --padding-start: 0; --padding-end: 0; --color: black\" (click)=\"remove()\">\n      <div class=\"plus-button\" #div style=\"margin: 0;\">\n        <ion-icon style=\"font-size: 30pt; margin: 0;\" name=\"remove\"></ion-icon>\n      </div>\n    </ion-button>\n\n    <ion-button [disabled]=\"stop\" slot=\"end\" fill=\"clear\" size=\"large\" style=\"margin: 0; --padding-start: 0; --padding-end: 0; --color: black\" (click)=\"add()\">\n      <div class=\"plus-button\" #div style=\"margin: 0;\">\n        <ion-icon style=\"font-size: 30pt; margin: 0;\" name=\"add\"></ion-icon>\n      </div>\n    </ion-button>\n\n  </ion-item>\n\n    \n\n  <ion-input id=\"number\" [(ngModel)]=\"quantite\" readonly [value]=\"quantite\" type=\"text\"></ion-input>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2PopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-radio-group>\n    <ion-list-header>\n      <ion-label>Trier par :</ion-label>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let item of items\">\n      <ion-label style=\"font-size: 12pt;\"> {{ item.name }} </ion-label>\n      <ion-icon *ngIf=\"item.value == 'asc-stock'\" slot=\"end\" size=\"small\" name=\"arrow-up\"></ion-icon>\n      <ion-icon *ngIf=\"item.value == 'desc-stock'\" slot=\"end\" size=\"small\" name=\"arrow-down\"></ion-icon>\n      <ion-radio color=\"primary\" slot=\"end\" value=\"{{ item.value }}\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }];
      /*const routes: Routes = [];
      
      if(){
        routes.push({
          path: '',
          loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        });
      } else {
        routes.push({
          path: '',
          loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
        });
      }*/

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/native-storage */
      "./node_modules/@ionic-native/native-storage/index.js"); // NATIVE-IONIC


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, afDB, renderer) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.afDB = afDB;
          this.renderer = renderer;
          this.items = [];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.firebaseNotifications();

              _this.isDarkModeActivated();
            });
          }
        }, {
          key: "isDarkModeActivated",
          value: function isDarkModeActivated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _ionic_native_native_storage__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"].getItem('dark-mode').then(function (data) {
                        if (data.darkMode) {
                          _this2.renderer.setAttribute(document.body, 'color-theme', 'dark');
                        }
                      }, function (error) {
                        return console.log(error);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "firebaseNotifications",
          value: function firebaseNotifications() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: firebaseConfig, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tab2/popover/popover.component */
      "./src/app/tab2/popover/popover.component.ts");
      /* harmony import */


      var _tab2_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tab2/add/add.component */
      "./src/app/tab2/add/add.component.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js"); // OWN COMPONENTS
      // FROM FIREBASE


      var firebaseConfig = {
        apiKey: 'AIzaSyDobeRP6jeR7DcDAnFCqUiInCnKqYppYqg',
        authDomain: 'konta-95333.firebaseapp.com',
        databaseURL: 'https://konta-95333.firebaseio.com',
        projectId: 'konta-95333',
        storageBucket: 'konta-95333.appspot.com',
        messagingSenderId: '965037121908',
        appId: "1:965037121908:web:11bd109c9315dc4da8cc21"
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"], _tab2_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"]],
        entryComponents: [_tab2_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"], _tab2_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/tab2/add/add.component.scss":
    /*!*********************************************!*\
      !*** ./src/app/tab2/add/add.component.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2AddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content ion-item {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n}\n\n.focus-icon {\n  margin-right: 0;\n}\n\n.item-has-focus .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.item-has-focus .focus-icon {\n  color: #3880ff;\n}\n\n.no-input-feet .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.no-input-feet .focus-icon {\n  color: #3880ff;\n}\n\n.input-feet {\n  width: 100%;\n  height: 2px;\n  background: grey;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 5px;\n  transition-property: background, opacity;\n  transition-duration: 0.2s;\n}\n\n.first-size {\n  width: 85%;\n}\n\n.second-size {\n  width: 75%;\n}\n\n.items {\n  position: relative;\n}\n\n.items ion-button {\n  position: absolute;\n  z-index: 10000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBTUk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFIUjs7QUFNSTtFQUNJLGNBQUE7QUFKUjs7QUFTSTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQU5SOztBQVNJO0VBQ0ksY0FBQTtBQVBSOztBQVdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx3Q0FBQTtFQUNBLHlCQUFBO0FBVEo7O0FBYUE7RUFDSSxVQUFBO0FBVko7O0FBYUE7RUFDSSxVQUFBO0FBVko7O0FBYUE7RUFFSSxrQkFBQTtBQVhKOztBQWFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBWFIiLCJmaWxlIjoic3JjL2FwcC90YWIyL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG59XHJcblxyXG4gIFxyXG4uZm9jdXMtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuICBcclxuLml0ZW0taGFzLWZvY3VzIHtcclxuXHJcbiAgICAuaW5wdXQtZmVldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvY3VzLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgfVxyXG59XHJcbiAgXHJcbi5uby1pbnB1dC1mZWV0IHtcclxuICAgIC5pbnB1dC1mZWV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9jdXMtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLmlucHV0LWZlZXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICBcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XHJcbn1cclxuICBcclxuLy8gU0laRVxyXG4uZmlyc3Qtc2l6ZSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbiAgXHJcbi5zZWNvbmQtc2l6ZSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICB9XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab2/add/add.component.ts":
    /*!*******************************************!*\
      !*** ./src/app/tab2/add/add.component.ts ***!
      \*******************************************/

    /*! exports provided: AddComponent */

    /***/
    function srcAppTab2AddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
        return AddComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _quantite_quantite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quantite/quantite.component */
      "./src/app/tab2/add/quantite/quantite.component.ts");
      /* harmony import */


      var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./options/options.component */
      "./src/app/tab2/add/options/options.component.ts");
      /* harmony import */


      var _produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./produits-list/produits-list.component */
      "./src/app/tab2/add/produits-list/produits-list.component.ts");

      var AddComponent = /*#__PURE__*/function () {
        function AddComponent(modalCtrl, popoverCtrl) {
          _classCallCheck(this, AddComponent);

          this.modalCtrl = modalCtrl;
          this.popoverCtrl = popoverCtrl;
          this.stock = 1;
          this.error = false;
          this.isAlreadySaved = false;
          this.disabledForFormule = false;
          this.formuleContent = [];
          this.index = 1;
          this.last = false;
        }

        _createClass(AddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.item != undefined) {
              this.title = this.item.name;
              this.category = this.item.category;
              this.price = this.item.price;
              this.firstPrice = this.item.firstPrice;
              this.formule = this.item.formule;
              this.stock = this.item.stock;

              if (this.item.formuleContent != undefined) {
                var tab = [];

                for (var _i = 0, _Object$keys = Object.keys(this.item.formuleContent); _i < _Object$keys.length; _i++) {
                  var form = _Object$keys[_i];
                  tab.push({
                    firstPrice: this.item.formuleContent[form].firstPrice,
                    key: this.item.formuleContent[form].key,
                    max: this.item.formuleContent[form].max,
                    quantite: this.item.formuleContent[form].quantite,
                    title: this.item.formuleContent[form].title
                  });
                }

                this.formuleContent = tab;
              }

              this.isAlreadySaved = true;
            } else {
              this.category = 'Produit';
            }

            if (this.formule == undefined) {
              this.formule = false;
            } else {
              this.disabledForFormule = this.formule;
            }

            if (this.formuleContent.length == 0) {
              this.formuleContent = [{
                title: '',
                firstPrice: 0,
                quantite: 1,
                max: -1,
                key: ''
              }];
            }
          }
        }, {
          key: "close",
          value: function close(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.dismiss({
                        'item': item
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openOptionsPopover",
          value: function openOptionsPopover(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverCtrl.create({
                        component: _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
                        event: event,
                        mode: 'md'
                      });

                    case 2:
                      popover = _context3.sent;
                      popover.onWillDismiss().then(function (data) {
                        _this3.formule = data.data.formule;

                        if (_this3.formule) {
                          if (_this3.category != 'Formule') {
                            _this3.firstPrice = 0;
                          }

                          _this3.category = 'Formule';
                          _this3.disabledForFormule = true;
                        } else {
                          _this3.category = 'Produit';
                          _this3.disabledForFormule = false;
                        }
                      });
                      _context3.next = 6;
                      return popover.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isFormuleEmpty",
          value: function isFormuleEmpty() {
            if (this.formuleContent == undefined) {
              return true;
            } else if (this.formuleContent.length == 0) {
              return true;
            }

            return false;
          }
        }, {
          key: "openProduitsList",
          value: function openProduitsList(ev, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverCtrl.create({
                        component: _produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_5__["ProduitsListComponent"],
                        componentProps: {
                          formule: this.formuleContent
                        },
                        event: ev,
                        mode: 'md'
                      });

                    case 2:
                      popover = _context4.sent;
                      document.querySelector('#formule-' + index + '-item').classList.toggle('no-input-feet');
                      popover.onWillDismiss().then(function (data) {
                        document.querySelector('#formule-' + index + '-item').classList.toggle('no-input-feet');

                        if (data.data.formule != undefined) {
                          _this4.formuleContent[index].firstPrice = data.data.formuleFirstPrice;
                          _this4.formuleContent[index].title = data.data.formule;
                          _this4.formuleContent[index].max = data.data.quantite;
                          _this4.formuleContent[index].key = data.data.key;
                          var tmp = 0; // A MODIFIER

                          for (var _i2 = 0, _Object$keys2 = Object.keys(_this4.formuleContent); _i2 < _Object$keys2.length; _i2++) {
                            var formule = _Object$keys2[_i2];
                            tmp = tmp + _this4.formuleContent[formule].firstPrice;
                          }

                          _this4.firstPrice = tmp;
                        }

                        _this4.last = data.data.last;
                      });

                      if (this.last) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 8;
                      return popover.present();

                    case 8:
                      return _context4.abrupt("return", _context4.sent);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addItems",
          value: function addItems() {
            this.formuleContent.push({
              title: '',
              firstPrice: 0,
              quantite: 1,
              max: -1,
              key: ''
            });
          }
        }, {
          key: "delete",
          value: function _delete(i, slide) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.firstPrice = this.firstPrice - this.formuleContent[i].firstPrice * this.formuleContent[i].quantite;
                      this.formuleContent.splice(i, 1);
                      _context5.next = 4;
                      return slide.close();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openQuantityModal",
          value: function openQuantityModal(id, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var quantite, max, modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this.formule) {
                        quantite = item.quantite;
                        max = item.max;
                      } else {
                        quantite = this.stock;
                        max = -1;
                      }

                      _context6.next = 3;
                      return this.modalCtrl.create({
                        component: _quantite_quantite_component__WEBPACK_IMPORTED_MODULE_3__["QuantiteComponent"],
                        componentProps: {
                          quantite: quantite,
                          max: max
                        },
                        cssClass: 'quantite-class',
                        swipeToClose: true,
                        mode: 'ios'
                      });

                    case 3:
                      modal = _context6.sent;
                      document.querySelector('#' + id).classList.toggle('no-input-feet');
                      modal.onWillDismiss().then(function (data) {
                        if (data.data !== undefined) {
                          if (item != undefined) {
                            if (item.quantite != undefined && item.quantite >= data.data.quantite) {
                              _this5.firstPrice = _this5.firstPrice - (item.quantite - data.data.quantite) * item.firstPrice;
                            } else {
                              _this5.firstPrice = _this5.firstPrice + (data.data.quantite - 1) * item.firstPrice;
                            }

                            item.quantite = data.data.quantite;
                          } else {
                            _this5.stock = data.data.quantite;
                          }
                        }

                        document.querySelector('#' + id).classList.toggle('no-input-feet');
                      });
                      _context6.next = 8;
                      return modal.present();

                    case 8:
                      return _context6.abrupt("return", _context6.sent);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var tmp = [];

            for (var _i3 = 0, _Object$keys3 = Object.keys(this.formuleContent); _i3 < _Object$keys3.length; _i3++) {
              var formule = _Object$keys3[_i3];

              if (this.formuleContent[formule].title != '') {
                tmp.push(this.formuleContent[formule]);
              }
            }

            this.formuleContent = tmp;

            if (this.empty(this.title) || this.empty(this.category) || this.empty(this.price) || this.empty(this.stock) || this.empty(this.firstPrice)) {
              this.error = true;
            } else if (this.isAlreadySaved) {
              this.modifyValueInFirebase();
              this.close(this.item);
            } else {
              this.addItemToFirebase();
              this.close(undefined);
            }
          }
        }, {
          key: "addItemToFirebase",
          value: function addItemToFirebase() {
            this.afBD.list('produits').push({
              name: this.title,
              category: this.category,
              price: this.price,
              firstPrice: this.firstPrice,
              stock: this.stock,
              formule: this.formule,
              formuleContent: this.formuleContent,
              disponible: true
            });
          }
        }, {
          key: "modifyValueInFirebase",
          value: function modifyValueInFirebase() {
            this.afBD.object('produits/' + this.item.key + '/name/').set(this.title);
            this.afBD.object('produits/' + this.item.key + '/category/').set(this.category);
            this.afBD.object('produits/' + this.item.key + '/price/').set(this.price);
            this.afBD.object('produits/' + this.item.key + '/stock/').set(this.stock);
            this.afBD.object('produits/' + this.item.key + '/firstPrice/').set(this.firstPrice);
            this.afBD.object('produits/' + this.item.key + '/formule/').set(this.formule);
            this.afBD.object('produits/' + this.item.key + '/formuleContent').set(this.formuleContent);
          }
        }, {
          key: "empty",
          value: function empty(obj) {
            if (obj == undefined) {
              return true;
            }

            return false;
          }
        }]);

        return AddComponent;
      }();

      AddComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      AddComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        afBD: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/add.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add.component.scss */
        "./src/app/tab2/add/add.component.scss"))["default"]]
      })], AddComponent);
      /***/
    },

    /***/
    "./src/app/tab2/add/options/options.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/tab2/add/options/options.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2AddOptionsOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRkL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tab2/add/options/options.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/tab2/add/options/options.component.ts ***!
      \*******************************************************/

    /*! exports provided: OptionsComponent */

    /***/
    function srcAppTab2AddOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
        return OptionsComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var OptionsComponent = /*#__PURE__*/function () {
        function OptionsComponent(popoverCtrl) {
          _classCallCheck(this, OptionsComponent);

          this.popoverCtrl = popoverCtrl;
        }

        _createClass(OptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "produit",
          value: function produit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.popoverCtrl.dismiss({
                        'formule': false
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "formule",
          value: function formule() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.popoverCtrl.dismiss({
                        'formule': true
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return OptionsComponent;
      }();

      OptionsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      OptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./options.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/options/options.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./options.component.scss */
        "./src/app/tab2/add/options/options.component.scss"))["default"]]
      })], OptionsComponent);
      /***/
    },

    /***/
    "./src/app/tab2/add/produits-list/produits-list.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/tab2/add/produits-list/produits-list.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2AddProduitsListProduitsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvYWRkL3Byb2R1aXRzLWxpc3QvcHJvZHVpdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tab2/add/produits-list/produits-list.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/tab2/add/produits-list/produits-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProduitsListComponent */

    /***/
    function srcAppTab2AddProduitsListProduitsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProduitsListComponent", function () {
        return ProduitsListComponent;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProduitsListComponent = /*#__PURE__*/function () {
        function ProduitsListComponent(popoverCtrl, afDB) {
          _classCallCheck(this, ProduitsListComponent);

          this.popoverCtrl = popoverCtrl;
          this.afDB = afDB;
          this.items = [];
          this["new"] = true;
          this.last = false;
          this.getItemsFromFireBase();
        }

        _createClass(ProduitsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.formule == undefined) {
              this.formule = [];
            }
          }
        }, {
          key: "close",
          value: function close(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.popoverCtrl.dismiss({
                        'formule': item.title,
                        'formuleFirstPrice': item.firstPrice,
                        'quantite': item.quantite,
                        'key': item.key,
                        'last': this.last
                      });

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "saveItemsInFormule",
          value: function saveItemsInFormule(ev, item) {
            this.close(item);
          }
        }, {
          key: "getItemsFromFireBase",
          value: function getItemsFromFireBase() {
            var _this6 = this;

            this.afDB.list('test_produit/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              _this6.items = [];
              actions.forEach(function (action) {
                var item = action.payload.exportVal();

                if (!item.formule) {
                  _this6.items.push({
                    key: action.key,
                    title: item.name,
                    firstPrice: item.firstPrice,
                    quantite: item.stock,
                    alreadyUsed: false
                  });
                }
              });
              var cpt = 0;

              for (var _i4 = 0, _Object$keys4 = Object.keys(_this6.items); _i4 < _Object$keys4.length; _i4++) {
                var i = _Object$keys4[_i4];

                for (var _i5 = 0, _Object$keys5 = Object.keys(_this6.formule); _i5 < _Object$keys5.length; _i5++) {
                  var f = _Object$keys5[_i5];

                  if (_this6.formule[f].title == _this6.items[i].title) {
                    _this6.items[i].alreadyUsed = true;
                    cpt++;
                  }
                }
              }

              if (cpt + 1 == _this6.items.length) {
                _this6.last = true;
              }
            });
          }
        }]);

        return ProduitsListComponent;
      }();

      ProduitsListComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      ProduitsListComponent.propDecorators = {
        formule: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ProduitsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produits-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./produits-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/produits-list/produits-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./produits-list.component.scss */
        "./src/app/tab2/add/produits-list/produits-list.component.scss"))["default"]]
      })], ProduitsListComponent);
      /***/
    },

    /***/
    "./src/app/tab2/add/quantite/quantite.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/tab2/add/quantite/quantite.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2AddQuantiteQuantiteComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item div {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  background: #dfdfdf;\n}\n\nion-item div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#number {\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 30%;\n  text-align: center;\n  transform: translate(-50%, 0);\n  font-size: 30pt;\n  z-index: 1000000;\n}\n\nion-button.ion-activated div {\n  background: #737373 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9hZGQvcXVhbnRpdGUvcXVhbnRpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi9hZGQvcXVhbnRpdGUvcXVhbnRpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1pdGVtIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG59XHJcblxyXG5pb24taXRlbSBkaXYgaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuI251bWJlciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmlvbi1hY3RpdmF0ZWQgZGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICM3MzczNzMgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab2/add/quantite/quantite.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/tab2/add/quantite/quantite.component.ts ***!
      \*********************************************************/

    /*! exports provided: QuantiteComponent */

    /***/
    function srcAppTab2AddQuantiteQuantiteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuantiteComponent", function () {
        return QuantiteComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var QuantiteComponent = /*#__PURE__*/function () {
        function QuantiteComponent(modalCtrl) {
          _classCallCheck(this, QuantiteComponent);

          this.modalCtrl = modalCtrl;
          this.disabled = false;
          this.stop = false;
        }

        _createClass(QuantiteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.quantite == 1) {
              this.disabled = true;
            }

            if (this.max == this.quantite) {
              this.stop = true;
            }
          }
        }, {
          key: "close",
          value: function close(bool) {
            if (bool) {
              this.modalCtrl.dismiss({
                'quantite': this.quantite
              });
            } else {
              this.modalCtrl.dismiss();
            }
          }
        }, {
          key: "add",
          value: function add() {
            this.quantite++;
            this.disabled = false;

            if (this.max != -1) {
              if (this.quantite == this.max) {
                this.stop = true;
              }
            }
          }
        }, {
          key: "remove",
          value: function remove() {
            if (this.quantite > 1) {
              this.quantite--;

              if (this.quantite == 1) {
                this.disabled = true;
              }
            }

            this.stop = false;
          }
        }]);

        return QuantiteComponent;
      }();

      QuantiteComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      QuantiteComponent.propDecorators = {
        quantite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      QuantiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quantite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./quantite.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/add/quantite/quantite.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./quantite.component.scss */
        "./src/app/tab2/add/quantite/quantite.component.scss"))["default"]]
      })], QuantiteComponent);
      /***/
    },

    /***/
    "./src/app/tab2/popover/popover.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tab2/popover/popover.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2PopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab2/popover/popover.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab2/popover/popover.component.ts ***!
      \***************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function srcAppTab2PopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent() {
          _classCallCheck(this, PopoverComponent);

          this.items = [{
            name: 'Catégorie',
            value: 'category'
          }, {
            name: 'Quantité',
            value: 'asc-stock'
          }, {
            name: 'Quantité',
            value: 'desc-stock'
          }, {
            name: 'A - Z',
            value: 'asc'
          }, {
            name: 'Prix',
            value: 'price'
          }];
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./popover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/popover/popover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./popover.component.scss */
        "./src/app/tab2/popover/popover.component.scss"))["default"]]
      })], PopoverComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\apps\firstApp\Konta\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map