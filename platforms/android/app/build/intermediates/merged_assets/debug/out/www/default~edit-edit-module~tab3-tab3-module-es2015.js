(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-edit-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"close(null)\">\n      <ion-label>Cancel</ion-label>\n    </ion-button>\n    <ion-title>Selectionner produit</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar disabled animated showCancelButton=\"focus\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-list-header>\n      <ion-title>Produits</ion-title>\n    </ion-list-header>\n\n    <ion-item-group *ngFor=\"let item of items\">\n      <ion-item *ngIf=\"!item.formule\" [disabled]=\"item.quantite == 0\" button detail=\"false\" (click)=\"close(item)\" >\n        <ion-label> {{ item.title }} </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-list-header>\n      <ion-title>Formules</ion-title>\n    </ion-list-header>\n\n    <ion-item-group *ngFor=\"let item of items\">\n      <ion-item *ngIf=\"item.formule\" [disabled]=\"!item.disponible\" button detail=\"false\" (click)=\"close(item)\" >\n        <ion-label> {{ item.title }} </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list mode=\"ios\" lines=\"none\">\n  <ion-item button detail=\"false\" *ngFor=\"let name of names\" (click)=\"dissmis(name)\">\n    <ion-label> {{ name }} </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--border-style: none\">\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"close()\">\n      <ion-label>Annuler</ion-label>\n    </ion-button>\n    <ion-title>Nouveau</ion-title>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"save()\">\n      <ion-label>Terminer</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" [fullscreen]=\"true\">\n\n  <ion-toolbar style=\"margin-top: 10px; z-index: 0;\">\n    <ion-title size=\"large\" style=\"padding-left: 0\">Livraison</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" style=\"--color: black\" (click)=\"openOptionPopover($event)\">\n      <ion-icon name=\"chevron-down\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n  <ion-list lines=\"none\">\n\n    <ion-item class=\"full\">\n      <ion-input [(ngModel)]=\"title\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"title\" placeholder=\"Titre\"></ion-input>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-list *ngFor=\"let admin of delivery; let i = index\">\n\n      <ion-item mode=\"ios\" id=\"no-input-{{i}}\" class=\"full\" required (click)=\"namesPopover($event, i)\">\n        <ion-label *ngIf=\"admin.name != ''\"> {{ admin.name }} </ion-label>\n        <ion-note *ngIf=\"admin.name == ''\">Nom du Livreur</ion-note>\n        <span class=\"input-feet\"></span>\n        <ion-icon slot=\"end\" class=\"focus-icon\" size=\"small\" name=\"chevron-down\"></ion-icon>\n      </ion-item>\n\n      <ion-item-sliding #slide *ngFor=\"let item of admin.items; let j = index\">\n\n        <ion-item mode=\"ios\" id=\"formule-{{ i }}{{ j }}-item\" class=\"items\" class=\"full\">\n          <ion-input [(ngModel)]=\"item.title\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"item.title\" placeholder=\"Item {{ j + 1 }} :\"></ion-input>\n          <span class=\"input-feet second-size\"></span>\n          <ion-button class=\"modal\" fill=\"clear\" slot=\"end\" (click)=\"itemsModal(admin, item)\">\n            <ion-icon size=\"large\" name=\"pricetag\"></ion-icon>\n          </ion-button>\n        </ion-item>\n\n        <ion-item-options side=\"end\" style=\"width: 70px;\" (click)=\"delete(item, i, j)\">\n          <ion-item-option color=\"danger\" style=\"width: 100%;\">\n            <ion-icon style=\"position: absolute; top: 25%; right: 50%; transform: translate(50%, -50%);\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item mode=\"ios\" class=\"full\" id=\"qte-{{i}}-item\" lines=\"full\">\n          <ion-label>Quantité :</ion-label>\n          <span class=\"input-feet second-size\"></span>\n          <div slot=\"end\" style=\"display: flex; margin: 0;position: relative;\">\n            <ion-chip style=\"margin-right: 20px; padding: 7px\" (click)=\"remove(item, admin)\">\n              <ion-icon style=\"margin: 0;\" size=\"small\" name=\"remove\"></ion-icon>\n            </ion-chip>\n            <ion-label style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);\"> {{ item.quantite }} </ion-label>\n            <ion-chip style=\"margin-left: 20px; padding: 7px\" (click)=\"add(item, admin)\">\n              <ion-icon style=\"margin: 0\" name=\"add\"></ion-icon>\n            </ion-chip>\n          </div>\n        </ion-item>\n        \n      </ion-item-sliding>\n\n      <ion-item>\n        <ion-chip (click)=\"addItems(admin.items)\"> \n          <ion-icon name=\"add\"></ion-icon>\n          <ion-label>Ajouter item</ion-label>\n        </ion-chip>\n      </ion-item>\n\n      <ion-item mode=\"ios\" class=\"full\" >\n        <ion-input [(ngModel)]=\"admin.firstPrice\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"admin.firstPrice\" placeholder=\"Prix achat\"></ion-input>\n        <ion-label>EUR</ion-label>\n        <span class=\"input-feet\"></span>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-item *ngIf=\"type == 'share'\">\n      <ion-chip (click)=\"addAdmin()\"> \n        <ion-icon name=\"add\"></ion-icon>\n        <ion-label>Ajouter livreur</ion-label>\n      </ion-chip>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\" >\n      <ion-input [(ngModel)]=\"price\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"price\" placeholder=\"Prix revente\"></ion-input>\n      <span class=\"input-feet\"></span>\n      <ion-label>EUR</ion-label>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\">\n      <ion-input [(ngModel)]=\"clientName\" type=\"text\" required autocapitalize=\"on\" autocorrect=\"on\" [value]=\"clientName\" placeholder=\"Nom du client\"></ion-input>\n      <span class=\"input-feet\"></span>\n    </ion-item>\n\n    <ion-item mode=\"ios\" class=\"full\">\n      <ion-input [(ngModel)]=\"km\" type=\"number\" enterkeyhint=\"done\" inputmode=\"decimal\" [value]=\"km\" placeholder=\"Km parcourut\"></ion-input>\n      <span class=\"input-feet first-size\"></span>\n      <ion-label style=\"margin-right: 0\" slot=\"end\">KM</ion-label>\n    </ion-item>\n\n    <ion-item id=\"date-item\" class=\"full\">\n      <ion-datetime (ionBlur)=\"activated()\" [(ngModel)]=\"date\" required [value]=\"date\" display-timezone=\"utc\"></ion-datetime>\n      <span class=\"input-feet\"></span> \n      <ion-icon slot=\"end\" class=\"focus-icon\" size=\"small\" name=\"chevron-down\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list lines=\"none\">\n\n  <ion-item button (click)=\"lone()\">\n    <ion-label>Livraison seule</ion-label>\n  </ion-item>\n\n  <ion-item button (click)=\"share()\">\n    <ion-label>Livraison partagée</ion-label>\n  </ion-item>\n  \n</ion-list>\n");

/***/ }),

/***/ "./src/app/tab3/new/items/items.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab3/new/items/items.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/new/items/items.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tab3/new/items/items.component.ts ***!
  \***************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ItemsComponent = class ItemsComponent {
    constructor(modalctrl) {
        this.modalctrl = modalctrl;
        this.items = [];
    }
    ngOnInit() {
        this.getTitleInFirebase();
    }
    close(item) {
        setTimeout(() => {
            if (item !== null) {
                this.modalctrl.dismiss({
                    'item': item,
                });
            }
            else {
                this.modalctrl.dismiss();
            }
        }, 200);
    }
    getTitleInFirebase() {
        this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
            this.items = [];
            actions.forEach(action => {
                this.items.push({
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
            for (let i of Object.keys(this.items)) {
                if (this.items[i].formule) {
                    let cpt = 0;
                    for (let j of Object.keys(this.items[i].formuleContent)) {
                        for (let k of Object.keys(this.items)) {
                            if (this.items[i].formuleContent[j].title == this.items[k].title && !this.items[k].formule) {
                                if (this.items[k].quantite - this.items[i].formuleContent[j].quantite < 0) {
                                    this.items[i].disponible = false;
                                }
                                else {
                                    cpt = cpt + 1;
                                    if (this.items[i].formuleContent.length == cpt) {
                                        this.items[i].disponible = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
};
ItemsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ItemsComponent.propDecorators = {
    afDB: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/items/items.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./items.component.scss */ "./src/app/tab3/new/items/items.component.scss")).default]
    })
], ItemsComponent);



/***/ }),

/***/ "./src/app/tab3/new/names/names.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab3/new/names/names.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L25hbWVzL25hbWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/new/names/names.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tab3/new/names/names.component.ts ***!
  \***************************************************/
/*! exports provided: NamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamesComponent", function() { return NamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let NamesComponent = class NamesComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.names = ['Alexis', 'Hugo', 'Marvyn', 'Gud', 'Taheir'];
    }
    ngOnInit() { }
    dissmis(name) {
        this.popoverCtrl.dismiss({
            'fromPopover': name
        });
    }
};
NamesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
NamesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-names',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./names.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/names/names.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./names.component.scss */ "./src/app/tab3/new/names/names.component.scss")).default]
    })
], NamesComponent);



/***/ }),

/***/ "./src/app/tab3/new/new.component.scss":
/*!*********************************************!*\
  !*** ./src/app/tab3/new/new.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content ion-item {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\n.modal {\n  --border-style: solid;\n  --border-color: black;\n  --color: black;\n  --border-width: 2px;\n  height: 45px;\n}\n\n.focus-icon {\n  margin-right: 0;\n}\n\n.item-has-focus .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.item-has-focus .focus-icon {\n  color: #3880ff;\n}\n\n.no-input-feet .input-feet {\n  background: #3880ff;\n  opacity: 1;\n}\n\n.no-input-feet .focus-icon {\n  color: #3880ff;\n}\n\n.input-feet {\n  width: 100%;\n  height: 2px;\n  background: grey;\n  opacity: 0.5;\n  position: absolute;\n  bottom: 5px;\n  transition-property: background, opacity;\n  transition-duration: 0.2s;\n}\n\n.first-size {\n  width: 85%;\n}\n\n.second-size {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9uZXcvbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFRTtFQUNJLGVBQUE7QUFDTjs7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUFOOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBSFI7O0FBTUk7RUFDSSxjQUFBO0FBSlI7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLHdDQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFVRTtFQUNJLFVBQUE7QUFQTjs7QUFVRTtFQUNFLFVBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L25ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAtLWNvbG9yOiBibGFjaztcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuIH1cclxuXHJcbiAgLmZvY3VzLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgLmlucHV0LWZlZXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cy1pY29uIHtcclxuICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm8taW5wdXQtZmVldCB7XHJcbiAgICAuaW5wdXQtZmVldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb2N1cy1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dC1mZWV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxuICB9XHJcblxyXG4gIC8vIFNJWkVcclxuICAuZmlyc3Qtc2l6ZSB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLXNpemUge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/tab3/new/new.component.ts":
/*!*******************************************!*\
  !*** ./src/app/tab3/new/new.component.ts ***!
  \*******************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/items.component */ "./src/app/tab3/new/items/items.component.ts");
/* harmony import */ var _names_names_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./names/names.component */ "./src/app/tab3/new/names/names.component.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options-livraison/options-livraison.component */ "./src/app/tab3/new/options-livraison/options-livraison.component.ts");








let NewComponent = class NewComponent {
    constructor(modalCtrl, popoverCtrl, afDB) {
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
    ngOnInit() {
        if (this.delivery == undefined) {
            this.init();
        }
        else {
            for (let admin of Object.keys(this.delivery)) {
                for (let item of Object.keys(this.delivery[admin].items)) {
                    if (this.delivery[admin].items[item].formuleContent != undefined) {
                        if (this.delivery[admin].items[item].formuleContent.length != 0) {
                            for (let p of Object.keys(this.delivery[admin].items[item].formuleContent)) {
                                this.tmp.push({
                                    key: this.delivery[admin].items[item].formuleContent[p].key,
                                    quantite: this.delivery[admin].items[item].formuleContent[p].quantite,
                                });
                            }
                        }
                    }
                    else if (this.delivery[admin].items[item].key != undefined) {
                        this.tmp.push({
                            key: this.delivery[admin].items[item].key,
                            quantite: this.delivery[admin].items[item].quantite,
                        });
                    }
                }
            }
        }
    }
    init() {
        this.delivery = [];
        this.addAdmin();
        this.price = 0;
    }
    // ADDS 
    addAdmin() {
        this.delivery.push({
            name: '',
            items: [],
            firstPrice: 0,
            delivery: true,
        });
        this.addItems(this.delivery[this.delivery.length - 1].items);
    }
    addItems(items) {
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
    close() {
        this.modalCtrl.dismiss();
    }
    add(item, admin) {
        if (item.max != -1) {
            if (item.quantite < item.max) {
                item.quantite++;
                this.updatePrices(item, 1, true);
                this.updatesFirstPrices(admin, 1, item, true);
            }
        }
        else {
            item.quantite++;
        }
    }
    remove(item, admin) {
        if (item.quantite > 1) {
            item.quantite--;
            this.updatePrices(item, 1, false);
            this.updatesFirstPrices(admin, 1, item, false);
        }
    }
    updatePrices(item, quantite, add) {
        if (add) {
            this.price = this.price + item.price;
        }
        else {
            this.price = this.price - (item.price * quantite);
        }
    }
    updatesFirstPrices(admin, quantite, item, add) {
        if (add) {
            admin.firstPrice = admin.firstPrice + item.firstPrice;
        }
        else {
            admin.firstPrice = admin.firstPrice - (item.firstPrice * quantite);
        }
    }
    delete(item, i, j) {
        let d = this.delivery[i];
        this.price = this.price - (item.price * item.quantite);
        d.firstPrice = d.firstPrice - (d.items[j].firstPrice * d.quantite);
        d.items.splice(j, 1);
    }
    deleteAll(admin, i) {
        for (let item of Object.keys(admin.items)) {
            this.price = this.price - (admin.items[item].price * admin.items[item].quantite);
            admin.firstPrice = admin.firstPrice - (admin.items[item].firstPrice * admin.items[item].quantite);
        }
        this.delivery.splice(i, 1);
    }
    // MODALS
    itemsModal(admin, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _items_items_component__WEBPACK_IMPORTED_MODULE_3__["ItemsComponent"],
                componentProps: {
                    afDB: this.afDB
                },
                cssClass: 'my-custom-class',
                swipeToClose: true,
                presentingElement: yield this.modalCtrl.getTop()
            });
            modal.onDidDismiss().then((data) => {
                if (data.data !== undefined) {
                    if (item.title != '') {
                        this.updatePrices(item, item.quantite, false);
                        this.updatesFirstPrices(admin, item.quantite, item, false);
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
                    this.updatePrices(item, 1, true);
                    this.updatesFirstPrices(admin, 1, item, true);
                }
            });
            return yield modal.present();
        });
    }
    activated() {
        document.querySelector('#date-item').classList.toggle('no-input-feet');
    }
    // POPOVERS
    namesPopover(ev, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
            const popover = yield this.popoverCtrl.create({
                component: _names_names_component__WEBPACK_IMPORTED_MODULE_4__["NamesComponent"],
                cssClass: 'sort-popover',
                event: ev,
                mode: "md",
                translucent: true,
            });
            popover.onDidDismiss().then((data) => {
                if (data.data !== undefined) {
                    this.delivery[i].name = data.data.fromPopover;
                }
                document.querySelector('#no-input-' + i).classList.toggle('no-input-feet');
            });
            return yield popover.present();
        });
    }
    openOptionPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _options_livraison_options_livraison_component__WEBPACK_IMPORTED_MODULE_6__["OptionsLivraisonComponent"],
                event: ev,
                mode: "md",
                translucent: true
            });
            popover.onWillDismiss().then((data) => {
                if (this.type != data.data.type) {
                    this.init();
                }
                this.type = data.data.type;
            });
            return yield popover.present();
        });
    }
    //BDD
    setQuantite(key, val, signe) {
        for (let p of Object.keys(this.produits)) {
            if (this.produits[p].key == key) {
                this.produits[p].content.stock = this.produits[p].content.stock + (signe * val);
                this.afDB.object('produits/' + key + '/stock').set(this.produits[p].content.stock);
            }
        }
    }
    save() {
        if (this.key != undefined) {
            for (let t of Object.keys(this.tmp)) {
                this.setQuantite(this.tmp[t].key, this.tmp[t].quantite, 1);
            }
            this.modifyItemInFirebase();
        }
        else {
            this.addItemToFirebase();
        }
        for (let admin of Object.keys(this.delivery)) {
            for (let item of Object.keys(this.delivery[admin].items)) {
                if (this.delivery[admin].items[item].formuleContent != undefined) {
                    if (this.delivery[admin].items[item].formuleContent.length != 0) {
                        for (let p of Object.keys(this.delivery[admin].items[item].formuleContent)) {
                            this.setQuantite(this.delivery[admin].items[item].formuleContent[p].key, this.delivery[admin].items[item].formuleContent[p].quantite, -1);
                        }
                    }
                }
                else if (this.delivery[admin].items[item].key != '') {
                    this.setQuantite(this.delivery[admin].items[item].key, this.delivery[admin].items[item].quantite, -1);
                }
            }
        }
        this.close();
    }
    addItemToFirebase() {
        this.afDB.list('Livraisons/').push({
            title: this.title,
            order: this.delivery,
            price: this.price,
            distance: this.km,
            date: this.date,
            clientName: this.clientName,
            type: this.type,
        });
    }
    modifyItemInFirebase() {
        this.afDB.object('Livraisons/' + this.key + '/title/').set(this.title);
        this.afDB.object('Livraisons/' + this.key + '/order/').set(this.delivery);
        this.afDB.object('Livraisons/' + this.key + '/price/').set(this.price);
        this.afDB.object('Livraisons/' + this.key + '/distance/').set(this.km);
        this.afDB.object('Livraisons/' + this.key + '/clientName/').set(this.clientName);
        this.afDB.object('Livraisons/' + this.key + '/date/').set(this.date);
        this.afDB.object('Livraisons/' + this.key + '/type/').set(this.type);
    }
    getProduitsFromFirebase() {
        this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
            this.produits = [];
            actions.forEach(action => {
                this.produits.push({
                    key: action.key,
                    content: action.payload.exportVal()
                });
            });
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }
];
NewComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    km: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    delivery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/new.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new.component.scss */ "./src/app/tab3/new/new.component.scss")).default]
    })
], NewComponent);



/***/ }),

/***/ "./src/app/tab3/new/options-livraison/options-livraison.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tab3/new/options-livraison/options-livraison.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvbmV3L29wdGlvbnMtbGl2cmFpc29uL29wdGlvbnMtbGl2cmFpc29uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tab3/new/options-livraison/options-livraison.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/new/options-livraison/options-livraison.component.ts ***!
  \***************************************************************************/
/*! exports provided: OptionsLivraisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsLivraisonComponent", function() { return OptionsLivraisonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let OptionsLivraisonComponent = class OptionsLivraisonComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
    lone() {
        this.close('lone');
    }
    share() {
        this.close('share');
    }
    close(type) {
        this.popoverCtrl.dismiss({
            'type': type
        });
    }
};
OptionsLivraisonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
OptionsLivraisonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options-livraison',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./options-livraison.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/new/options-livraison/options-livraison.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./options-livraison.component.scss */ "./src/app/tab3/new/options-livraison/options-livraison.component.scss")).default]
    })
], OptionsLivraisonComponent);



/***/ })

}]);
//# sourceMappingURL=default~edit-edit-module~tab3-tab3-module-es2015.js.map