"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 90449);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab1PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_1__.Tab1Page],
        providers: [_awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications],
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 78165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/database */ 82575);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/local-notifications/ngx */ 90449);










let Tab1Page = class Tab1Page {
  constructor(fAuth, fDb, actionSheetCtrl, toast, localNotifications) {
    var _this = this;

    this.fAuth = fAuth;
    this.fDb = fDb;
    this.actionSheetCtrl = actionSheetCtrl;
    this.toast = toast;
    this.localNotifications = localNotifications;
    this.presentingElement = undefined;
    this.dataUser = {
      email: '',
      password: ''
    };
    this.email = '';
    this.userId = '';
    this.dataFacture = [];
    this.dataFacturesomagep = [];
    this.dataFactureisago = [];
    this.dataFacturecanal = [];
    this.dataFacturemalivision = [];
    this.dataHistoriqueEDM = [{
      nom: "Electricité",
      icon: "../../assets/logo/edmlogo.jpg",
      prix: 2000
    }];
    this.dataHistoriqueSOMAGEP = [{
      nom: "Eau",
      icon: "../../assets/logo/somagep-logo.png"
    }];
    this.dataHistoriqueMalivision = [{
      nom: "Mali Vision ",
      prix: "4000",
      icon: "../../assets/logo/malivisionlogo.png"
    }];
    this.dataHistoriqueIsago = [{
      nom: "Isago",
      icon: "../../assets/logo/ISAGO.jpg"
    }];
    this.dataHistoriqueCanal = [{
      nom: "Canal+",
      icon: "../../assets/logo/canallogo.png"
    }];
    this.dataElectricite = [{
      label: 'Electricite',
      nom: 'Facture EDM',
      icon: "../../assets/logo/edmlogo.jpg"
    }];
    this.dataSomagep = [{
      nom: 'SOMAGEP',
      label: 'Eau',
      icon: "../../assets/logo/somagep-logo.png"
    }];
    this.dataIsago = [{
      nom: 'ISAGO',
      icon: "../../assets/logop.png"
    }];
    this.dataCanal = [{
      nom: "Canal +",
      icon: "../../assets/logo/canalpost2.png"
    }];
    this.dataMalivision = [{
      nom: 'Malivision',
      icon: "../../assets/logo/tntsatpost1.jpg"
    }];
    this.canDismiss = /*#__PURE__*/(0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetCtrl.create({
        header: 'Are you sure?',
        buttons: [{
          text: 'Yes',
          role: 'confirm'
        }, {
          text: 'No',
          role: 'cancel'
        }]
      });
      actionSheet.present();
      const {
        role
      } = yield actionSheet.onWillDismiss();
      return role === 'confirm';
    }); //Verifions l'etat de connexion de user

    this.fAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('user non connecté');
        this.connected = false;
      } else {
        console.log('user connecté' + auth.uid);
        this.userId = auth.uid;
        this.email = auth.email;
        this.connected = true;
        this.getfactureEdm();
        this.getfactureSomagep();
        this.getfactureIsago();
        this.getfactureCanal();
        this.getfactureMalivision();
      }
    });
  }

  notif() {
    this.localNotifications.schedule({
      id: 1,
      text: "Votre paiement a été pris en compte, un message de confirmation vous sera envoyé"
    });
    console.log('Done');
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  getfactureEdm() {
    this.Edmdata = this.fDb.list(`users/factureEdm/${this.userId}/`, ref => ref.limitToLast(1)).valueChanges();
  }

  getfactureSomagep() {
    this.Somagepdata = this.fDb.list(`users/factureSomagep/${this.userId}/`, ref => ref.limitToLast(1)).valueChanges();
  }

  getfactureIsago() {
    this.Isagodata = this.fDb.list(`users/factureIsago/${this.userId}/`, ref => ref.limitToLast(1)).valueChanges();
  }

  getfactureCanal() {
    this.Canaldata = this.fDb.list(`users/factureCanal/${this.userId}/`, ref => ref.limitToLast(1)).valueChanges();
  }

  getfactureMalivision() {
    this.Malivisiondata = this.fDb.list(`users/factureMalivision/${this.userId}/`, ref => ref.limitToLast(1)).valueChanges();
  }

  AddPayementEdm() {
    var _this2 = this;

    return (0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this2.dataFacture.nmo);
      yield _this2.dataFacture.nmo && _this2.dataFacture.ncompteur && _this2.dataFacture.montant;
      {
        _this2.fDb.list(`users/factureEdm/${_this2.userId}/`).push({
          userId: _this2.userId,
          numerouser: _this2.dataFacture.nmo,
          ncompteuruser: _this2.dataFacture.ncompteur,
          montantpaye: _this2.dataFacture.montant,
          date: new Date().toISOString()
        }).then(res => {
          console.log(res);

          _this2.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'success',
            message: 'Payement effectuée avec succès',
            mode: 'ios'
          }).then(res => res.present());

          _this2.dataFacture = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        }).catch(e => {
          console.log(e);

          _this2.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'danger',
            header: 'Saisies incorrectes ou champ vide',
            message: 'Rassurez vous que les champs sont remplis correctement puis de valider'
          }).then(res => res.present());

          _this2.dataFacture = {
            nmo: null,
            ncompteur: null,
            montant: null
          };

          _this2.notif();
        });
      }
    })();
  }

  AddPayementSomagep() {
    var _this3 = this;

    return (0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this3.dataFacturesomagep.nmo);
      yield _this3.dataFacturesomagep.nmo && _this3.dataFacturesomagep.ncompteur && _this3.dataFacturesomagep.montant;
      {
        _this3.fDb.list(`users/factureSomagep/${_this3.userId}/`).push({
          userId: _this3.userId,
          numerouser: _this3.dataFacturesomagep.nmo,
          ncompteuruser: _this3.dataFacturesomagep.ncompteur,
          montantpaye: _this3.dataFacturesomagep.montant,
          date: new Date().toISOString()
        }).then(res => {
          console.log(res);

          _this3.notif();

          _this3.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'success',
            message: 'Payement effectuée avec succès',
            mode: 'ios'
          }).then(res => res.present());

          _this3.dataFacturesomagep = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        }).catch(e => {
          console.log(e);

          _this3.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'danger',
            header: 'Saisies incorrectes ou champ vide',
            message: 'Rassurez vous que les champs sont remplis correctement puis de valider'
          }).then(res => res.present());

          _this3.dataFacturesomagep = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        });

        _this3.dataFacturesomagep = {
          nmo: null,
          ncompteur: null,
          montant: null
        };
      }
    })();
  }

  AddPayementIsago() {
    var _this4 = this;

    return (0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this4.dataFacture.nmo);
      yield _this4.dataFactureisago.nmo && _this4.dataFactureisago.ncompteur && _this4.dataFactureisago.montant;
      {
        _this4.fDb.list(`users/factureIsago/${_this4.userId}/`).push({
          userId: _this4.userId,
          numerouser: _this4.dataFactureisago.nmo,
          ncompteuruser: _this4.dataFactureisago.ncompteur,
          montantpaye: _this4.dataFactureisago.montant,
          date: new Date().toISOString()
        }).then(res => {
          console.log(res);

          _this4.notif();

          _this4.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'success',
            message: 'Payement effectuée avec succès',
            mode: 'ios'
          }).then(res => res.present());

          _this4.dataFactureisago = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        }).catch(e => {
          console.log(e);

          _this4.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'danger',
            header: 'Saisies incorrectes ou champ vide',
            message: 'Rassurez vous que les champs sont remplis correctement puis de valider'
          }).then(res => res.present());

          _this4.dataFactureisago = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        });
      }
    })();
  }

  AddPayementcanal() {
    var _this5 = this;

    return (0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this5.dataFacturecanal.nmo);
      yield _this5.dataFacturecanal.nmo && _this5.dataFacturecanal.ndecodeur && _this5.dataFacturecanal.montant;
      {
        _this5.fDb.list(`users/factureCanal/${_this5.userId}/`).push({
          userId: _this5.userId,
          numerouser: _this5.dataFacturecanal.nmo,
          ndecodeur: _this5.dataFacturecanal.ndecodeur,
          montantpaye: _this5.dataFacturecanal.montant,
          date: new Date().toISOString()
        }).then(res => {
          console.log(res);

          _this5.notif();

          _this5.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'success',
            message: 'Payement effectuée avec succès',
            mode: 'ios'
          }).then(res => res.present());

          _this5.dataFacturecanal = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        }).catch(e => {
          console.log(e);

          _this5.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'danger',
            header: 'Saisies incorrectes ou champ vide',
            message: 'Rassurez vous que les champs sont remplis correctement puis de valider'
          }).then(res => res.present());

          _this5.dataFacturecanal = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        });

        _this5.dataFacturecanal = {
          nmo: null,
          ndecodeur: null,
          montant: null
        };
      }
    })();
  }

  AddPayementmalivision() {
    var _this6 = this;

    return (0,C_Users_msiss_Documents_ionicprojet_Saraliw2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this6.dataFacturemalivision.nmo);
      yield _this6.dataFacturemalivision.nmo && _this6.dataFacturemalivision.ndecodeur && _this6.dataFacturemalivision.montant;
      {
        _this6.fDb.list(`users/factureMalivision/${_this6.userId}/`).push({
          userId: _this6.userId,
          numerouser: _this6.dataFacturemalivision.nmo,
          ndecodeur: _this6.dataFacturemalivision.ndecodeur,
          montantpaye: _this6.dataFacturemalivision.montant,
          date: new Date().toISOString()
        }).then(res => {
          console.log(res);

          _this6.notif();

          _this6.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'success',
            message: 'Payement effectuée avec succès',
            mode: 'ios'
          }).then(res => res.present());

          _this6.dataFacturecanal = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        }).catch(e => {
          console.log(e);

          _this6.toast.create({
            duration: 3000,
            position: 'top',
            icon: 'alert',
            color: 'danger',
            header: 'Saisies incorrectes ou champ vide',
            message: 'Rassurez vous que les champs sont remplis correctement puis de valider'
          }).then(res => res.present());

          _this6.dataFacturecanal = {
            nmo: null,
            ncompteur: null,
            montant: null
          };
        });

        _this6.dataFacturemalivision = {
          nmo: null,
          ndecodeur: null,
          montant: null
        };
      }
      ;
    })();
  }

};

Tab1Page.ctorParameters = () => [{
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
}, {
  type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_5__.AngularFireDatabase
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _awesome_cordova_plugins_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications
}];

Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 75400:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 42474);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 98219);



var AwesomeCordovaNativePlugin =
/** @class */
function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */


  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */


  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }

    return null;
  };
  /**
   * Returns the plugin's name
   */


  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */


  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */


  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */


  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };

  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();



/***/ }),

/***/ 63512:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.

    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 42474:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 36312);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */

function getPromise(callback) {
  var tryNativePromise = function tryNativePromise() {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }

    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }

  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return resolve(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }

    rej = reject;
  }); // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error

  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }

  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */


function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.next(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }

    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */


function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */


function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  var pluginInstance = getPlugin(pluginRef);

  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */

function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // ignore resolve and reject in case sync


  if (opts.sync) {
    return args;
  } // If the plugin method expects myMethod(success, err, options)


  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function setSuccessIndex() {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    var setErrorIndex = function setErrorIndex() {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }

  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.


  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread

    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }

  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */

function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }

  return null;
}
/**
 * @param element
 * @param path
 */

function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */

function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }

  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */

function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

var wrap = function wrap(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.next(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }

        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }

            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;

        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        rej_1 = reject;
      }); // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error

      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }

      return p;
    }
  };
}

/***/ }),

/***/ 61485:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);


/**
 * @param pluginObj
 * @param methodName
 */

function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);

    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */


function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }

  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 35084:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 91830:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param key
 */

function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 54461:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 96936:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 63142:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 84624:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 63512);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 75400);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 42474);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 54461);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 61485);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 35084);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 91830);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 96936);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 63142);

 // Decorators








(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 98219:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param callback
 * @private
 */

function getPromise(callback) {
  if (callback === void 0) {
    callback = function callback() {};
  }

  var tryNativePromise = function tryNativePromise() {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  return tryNativePromise();
}

/***/ }),

/***/ 90449:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/local-notifications/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ELocalNotificationTriggerUnit": () => (/* binding */ ELocalNotificationTriggerUnit),
/* harmony export */   "ILocalNotificationActionType": () => (/* binding */ ILocalNotificationActionType),
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 84624);





var ELocalNotificationTriggerUnit;

(function (ELocalNotificationTriggerUnit) {
  ELocalNotificationTriggerUnit["SECOND"] = "second";
  ELocalNotificationTriggerUnit["MINUTE"] = "minute";
  ELocalNotificationTriggerUnit["HOUR"] = "hour";
  ELocalNotificationTriggerUnit["DAY"] = "day";
  ELocalNotificationTriggerUnit["WEEK"] = "week";
  ELocalNotificationTriggerUnit["MONTH"] = "month";
  ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
  ELocalNotificationTriggerUnit["YEAR"] = "year";
  ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
  ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
  ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));

var ILocalNotificationActionType;

(function (ILocalNotificationActionType) {
  ILocalNotificationActionType["INPUT"] = "input";
  ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));

var LocalNotifications =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LocalNotifications, _super);

  function LocalNotifications() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LocalNotifications.prototype.hasPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasPermission", {}, arguments);
  };

  LocalNotifications.prototype.requestPermission = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "requestPermission", {}, arguments);
  };

  LocalNotifications.prototype.schedule = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "schedule", {
      "sync": true
    }, arguments);
  };

  LocalNotifications.prototype.update = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "update", {
      "sync": true
    }, arguments);
  };

  LocalNotifications.prototype.clear = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clear", {}, arguments);
  };

  LocalNotifications.prototype.clearAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clearAll", {}, arguments);
  };

  LocalNotifications.prototype.cancel = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancel", {}, arguments);
  };

  LocalNotifications.prototype.cancelAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancelAll", {}, arguments);
  };

  LocalNotifications.prototype.isPresent = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isPresent", {}, arguments);
  };

  LocalNotifications.prototype.isScheduled = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isScheduled", {}, arguments);
  };

  LocalNotifications.prototype.isTriggered = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isTriggered", {}, arguments);
  };

  LocalNotifications.prototype.hasType = function (id, type) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasType", {}, arguments);
  };

  LocalNotifications.prototype.getType = function (id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getType", {}, arguments);
  };

  LocalNotifications.prototype.getIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getIds", {}, arguments);
  };

  LocalNotifications.prototype.getScheduledIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getScheduledIds", {}, arguments);
  };

  LocalNotifications.prototype.getTriggeredIds = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getTriggeredIds", {}, arguments);
  };

  LocalNotifications.prototype.get = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "get", {}, arguments);
  };

  LocalNotifications.prototype.getAll = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAll", {}, arguments);
  };

  LocalNotifications.prototype.getScheduled = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getScheduled", {}, arguments);
  };

  LocalNotifications.prototype.getTriggered = function (notificationId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getTriggered", {}, arguments);
  };

  LocalNotifications.prototype.addActions = function (groupId, actions) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addActions", {}, arguments);
  };

  LocalNotifications.prototype.removeActions = function (groupId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "removeActions", {}, arguments);
  };

  LocalNotifications.prototype.hasActions = function (groupId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hasActions", {}, arguments);
  };

  LocalNotifications.prototype.getDefaults = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDefaults", {
      "sync": true
    }, arguments);
  };

  LocalNotifications.prototype.setDefaults = function (defaults) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setDefaults", {
      "sync": true
    }, arguments);
  };

  LocalNotifications.prototype.getAllScheduled = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAllScheduled", {}, arguments);
  };

  LocalNotifications.prototype.getAllTriggered = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAllTriggered", {}, arguments);
  };

  LocalNotifications.prototype.on = function (eventName) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "on", {
      "observable": true,
      "clearFunction": "un",
      "clearWithArgs": true
    }, arguments);
  };

  LocalNotifications.prototype.fireEvent = function (eventName, args) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "fireEvent", {
      "sync": true
    }, arguments);
  };

  LocalNotifications.prototype.fireQueuedEvents = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "fireQueuedEvents", {}, arguments);
  };

  LocalNotifications.pluginName = "LocalNotifications";
  LocalNotifications.plugin = "cordova-plugin-local-notification";
  LocalNotifications.pluginRef = "cordova.plugins.notification.local";
  LocalNotifications.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
  LocalNotifications.platforms = ["Android", "iOS", "Windows"];

  LocalNotifications.ɵfac = /*@__PURE__*/function () {
    var ɵLocalNotifications_BaseFactory;
    return function LocalNotifications_Factory(t) {
      return (ɵLocalNotifications_BaseFactory || (ɵLocalNotifications_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](LocalNotifications)))(t || LocalNotifications);
    };
  }();

  LocalNotifications.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LocalNotifications,
    factory: function factory(t) {
      return LocalNotifications.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LocalNotifications, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return LocalNotifications;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 78165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  height: 25px;\n  position: relative;\n}\n\n.profilePresent {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 5px;\n  margin-bottom: 15%;\n}\n\n.profilePresent ion-avatar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nion-item .textShow {\n  margin-left: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nion-card ion-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* filter: blur(10px); */\n  height: 100px;\n}\n\n.btncompte {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.card ion-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-radius: 0% 5%;\n  background: #232526;\n  bottom: 75px;\n  height: 180px;\n}\n\n.btnSection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  border-radius: 20%, 20%;\n  margin-top: 27%;\n  position: relative;\n}\n\n.btnSection ion-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nion-button {\n  --background:#004e78;\n  --border: 20%,20%, 20%,20% ;\n}\n\n.historique {\n  padding: 1%;\n  background: #232627;\n  border-radius: 10px;\n}\n\n.logo {\n  height: 200px;\n  position: relative;\n}\n\n.logincss ion-item {\n  --ion-background-color:transparent!important ;\n}\n\n.logincss ion-input {\n  --border-radius:10px;\n  --border-color: #7d7dd8;\n}\n\n.logoapp {\n  position: absolute;\n  font-size: 9em;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nion-content {\n  --ion-background-color:linear-gradient(#160a12,#414345);\n}\n\nion-item {\n  --ion-background-color:transparent !important;\n}\n\n.padding {\n  padding: 5%;\n}\n\n.profil {\n  height: 250px;\n  position: relative;\n}\n\n.profil ion-icon {\n  position: absolute;\n  font-size: 9em;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nion-modal {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\n\nion-modal ion-toolbar {\n  --background: rgb(14 116 144);\n  --color: white;\n}\n\nion-content {\n  --ion-background-color:transparent;\n}\n\nion-item {\n  --ion-background-color:transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBSUksWUFBQTtFQUVBLGtCQUFBO0FBUFY7O0FBV0c7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVJIOztBQVVHO0VBQ0Usb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7QUFQTDs7QUFXRztFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO01BQUEsV0FBQTtVQUFBLE9BQUE7QUFSSjs7QUFXRztFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBUkw7O0FBVUc7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNELHdCQUFBO01BQUEscUJBQUE7VUFBQSx1QkFBQTtFQUNHLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0FBUFA7O0FBYUE7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVZGOztBQWNBO0VBQ0ksb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDRyx3QkFBQTtNQUFBLHFCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO01BQUEsdUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWFA7O0FBZU07RUFDQyxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBQVpQOztBQWlCSTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFkTjs7QUFnQkk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWJOOztBQWtCSTtFQUNFLGFBQUE7RUFFQSxrQkFBQTtBQWhCTjs7QUFxQkU7RUFDRSw2Q0FBQTtBQWxCSjs7QUFvQkU7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBakJKOztBQW9CQTtFQUNFLGtCQUFBO0VBQ0UsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQWpCSjs7QUFvQkE7RUFDRSx1REFBQTtBQWpCRjs7QUFrQkE7RUFDRSw2Q0FBQTtBQWZGOztBQWtCQTtFQUNFLFdBQUE7QUFmRjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0UsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUFkSjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnRkFBQTtBQWpCRjs7QUFvQkE7RUFDRSw4QkFBQTtFQUNBLFVBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBakJGOztBQXFCQTtFQUNJLGtDQUFBO0FBbEJKOztBQW1CRTtFQUNFLDZDQUFBO0FBaEJKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyIHtcclxufVxyXG4gICAgICAuZmxleHtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgLnByb2ZpbGVQcmVzZW50e1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbiAgIH1cclxuICAgLnByb2ZpbGVQcmVzZW50IGlvbi1hdmF0YXJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBcclxuICAgfVxyXG4gXHJcbiAgIGlvbi1pdGVtIC50ZXh0U2hvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAgaW9uLWNhcmQgaW9uLWltZ3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIC8qIGZpbHRlcjogYmx1cigxMHB4KTsgKi9cclxuICAgICBoZWlnaHQ6IDEwMHB4OyAgXHJcbiAgIH1cclxuICAgLmJ0bmNvbXB0ZSB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgfVxyXG5cclxuICAgLmNhcmR7XHJcbiAgICBcclxuICAgfVxyXG4uY2FyZCBpb24tY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlIDUlO1xyXG4gIGJhY2tncm91bmQ6ICMyMzI1MjY7XHJcbiAgYm90dG9tOiA3NXB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcblxyXG59XHJcbiAgIFxyXG4uYnRuU2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAyMCUsMjAlIDtcclxuICAgICAgIG1hcmdpbi10b3A6MjclO1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuYnRuU2VjdGlvbiBpb24tYnV0dG9ue1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAtLWJhY2tncm91bmQ6IzAwNGU3ODtcclxuICAgICAgLS1ib3JkZXI6IDIwJSwyMCUsIDIwJSwyMCUgO1xyXG4gICAgfVxyXG4gICAgLmhpc3RvcmlxdWV7XHJcbiAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjMyNjI3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgXHJcbiAgICAubG9nb3tcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAubG9naW5jc3MgaW9uLWl0ZW17XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudFxyXG4gIH1cclxuICAubG9naW5jc3MgaW9uLWlucHV0e1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogIzdkN2RkODtcclxuICAgIFxyXG59XHJcbi5sb2dvYXBwe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogOWVtO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjMTYwYTEyLCM0MTQzNDUpfSA7XHJcbmlvbi1pdGVte1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBcclxufVxyXG4ucGFkZGluZ3tcclxuICBwYWRkaW5nOiA1JTsgXHJcbn1cclxuXHJcbi5wcm9maWx7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2ZpbCBpb24taWNvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiA5ZW07XHJcbiAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5pb24tbW9kYWwge1xyXG4gIC0taGVpZ2h0OiA1MCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xyXG59XHJcblxyXG5pb24tbW9kYWw6OnBhcnQoYmFja2Ryb3ApIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCBpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTQgMTE2IDE0NCk7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuICAgXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9IDtcclxuICBpb24taXRlbXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAgIl19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n   \n  </ion-toolbar>\n   \n</ion-header>\n\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\n  \n  <div class=\"bg\">\n  \n\n    <div id=\"container\">\n      <div class=\"card\">\n       <div class=\"profilePresent\">\n         <ion-avatar>\n           <img src=\"../../assets/images.jfif\"/>\n         </ion-avatar>\n     <ion-item>\n      \n     \n          <div class=\"textShow\">\n          \n           <ion-label>Bienvenue </ion-label>\n           <ion-label>\n            {{email}}\n          </ion-label> \n           \n          \n         </div>\n        </ion-item>\n        </div>\n      \n        <div class=\"flex\">\n      <ion-card class=\"ion-padding\">  \n        <swiper class=\"banner-slides\" [enabled]=\"true\" [pagination]=\"true\"  [initialSlide]=\"0.3\" [slidesPerView]=\"1\" [spaceBetween]=\"3\" [centeredSlides]=\"true\" [autoplay]=\"true\"\n        #swiper>\n        <ng-template swiperSlide>\n   \n          <img src=\"../../../assets/logo/ISAGO.jpg\" alt=\"\"></ng-template>\n        <ng-template swiperSlide><img src=\"../../../assets/logo/canalpost3.jpg\" alt=\"\"></ng-template>\n        <ng-template swiperSlide><img src=\"../../../assets/logo/malivisionlogo.png\" alt=\"\"></ng-template>\n        <ng-template swiperSlide><img src=\"../../../assets/logo/edmlogo.jpg\" alt=\"\"></ng-template>\n        <ng-template swiperSlide><img src=\"../../../assets/logo/somagep-logo.png\" alt=\"\"></ng-template>\n        </swiper>\n   </ion-card>\n   \n   </div>\n     <div class=\"btncompte\">\n       \n     </div>\n    \n   \n   \n   <div class=\"btnSection\">\n   <!--   \n     1 - Button payement vous dirige vers le module paiement\n     2 - Button Call vous permet de lancer l'appel vers le service client\n    -->\n   \n    \n       <ion-button color=\"warning\" shape=\"round\" class=\"btnaddpayement\" id=\"open-modal\" expand=\"block\">\n        <ion-icon slot=\"icon-only\" name=\"cash\" ></ion-icon>\n        Payement\n       </ion-button>\n     \n     \n     \n   \n   </div>\n   </div>\n  \n   \n   <!-- La liste section de Tab affiche la liste des cinq derniers paiement\n    -->\n   \n    <div class=\"historique\">\n     <ion-list-header>\n      <ion-label color=\"light\">Dernières transactions\n      </ion-label>\n     </ion-list-header>\n     \n   \n   \n   \n  \n     \n       <ion-item *ngFor=\"let data of dataHistoriqueEDM\">\n      \n      <ion-avatar slot=\"start\">\n        <img src=\"{{data.icon}}\" />\n      </ion-avatar>\n      <ion-label color=\"light\">\n        {{data.nom}}\n    </ion-label>\n    <ion-item *ngFor=\"let data of Edmdata|async\">\n      <ion-text color=\"warning\" slot=\"start\">\n        <ion-label>{{data.montantpaye}} </ion-label>\n      </ion-text>\n    </ion-item>\n    \n    \n    </ion-item> \n    <ion-item *ngFor=\"let data of dataHistoriqueSOMAGEP\">\n      \n      <ion-avatar slot=\"start\">\n        <img src=\"{{data.icon}}\" />\n      </ion-avatar>\n      <ion-label color=\"light\">\n        {{data.nom}}\n    </ion-label>\n    <ion-item *ngFor=\"let data of Somagepdata|async\">\n      <ion-text color=\"warning\" slot=\"start\">\n        <ion-label>{{data.montantpaye}}</ion-label>\n      </ion-text>\n    </ion-item>\n    \n    </ion-item> \n    <ion-item *ngFor=\"let data of dataHistoriqueIsago\">\n      \n      <ion-avatar slot=\"start\">\n        <img src=\"{{data.icon}}\" />\n      </ion-avatar>\n      <ion-label color=\"light\">\n        {{data.nom}}\n    </ion-label>\n  \n    <ion-item *ngFor=\"let data of Isagodata|async\">\n      <ion-text color=\"warning\"  slot=\"start\">\n        <ion-label>{{data.montantpaye}}</ion-label>\n      </ion-text>\n  \n    </ion-item>\n    \n    </ion-item>\n    <ion-item *ngFor=\"let data of dataHistoriqueCanal\">\n      \n      <ion-avatar slot=\"start\">\n        <img src=\"{{data.icon}}\"/>\n      </ion-avatar>\n      \n      <ion-label color=\"light\">\n        {{data.nom}}\n    </ion-label>\n    <ion-item *ngFor=\"let data of Canaldata|async\">\n      <ion-text color=\"warning\" slot=\"start\">\n      <ion-label>{{data.montantpaye}}</ion-label>\n      </ion-text>\n  \n    </ion-item>\n    \n    </ion-item>\n    <ion-item *ngFor=\"let data of dataHistoriqueMalivision\">\n      \n      <ion-avatar slot=\"start\">\n        <img src=\"{{data.icon}}\" />\n      </ion-avatar>\n      <ion-label color=\"light\">\n        {{data.nom}}\n    </ion-label>\n  \n    <ion-item *ngFor=\"let data of Malivisiondata|async\">\n      <ion-text color=\"warning\" slot=\"start\">\n        <ion-label>{{data.montantpaye}}</ion-label>\n      </ion-text>\n    </ion-item>\n    \n    </ion-item>\n  \n    \n  </div>\n     \n   </div>\n  </div> \n\n  <div class=\"modal\">\n  <ion-modal #modal trigger=\"open-modal\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Payer vos factures </ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"modal.dismiss()\">RETOUR</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n    \n      <ion-content class=\"ion-padding\" color=\"light\">\n       \n        <div class=\"flex\">\n\n   \n \n          <ion-accordion-group>\n            <ion-accordion   value=\"Facture EDM\">\n              <ion-item slot=\"header\" *ngFor=\"let data of dataElectricite\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"{{data.icon}}\">\n                </ion-thumbnail>\n                <ion-label color=\"dark\">{{data.nom}}</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero souscripteur\" [(ngModel)]=\"dataFacture.nmo\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero Compteur\" [(ngModel)]=\"dataFacture.ncompteur\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input type=\"number\" color=\"dark\" placeholder=\"Montant\" [(ngModel)]=\"dataFacture.montant\"  clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n               <ion-button color=\"success\" (click)=\"AddPayementEdm()\">\n                          <ion-icon slot=\"start\" ></ion-icon>\n                         VALIDER\n                        </ion-button>\n                       \n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-list>\n            </ion-accordion>\n            \n            <ion-accordion value=\"Facture SOMAGEP\">\n              <ion-item slot=\"header\" *ngFor=\"let data of dataSomagep\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"{{data.icon}}\">\n                </ion-thumbnail>\n                <ion-label color=\"dark\">{{data.nom}}</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero souscripteur\" [(ngModel)]=\"dataFacturesomagep.nmo\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero Compteur\" [(ngModel)]=\"dataFacturesomagep.ncompteur\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input type=\"number\" color=\"dark\" placeholder=\"Montant\" [(ngModel)]=\"dataFacturesomagep.montant\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                      <ion-button color=\"success\" (click)=\"AddPayementSomagep()\">\n                          <ion-icon slot=\"start\" name=\"confirm\"></ion-icon>\n                          VALIDER\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-list>\n            </ion-accordion>\n        \n            <ion-accordion value=\"Recharge ISAGO\">\n              <ion-item slot=\"header\" *ngFor=\"let data of dataIsago\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"{{data.icon}}\">\n                </ion-thumbnail>\n                <ion-label color=\"dark\">{{data.nom}}</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero souscripteur\" [(ngModel)]=\"dataFactureisago.nmo\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero Compteur\" [(ngModel)]=\"dataFactureisago.ncompteur\"  clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input type=\"number\" color=\"dark\" placeholder=\"Montant\" [(ngModel)]=\"dataFactureisago.montant\"  clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                      <ion-button color=\"success\" (click)=\"AddPayementIsago()\">\n                          <ion-icon slot=\"start\" name=\"confirm\"></ion-icon>\n                          VALIDER\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-list>\n            </ion-accordion>\n        \n            <ion-accordion value=\"AbonnementCanal\">\n              <ion-item slot=\"header\" *ngFor=\"let data of dataCanal\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"{{data.icon}}\">\n                </ion-thumbnail>\n                <ion-label color=\"dark\">{{data.nom}}</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero souscripteur\" [(ngModel)]=\"dataFacturecanal.nmo\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero Décodeur\" [(ngModel)]=\"dataFacturecanal.ndecodeur\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-list>\n                        <ion-item>\n                          <ion-item>\n                            <ion-select placeholder=\"Selectionnez votre formule\">\n                              <ion-select-option value=\"access\">ACCESS</ion-select-option>\n                              <ion-select-option value=\"evasion\" >EVASION</ion-select-option>\n                              <ion-select-option value=\"essentiel\">ESSENTIEL+</ion-select-option>\n                              <ion-select-option value=\"access+\" >ACCESS+</ion-select-option>\n                              <ion-select-option value=\"evasion+\" >EVASION+</ion-select-option>\n                              <ion-select-option value=\"toutcanal\">EVASION+</ion-select-option>\n                            </ion-select>\n                          </ion-item>\n                        </ion-item>\n                        \n                      </ion-list>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input type=\"number\" color=\"dark\" placeholder=\"Montant\" [(ngModel)]=\"dataFacturecanal.montant\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                      <ion-button color=\"success\" (click)=\"AddPayementcanal()\">\n                          <ion-icon slot=\"start\" name=\"confirm\"></ion-icon>\n                          VALIDER\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-list>\n            </ion-accordion>\n        \n        \n            <ion-accordion value=\"AbonnementMalivision\">\n              <ion-item slot=\"header\" *ngFor=\"let data of dataMalivision\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"{{data.icon}}\">\n                </ion-thumbnail>\n                <ion-label color=\"dark\">{{data.nom}}</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero souscripteur\" [(ngModel)]=\"dataFacturemalivision.nmo\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input color=\"dark\" type=\"number\" placeholder=\"Numero Décodeur\" [(ngModel)]=\"dataFacturemalivision.ndecodeur\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-list>\n                        <ion-item>\n                          <ion-select placeholder=\"Selectionnez votre formule\">\n                            <ion-select-option value=\"decouverte\">DECOUVERTE</ion-select-option>\n                            <ion-select-option value=\"MALIVISIONL\" >MALIVISION</ion-select-option>\n                            <ion-select-option value=\"decouverte+Canal\">DECOUVERTE+CANAL</ion-select-option>\n                            <ion-select-option value=\"horonya+\" >HORONYA</ion-select-option>\n                            <ion-select-option value=\"vip\">HORONYA+CANAL</ion-select-option>\n                            \n                          </ion-select>\n                        </ion-item>\n                        \n                      </ion-list>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-input type=\"number\" color=\"dark\" placeholder=\"Montant\" [(ngModel)]=\"dataFacturemalivision.montant\" clearInput></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                      <ion-item>\n                        <ion-button color=\"success\" (click)=\"AddPayementmalivision()\">\n                          <ion-icon slot=\"start\" name=\"confirm\"></ion-icon>\n                          VALIDER\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-list>\n            </ion-accordion>\n        \n        \n            \n        \n          </ion-accordion-group>\n      \n      \n      \n         \n          \n      \n          \n          \n           \n      </div>\n\n\n      </ion-content>\n   \n    </ng-template>\n  </ion-modal>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map