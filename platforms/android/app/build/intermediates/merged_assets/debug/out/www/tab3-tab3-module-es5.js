(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"!pageName\">\n      Stonks\n    </ion-title>\n    <ion-title *ngIf=\"pageName\">\n      Balence\n    </ion-title>\n    <ion-button class=\"toolbar-button\" slot=\"end\" fill=\"clear\">\n      <ion-icon name=\"reader\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"stats-content\" color=\"light\">\n\n  <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"0\">\n      <ion-icon name=\"receipt\"></ion-icon>\n      <ion-label>Stonks</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-icon name=\"swap-horizontal\"></ion-icon>\n      <ion-label>Balence</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-slides id=\"content\" #slides [options]=\"slidesOptions\" (ionSlideDidChange)=\"slideChanged(slides)\" (ionSlidesDidLoad)=\"slideChanged(slides)\">\n\n    <!-- STONKS PAGE -->\n\n    <ion-slide id=\"Stonks-page\">\n      \n      <ion-list lines=\"full\">\n        <ion-list *ngFor=\"let item of items.reverse(); let i = index\">\n\n          <ion-list *ngFor=\"let share of sharing.reverse()\">\n            <ion-item *ngIf=\"share.last == item\">\n              <ion-label>Départagée !</ion-label>\n              <ion-datetime disabled displayFormat=\"DD/MM/YYYY\" value=\"{{ share.date }}\"></ion-datetime>\n            </ion-item>\n          </ion-list>\n          \n          <ion-item button detail=\"false\" (click)=\"goTo(item)\" routerDirection=\"forward\">\n            <div slot=\"start\" style=\"width: 60%\">\n              <ion-label> {{ item.title }} </ion-label>\n              <ion-note style=\"font-size: 12pt;\" slot=\"end\"> livré par <strong> {{ item.order[0].name }} </strong> </ion-note>\n            </div>\n            <div slot=\"end\" style=\"text-align: right; margin-left: 0;\">\n              <ion-label> €{{ (+item.price).toFixed(2) }} </ion-label>\n              <ion-datetime disabled displayFormat=\"DD/MM/YYYY\" value=\"{{ item.date }}\"></ion-datetime>\n            </div>\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item *ngIf=\"sharing[0] != undefined\">\n          <ion-label>Départagée</ion-label>\n          <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n          <ion-datetime disabled displayFormat=\"DD/MM/YYYY\" value=\"{{ sharing[0].date }}\"></ion-datetime>\n        </ion-item>\n\n        <ion-item color=\"light  \" lines=\"none\">\n\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n\n    <!-- BALENCE PAGE -->\n\n    <ion-slide id=\"balence-page\">\n      <ion-list lines=\"full\">\n\n        <ion-item mode=\"md\" style=\"height: 50px;\" button lines=\"none\" (click)=\"showBenef()\">\n          <ion-title size=\"large\" style=\"text-align: center;\">\n            Total : €{{ total.toFixed(2) }}\n          </ion-title>\n        </ion-item>\n\n        <ion-item id=\"benef\" lines=\"none\">\n          <ion-title style=\"text-align: center;\">\n            Bénéfice : €{{ benef.toFixed(2) }}\n          </ion-title>\n        </ion-item>\n\n        <ion-item button *ngFor=\"let a of admin\" detail=\"false\" color=\"light\">\n          <div class=\"item-content\">\n            <ion-label class=\"label\"> {{ a.name }} </ion-label>\n            <div class=\"progress-bar\">\n              <ion-progress-bar slot=\"start\" value=\"{{ (getPourcent(a.tab.rapport, total)/100).toFixed(2) }}\" color=\"warning\" reversed=\"true\"></ion-progress-bar>\n              <ion-label> {{ getPourcent(a.tab.rapport, total).toFixed(2) }}% </ion-label>\n              <ion-progress-bar class=\"right\" style=\"position: absolute;\" value=\"{{ (getPourcent(a.tab.total, total)/100).toFixed(2) }}\"></ion-progress-bar>\n              <ion-label class=\"right\"> {{ getPourcent(a.tab.total, total).toFixed(2) }}%</ion-label>\n\n              <ion-note class=\"up\">Somme rapporté</ion-note>\n              <ion-note class=\"right up\">Somme gagné</ion-note>\n\n              <ion-note class=\"down\">€{{ a.tab.rapport.toFixed(2) }} </ion-note>\n              <ion-note class=\"right down\">€{{ a.tab.total.toFixed(2) }} </ion-note>\n            </div>\n          </div>\n        </ion-item>\n\n        <ion-item-divider id=\"bottom-item\">\n\n        </ion-item-divider>\n\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n  \n</ion-content>\n\n<ion-fab id=\"tricount-add\" *ngIf=\"!pageName\" vertical=\"bottom\" horizontal=\"center\" >\n  <ion-fab-button (click)=\"addNewExpModal()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>  \n\n<ion-footer >\n  <ion-toolbar *ngIf=\"!pageName\" id=\"tricount-toolbar\">\n    <div slot=\"start\" style=\"text-align: left;\">\n      <ion-note style=\"font-size: small;\">MY TOTAL</ion-note>\n      <br>\n      <ion-label style=\"font-size: small; font-weight: bold;\">€ -- . --</ion-label>\n    </div>\n    <div slot=\"end\">\n      <ion-note style=\"font-size: small;\">TOTAL STONKS</ion-note>\n      <br>\n      <ion-label style=\"font-size: small; font-weight: bold;\">€{{ total.toFixed(2) }}</ion-label>\n    </div>\n  </ion-toolbar>\n  <ion-button color=\"light\" expand=\"full\" (click)=\"confirmAlert()\" *ngIf=\"pageName\">\n    <ion-label>Départager</ion-label>\n  </ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-edit-module */
          [__webpack_require__.e("default~edit-edit-module~tab3-tab3-module"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./edit/edit.module */
          "./src/app/tab3/edit/edit.module.ts")).then(function (m) {
            return m.EditPageModule;
          });
        }
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./new/new.component */
      "./src/app/tab3/new/new.component.ts");
      /* harmony import */


      var _new_names_names_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./new/names/names.component */
      "./src/app/tab3/new/names/names.component.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");
      /* harmony import */


      var _new_items_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./new/items/items.component */
      "./src/app/tab3/new/items/items.component.ts");
      /* harmony import */


      var _new_options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./new/options-livraison/options-livraison.component */
      "./src/app/tab3/new/options-livraison/options-livraison.component.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"], _new_names_names_component__WEBPACK_IMPORTED_MODULE_9__["NamesComponent"], _new_items_items_component__WEBPACK_IMPORTED_MODULE_11__["ItemsComponent"], _new_options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_12__["OptionsLivraisonComponent"]],
        exports: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/****    GENERAL    ****/\n.small-margin {\n  margin: 10px;\n}\n/****    HEADER    ****/\n.toolbar-button {\n  --color: black;\n  margin: 0 10px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n/****    CONTENT    ****/\nion-content {\n  --overflow: hidden;\n}\nion-slide {\n  overflow: scroll;\n}\n#content {\n  height: 100%;\n}\n#content ion-slide {\n  display: block;\n}\n#Stonks-page ion-item {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n}\n#Stonks-page ion-item div ion-label {\n  margin-bottom: 5px;\n}\n#Stonks-page ion-item ion-datetime {\n  font-size: small;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n#balence-page ion-item {\n  --padding-start: 0;\n  --pading-end: 0;\n}\n#balence-page .item-content {\n  width: 100%;\n  padding: 10px 0 10px 0;\n}\n#balence-page .item-content ion-label {\n  margin: 15px;\n}\n#balence-page .item-content .label {\n  text-align: center;\n  font-weight: bold;\n}\n#balence-page .item-content .progress-bar {\n  display: flex;\n  width: 100%;\n  padding-bottom: 20px;\n}\n#balence-page .item-content .progress-bar ion-progress-bar {\n  width: 50%;\n  height: 20px;\n}\n#balence-page .item-content .progress-bar ion-label {\n  position: absolute;\n  bottom: 15px;\n}\n#balence-page .item-content .progress-bar ion-note {\n  font-size: small;\n  position: absolute;\n  margin: 5px;\n}\n#balence-page .item-content .progress-bar .up {\n  bottom: 55px;\n}\n#balence-page .item-content .progress-bar .down {\n  bottom: 0;\n}\n#balence-page .item-content .progress-bar .right {\n  right: 0;\n}\n#balence-page #bottom-item {\n  --background: white;\n}\n.ios #bottom-item {\n  height: 50px;\n}\n.md #bottom-item {\n  height: 65px;\n}\n#benef {\n  height: 0;\n  transition-property: height;\n  transition-duration: 0.2s;\n}\n.open {\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQUVBO0VBQ0ksWUFBQTtBQUFKO0FBR0EsdUJBQUE7QUFFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUEsd0JBQUE7QUFFQTtFQUNJLGtCQUFBO0FBRko7QUFLQTtFQUNJLGdCQUFBO0FBRko7QUFLQTtFQUNJLFlBQUE7QUFGSjtBQUlJO0VBQ0ksY0FBQTtBQUZSO0FBT0k7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFPWTtFQUNJLGtCQUFBO0FBTGhCO0FBUVE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFhSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQVZSO0FBYUk7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFYUjtBQWFRO0VBQ0ksWUFBQTtBQVhaO0FBY1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFiWjtBQWVZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFiaEI7QUFnQlk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFkaEI7QUFpQlk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWZoQjtBQWtCWTtFQUNJLFlBQUE7QUFoQmhCO0FBbUJZO0VBQ0ksU0FBQTtBQWpCaEI7QUFvQlk7RUFDSSxRQUFBO0FBbEJoQjtBQXlCSTtFQUNJLG1CQUFBO0FBdkJSO0FBNEJBO0VBQ0ksWUFBQTtBQXpCSjtBQTRCQTtFQUNJLFlBQUE7QUF6Qko7QUE0QkE7RUFDSSxTQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtBQTFCSjtBQTZCQTtFQUNJLHVCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqICAgIEdFTkVSQUwgICAgKioqKi9cclxuXHJcbi5zbWFsbC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4vKioqKiAgICBIRUFERVIgICAgKioqKi9cclxuXHJcbi50b29sYmFyLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxufSAgIFxyXG5cclxuLyoqKiogICAgQ09OVEVOVCAgICAqKioqLyBcclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNTdG9ua3MtcGFnZSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4OyBcclxuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDsgXHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7IFxyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7IFxyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwOyBcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNiYWxlbmNlLXBhZ2Uge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1wYWRpbmctZW5kOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhYmVse1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsOyBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVwIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTVweDsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kb3duIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgI2JvdHRvbS1pdGVtIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlOyBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5pb3MgI2JvdHRvbS1pdGVtIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLm1kICNib3R0b20taXRlbSB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbiNiZW5lZiB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcblxyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLm9wZW4ge1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new/new.component */
      "./src/app/tab3/new/new.component.ts"); // IONIC COMPONENTS
      // ANGULAR COMPONENTS
      // MY COMPONENTS


      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(modalController, app, afDB, alertCtrl, navCtrl, popoverCtrl) {
          _classCallCheck(this, Tab3Page);

          this.modalController = modalController;
          this.app = app;
          this.afDB = afDB;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.popoverCtrl = popoverCtrl;
          this.pageName = true;
          this.date = new Date().toISOString();
          this.items = [];
          this.sharing = [];
          this.total = 0;
          this.charges = 0;
          this.benef = 0;
          this.admin = [{
            name: 'Hugo',
            tab: {
              total: 0,
              rapport: 0
            }
          }, {
            name: 'Alexis',
            tab: {
              total: 0,
              rapport: 0
            }
          }, {
            name: 'Taheir',
            tab: {
              total: 0,
              rapport: 0
            }
          }, {
            name: 'Marvyn',
            tab: {
              total: 0,
              rapport: 0
            }
          }, {
            name: 'Gud',
            tab: {
              total: 0,
              rapport: 0
            }
          }];
          this.segment = 0;
          this.slidesOptions = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 400
          };
          this.afDB = this.app.afDB;
          this.getStonksInFirebase();
          this.getSharingFromFirebase();
        }

        _createClass(Tab3Page, [{
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.selectedSlide.slideTo(this.segment);

                    case 2:
                      if (this.segment == 0) {
                        this.pageName = false;
                      } else {
                        this.pageName = true;
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "slideChanged",
          value: function slideChanged(slides) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.selectedSlide = slides;
                      slides.getActiveIndex().then(function (selectedIndex) {
                        _this.segment = selectedIndex;

                        if (_this.segment == 0) {
                          _this.pageName = false;
                        } else if (_this.segment == 1) {
                          _this.pageName = true;
                        }
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
          key: "showBenef",
          value: function showBenef() {
            document.querySelector('#benef').classList.toggle('open');
          }
        }, {
          key: "addNewExpModal",
          value: function addNewExpModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"],
                        componentProps: {
                          afDB: this.afDB
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            var navData = {
              queryParams: {
                item: item
              }
            };
            this.navCtrl.navigateForward('/tabs/tab3/edit', navData);
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmer',
                        message: 'Voulez-vous vraiment répartir le montant total avec tout le monde ?',
                        buttons: [{
                          text: 'Annuler',
                          role: 'Cancel'
                        }, {
                          text: 'Confirmer',
                          handler: function handler() {
                            for (var _i = 0, _Object$keys = Object.keys(_this2.items); _i < _Object$keys.length; _i++) {
                              var i = _Object$keys[_i];

                              _this2.afDB.object('Livraisons/' + _this2.items[i].key + '/sharing/').set(true); //this.afDB.object('Livraisons/' + this.items[i].key + '/old/').set(true);

                            }

                            _this2.afDB.list('sharing').push({
                              date: new Date().toISOString(),
                              last: _this2.items[_this2.items.length - 1]
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getFuelPrice",
          value: function getFuelPrice(km) {
            var price = 2;

            if (km > 15) {
              price = price + (km - 15) * 1 / 7;
            } else if (km == 0) {
              price = 0;
            }

            return price;
          }
        }, {
          key: "getPourcent",
          value: function getPourcent(val, den) {
            if (den == 0) {
              den = 1;
            }

            return val / den * 100;
          }
        }, {
          key: "getStonksInFirebase",
          value: function getStonksInFirebase() {
            var _this3 = this;

            this.afDB.list('Livraisons/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              // INITIALISATIONS 
              _this3.items = [];
              _this3.total = 0;
              _this3.charges = 0;

              for (var _i2 = 0, _Object$keys2 = Object.keys(_this3.admin); _i2 < _Object$keys2.length; _i2++) {
                var a = _Object$keys2[_i2];
                _this3.admin[a].tab.rapport = 0;
                _this3.admin[a].tab.total = 0;
              } // PARCOURT BDD FIREBASE


              actions.forEach(function (action) {
                var item = action.payload.exportVal();

                if (item.sharing == undefined) {
                  _this3.total = _this3.total + +item.price;

                  for (var _i3 = 0, _Object$keys3 = Object.keys(_this3.admin); _i3 < _Object$keys3.length; _i3++) {
                    var n = _Object$keys3[_i3];

                    for (var _i4 = 0, _Object$keys4 = Object.keys(item.order); _i4 < _Object$keys4.length; _i4++) {
                      var d = _Object$keys4[_i4];

                      if (_this3.admin[n].name == item.order[d].name) {
                        // CALCUL SOMME RAPPORTE
                        if (item.order[d] == item.order[0]) {
                          _this3.admin[n].tab.rapport = _this3.admin[n].tab.rapport + +item.price;
                        } // CALCUL SOMME GAGNE


                        var fuel = 0;

                        if (_this3.admin[n].name == item.order[0].name) {
                          fuel = _this3.getFuelPrice(+item.order[d].distance);
                        }

                        _this3.admin[n].tab.total = _this3.admin[n].tab.total + +item.order[d].firstPrice + fuel; // CALCUL DES CHARGES

                        _this3.charges = _this3.charges + +item.order[d].firstPrice + fuel;
                      }
                    }
                  }
                }

                if (item.old == undefined) {
                  _this3.items.push({
                    key: action.key,
                    order: item.order,
                    title: item.title,
                    price: item.price,
                    date: item.date,
                    km: item.distance,
                    clientName: item.clientName,
                    type: item.type,
                    sharing: item.sharing
                  });
                }
              }); // RAJOUTE LE BENEFICE AU TOTAL DE CHACUN

              for (var _i5 = 0, _Object$keys5 = Object.keys(_this3.admin); _i5 < _Object$keys5.length; _i5++) {
                var n = _Object$keys5[_i5];
                _this3.admin[n].tab.total = _this3.admin[n].tab.total + (_this3.total - _this3.charges) / 5;
              }

              _this3.benef = _this3.total - _this3.charges;
            });
          }
        }, {
          key: "getSharingFromFirebase",
          value: function getSharingFromFirebase() {
            var _this4 = this;

            this.afDB.list('sharings/').snapshotChanges(['child_added', 'child_changed', 'child_removed']).subscribe(function (actions) {
              _this4.sharing = [];
              actions.forEach(function (action) {
                _this4.sharing.push({
                  date: action.payload.exportVal().date,
                  last: action.payload.exportVal().last
                });
              });
            });
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map