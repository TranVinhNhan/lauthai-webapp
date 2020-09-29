(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/admin.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");






class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated() && this.authService.decodedToken.role === 'Admin') {
            return true;
        }
        else {
            if (this.authService.isAuthenticated() && this.authService.decodedToken.role !== 'Admin') {
                this.router.navigate(['/not-found']);
            }
            else {
                this.router.navigate(['/']);
            }
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.decodedToken = {};
        this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    }
    login(account) {
        return this.http.post(this.baseUrl + 'auth/login', account)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
            }
        }));
    }
    register(info) {
        return this.http.post(this.baseUrl + 'auth/register', info);
    }
    isAuthenticated() {
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/error-handling-interceptor.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_services/error-handling-interceptor.service.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorHandlingInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingInterceptor", function() { return ErrorHandlingInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extension.service */ "./src/app/_services/extension.service.ts");







class ErrorHandlingInterceptor {
    constructor(extension) {
        this.extension = extension;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            if (error.status === 401) {
                this.extension.openSnackBar(error.error, 'Bỏ qua');
            }
            let errorResponse;
            errorResponse = error.error.errors;
            const errMessage = errorResponse[Object.keys(errorResponse)[0]][0];
            this.extension.openSnackBar(errMessage, 'Bỏ qua');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
ErrorHandlingInterceptor.ɵfac = function ErrorHandlingInterceptor_Factory(t) { return new (t || ErrorHandlingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_extension_service__WEBPACK_IMPORTED_MODULE_4__["ExtensionService"])); };
ErrorHandlingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlingInterceptor, factory: ErrorHandlingInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _extension_service__WEBPACK_IMPORTED_MODULE_4__["ExtensionService"] }]; }, null); })();
/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: ErrorHandlingInterceptor, multi: true },
];


/***/ }),

/***/ "./src/app/_services/extension.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/extension.service.ts ***!
  \************************************************/
/*! exports provided: ExtensionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionService", function() { return ExtensionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");




class ExtensionService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(message, action, duration = 2000, horizontalPosition = 'center', verticalPosition = 'bottom') {
        this.snackBar.open(message, action, { duration, horizontalPosition, verticalPosition });
    }
    getMainPfpUrl(profile) {
        return profile.images.find(img => img.isMainPfp === true).url;
    }
}
ExtensionService.ɵfac = function ExtensionService_Factory(t) { return new (t || ExtensionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ExtensionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExtensionService, factory: ExtensionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/admin.guard */ "./src/app/_guards/admin.guard.ts");






const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | client-client-module */[__webpack_require__.e("default~admin-admin-module~client-client-module"), __webpack_require__.e("client-client-module")]).then(__webpack_require__.bind(null, /*! ./client/client.module */ "./src/app/client/client.module.ts")).then((m) => m.ClientModule)
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("default~admin-admin-module~client-client-module"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then((m) => m.AdminModule),
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]]
    },
    {
        path: 'not-found',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: '/not-found', pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'lauthai-spa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/error-handling-interceptor.service */ "./src/app/_services/error-handling-interceptor.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/admin.guard */ "./src/app/_guards/admin.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["httpInterceptorProviders"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('token');
                    },
                    allowedDomains: ['localhost:5000'],
                    disallowedRoutes: ['localhost:5000/api/auth'] // request does not send token
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: () => {
                                return localStorage.getItem('token');
                            },
                            allowedDomains: ['localhost:5000'],
                            disallowedRoutes: ['localhost:5000/api/auth'] // request does not send token
                        }
                    })
                ],
                providers: [_services_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["httpInterceptorProviders"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 269, vars: 0, consts: [[1, "main"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 1000 355"], ["id", "ocean"], ["id", "sky", "d", "M0 0h1000v203.1H0z", 1, "st0"], ["id", "water_1_", "gradientUnits", "userSpaceOnUse", "x1", "500", "y1", "354", "x2", "500", "y2", "200.667"], ["offset", "0", "stop-color", "#fff"], ["offset", "1", "stop-color", "#b3dcdf"], ["id", "water", "fill", "url(#water_1_)", "d", "M0 200.7h1000V354H0z"], ["id", "land", "d", "M0 273.4h1000V354H0z", 1, "st0"], ["id", "bumps"], ["d", "M0 275.2s83.8-28 180-28 197 28 197 28H0z", 1, "st0"], ["d", "M377 275.2s54.7-28 117.5-28 128.6 28 128.6 28H377z", 1, "st0"], ["d", "M623.2 275.2s83.7-28 179.9-28 196.9 28 196.9 28H623.2z", 1, "st0"], ["d", "M-998 275.2s83.8-28 180-28 197 28 197 28h-377z", 1, "st0"], ["d", "M-621 275.2s54.7-28 117.5-28 128.6 28 128.6 28H-621z", 1, "st0"], ["d", "M-374.8 275.2s83.7-28 179.9-28S2 275.2 2 275.2h-376.8z", 1, "st0"], ["id", "tracks"], ["d", "M9.8 282.4h-3L0 307.6h3z", 1, "st2"], ["d", "M19.8 282.4h-3L10 307.6h3z", 1, "st2"], ["d", "M29.8 282.4h-3L20 307.6h3z", 1, "st2"], ["d", "M39.8 282.4h-3L30 307.6h3z", 1, "st2"], ["d", "M49.8 282.4h-3L40 307.6h3z", 1, "st2"], ["d", "M59.8 282.4h-3L50 307.6h3z", 1, "st2"], ["d", "M69.8 282.4h-3L60 307.6h3z", 1, "st2"], ["d", "M79.8 282.4h-3L70 307.6h3z", 1, "st2"], ["d", "M89.8 282.4h-3L80 307.6h3z", 1, "st2"], ["d", "M99.8 282.4h-3L90 307.6h3z", 1, "st2"], ["d", "M109.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M119.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M129.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M139.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M149.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M159.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M169.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M179.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M189.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M199.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M209.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M219.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M229.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M239.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M249.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M259.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M269.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M279.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M289.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M299.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M309.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M319.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M329.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M339.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M349.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M359.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M369.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M379.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M389.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M399.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M409.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M419.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M429.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M439.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M449.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M459.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M469.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M479.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M489.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M499.8 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M1000 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M990 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M980 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M970 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M960 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M950 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M940 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M930 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M920 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M910 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M900 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M890 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M880 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M870 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M860 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M850 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M840 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M830 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M820 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M810 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M800 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M790 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M780 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M770 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M760 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M750 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M740 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M730 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M720 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M710 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M700 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M690 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M680 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M670 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M660 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M650 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M640 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M630 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M620 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M610 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M600 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M590 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M580 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M570 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M560 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-490.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-480.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-470.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-460.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-450.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-440.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-430.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-420.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-410.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-400.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-390.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-380.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-370.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-360.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-350.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-340.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-330.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-320.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-310.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-300.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-290.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-280.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-270.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-260.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-250.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-240.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-230.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-220.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-210.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-200.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-190.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-180.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-170.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-160.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-150.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-140.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-130.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-120.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-110.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-100.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-90.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-80.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-70.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-60.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-50.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-40.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-30.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-20.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-10.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-.2 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M500 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M490 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M480 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M470 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M460 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M450 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M440 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M430 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M420 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M410 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M400 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M390 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M380 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M370 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M360 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M350 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M340 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M330 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M320 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M310 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M300 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M290 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M280 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M270 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M260 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M250 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M240 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M230 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M220 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M210 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M200 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M190 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M180 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M170 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M160 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M150 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M140 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M130 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M120 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M110 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M100 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M90 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M80 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M70 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M60 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M550 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M540 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M530 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M520 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M510 282.4h-3l-6.8 25.2h3z", 1, "st2"], ["d", "M-499.5 300.2H1000v5.1H-499.5z", 1, "st3"], ["d", "M-499.5 283.8H1000v2.8H-499.5z", 1, "st3"], ["id", "cloudsAll"], ["id", "cloud1", "d", "M19.5 69.7s-21.3.5-25-12.2c0 0-4.3-21.3 16-21.8 0 0-2.1-12.2 12.2-14.9 0 0 15-3.2 21.3 6.9 0 0 3.6-20.7 17.8-22.3 0 0 24-3 26.6 13.1 0 0 .1 9.5-2.8 13.5 0 0 9.5-15 26.5-4.8 0 0 12.1 7.9 7 20.2 0 0 16 4.8 10.1 18.1 0 0-10.2 8.5-17.1-1.1 0 0-5.5 16-32.5 16 0 0-19.1 2.1-27-13.3 0 0 .5 10.1-13.3 10.6-.1 0-20.3 3.2-19.8-8z", 1, "st4"], ["id", "cloud3", "d", "M836 132s-18.3 2.1-22.2-4.9c0 0-4.9-11.8 12.5-13.8 0 0-2.5-6.8 9.7-9.6 0 0 12.7-3.1 18.7 2.1 0 0 2-12.2 14-14.3 0 0 16.6-3.3 23.7 2.1 0 0 4.8 3.9 2.4 6.5 0 0 3.1-4.8 18.4-.4 0 0 10.9 3.5 7.2 11 0 0 13.8-1.5 9.7 9.5 0 0-4.1 10.8-15.5 4.8 0 0-3.1 5.6-26.4 7.9 0 0-16.3 2.8-24-5.3 0 0 1 5.7-10.8 7.2-.1.1-17.2 3.6-17.4-2.8z", 1, "st4"], ["id", "cloud2", "d", "M19.3 159.5s-15.9.6-18.8-5.1c0 0-3.4-9.5 11.7-10.1 0 0-1.7-5.5 9-6.9 0 0 11.2-1.7 16 2.8 0 0 2.5-9.4 13.1-10.3 0 0 17.9-1.8 20 5.4 0 0 .2 4.3-2 6.1 0 0 6.9-6.9 19.8-2.6 0 0 9.1 3.4 5.5 9 0 0 6.5 0 4.5 6.7 0 0-2.6 5.6-9.6 1 0 0-4 7.3-24.2 7.7 0 0-14.2 1.3-20.4-5.5 0 0 .5 4.5-9.8 5 0 .1-15 1.8-14.8-3.2z", 1, "st4"], ["id", "cloud4", "d", "M370.3 109.5s15.9.6 18.8-5.1c0 0 3.4-9.5-11.7-10.1 0 0 1.7-5.5-9-6.9 0 0-11.2-1.7-16 2.8 0 0-2.5-9.4-13.1-10.3 0 0-17.9-1.8-20 5.4 0 0-.2 4.3 2 6.1 0 0-6.9-6.9-19.8-2.6 0 0-9.1 3.4-5.5 9 0 0-12 1.9-7.7 8 0 0 7.5 4 12.8-.2 0 0 4 7.3 24.2 7.7 0 0 14.2 1.3 20.4-5.5 0 0-.5 4.5 9.8 5 0 0 15.1 1.7 14.8-3.3z", 1, "st4"], ["id", "cloud5", "d", "M511.7 12.4s-21.3-.3-25 7c0 0-4.3 12.2 16 12.5 0 0-2.1 7 12.2 8.6 0 0 15 1.8 21.3-4 0 0 3.6 11.9 17.8 12.8 0 0 19.5 1.6 27-4.4 0 0 5-4.4 2.1-6.7 0 0 4.1 4.4 21.2-1.5 0 0 12.1-4.6 7-11.6 0 0 16-2.8 10.1-10.4 0 0-10.2-4.9-17.1.6 0 0-5.5-9.2-32.5-9.2 0 0-19.1-1.2-27 7.6 0 0 .5-5.8-13.3-6.1-.1.2-20.3-1.6-19.8 4.8z", 1, "st4"], ["id", "train"], ["fill", "#b3dcdf", "d", "M344.5 248.5h507.2v37.8H344.5z"], ["id", "wheels"], ["cx", "384.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M384.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["cx", "416.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M416.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["cx", "469.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M469.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["cx", "734.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M734.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["cx", "766.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M766.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["cx", "821.1", "cy", "285.6", "r", "15.1", 1, "st6"], ["d", "M821.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z", 1, "st2"], ["id", "bracefront", "d", "M383.2 285.6h88.1", 1, "st7"], ["id", "braceback", "d", "M733.2 285.6h88.1", 1, "st7"], ["id", "car-layers"], ["id", "car", "d", "M321.8 300.7v-32.4s1.2.7-1.5-2.4v-29.1s3.1-11.6 10.7-21.1c0 0 7.6-12 15.5-17.5h1.3s10.2-4.9 30.9-28h.6s-.9-1.4 0-2.7c0 0 10.1-10.5 21-12.3 0 0 9.4-1.8 20.2-1.8h47.7V151H492v-1.1h10.1v1.1h19v2.2s8.2.9 19.2-4.2c0 0 1.4-1.1 28.8-1.1h291.5v6.8h7.5v2.2s12.2-.6 12.2 9.8V177l-10-.1v57.9s14.9-.5 14.9 10.2c0 0 1 9-14.9 8.9v3.8H719.5s-2.4.1-4.3 3l-15 29s-2.9 5.1-10.8 5.1H504.3s-2.9.1-6.1-5l-13.1-25s-4.5-7.1-11.8-7.1H369v2.4s-3.2 1.3-7.1 8.7L351.4 289s-2.9 6.3-6.9 6.4h-17.8l-4.9 5.3z", 1, "st8"], ["id", "streamline-outine", "d", "M320.3 236.6s1.4-6.8 4.4-11.3c0 0 .1-2.3 23.2-6.3l78-16.6s103.3-21.1 134.9-26.1c0 0 93.3-16 120.5-17.9 0 0 57.6-4.3 100-4.1h88.9v63.4s-10.3 5.4-17.1 5.3c0 0-305.6 4.9-366.3 8.1 0 0-100.3 4.8-119.1 6.8 0-.1-46.6 1.2-47.4-1.3z", 1, "st8"], ["id", "window-grate"], ["d", "M739.5 182.6H854", 1, "st9"], ["d", "M739.5 177.6H854", 1, "st9"], ["d", "M739.5 172.6H854", 1, "st9"], ["d", "M739.5 167.6H854", 1, "st9"], ["d", "M739.5 161.4H854v26.1H739.5z", 1, "st9"], ["d", "M320.3 257.8h549.9", 1, "st9"], ["id", "Text"], ["transform", "translate(377.037 230.025)", "font-size", "21", 1, "st8", "st10"], ["transform", "translate(659.5 213.994)", "font-size", "24.025", 1, "st8", "st10"], ["id", "ladders"], ["id", "ladder-f"], ["id", "front-ladder", "d", "M433.8 258.4h17.8v34.8h-17.8z", 1, "st8"], ["id", "fb-rung", "d", "M433.8 281.1h17.7", 1, "st9"], ["id", "ft-rung", "d", "M433.8 268.6h17.7", 1, "st9"], ["id", "ladder-b"], ["id", "ladder-back", "d", "M851.8 257.8h17.8v34.8h-17.8z", 1, "st8"], ["id", "bt-rung", "d", "M851.8 268.6h17.7", 1, "st9"], ["id", "bb-rung", "d", "M851.8 281.1h17.7", 1, "st9"], ["id", "window-front", "d", "M350.5 196.4s-.4 3.9 15.2 4.3l32.3-30.3s-18.2 1.1-19-.8l-28.5 26.8z", 1, "st8"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "g", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "g", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "g", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "circle", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "circle", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "circle", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "circle", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "circle", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "g", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "g", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "g", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "text", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "text", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Page not found. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "g", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "g", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "g", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 15%;\n}\n\n.st0[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.st2[_ngcontent-%COMP%] {\n  fill: #5d89af;\n}\n\n.st3[_ngcontent-%COMP%] {\n  fill: #709abf;\n}\n\n.st4[_ngcontent-%COMP%], .st6[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke: #b3dcdf;\n  stroke-miterlimit: 10;\n}\n\n.st6[_ngcontent-%COMP%] {\n  stroke: #5d89af;\n  stroke-width: 2;\n}\n\n.st7[_ngcontent-%COMP%], .st8[_ngcontent-%COMP%], .st9[_ngcontent-%COMP%] {\n  stroke: #709abf;\n  stroke-miterlimit: 10;\n}\n\n.st7[_ngcontent-%COMP%] {\n  stroke-width: 5;\n  stroke-linecap: round;\n  fill: none;\n}\n\n.st8[_ngcontent-%COMP%], .st9[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n\n.st9[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n#cloud1[_ngcontent-%COMP%] {\n  animation: cloud003 15s linear infinite;\n}\n\n#cloud2[_ngcontent-%COMP%] {\n  animation: cloud002 25s linear infinite;\n}\n\n#cloud3[_ngcontent-%COMP%] {\n  animation: cloud003 20s linear infinite;\n}\n\n#cloud4[_ngcontent-%COMP%] {\n  animation: float 4s linear infinite;\n}\n\n#cloud5[_ngcontent-%COMP%] {\n  animation: float 8s linear infinite;\n}\n\n#cloud7[_ngcontent-%COMP%] {\n  animation: float 5s linear infinite;\n}\n\n#tracks[_ngcontent-%COMP%] {\n  animation: slide 650ms linear infinite;\n}\n\n#bumps[_ngcontent-%COMP%] {\n  animation: land 10000ms linear infinite;\n}\n\n@keyframes jig {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(1px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n#car-layers[_ngcontent-%COMP%] {\n  animation: jig 0.35s linear infinite;\n}\n\n@keyframes land {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(1000px);\n  }\n}\n\n@keyframes slide {\n  from {\n    transform: translateX(0px);\n  }\n  to {\n    transform: translateX(100px);\n  }\n}\n\n\n\n@keyframes cloud001 {\n  0% {\n    transform: translateX(-1000px) translateY(3px);\n  }\n  100% {\n    transform: translateX(1000px) translateY(0);\n  }\n}\n\n@keyframes cloud002 {\n  0% {\n    transform: translateX(-1000px) translateY(3px);\n  }\n  100% {\n    transform: translateX(1000px) translateY(0);\n  }\n}\n\n@keyframes cloud003 {\n  0% {\n    transform: translateX(-1000px) translateY(3px);\n  }\n  100% {\n    transform: translateX(1000px) translateY(0);\n  }\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px) translateX(0);\n  }\n  50% {\n    transform: translateY(8px) translateX(5px);\n  }\n  100% {\n    transform: translateY(0px) translateX(0);\n  }\n}\n\n#bracefront[_ngcontent-%COMP%], #braceback[_ngcontent-%COMP%] {\n  animation: braces 1s linear infinite;\n}\n\n@keyframes braces {\n  0% {\n    transform: translateX(-2px);\n  }\n  25% {\n    transform: translateX(3px);\n  }\n  50% {\n    transform: translateX(-2px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n  100% {\n    transform: translateX(-2px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7O0VBR0UsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUlBO0VBQ0UsdUNBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtBQURGOztBQUlBO0VBQ0UsbUNBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLDBCQUFBO0VBREY7RUFJQTtJQUNFLDBCQUFBO0VBRkY7RUFLQTtJQUNFLDBCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLG9DQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLHdCQUFBO0VBSkY7RUFPQTtJQUNFLDZCQUFBO0VBTEY7QUFDRjs7QUFTQTtFQUNFO0lBQ0UsMEJBQUE7RUFQRjtFQVVBO0lBQ0UsNEJBQUE7RUFSRjtBQUNGOztBQVdBOzs7R0FBQTs7QUFLQTtFQUNFO0lBQ0UsOENBQUE7RUFWRjtFQWFBO0lBQ0UsMkNBQUE7RUFYRjtBQUNGOztBQWNBO0VBQ0U7SUFDRSw4Q0FBQTtFQVpGO0VBZUE7SUFDRSwyQ0FBQTtFQWJGO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFDRSw4Q0FBQTtFQWRGO0VBaUJBO0lBQ0UsMkNBQUE7RUFmRjtBQUNGOztBQWtCQTtFQUNFO0lBQ0Usd0NBQUE7RUFoQkY7RUFtQkE7SUFDRSwwQ0FBQTtFQWpCRjtFQW9CQTtJQUNFLHdDQUFBO0VBbEJGO0FBQ0Y7O0FBcUJBOztFQUVFLG9DQUFBO0FBbkJGOztBQXNCQTtFQUNFO0lBQ0UsMkJBQUE7RUFuQkY7RUFzQkE7SUFDRSwwQkFBQTtFQXBCRjtFQXVCQTtJQUNFLDJCQUFBO0VBckJGO0VBd0JBO0lBQ0UsMEJBQUE7RUF0QkY7RUF5QkE7SUFDRSwyQkFBQTtFQXZCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG4uc3QwIHtcclxuICBmaWxsOiAjZmZmXHJcbn1cclxuXHJcbi5zdDIge1xyXG4gIGZpbGw6ICM1ZDg5YWZcclxufVxyXG5cclxuLnN0MyB7XHJcbiAgZmlsbDogIzcwOWFiZlxyXG59XHJcblxyXG4uc3Q0LFxyXG4uc3Q2IHtcclxuICBmaWxsOiAjZmZmO1xyXG4gIHN0cm9rZTogI2IzZGNkZjtcclxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTBcclxufVxyXG5cclxuLnN0NiB7XHJcbiAgc3Ryb2tlOiAjNWQ4OWFmO1xyXG4gIHN0cm9rZS13aWR0aDogMlxyXG59XHJcblxyXG4uc3Q3LFxyXG4uc3Q4LFxyXG4uc3Q5IHtcclxuICBzdHJva2U6ICM3MDlhYmY7XHJcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwXHJcbn1cclxuXHJcbi5zdDcge1xyXG4gIHN0cm9rZS13aWR0aDogNTtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgZmlsbDogbm9uZVxyXG59XHJcblxyXG4uc3Q4LFxyXG4uc3Q5IHtcclxuICBmaWxsOiAjZmZmXHJcbn1cclxuXHJcbi5zdDkge1xyXG4gIGZpbGw6IG5vbmVcclxufVxyXG5cclxuLnN0MTAge31cclxuXHJcbiNjbG91ZDEge1xyXG4gIGFuaW1hdGlvbjogY2xvdWQwMDMgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuI2Nsb3VkMiB7XHJcbiAgYW5pbWF0aW9uOiBjbG91ZDAwMiAyNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jY2xvdWQzIHtcclxuICBhbmltYXRpb246IGNsb3VkMDAzIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNjbG91ZDQge1xyXG4gIGFuaW1hdGlvbjogZmxvYXQgNHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jY2xvdWQ1IHtcclxuICBhbmltYXRpb246IGZsb2F0IDhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuI2Nsb3VkNyB7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiN0cmFja3Mge1xyXG4gIGFuaW1hdGlvbjogc2xpZGUgNjUwbXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jYnVtcHMge1xyXG4gIGFuaW1hdGlvbjogbGFuZCAxMDAwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBqaWcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiNjYXItbGF5ZXJzIHtcclxuICBhbmltYXRpb246IGppZyAwLjM1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGFuZCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEBrZXlmcmFtZXMgY2xvdWRGbG9hdCB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzcHgpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpIHRyYW5zbGF0ZVkoMCk7IH1cclxufSAqL1xyXG5cclxuQGtleWZyYW1lcyBjbG91ZDAwMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoM3B4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCkgdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2xvdWQwMDIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNsb3VkMDAzIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCkgdHJhbnNsYXRlWSgzcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KSB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSB0cmFuc2xhdGVYKDVweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4jYnJhY2Vmcm9udCxcclxuI2JyYWNlYmFjayB7XHJcbiAgYW5pbWF0aW9uOiBicmFjZXMgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJyYWNlcyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nhan.tran\NhanTran\Phase 4\LauThai-WebApp\lauthai-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map