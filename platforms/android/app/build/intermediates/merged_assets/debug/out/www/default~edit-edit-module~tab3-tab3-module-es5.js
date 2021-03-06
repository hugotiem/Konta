(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-edit-module~tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3NewItemsItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"close(null)\">\n      <ion-label>Cancel</ion-label>\n    </ion-button>\n    <ion-title>Selectionner produit</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar disabled animated showCancelButton=\"focus\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-list-header>\n      <ion-title>Produits</ion-title>\n    </ion-list-header>\n\n    <ion-item-group *ngFor=\"let item of items\">\n      <ion-item *ngIf=\"!item.formule\" [disabled]=\"item.quantite == 0\" button detail=\"false\" (click)=\"close(item)\" >\n        <ion-label> {{ item.title }} </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-list-header>\n      <ion-title>Formules</ion-title>\n    </ion-list-header>\n\n    <ion-item-group *ngFor=\"let item of items\">\n      <ion-item *ngIf=\"item.formule\" [disabled]=\"!item.disponible\" button detail=\"false\" (click)=\"close(item)\" >\n        <ion-label> {{ item.title }} </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3NewNamesNamesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list mode=\"ios\" lines=\"none\">\n  <ion-item button detail=\"false\" *ngFor=\"let name of names\" (click)=\"dissmis(name)\">\n    <ion-label> {{ name }} </ion-label>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3NewNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\"--border-style: none\">\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"close()\">\n      <ion-label>Annuler</ion-label>\n    </ion-button>\n    <ion-title>Nouveau</ion-title>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"save()\">\n      <ion-label>Terminer</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" [fullscreen]=\"true\">\n\n  <ion-toolbar style=\"margin-top: 10px; z-index: 0;\">\n    <ion-title size=\"large\" style=\"padding-left: 0\">Livraison</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" style=\"--color: black\" (click)=\"openOptionPopover($event)\">\n      <ion-icon name=\"chevron-down\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n  <ion-list lines=\"none\">\n\n    <ion-item class=\"full\">\n      <ion-input [(ngModel)]=\"title\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"title\" placeholder=\"Titre\"></ion-input>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-list *ngFor=\"let admin of delivery; let i = index\">\n\n      <ion-item mode=\"ios\" id=\"no-input-{{i}}\" class=\"full\" required (click)=\"namesPopover($event, i)\">\n        <ion-label *ngIf=\"admin.name != ''\"> {{ admin.name }} </ion-label>\n        <ion-note *ngIf=\"admin.name == ''\">Nom du Livreur</ion-note>\n        <span class=\"input-feet\"></span>\n        <ion-icon slot=\"end\" class=\"focus-icon\" size=\"small\" name=\"chevron-down\"></ion-icon>\n      </ion-item>\n\n      <ion-item-sliding #slide *ngFor=\"let item of admin.items; let j = index\">\n\n        <ion-item mode=\"ios\" id=\"formule-{{ i }}{{ j }}-item\" class=\"items\" class=\"full\">\n          <ion-input [(ngModel)]=\"item.title\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"item.title\" placeholder=\"Item {{ j + 1 }} :\"></ion-input>\n          <span class=\"input-feet second-size\"></span>\n          <ion-button class=\"modal\" fill=\"clear\" slot=\"end\" (click)=\"itemsModal(admin, item)\">\n            <ion-icon size=\"large\" name=\"pricetag\"></ion-icon>\n          </ion-button>\n        </ion-item>\n\n        <ion-item-options side=\"end\" style=\"width: 70px;\" (click)=\"delete(item, i, j)\">\n          <ion-item-option color=\"danger\" style=\"width: 100%;\">\n            <ion-icon style=\"position: absolute; top: 25%; right: 50%; transform: translate(50%, -50%);\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item mode=\"ios\" class=\"full\" id=\"qte-{{i}}-item\" lines=\"full\">\n          <ion-label>Quantité :</ion-label>\n          <span class=\"input-feet second-size\"></span>\n          <div slot=\"end\" style=\"display: flex; margin: 0;position: relative;\">\n            <ion-chip style=\"margin-right: 20px; padding: 7px\" (click)=\"remove(item, admin)\">\n              <ion-icon style=\"margin: 0;\" size=\"small\" name=\"remove\"></ion-icon>\n            </ion-chip>\n            <ion-label style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);\"> {{ item.quantite }} </ion-label>\n            <ion-chip style=\"margin-left: 20px; padding: 7px\" (click)=\"add(item, admin)\">\n              <ion-icon style=\"margin: 0\" name=\"add\"></ion-icon>\n            </ion-chip>\n          </div>\n        </ion-item>\n        \n      </ion-item-sliding>\n\n      <ion-item>\n        <ion-chip (click)=\"addItems(admin.items)\"> \n          <ion-icon name=\"add\"></ion-icon>\n          <ion-label>Ajouter item</ion-label>\n        </ion-chip>\n      </ion-item>\n\n      <ion-item mode=\"ios\" class=\"full\" >\n        <ion-input [(ngModel)]=\"admin.firstPrice\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"admin.firstPrice\" placeholder=\"Prix achat\"></ion-input>\n        <ion-label>EUR</ion-label>\n        <span class=\"input-feet\"></span>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item *ngIf=\"type == 'share'\">\n      <ion-chip (click)=\"addAdmin()\"> \n        <ion-icon name=\"add\"></ion-icon>\n        <ion-label>Ajouter livreur</ion-label>\n      </ion-chip>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\" >\n      <ion-input [(ngModel)]=\"price\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"price\" placeholder=\"Prix revente\"></ion-input>\n      <span class=\"input-feet\"></span>\n      <ion-label>EUR</ion-label>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\">\n      <ion-input [(ngModel)]=\"clientName\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"clientName\" placeholder=\"Nom du client\"></ion-input>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\">\n      <ion-input [(ngModel)]=\"km\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"km\" placeholder=\"Km parcourut\"></ion-input>\n      <span class=\"input-feet first-size\"></span>\n      <ion-label style=\"margin-right: 0\" slot=\"end\">KM</ion-label>\n    </ion-item>\n\n    <ion-item id=\"date-item\" class=\"full\">\n      <ion-datetime (ionBlur)=\"activated()\" [(ngModel)]=\"date\" required [value]=\"date\" display-timezone=\"utc\"></ion-datetime>\n      <span class=\"input-feet\"></span> \n      <ion-icon slot=\"end\" class=\"focus-icon\" size=\"small\" name=\"chevron-down\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3NewOptionsLivraisonOptionsLivraisonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list lines=\"none\">\n\n  <ion-item button (click)=\"lone()\">\n    <ion-label>Livraison seule</ion-label>\n  </ion-item>\n\n  <ion-item button (click)=\"share()\">\n    <ion-label>Livraison partagée</ion-label>\n  </ion-item>\n  \n</ion-list>\n";
      /***/
    },

    /***/
    "./src/app/tab3/new/items/items.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tab3/new/items/items.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3NewItemsItemsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab3/new/items/items.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab3/new/items/items.component.ts ***!
      \***************************************************/

    /*! exports provided: ItemsComponent */

    /***/
    function srcAppTab3NewItemsItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsComponent", function () {
        return ItemsComponent;
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

      var ItemsComponent = /*#__PURE__*/function () {
        function ItemsComponent(modalctrl) {
          _classCallCheck(this, ItemsComponent);

          this.modalctrl = modalctrl;
          this.items = [];
        }

        _createClass(ItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getTitleInFirebase();
          }
        }, {
          key: "close",
          value: function close(item) {
            var _this = this;

            setTimeout(function () {
              if (item !== null) {
                _this.modalctrl.dismiss({
                  'item': item
                });
              } else {
                _this.modalctrl.dismiss();
              }
            }, 200);
          }
        }, {
          key: "getTitleInFirebase",
          value: function getTitleInFirebase() {
            var _this2 = this;

            this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              _this2.items = [];
              actions.forEach(function (action) {
                _this2.items.push({
                  title: action.payload.exportVal().name,
                  price: action.payload.exportVal().price,
                  firstPrice: action.payload.exportVal().firstPrice,
                  quantite: action.payload.exportVal().stock,
                  key: action.key,
                  formule: action.payload.exportVal().formule,
                  formuleContent: action.payload.exportVal().formuleContent,
                  disponible: action.payload.exportVal().disponible
                });
              });

              for (var _i = 0, _Object$keys = Object.keys(_this2.items); _i < _Object$keys.length; _i++) {
                var i = _Object$keys[_i];

                if (_this2.items[i].formule) {
                  var cpt = 0;

                  for (var _i2 = 0, _Object$keys2 = Object.keys(_this2.items[i].formuleContent); _i2 < _Object$keys2.length; _i2++) {
                    var j = _Object$keys2[_i2];

                    for (var _i3 = 0, _Object$keys3 = Object.keys(_this2.items); _i3 < _Object$keys3.length; _i3++) {
                      var k = _Object$keys3[_i3];

                      if (_this2.items[i].formuleContent[j].title == _this2.items[k].title && !_this2.items[k].formule) {
                        if (_this2.items[k].quantite - _this2.items[i].formuleContent[j].quantite < 0) {
                          _this2.items[i].disponible = false;
                        } else {
                          cpt = cpt + 1;

                          if (_this2.items[i].formuleContent.length == cpt) {
                            _this2.items[i].disponible = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }]);

        return ItemsComponent;
      }();

      ItemsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      ItemsComponent.propDecorators = {
        afDB: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./items.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./items.component.scss */
        "./src/app/tab3/new/items/items.component.scss"))["default"]]
      })], ItemsComponent);
      /***/
    },

    /***/
    "./src/app/tab3/new/names/names.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tab3/new/names/names.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3NewNamesNamesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L25hbWVzL25hbWVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab3/new/names/names.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab3/new/names/names.component.ts ***!
      \***************************************************/

    /*! exports provided: NamesComponent */

    /***/
    function srcAppTab3NewNamesNamesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NamesComponent", function () {
        return NamesComponent;
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

      var NamesComponent = /*#__PURE__*/function () {
        function NamesComponent(popoverCtrl) {
          _classCallCheck(this, NamesComponent);

          this.popoverCtrl = popoverCtrl;
          this.names = ['Alexis', 'Hugo', 'Marvyn', 'Gud', 'Taheir'];
        }

        _createClass(NamesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dissmis",
          value: function dissmis(name) {
            this.popoverCtrl.dismiss({
              'fromPopover': name
            });
          }
        }]);

        return NamesComponent;
      }();

      NamesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      NamesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-names',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./names.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./names.component.scss */
        "./src/app/tab3/new/names/names.component.scss"))["default"]]
      })], NamesComponent);
      /***/
    },

    /***/
    "./src/app/tab3/new/new.component.scss":
    /*!*********************************************!*\
      !*** ./src/app/tab3/new/new.component.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3NewNewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content ion-item {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\n.modal {\n  --border-style: solid;\n  --border-color: black;\n  --color: black;\n  --border-width: 2px;\n  height: 45px;\n}\n\n.focus-icon {\n  margin-right: 0;\n}\n\n.item-has-focus .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.item-has-focus .focus-icon {\n  color: #3880ff;\n}\n\n.no-input-feet .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.no-input-feet .focus-icon {\n  color: #3880ff;\n}\n\n.input-feet {\n  width: 100%;\n  height: 2px;\n  background: grey;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 5px;\n  transition-property: background, opacity;\n  transition-duration: 0.2s;\n}\n\n.first-size {\n  width: 85%;\n}\n\n.second-size {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9uZXcvbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFRTtFQUNJLGVBQUE7QUFDTjs7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBSFI7O0FBTUk7RUFDSSxjQUFBO0FBSlI7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLHdDQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFVRTtFQUNJLFVBQUE7QUFQTjs7QUFVRTtFQUNFLFVBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L25ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAtLWNvbG9yOiBibGFjaztcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuIH1cclxuXHJcbiAgLmZvY3VzLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgLmlucHV0LWZlZXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cy1pY29uIHtcclxuICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm8taW5wdXQtZmVldCB7XHJcbiAgICAuaW5wdXQtZmVldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cy1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dC1mZWV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxuICB9XHJcblxyXG4gIC8vIFNJWkVcclxuICAuZmlyc3Qtc2l6ZSB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLXNpemUge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/tab3/new/new.component.ts":
    /*!*******************************************!*\
      !*** ./src/app/tab3/new/new.component.ts ***!
      \*******************************************/

    /*! exports provided: NewComponent */

    /***/
    function srcAppTab3NewNewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewComponent", function () {
        return NewComponent;
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


      var _items_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./items/items.component */
      "./src/app/tab3/new/items/items.component.ts");
      /* harmony import */


      var _names_names_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./names/names.component */
      "./src/app/tab3/new/names/names.component.ts");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./options-livraison/options-livraison.component */
      "./src/app/tab3/new/options-livraison/options-livraison.component.ts");

      var NewComponent = /*#__PURE__*/function () {
        function NewComponent(modalCtrl, popoverCtrl, afDB) {
          _classCallCheck(this, NewComponent);

          this.modalCtrl = modalCtrl;
          this.popoverCtrl = popoverCtrl;
          this.afDB = afDB;
          this.produits = [];
          this.tmp = [];

          if (this.date == undefined) {
            this.date = new Date().toISOString();
          }

          if (this.type == undefined) {
            this.type = 'lone';
          }

          this.getProduitsFromFirebase();
        }

        _createClass(NewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.delivery == undefined) {
              this.init();
            } else {
              for (var _i4 = 0, _Object$keys4 = Object.keys(this.delivery); _i4 < _Object$keys4.length; _i4++) {
                var admin = _Object$keys4[_i4];

                for (var _i5 = 0, _Object$keys5 = Object.keys(this.delivery[admin].items); _i5 < _Object$keys5.length; _i5++) {
                  var item = _Object$keys5[_i5];

                  if (this.delivery[admin].items[item].formuleContent != undefined) {
                    if (this.delivery[admin].items[item].formuleContent.length != 0) {
                      for (var _i6 = 0, _Object$keys6 = Object.keys(this.delivery[admin].items[item].formuleContent); _i6 < _Object$keys6.length; _i6++) {
                        var p = _Object$keys6[_i6];
                        this.tmp.push({
                          key: this.delivery[admin].items[item].formuleContent[p].key,
                          quantite: this.delivery[admin].items[item].formuleContent[p].quantite
                        });
                      }
                    }
                  } else if (this.delivery[admin].items[item].key != undefined) {
                    this.tmp.push({
                      key: this.delivery[admin].items[item].key,
                      quantite: this.delivery[admin].items[item].quantite
                    });
                  }
                }
              }
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.delivery = [];
            this.addAdmin();
            this.price = 0;
          } // ADDS 

        }, {
          key: "addAdmin",
          value: function addAdmin() {
            this.delivery.push({
              name: '',
              items: [],
              firstPrice: 0,
              delivery: true
            });
            this.addItems(this.delivery[this.delivery.length - 1].items);
          }
        }, {
          key: "addItems",
          value: function addItems(items) {
            items.push({
              key: '',
              title: '',
              quantite: 1,
              price: 0,
              firstPrice: 0,
              formuleContent: [],
              max: -1
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "add",
          value: function add(item, admin) {
            if (item.max != -1) {
              if (item.quantite < item.max) {
                item.quantite++;
                this.updatePrices(item, 1, true);
                this.updatesFirstPrices(admin, 1, item, true);
              }
            } else {
              item.quantite++;
            }
          }
        }, {
          key: "remove",
          value: function remove(item, admin) {
            if (item.quantite > 1) {
              item.quantite--;
              this.updatePrices(item, 1, false);
              this.updatesFirstPrices(admin, 1, item, false);
            }
          }
        }, {
          key: "updatePrices",
          value: function updatePrices(item, quantite, add) {
            if (add) {
              this.price = this.price + item.price;
            } else {
              this.price = this.price - item.price * quantite;
            }
          }
        }, {
          key: "updatesFirstPrices",
          value: function updatesFirstPrices(admin, quantite, item, add) {
            if (add) {
              admin.firstPrice = admin.firstPrice + item.firstPrice;
            } else {
              admin.firstPrice = admin.firstPrice - item.firstPrice * quantite;
            }
          }
        }, {
          key: "delete",
          value: function _delete(item, i, j) {
            var d = this.delivery[i];
            this.price = this.price - item.price * item.quantite;
            d.firstPrice = d.firstPrice - d.items[j].firstPrice * d.quantite;
            d.items.splice(j, 1);
          }
        }, {
          key: "deleteAll",
          value: function deleteAll(admin, i) {
            for (var _i7 = 0, _Object$keys7 = Object.keys(admin.items); _i7 < _Object$keys7.length; _i7++) {
              var item = _Object$keys7[_i7];
              this.price = this.price - admin.items[item].price * admin.items[item].quantite;
              admin.firstPrice = admin.firstPrice - admin.items[item].firstPrice * admin.items[item].quantite;
            }

            this.delivery.splice(i, 1);
          } // MODALS

        }, {
          key: "itemsModal",
          value: function itemsModal(admin, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = this.modalCtrl;
                      _context.t1 = _items_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"];
                      _context.t2 = {
                        afDB: this.afDB
                      };
                      _context.next = 5;
                      return this.modalCtrl.getTop();

                    case 5:
                      _context.t3 = _context.sent;
                      _context.t4 = {
                        component: _context.t1,
                        componentProps: _context.t2,
                        cssClass: 'my-custom-class',
                        swipeToClose: true,
                        presentingElement: _context.t3
                      };
                      _context.next = 9;
                      return _context.t0.create.call(_context.t0, _context.t4);

                    case 9:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data !== undefined) {
                          if (item.title != '') {
                            _this3.updatePrices(item, item.quantite, false);

                            _this3.updatesFirstPrices(admin, item.quantite, item, false);
                          }

                          item.title = data.data.item.title;
                          item.max = data.data.item.quantite;
                          item.price = data.data.item.price;
                          item.firstPrice = data.data.item.firstPrice;
                          item.quantite = 1;

                          if (data.data.item.formuleContent != undefined) {
                            item.formuleContent = data.data.item.formuleContent;
                          }

                          item.key = data.data.item.key;

                          _this3.updatePrices(item, 1, true);

                          _this3.updatesFirstPrices(admin, 1, item, true);
                        }
                      });
                      _context.next = 13;
                      return modal.present();

                    case 13:
                      return _context.abrupt("return", _context.sent);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "activated",
          value: function activated() {
            document.querySelector('#date-item').classList.toggle('no-input-feet');
          } // POPOVERS

        }, {
          key: "namesPopover",
          value: function namesPopover(ev, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
                      _context2.next = 3;
                      return this.popoverCtrl.create({
                        component: _names_names_component__WEBPACK_IMPORTED_MODULE_4__["NamesComponent"],
                        cssClass: 'sort-popover',
                        event: ev,
                        mode: "md",
                        translucent: true
                      });

                    case 3:
                      popover = _context2.sent;
                      popover.onDidDismiss().then(function (data) {
                        if (data.data !== undefined) {
                          _this4.delivery[i].name = data.data.fromPopover;
                        }

                        document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
                      });
                      _context2.next = 7;
                      return popover.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openOptionPopover",
          value: function openOptionPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverCtrl.create({
                        component: _options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_6__["OptionsLivraisonComponent"],
                        event: ev,
                        mode: "md",
                        translucent: true
                      });

                    case 2:
                      popover = _context3.sent;
                      popover.onWillDismiss().then(function (data) {
                        if (_this5.type != data.data.type) {
                          _this5.init();
                        }

                        _this5.type = data.data.type;
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
          } //BDD

        }, {
          key: "setQuantite",
          value: function setQuantite(key, val, signe) {
            for (var _i8 = 0, _Object$keys8 = Object.keys(this.produits); _i8 < _Object$keys8.length; _i8++) {
              var p = _Object$keys8[_i8];

              if (this.produits[p].key == key) {
                this.produits[p].content.stock = this.produits[p].content.stock + signe * val;
                this.afDB.object('produits/' + key + '/stock').set(this.produits[p].content.stock);
              }
            }
          }
        }, {
          key: "save",
          value: function save() {
            if (this.key != undefined) {
              for (var _i9 = 0, _Object$keys9 = Object.keys(this.tmp); _i9 < _Object$keys9.length; _i9++) {
                var t = _Object$keys9[_i9];
                this.setQuantite(this.tmp[t].key, this.tmp[t].quantite, 1);
              }

              this.modifyItemInFirebase();
            } else {
              this.addItemToFirebase();
            }

            for (var _i10 = 0, _Object$keys10 = Object.keys(this.delivery); _i10 < _Object$keys10.length; _i10++) {
              var admin = _Object$keys10[_i10];

              for (var _i11 = 0, _Object$keys11 = Object.keys(this.delivery[admin].items); _i11 < _Object$keys11.length; _i11++) {
                var item = _Object$keys11[_i11];

                if (this.delivery[admin].items[item].formuleContent != undefined) {
                  if (this.delivery[admin].items[item].formuleContent.length != 0) {
                    for (var _i12 = 0, _Object$keys12 = Object.keys(this.delivery[admin].items[item].formuleContent); _i12 < _Object$keys12.length; _i12++) {
                      var p = _Object$keys12[_i12];
                      this.setQuantite(this.delivery[admin].items[item].formuleContent[p].key, this.delivery[admin].items[item].formuleContent[p].quantite, -1);
                    }
                  }
                } else if (this.delivery[admin].items[item].key != '') {
                  this.setQuantite(this.delivery[admin].items[item].key, this.delivery[admin].items[item].quantite, -1);
                }
              }
            }

            this.close();
          }
        }, {
          key: "addItemToFirebase",
          value: function addItemToFirebase() {
            this.afDB.list('Livraisons/').push({
              title: this.title,
              order: this.delivery,
              price: this.price,
              distance: this.km,
              date: this.date,
              clientName: this.clientName,
              type: this.type
            });
          }
        }, {
          key: "modifyItemInFirebase",
          value: function modifyItemInFirebase() {
            this.afDB.object('Livraisons/' + this.key + '/title/').set(this.title);
            this.afDB.object('Livraisons/' + this.key + '/order/').set(this.delivery);
            this.afDB.object('Livraisons/' + this.key + '/price/').set(this.price);
            this.afDB.object('Livraisons/' + this.key + '/distance/').set(this.km);
            this.afDB.object('Livraisons/' + this.key + '/clientName/').set(this.clientName);
            this.afDB.object('Livraisons/' + this.key + '/date/').set(this.date);
            this.afDB.object('Livraisons/' + this.key + '/type/').set(this.type);
          }
        }, {
          key: "getProduitsFromFirebase",
          value: function getProduitsFromFirebase() {
            var _this6 = this;

            this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(function (actions) {
              _this6.produits = [];
              actions.forEach(function (action) {
                _this6.produits.push({
                  key: action.key,
                  content: action.payload.exportVal()
                });
              });
            });
          }
        }]);

        return NewComponent;
      }();

      NewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }];
      };

      NewComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        price: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        km: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clientName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        delivery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.component.scss */
        "./src/app/tab3/new/new.component.scss"))["default"]]
      })], NewComponent);
      /***/
    },

    /***/
    "./src/app/tab3/new/options-livraison/options-livraison.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/tab3/new/options-livraison/options-livraison.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3NewOptionsLivraisonOptionsLivraisonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L29wdGlvbnMtbGl2cmFpc29uL29wdGlvbnMtbGl2cmFpc29uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab3/new/options-livraison/options-livraison.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/tab3/new/options-livraison/options-livraison.component.ts ***!
      \***************************************************************************/

    /*! exports provided: OptionsLivraisonComponent */

    /***/
    function srcAppTab3NewOptionsLivraisonOptionsLivraisonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsLivraisonComponent", function () {
        return OptionsLivraisonComponent;
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

      var OptionsLivraisonComponent = /*#__PURE__*/function () {
        function OptionsLivraisonComponent(popoverCtrl) {
          _classCallCheck(this, OptionsLivraisonComponent);

          this.popoverCtrl = popoverCtrl;
        }

        _createClass(OptionsLivraisonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lone",
          value: function lone() {
            this.close('lone');
          }
        }, {
          key: "share",
          value: function share() {
            this.close('share');
          }
        }, {
          key: "close",
          value: function close(type) {
            this.popoverCtrl.dismiss({
              'type': type
            });
          }
        }]);

        return OptionsLivraisonComponent;
      }();

      OptionsLivraisonComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      OptionsLivraisonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options-livraison',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./options-livraison.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./options-livraison.component.scss */
        "./src/app/tab3/new/options-livraison/options-livraison.component.scss"))["default"]]
      })], OptionsLivraisonComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~edit-edit-module~tab3-tab3-module-es5.js.map