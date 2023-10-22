"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let LoginPage = class LoginPage {
    constructor(root, fAuth, toast) {
        this.root = root;
        this.fAuth = fAuth;
        this.toast = toast;
        this.isModalOpen = false;
        this.dataUser = {
            email: '',
            password: '',
        };
        this.resetpass = '';
        this.userId = '';
        this.resetemail = '';
        //Verifions l'etat de connexion de user
        this.fAuth.authState.subscribe(auth => {
            if (!auth) {
                console.log('user non connecté');
                this.connected = false;
            }
            else {
                console.log('user connecté' + auth.uid);
                this.userId = auth.uid;
                this.resetemail = auth.email;
                this.connected = true;
            }
        });
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    ngOnInit() {
    }
    login() {
        if (this.dataUser.email, this.dataUser.password) {
            this.fAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
                .then((res) => {
                console.log(res);
                this.root.navigateByUrl("/tabs/tab1");
                console.log('user connecté');
                this.dataUser = {
                    email: '',
                    password: '',
                };
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'success',
                    message: 'Connexion reussie',
                    mode: 'ios'
                }).then(res => res.present());
            }).catch(e => {
                console.log(e);
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'danger',
                    header: 'Email ou mot de passe incorrect',
                    message: 'Verifiez vos informations.puis connectez-vous et de réessayer ',
                }).then(res => res.present());
                this.dataUser = {
                    email: '',
                    password: '',
                };
            });
        }
    }
    signup() {
        if (this.dataUser.email && this.dataUser.password) {
            this.fAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
                .then((res) => {
                console.log(res);
                this.root.navigateByUrl("/tabs/tab1");
                console.log("Redirecto to page home");
                console.log('user inscrit avec succès');
                this.dataUser = {
                    email: '',
                    password: '',
                };
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'success',
                    message: 'Inscription effectuée avec succès',
                    mode: 'ios'
                }).then(res => res.present());
            }).catch(e => {
                console.log(e);
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'danger',
                    header: 'Email ou mot de passe incorrect',
                    message: 'Verifiez vos informations.puis connectez-vous et de réessayer ',
                }).then(res => res.present());
                this.dataUser = {
                    email: '',
                    password: '',
                };
            });
        }
    }
    resetpassword() {
        if (this.resetpass) {
            this.fAuth.sendPasswordResetEmail(this.resetpass).
                then((res) => {
                console.log(res);
                console.log('user inscrit avec succès');
                this.dataUser = {
                    email: '',
                    password: '',
                };
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'success',
                    message: "Lien de reinitialisation envoyée avec succès, merci de consulteer votre compte puis suivez les instructions à l'écran ",
                    mode: 'ios'
                }).then(res => res.present());
            }).catch(e => {
                console.log(e);
                this.toast.create({
                    duration: 3000,
                    position: 'top',
                    icon: 'alert',
                    color: 'danger',
                    header: 'Email ou mot de passe incorrect',
                    message: 'Verifiez vos informations.puis de réessayer svp',
                }).then(res => res.present());
            });
        }
        this.resetpass = '';
        console.log('Lien de reinitialisation envoyée');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color:linear-gradient(\n      #160a12,#414345) ;\n}\n\nion-item {\n  --ion-background:transparent!important ;\n}\n\n.logo {\n  height: 250px;\n  position: relative;\n}\n\n.logo ion-icon {\n  position: absolute;\n  font-size: 9em;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO3VCQUFBO0FBRUo7O0FBRUE7RUFDSSx1Q0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUFFSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICMxNjBhMTIsIzQxNDM0NSlcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50IWltcG9ydGFudCBcclxuXHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmxvZ28gaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6OWVtO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufSJdfQ== */";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title >Connexion</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  <div class=\"check\" *ngIf=\"!connected\">\n  <div class=\"logo\">\n    <ion-icon color=\"light\"slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n  </div>\n\n  <ion-item lines=\"none\">\n    <ion-label color=\"light\">Email : </ion-label>\n    <ion-input [(ngModel)]=\"dataUser.email\" color=\"light\"type=\"email\" placeholder=\"Entrez votre adresse\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"light\">Mot de passe : </ion-label>\n    <ion-input [(ngModel)]=\"dataUser.password\"  color=\"light\" type=\"password\" placeholder=\"Entrez votre adresse \"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-button (click)=\"setOpen(true)\" color=\"light\"  fill=\"clear\" shape=\"round\" slot=\"end\">\n      Mot de passe oublié\n    </ion-button>\n\n    <ion-modal [isOpen]=\"isModalOpen\">\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>MOT DE PASSE OUBLIE </ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"setOpen(false)\">retour</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <ion-text color=\"light\">\n            <p>Merci d'entrer votre adresse mail, un lien de reinitialisation vous\n              vous sera envoyé \n            </p>\n          </ion-text>\n         \n          <ion-item lines=\"none\">\n            \n            <ion-label color=\"light\">Email : </ion-label>\n            <ion-input [(ngModel)]=\"resetpass\" color=\"light\"type=\"email\" placeholder=\"Entrez votre adresse\"></ion-input>\n          </ion-item>\n          <br>\n          <ion-button (click)=\"resetpassword()\" expand=\"block\" shape=\"round\">\n            ENVOYER\n          </ion-button>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n\n\n  </ion-item>\n\n\n\n\n  <ion-button color=\"light\" (click)=\"login()\" expand=\"block\" fill=\"outline\" shape=\"round\">\n    Connexion\n  </ion-button>\n  <br>\n  <ion-button color=\"warning\" (click)=\"signup()\" expand=\"block\"  shape=\"round\">\n    Inscription\n  </ion-button>\n\n\n</div>\n\n<div class=\"checkdone\" *ngIf=\"connected\" routerLink=\"/tabs/tab1\">\n  \n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map