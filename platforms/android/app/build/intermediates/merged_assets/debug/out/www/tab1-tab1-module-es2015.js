(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      KOИTA\n    </ion-title>\n    <ion-button class=\"toolbar-button\" slot=\"end\" fill=\"clear\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"total\">\n    <ion-card id=\"total-card\">\n      <ion-card-subtitle mode=\"ios\">total :</ion-card-subtitle>\n      <ion-card-title> 254 € </ion-card-title>\n    </ion-card>\n  </div>\n\n  <ion-card id=\"notificaton\">   \n    <ion-card-header>\n      <ion-card-title>Général</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-card color=\"light\">\n          <ion-card-header style=\"display: flex; justify-content: space-between ;\">\n            <ion-card-subtitle mode=\"ios\">produit vendu !</ion-card-subtitle> \n            <ion-note>Il y a 12 min</ion-note>\n          </ion-card-header>\n          <hr style=\"height: 1px; background: grey; margin: 0;\"/>\n          <ion-card-content>\n            <p>3 produit(s) Marlboro vendu  <ion-icon name=\"arrow-forward\"></ion-icon>  45 € gagné !</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card color=\"light\">\n          <ion-card-header style=\"display: flex; justify-content: space-between;\">\n            <ion-card-subtitle mode=\"ios\"> livraison </ion-card-subtitle> \n            <ion-note>Il y a 45 min</ion-note>\n          </ion-card-header>\n          <hr style=\"height: 1px; background: grey; margin: 0;\"/>\n          <ion-card-content>\n            <p>Marvyn à parcourut 21 Km.</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Inventaire</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-card color=\"light\">\n          <ion-card-header>\n            <ion-card-subtitle mode=\"ios\"></ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-card color=\"light\">\n\n        </ion-card>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title></ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****    GENERAL    ****/\n.large-size {\n  font-size: 20pt;\n  font-weight: bold;\n}\n.small-margin {\n  margin: 10px;\n}\n.list-ios {\n  background: none;\n}\n/****    HEADER    ****/\n#total {\n  height: 80px;\n}\n#total-card {\n  padding: 20px;\n  text-align: center;\n}\n/****    CONTENT    ****/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBLHVCQUFBO0FBRUE7RUFDSSxZQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUEsd0JBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogICAgR0VORVJBTCAgICAqKioqL1xyXG5cclxuLmxhcmdlLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zbWFsbC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pb3Mge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4vKioqKiAgICBIRUFERVIgICAgKioqKi9cclxuXHJcbiN0b3RhbCB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiN0b3RhbC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKioqICAgIENPTlRFTlQgICAgKioqKi8gXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map