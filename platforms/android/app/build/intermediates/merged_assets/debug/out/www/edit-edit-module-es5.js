(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2EditEditPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--border-style: none;\">\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"chevron-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Détail</ion-title>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"openEdit()\">\n      <ion-label>Edit</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n\n    <ion-item-divider>\n      \n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label>Nom :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.name }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catégorie :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.category }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Prix à l'achat :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> €{{ (+item.firstPrice).toFixed(2) }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>prix à la revente :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> €{{ (+item.price).toFixed(2) }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Quantité :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.stock }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Type : </ion-label>\n      <ion-note *ngIf=\"formule\" slot=\"end\" style=\"text-align: end;\">Formule</ion-note>\n      <ion-note *ngIf=\"!formule\" slot=\"end\" style=\"text-align: end;\">Produit</ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3EditEditPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar style=\"--border-style: none\">\n    <ion-button class=\"toolbar-button\" slot=\"start\" fill=\"clear\" (click)=\"goBack()\" style=\"--padding-start: 0\">\n      <ion-icon size=\"large\" name=\"chevron-back\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"toolbar-button\" (click)=\"addNewExpModal()\" slot=\"end\" fill=\"clear\">\n      <ion-label>Edit</ion-label>\n    </ion-button>\n  </ion-toolbar>\n  \n  <ion-list lines=\"none\">\n    <ion-item style=\"text-align: center;\">\n      <ion-label style=\"font-size: 20pt; font-weight: bold;\"> {{ item.title }} </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-title>€{{ (+item.price).toFixed(2) }} </ion-title>\n    </ion-item>\n    <ion-item style=\" --padding-end: 0;\">\n      <ion-label>Livré par <strong>{{ item.name }}</strong> </ion-label>\n      <ion-datetime slot=\"end\" readonly displayFormat=\"DD/MM/YYYY\" value=\"{{ item.date }}\" style=\"text-align: end;\"></ion-datetime>\n    </ion-item>\n    <ion-item-divider lines=\"full\">\n      \n    </ion-item-divider>\n\n    <ion-item lines=\"full\">\n      <ion-label>Détail :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ details }} </ion-note>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label>Distance :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ item.distance }} km </ion-note>\n    </ion-item>\n\n    <ion-item lines=\"full\" *ngIf=\"item.type != 'prodOnly'\">\n      <ion-label>Nom du client :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ item.clientName }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Type de livraison :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right\"> {{ getType(item.type) }} </ion-note>\n    </ion-item>\n\n    <ion-item-divider>\n      \n    </ion-item-divider>\n\n    <section>\n      <ion-button lines=\"full\" fill=\"clear\" expand=\"full\" (click)=\"delete()\">\n        <ion-label color=\"danger\">Supprimer item</ion-label>\n      </ion-button>\n    </section>\n  </ion-list>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab2/edit/edit-routing.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/tab2/edit/edit-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: EditPageRoutingModule */

    /***/
    function srcAppTab2EditEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
        return EditPageRoutingModule;
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


      var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/tab2/edit/edit.page.ts");

      var routes = [{
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
      }];

      var EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/edit/edit.module.ts":
    /*!******************************************!*\
      !*** ./src/app/tab2/edit/edit.module.ts ***!
      \******************************************/

    /*! exports provided: EditPageModule */

    /***/
    function srcAppTab2EditEditModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
        return EditPageModule;
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


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-routing.module */
      "./src/app/tab2/edit/edit-routing.module.ts");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/tab2/edit/edit.page.ts");

      var EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
      })], EditPageModule);
      /***/
    },

    /***/
    "./src/app/tab2/edit/edit.page.scss":
    /*!******************************************!*\
      !*** ./src/app/tab2/edit/edit.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2EditEditPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi9lZGl0L2VkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/edit/edit.page.ts":
    /*!****************************************!*\
      !*** ./src/app/tab2/edit/edit.page.ts ***!
      \****************************************/

    /*! exports provided: EditPage */

    /***/
    function srcAppTab2EditEditPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPage", function () {
        return EditPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../add/add.component */
      "./src/app/tab2/add/add.component.ts"); // ANGULAR
      // IONIC
      // OWN COMPONENT


      var EditPage = /*#__PURE__*/function () {
        function EditPage(route, navCtrl, modalCtrl) {
          var _this = this;

          _classCallCheck(this, EditPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.formule = false;
          this.route.queryParams.subscribe(function (params) {
            _this.item = params['item'];
            _this.afDB = params['afDB'];
            _this.formule = _this.item.formule;
          });
        }

        _createClass(EditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "openEdit",
          value: function openEdit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
                        componentProps: {
                          item: this.item,
                          afBD: this.afDB
                        },
                        swipeToClose: true
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onWillDismiss().then(function (data) {
                        if (data.data.item != undefined) {
                          _this2.item = data.data.item;
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return EditPage;
      }();

      EditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit.page.scss */
        "./src/app/tab2/edit/edit.page.scss"))["default"]]
      })], EditPage);
      /***/
    },

    /***/
    "./src/app/tab3/edit/edit-routing.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/tab3/edit/edit-routing.module.ts ***!
      \**************************************************/

    /*! exports provided: EditPageRoutingModule */

    /***/
    function srcAppTab3EditEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
        return EditPageRoutingModule;
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


      var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/tab3/edit/edit.page.ts");

      var routes = [{
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
      }];

      var EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/edit/edit.module.ts":
    /*!******************************************!*\
      !*** ./src/app/tab3/edit/edit.module.ts ***!
      \******************************************/

    /*! exports provided: EditPageModule */

    /***/
    function srcAppTab3EditEditModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
        return EditPageModule;
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


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-routing.module */
      "./src/app/tab3/edit/edit-routing.module.ts");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit.page */
      "./src/app/tab3/edit/edit.page.ts");

      var EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
      })], EditPageModule);
      /***/
    },

    /***/
    "./src/app/tab3/edit/edit.page.scss":
    /*!******************************************!*\
      !*** ./src/app/tab3/edit/edit.page.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3EditEditPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item.ion-activated {\n  --background-activated: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLmlvbi1hY3RpdmF0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab3/edit/edit.page.ts":
    /*!****************************************!*\
      !*** ./src/app/tab3/edit/edit.page.ts ***!
      \****************************************/

    /*! exports provided: EditPage */

    /***/
    function srcAppTab3EditEditPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPage", function () {
        return EditPage;
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


      var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../new/new.component */
      "./src/app/tab3/new/new.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

      var EditPage = /*#__PURE__*/function () {
        function EditPage(navCtrl, modalController, afDB, route) {
          var _this3 = this;

          _classCallCheck(this, EditPage);

          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.afDB = afDB;
          this.route = route;
          this.item = [];
          this.produits = [];
          this.details = '';
          this.route.queryParams.subscribe(function (params) {
            _this3.key = params['item'].key;
          });
        }

        _createClass(EditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDeliveryFromFirebase();
            this.getProduitsFromFirebase();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.navigateBack('tabs/tab3');
          }
        }, {
          key: "getType",
          value: function getType(type) {
            if (type == 'lone') {
              return 'Livraison seule';
            }

            return 'Livraison partagée';
          }
        }, {
          key: "addNewExpModal",
          value: function addNewExpModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"],
                        componentProps: {
                          afDB: this.afDB,
                          // KEY ITEM 
                          key: this.key,
                          // ATTRIBUTS
                          delivery: this.item.order,
                          title: this.item.title,
                          price: this.item.price,
                          date: this.item.date,
                          km: this.item.distance,
                          type: this.item.type,
                          clientName: this.item.clientName
                        },
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setQuantite",
          value: function setQuantite(key, val) {
            for (var _i = 0, _Object$keys = Object.keys(this.produits); _i < _Object$keys.length; _i++) {
              var p = _Object$keys[_i];

              if (this.produits[p].key == key) {
                this.produits[p].content.stock = this.produits[p].content.stock + val;
                this.afDB.object('produits/' + key + '/stock').set(this.produits[p].content.stock);
              }
            }
          }
        }, {
          key: "delete",
          value: function _delete() {
            for (var _i2 = 0, _Object$keys2 = Object.keys(this.item.order); _i2 < _Object$keys2.length; _i2++) {
              var admin = _Object$keys2[_i2];

              for (var _i3 = 0, _Object$keys3 = Object.keys(this.item.order[admin].items); _i3 < _Object$keys3.length; _i3++) {
                var i = _Object$keys3[_i3];

                if (this.item.order[admin].items[i].formuleContent != undefined) {
                  if (this.item.order[admin].items[i].formuleContent.length != 0) {
                    for (var _i4 = 0, _Object$keys4 = Object.keys(this.item.order[admin].items[i].formuleContent); _i4 < _Object$keys4.length; _i4++) {
                      var p = _Object$keys4[_i4];
                      this.setQuantite(this.item.order[admin].items[i].formuleContent[p].key, this.item.order[admin].items[i].formuleContent[p].quantite);
                    }
                  }
                } else if (this.item.order[admin].items[i].key != '') {
                  this.setQuantite(this.item.order[admin].items[i].key, this.item.order[admin].items[i].quantite);
                }
              }
            }

            this.afDB.list('Livraisons/').remove(this.key);
            this.goBack();
          }
        }, {
          key: "getDeliveryFromFirebase",
          value: function getDeliveryFromFirebase() {
            var _this4 = this;

            this.afDB.object('Livraisons/' + this.key).valueChanges().subscribe(function (item) {
              _this4.item = item;
            });
          }
        }, {
          key: "getProduitsFromFirebase",
          value: function getProduitsFromFirebase() {
            var _this5 = this;

            this.afDB.list('produits').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              _this5.produits = [];
              _this5.details = '';
              actions.forEach(function (action) {
                _this5.produits.push({
                  key: action.key,
                  content: action.payload.exportVal()
                });
              });

              for (var _i5 = 0, _Object$keys5 = Object.keys(_this5.item.order); _i5 < _Object$keys5.length; _i5++) {
                var admin = _Object$keys5[_i5];

                for (var _i6 = 0, _Object$keys6 = Object.keys(_this5.item.order[admin].items); _i6 < _Object$keys6.length; _i6++) {
                  var i = _Object$keys6[_i6];

                  if (_this5.item.order[admin] == _this5.item.order[0] && _this5.item.order[admin].items[i] == _this5.item.order[0].items[0]) {
                    _this5.details = _this5.item.order[admin].items[i].quantite + ' x ' + _this5.item.order[admin].items[i].title;
                  } else {
                    _this5.details = _this5.details + ', ' + _this5.item.order[admin].items[i].quantite + ' x ' + _this5.item.order[admin].items[i].title;
                  }
                }
              }
            });
          }
        }]);

        return EditPage;
      }();

      EditPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit.page.scss */
        "./src/app/tab3/edit/edit.page.scss"))["default"]]
      })], EditPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-edit-module-es5.js.map