(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\"--border-style: none;\">\n    <ion-button fill=\"clear\" slot=\"start\" (click)=\"goBack()\">\n      <ion-icon name=\"chevron-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Détail</ion-title>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"openEdit()\">\n      <ion-label>Edit</ion-label>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n\n    <ion-item-divider>\n      \n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label>Nom :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.name }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catégorie :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.category }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Prix à l'achat :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> €{{ (+item.firstPrice).toFixed(2) }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>prix à la revente :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> €{{ (+item.price).toFixed(2) }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Quantité :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: end;\"> {{ item.stock }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Type : </ion-label>\n      <ion-note *ngIf=\"formule\" slot=\"end\" style=\"text-align: end;\">Formule</ion-note>\n      <ion-note *ngIf=\"!formule\" slot=\"end\" style=\"text-align: end;\">Produit</ion-note>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar style=\"--border-style: none\">\n    <ion-button class=\"toolbar-button\" slot=\"start\" fill=\"clear\" (click)=\"goBack()\" style=\"--padding-start: 0\">\n      <ion-icon size=\"large\" name=\"chevron-back\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"toolbar-button\" (click)=\"addNewExpModal()\" slot=\"end\" fill=\"clear\">\n      <ion-label>Edit</ion-label>\n    </ion-button>\n  </ion-toolbar>\n  \n  <ion-list lines=\"none\">\n    <ion-item style=\"text-align: center;\">\n      <ion-label style=\"font-size: 20pt; font-weight: bold;\"> {{ item.title }} </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-title>€{{ (+item.price).toFixed(2) }} </ion-title>\n    </ion-item>\n    <ion-item style=\" --padding-end: 0;\">\n      <ion-label>Livré par <strong>{{ item.name }}</strong> </ion-label>\n      <ion-datetime slot=\"end\" readonly displayFormat=\"DD/MM/YYYY\" value=\"{{ item.date }}\" style=\"text-align: end;\"></ion-datetime>\n    </ion-item>\n    <ion-item-divider lines=\"full\">\n      \n    </ion-item-divider>\n\n    <ion-item lines=\"full\">\n      <ion-label>Détail :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ details }} </ion-note>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label>Distance :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ item.distance }} km </ion-note>\n    </ion-item>\n\n    <ion-item lines=\"full\" *ngIf=\"item.type != 'prodOnly'\">\n      <ion-label>Nom du client :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right;\"> {{ item.clientName }} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Type de livraison :</ion-label>\n      <ion-note slot=\"end\" style=\"text-align: right\"> {{ getType(item.type) }} </ion-note>\n    </ion-item>\n\n    <ion-item-divider>\n      \n    </ion-item-divider>\n\n    <section>\n      <ion-button lines=\"full\" fill=\"clear\" expand=\"full\" (click)=\"delete()\">\n        <ion-label color=\"danger\">Supprimer item</ion-label>\n      </ion-button>\n    </section>\n  </ion-list>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/edit/edit-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tab2/edit/edit-routing.module.ts ***!
  \**************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/tab2/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/edit/edit.module.ts":
/*!******************************************!*\
  !*** ./src/app/tab2/edit/edit.module.ts ***!
  \******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/tab2/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/tab2/edit/edit.page.ts");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/tab2/edit/edit.page.scss":
/*!******************************************!*\
  !*** ./src/app/tab2/edit/edit.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi9lZGl0L2VkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/edit/edit.page.ts":
/*!****************************************!*\
  !*** ./src/app/tab2/edit/edit.page.ts ***!
  \****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add/add.component */ "./src/app/tab2/add/add.component.ts");

// ANGULAR


// IONIC

// OWN COMPONENT

let EditPage = class EditPage {
    constructor(route, navCtrl, modalCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.formule = false;
        this.route.queryParams.subscribe(params => {
            this.item = params['item'];
            this.afDB = params['afDB'];
            this.formule = this.item.formule;
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    openEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
                componentProps: {
                    item: this.item,
                    afBD: this.afDB
                },
                swipeToClose: true,
            });
            modal.onWillDismiss().then((data) => {
                if (data.data.item != undefined) {
                    this.item = data.data.item;
                }
            });
            return yield modal.present();
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/tab2/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ }),

/***/ "./src/app/tab3/edit/edit-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tab3/edit/edit-routing.module.ts ***!
  \**************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/tab3/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/edit/edit.module.ts":
/*!******************************************!*\
  !*** ./src/app/tab3/edit/edit.module.ts ***!
  \******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/tab3/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/tab3/edit/edit.page.ts");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/tab3/edit/edit.page.scss":
/*!******************************************!*\
  !*** ./src/app/tab3/edit/edit.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.ion-activated {\n  --background-activated: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLmlvbi1hY3RpdmF0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/edit/edit.page.ts":
/*!****************************************!*\
  !*** ./src/app/tab3/edit/edit.page.ts ***!
  \****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new/new.component */ "./src/app/tab3/new/new.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");






let EditPage = class EditPage {
    constructor(navCtrl, modalController, afDB, route) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.afDB = afDB;
        this.route = route;
        this.item = [];
        this.produits = [];
        this.details = '';
        this.route.queryParams.subscribe(params => {
            this.key = params['item'].key;
        });
    }
    ngOnInit() {
        this.getDeliveryFromFirebase();
        this.getProduitsFromFirebase();
    }
    goBack() {
        this.navCtrl.navigateBack('tabs/tab3');
    }
    getType(type) {
        if (type == 'lone') {
            return 'Livraison seule';
        }
        return 'Livraison partagée';
    }
    addNewExpModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
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
            return yield modal.present();
        });
    }
    setQuantite(key, val) {
        for (let p of Object.keys(this.produits)) {
            if (this.produits[p].key == key) {
                this.produits[p].content.stock = this.produits[p].content.stock + val;
                this.afDB.object('produits/' + key + '/stock').set(this.produits[p].content.stock);
            }
        }
    }
    delete() {
        for (let admin of Object.keys(this.item.order)) {
            for (let i of Object.keys(this.item.order[admin].items)) {
                if (this.item.order[admin].items[i].formuleContent != undefined) {
                    if (this.item.order[admin].items[i].formuleContent.length != 0) {
                        for (let p of Object.keys(this.item.order[admin].items[i].formuleContent)) {
                            this.setQuantite(this.item.order[admin].items[i].formuleContent[p].key, this.item.order[admin].items[i].formuleContent[p].quantite);
                        }
                    }
                }
                else if (this.item.order[admin].items[i].key != '') {
                    this.setQuantite(this.item.order[admin].items[i].key, this.item.order[admin].items[i].quantite);
                }
            }
        }
        this.afDB.list('Livraisons/').remove(this.key);
        this.goBack();
    }
    getDeliveryFromFirebase() {
        this.afDB.object('Livraisons/' + this.key).valueChanges().subscribe(item => {
            this.item = item;
        });
    }
    getProduitsFromFirebase() {
        this.afDB.list('produits').snapshotChanges(['child_added', 'child_removed', 'child_changed']).subscribe(actions => {
            this.produits = [];
            this.details = '';
            actions.forEach(action => {
                this.produits.push({
                    key: action.key,
                    content: action.payload.exportVal(),
                });
            });
            for (let admin of Object.keys(this.item.order)) {
                for (let i of Object.keys(this.item.order[admin].items)) {
                    if (this.item.order[admin] == this.item.order[0] && this.item.order[admin].items[i] == this.item.order[0].items[0]) {
                        this.details = this.item.order[admin].items[i].quantite + ' x ' + this.item.order[admin].items[i].title;
                    }
                    else {
                        this.details = this.details + ', ' + this.item.order[admin].items[i].quantite + ' x ' + this.item.order[admin].items[i].title;
                    }
                }
            }
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/tab3/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=edit-edit-module-es2015.js.map