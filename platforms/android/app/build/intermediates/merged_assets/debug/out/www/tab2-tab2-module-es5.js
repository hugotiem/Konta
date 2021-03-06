(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" >\n  <ion-toolbar >\n    <ion-title>Items</ion-title>\n    <ion-button class=\"toolbar-button\" fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\n      <ion-icon name=\"chevron-down\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"toolbar-button\" fill=\"clear\" slot=\"end\" (click)=\"presentAddModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-list lines=\"full\">\n\n    <ion-item class=\"title\">\n      <ion-title size=\"large\">Produits</ion-title>\n    </ion-item>\n\n    <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n      <ion-item *ngIf=\"!item.formule\" (click)=\"goToEdit(item)\" button style=\"--padding-top: 5px\">\n        <div>\n          <ion-label style=\"font-weight: bold;\"> {{ item.name }} </ion-label>\n          <ion-label style=\"font-size: medium;\"> {{ item.category }} </ion-label>\n          <ion-note> {{ item.price }} €</ion-note>\n        </div>\n        <ion-chip slot=\"end\" *ngIf='item.stock == 0' color=\"danger\">\n          <ion-label> {{ item.stock }} </ion-label>\n        </ion-chip>\n        <ion-chip slot=\"end\" *ngIf='item.stock != 0'>\n          <ion-label> {{ item.stock }} </ion-label>\n        </ion-chip>\n\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"delete(item)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item class=\"title\">\n      <ion-title size=\"large\">Formules</ion-title>\n    </ion-item>\n\n    <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n      <ion-item [disabled]=\"!item.disponible\" *ngIf=\"item.formule\" (click)=\"goToEdit(item)\" button style=\"--padding-top: 5px\">\n        <div>\n          <ion-label style=\"font-weight: bold;\"> {{ item.name }} </ion-label>\n          <ion-label style=\"font-size: medium;\"> {{ item.category }} </ion-label>\n          <ion-note> {{ item.price }} €</ion-note>\n        </div>\n\n        <ion-note slot=\"end\" style=\"text-align: end;\" *ngIf=\"item.disponible\">Disponible</ion-note>\n        <ion-note slot=\"end\" style=\"text-align: end;\" *ngIf=\"!item.disponible\" color=\"danger\">Indisponible</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"delete(item)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-edit-module */
          [__webpack_require__.e("default~edit-edit-module~tab3-tab3-module"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./edit/edit.module */
          "./src/app/tab2/edit/edit.module.ts")).then(function (m) {
            return m.EditPageModule;
          });
        }
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");
      /* harmony import */


      var _add_quantite_quantite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./add/quantite/quantite.component */
      "./src/app/tab2/add/quantite/quantite.component.ts");
      /* harmony import */


      var _add_options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./add/options/options.component */
      "./src/app/tab2/add/options/options.component.ts");
      /* harmony import */


      var _add_produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./add/produits-list/produits-list.component */
      "./src/app/tab2/add/produits-list/produits-list.component.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _add_quantite_quantite_component__WEBPACK_IMPORTED_MODULE_8__["QuantiteComponent"], _add_options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"], _add_produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_10__["ProduitsListComponent"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/****    HEADER    ****/\n/****    CONTENT ****/\n.title {\n  margin-top: 20px;\n}\n.title ion-title {\n  padding-left: 0;\n}\nion-thumbnail {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUVBLHFCQUFBO0FBRUE7RUFDSSxnQkFBQTtBQURKO0FBR0k7RUFDSSxlQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogICAgSEVBREVSICAgICoqKiovXHJcblxyXG4vKioqKiAgICBDT05URU5UICoqKiovXHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
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


      var _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popover/popover.component */
      "./src/app/tab2/popover/popover.component.ts");
      /* harmony import */


      var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add/add.component */
      "./src/app/tab2/add/add.component.ts"); // COMPONENTS FROM IONIC
      // OWN COMPONENTS
      // CLASS FROM PROJECT


      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(routerOutlet, afDB, popoverController, modalController, navCtrl) {
          _classCallCheck(this, Tab2Page);

          this.routerOutlet = routerOutlet;
          this.afDB = afDB;
          this.popoverController = popoverController;
          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.items = [];
          this.getItemsFromFirebase();
        }

        _createClass(Tab2Page, [{
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                        componentProps: {},
                        cssClass: 'sort-popover',
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToEdit",
          value: function goToEdit(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var navData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      navData = {
                        queryParams: {
                          item: item,
                          afDB: this.afDB
                        }
                      };
                      this.navCtrl.navigateForward('tabs/tab2/edit', navData);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAddModal",
          value: function presentAddModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
                        componentProps: {
                          afBD: this.afDB
                        },
                        cssClass: '',
                        swipeToClose: true,
                        presentingElement: this.routerOutlet.nativeEl
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
          key: "getItemsFromFirebase",
          value: function getItemsFromFirebase() {
            var _this = this;

            this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              _this.items = [];
              actions.forEach(function (action) {
                var item = action.payload.exportVal();

                _this.items.push({
                  key: action.key,
                  name: item.name,
                  category: item.category,
                  price: item.price,
                  firstPrice: item.firstPrice,
                  stock: item.stock,
                  formule: item.formule,
                  formuleContent: item.formuleContent,
                  disponible: item.disponible
                });
              });

              for (var _i = 0, _Object$keys = Object.keys(_this.items); _i < _Object$keys.length; _i++) {
                var i = _Object$keys[_i];

                if (_this.items[i].formule) {
                  var cpt = 0;

                  for (var _i2 = 0, _Object$keys2 = Object.keys(_this.items[i].formuleContent); _i2 < _Object$keys2.length; _i2++) {
                    var j = _Object$keys2[_i2];

                    for (var _i3 = 0, _Object$keys3 = Object.keys(_this.items); _i3 < _Object$keys3.length; _i3++) {
                      var k = _Object$keys3[_i3];

                      if (_this.items[i].formuleContent[j].title == _this.items[k].name && !_this.items[k].formule) {
                        if (_this.items[k].stock - _this.items[i].formuleContent[j].quantite < 0) {
                          _this.items[i].disponible = false;
                        } else {
                          cpt = cpt + 1;

                          if (_this.items[i].formuleContent.length == cpt) {
                            _this.items[i].disponible = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            this.afDB.list('produits/').remove(item.key);
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map