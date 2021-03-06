(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" >\n  <ion-toolbar >\n    <ion-title>Items</ion-title>\n    <ion-button class=\"toolbar-button\" fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\n      <ion-icon name=\"chevron-down\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"toolbar-button\" fill=\"clear\" slot=\"end\" (click)=\"presentAddModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-list lines=\"full\">\n\n    <ion-item class=\"title\">\n      <ion-title size=\"large\">Produits</ion-title>\n    </ion-item>\n\n    <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n      <ion-item *ngIf=\"!item.formule\" (click)=\"goToEdit(item)\" button style=\"--padding-top: 5px\">\n        <div>\n          <ion-label style=\"font-weight: bold;\"> {{ item.name }} </ion-label>\n          <ion-label style=\"font-size: medium;\"> {{ item.category }} </ion-label>\n          <ion-note> {{ item.price }} €</ion-note>\n        </div>\n        <ion-chip slot=\"end\" *ngIf='item.stock == 0' color=\"danger\">\n          <ion-label> {{ item.stock }} </ion-label>\n        </ion-chip>\n        <ion-chip slot=\"end\" *ngIf='item.stock != 0'>\n          <ion-label> {{ item.stock }} </ion-label>\n        </ion-chip>\n\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"delete(item)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item class=\"title\">\n      <ion-title size=\"large\">Formules</ion-title>\n    </ion-item>\n\n    <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n      <ion-item [disabled]=\"!item.disponible\" *ngIf=\"item.formule\" (click)=\"goToEdit(item)\" button style=\"--padding-top: 5px\">\n        <div>\n          <ion-label style=\"font-weight: bold;\"> {{ item.name }} </ion-label>\n          <ion-label style=\"font-size: medium;\"> {{ item.category }} </ion-label>\n          <ion-note> {{ item.price }} €</ion-note>\n        </div>\n\n        <ion-note slot=\"end\" style=\"text-align: end;\" *ngIf=\"item.disponible\">Disponible</ion-note>\n        <ion-note slot=\"end\" style=\"text-align: end;\" *ngIf=\"!item.disponible\" color=\"danger\">Indisponible</ion-note>\n\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"delete(item)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    },
    {
        path: 'edit',
        loadChildren: () => Promise.all(/*! import() | edit-edit-module */[__webpack_require__.e("default~edit-edit-module~tab3-tab3-module"), __webpack_require__.e("edit-edit-module")]).then(__webpack_require__.bind(null, /*! ./edit/edit.module */ "./src/app/tab2/edit/edit.module.ts")).then(m => m.EditPageModule)
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var _add_quantite_quantite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/quantite/quantite.component */ "./src/app/tab2/add/quantite/quantite.component.ts");
/* harmony import */ var _add_options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/options/options.component */ "./src/app/tab2/add/options/options.component.ts");
/* harmony import */ var _add_produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/produits-list/produits-list.component */ "./src/app/tab2/add/produits-list/produits-list.component.ts");











let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _add_quantite_quantite_component__WEBPACK_IMPORTED_MODULE_8__["QuantiteComponent"], _add_options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"], _add_produits_list_produits_list_component__WEBPACK_IMPORTED_MODULE_10__["ProduitsListComponent"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****    HEADER    ****/\n/****    CONTENT ****/\n.title {\n  margin-top: 20px;\n}\n.title ion-title {\n  padding-left: 0;\n}\nion-thumbnail {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUVBLHFCQUFBO0FBRUE7RUFDSSxnQkFBQTtBQURKO0FBR0k7RUFDSSxlQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogICAgSEVBREVSICAgICoqKiovXHJcblxyXG4vKioqKiAgICBDT05URU5UICoqKiovXHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/tab2/popover/popover.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/tab2/add/add.component.ts");



// COMPONENTS FROM IONIC




// OWN COMPONENTS


// CLASS FROM PROJECT
let Tab2Page = class Tab2Page {
    constructor(routerOutlet, afDB, popoverController, modalController, navCtrl) {
        this.routerOutlet = routerOutlet;
        this.afDB = afDB;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.items = [];
        this.getItemsFromFirebase();
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                componentProps: {},
                cssClass: 'sort-popover',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    goToEdit(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let navData = {
                queryParams: {
                    item: item,
                    afDB: this.afDB
                }
            };
            this.navCtrl.navigateForward('tabs/tab2/edit', navData);
        });
    }
    presentAddModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
                componentProps: {
                    afBD: this.afDB
                },
                cssClass: '',
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
    getItemsFromFirebase() {
        this.afDB.list('produits/').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
            this.items = [];
            actions.forEach(action => {
                let item = action.payload.exportVal();
                this.items.push({
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
            for (let i of Object.keys(this.items)) {
                if (this.items[i].formule) {
                    let cpt = 0;
                    for (let j of Object.keys(this.items[i].formuleContent)) {
                        for (let k of Object.keys(this.items)) {
                            if (this.items[i].formuleContent[j].title == this.items[k].name && !this.items[k].formule) {
                                if (this.items[k].stock - this.items[i].formuleContent[j].quantite < 0) {
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
    delete(item) {
        this.afDB.list('produits/').remove(item.key);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map