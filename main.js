(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jeroen van Barneveld\Desktop\test\src\main.ts */"zUnb");


/***/ }),

/***/ "7Qqj":
/*!**************************************!*\
  !*** ./src/app/gear-item.service.ts ***!
  \**************************************/
/*! exports provided: GearItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearItemService", function() { return GearItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





class GearItemService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.cache = new Map();
    }
    getResultForItem(item) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.createUrl(item);
            if (!this.cache.get(url)) {
                this.cache.set(url, this.fetch(url));
            }
            const result = yield this.cache.get(url);
            if (!result) {
                throw new Error('No result found');
            }
            return {
                id: item.id,
                bonus: item.bonus,
                slot: item.slot,
                enchant: item.enchant,
                name: result.name,
                icon: result.icon,
                tooltip: (_a = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, result.tooltip)) !== null && _a !== void 0 ? _a : '',
                ilvl: result.ilvl,
                class: (_c = (_b = result.tooltip.match(/q(\d+)/)) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : '',
            };
        });
    }
    fetch(url) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.http.get(url).toPromise();
            return {
                tooltip: result.tooltip,
                name: result.name,
                ilvl: parseInt((_b = (_a = result.tooltip.match(/<!--ilvl-->(\d+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '', 10),
                icon: result.icon,
            };
        });
    }
    createUrl(item) {
        return `https://wwww.wowhead.com/tooltip/item/${item.id}?` + Object.entries({
            bonus: item.bonus.join(':'),
            ench: item.enchant,
        }).filter(a => a[1]).map(a => a.join('=')).join('&');
    }
}
GearItemService.??fac = function GearItemService_Factory(t) { return new (t || GearItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
GearItemService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: GearItemService, factory: GearItemService.??fac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "DLMJ":
/*!********************************************!*\
  !*** ./src/app/click-tooltip.directive.ts ***!
  \********************************************/
/*! exports provided: ClickTooltipComponent, ClickTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickTooltipComponent", function() { return ClickTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickTooltipDirective", function() { return ClickTooltipDirective; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");



class ClickTooltipComponent {
}
ClickTooltipComponent.??fac = function ClickTooltipComponent_Factory(t) { return new (t || ClickTooltipComponent)(); };
ClickTooltipComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ClickTooltipComponent, selectors: [["app-click-tooltip"]], decls: 2, vars: 1, consts: [[1, "mat-tooltip"]], template: function ClickTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.message);
    } }, styles: [".mat-tooltip[_ngcontent-%COMP%] {\n      color: #fff;\n      border-radius: 4px;\n      margin: 5px;\n      max-width: 250px;\n      padding-left: 8px;\n      padding-right: 8px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }"] });
class ClickTooltipDirective {
    constructor(overlay, elementRef) {
        this.overlay = overlay;
        this.elementRef = elementRef;
    }
    click() {
        if (!this.message) {
            return;
        }
        this.close();
        this.ref = this.overlay.create({
            positionStrategy: this.overlay.position().flexibleConnectedTo(this.elementRef.element)
                .withPositions([{
                    originX: 'center',
                    originY: 'top',
                    overlayY: 'bottom',
                    overlayX: 'center',
                }]),
        });
        const ref = this.ref.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](ClickTooltipComponent));
        ref.instance.message = this.message;
        this.timer = setTimeout(() => this.close(), 2000);
    }
    ngOnDestroy() {
        this.close();
    }
    close() {
        var _a, _b;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = undefined;
        }
        if ((_a = this.ref) === null || _a === void 0 ? void 0 : _a.hasAttached()) {
            (_b = this.ref) === null || _b === void 0 ? void 0 : _b.detach();
        }
    }
}
ClickTooltipDirective.??fac = function ClickTooltipDirective_Factory(t) { return new (t || ClickTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
ClickTooltipDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: ClickTooltipDirective, selectors: [["", "appClickTooltip", ""]], hostBindings: function ClickTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClickTooltipDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { message: ["appClickTooltip", "message"] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "p21n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _gear_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gear-item.service */ "7Qqj");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _click_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./click-tooltip.directive */ "DLMJ");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _gear_item_gear_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gear-item/gear-item.component */ "vDrq");
















const _c0 = ["importButton"];
function AppComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Simc import");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Simc import");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function AppComponent_ng_template_8_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r7.dialogInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Importeren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Sluiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("width", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r2.dialogInput)("cdkAutosizeMinRows", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", ctx_r2.dialogInput);
} }
function AppComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Simc import");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Kopieer naar clipboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Sluiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r4.output);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cdkCopyToClipboard", ctx_r4.output);
} }
function AppComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](item_r9.key);
} }
function AppComponent_tr_22_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMap"](item_r15.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("app-gear-item", item_r15);
} }
function AppComponent_tr_22_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_tr_22_ng_container_3_td_1_Template, 2, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const slot_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r11.gear.get(slot_r10));
} }
function AppComponent_tr_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Geen items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
function AppComponent_tr_22_td_5_ng_container_1_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function AppComponent_tr_22_td_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_tr_22_td_5_ng_container_1_div_1_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("clicked", function AppComponent_tr_22_td_5_ng_container_1_div_1_Template_span_clicked_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24); const item_r21 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4); return ctx_r23.toggleSelect(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMap"](item_r21.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r20.itemSelected(item_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("cursor", "pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("app-gear-item", item_r21);
} }
function AppComponent_tr_22_td_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_tr_22_td_5_ng_container_1_div_1_Template, 3, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    const slot_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", value_r17.value.get(slot_r10));
} }
function AppComponent_tr_22_td_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Geen items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
function AppComponent_tr_22_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, AppComponent_tr_22_td_5_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, AppComponent_tr_22_td_5_ng_container_2_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const slot_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", value_r17.value.get(slot_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !value_r17.value.get(slot_r10));
} }
function AppComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, AppComponent_tr_22_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, AppComponent_tr_22_ng_container_4_Template, 4, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, AppComponent_tr_22_td_5_Template, 3, 2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const slot_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](slot_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r6.gear.get(slot_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r6.gear.get(slot_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](6, 4, ctx_r6.categories));
} }
class AppComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.title = 'test';
        this.gear = new Map();
        this.slots = _types__WEBPACK_IMPORTED_MODULE_2__["slots"];
        this.selected = [];
        this.output = '';
        this.name = '';
        this.input = '';
        this.dialogInput = '';
        this.mainEnchants = new Map();
    }
    set setImportButton(element) {
        if (this.input === '') {
            element.nativeElement.click();
        }
    }
    updateOutput() {
        this.output = this.input.replace(/\n+$/, '')
            .replace(/^level=.*$/m, m => `${m}\ncalculate_scale_factors=0`)
            + '\n\n';
        this.output += this.selected.map(item => {
            return [
                `copy="${item.name} (${item.ilvl}) - ${item.slot},${this.name}"`,
                `${Object(_types__WEBPACK_IMPORTED_MODULE_2__["getSlotKey"])(item.slot)}=,${Object.entries({
                    id: item.id,
                    bonus_id: item.bonus.join('/'),
                    enchant_id: item.enchant,
                }).filter(a => a[1]).map(s => s.join('=')).join(',')}`,
            ].join('\n');
        }).join('\n\n');
    }
    parseData(input) {
        var _a, _b, _c, _d;
        this.input = input;
        Promise.all(input.matchAll(new RegExp(`^(?<slot>${_types__WEBPACK_IMPORTED_MODULE_2__["slotKeys"].join('|')})=("?)(.*)\\2$`, 'gm'))
            .map(s => this.mapToItem(s[0])))
            .then(r => this.mapPerSlot(r))
            .then(r => {
            this.gear = r;
            this.mainEnchants.clear();
            for (const item of this.gear.values()) {
                this.mainEnchants.set(item[0].slot, item[0].enchant);
            }
            this.getPerCategory(input).then(r2 => {
                this.categories = r2;
                this.updateOutput();
            });
        });
        this.name = (_d = (_b = (_a = input.match(/^name=("?)(.*)\1/m)) === null || _a === void 0 ? void 0 : _a[2]) !== null && _b !== void 0 ? _b : (_c = input.match(new RegExp(`^(${_types__WEBPACK_IMPORTED_MODULE_2__["classes"].join('|')})=("?)(.*)\\2$`, 'm'))) === null || _c === void 0 ? void 0 : _c[3]) !== null && _d !== void 0 ? _d : 'Onbekend';
        this.selected = [];
    }
    mapToItem(line) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let enchant = (_a = line.match(/enchant_id=(\d+)/)) === null || _a === void 0 ? void 0 : _a[1];
            const slot = _types__WEBPACK_IMPORTED_MODULE_2__["Slot"][line.split('=')[0]];
            if (enchant) {
                enchant = parseInt(enchant, 10);
            }
            else {
                enchant = this.mainEnchants.get(slot);
            }
            return this.service.getResultForItem({
                id: parseInt((_c = (_b = line.match(/,id=(\d+)/)) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '', 10),
                bonus: (_e = (_d = line.match(/bonus_id=(((\d+)\/?)+)/)) === null || _d === void 0 ? void 0 : _d[1].split('/').map(s => parseInt(s, 10))) !== null && _e !== void 0 ? _e : [],
                slot,
                enchant,
            });
        });
    }
    mapPerSlot(items) {
        var _a;
        const ret = new Map();
        for (const item of items) {
            if (!ret.has(item.slot)) {
                ret.set(item.slot, []);
            }
            (_a = ret.get(item.slot)) === null || _a === void 0 ? void 0 : _a.push(item);
        }
        return ret;
    }
    getPerCategory(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const re = new RegExp(`^# (${_types__WEBPACK_IMPORTED_MODULE_2__["slotKeys"].join('|')})=(.*)$`);
            const lines = input.split('\n');
            const categories = new Map();
            let current = new Map();
            const promises = [];
            const addItem = (cur, promise) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                const item = yield promise;
                if (!cur.get(item.slot)) {
                    cur.set(item.slot, []);
                }
                (_a = cur.get(item.slot)) === null || _a === void 0 ? void 0 : _a.push(item);
                if (item.slot === _types__WEBPACK_IMPORTED_MODULE_2__["Slot"].finger1 || item.slot === _types__WEBPACK_IMPORTED_MODULE_2__["Slot"].trinket1) {
                    const duplicate = JSON.parse(JSON.stringify(item));
                    duplicate.slot = _types__WEBPACK_IMPORTED_MODULE_2__["Slot"].finger1 ? _types__WEBPACK_IMPORTED_MODULE_2__["Slot"].finger2 : _types__WEBPACK_IMPORTED_MODULE_2__["Slot"].trinket2;
                    yield addItem(cur, new Promise(resolve => resolve(duplicate)));
                }
            });
            for (const line of lines) {
                if (line.startsWith('### ')) {
                    current = new Map();
                    categories.set(line.substring(4), current);
                }
                else if (line.match(re)) {
                    promises.push(addItem(current, this.mapToItem(line.substring(2))));
                }
            }
            yield Promise.all(promises);
            return categories;
        });
    }
    itemSelected(item) {
        return this.selectedItemIndex(item) !== -1;
    }
    selectedItemIndex(item) {
        return this.selected.findIndex(s => s.id === item.id && s.bonus.sort().join('') === item.bonus.sort().join('') && s.slot === item.slot);
    }
    toggleSelect(item) {
        const index = this.selectedItemIndex(item);
        if (index === -1) {
            this.selected.push(item);
        }
        else {
            this.selected.splice(index, 1);
        }
        this.updateOutput();
    }
    openDialog(element) {
        this.dialog.open(element, {
            width: '50vw',
        }).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(s => {
            if (!!s) {
                this.parseData(s);
            }
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_gear_item_service__WEBPACK_IMPORTED_MODULE_4__["GearItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.setImportButton = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "content"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["importButton", ""], ["mat-flat-button", "", "color", "warn", 3, "click"], ["importPopup", ""], ["exportPopup", ""], [1, "table", "table-bordered", "table-striped", "table-hover"], [1, "table-dark"], [4, "ngFor", "ngForOf"], ["mat-dialog-title", ""], ["cdkTextareaAutosize", "", "matInput", "", 3, "ngModel", "cdkAutosizeMinRows", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-dialog-close", "", "mat-flat-button", "", "color", "warn"], ["appClickTooltip", "Gekopieerd!", "mat-flat-button", "", "color", "primary", 3, "cdkCopyToClipboard"], [4, "ngIf"], [3, "app-gear-item"], [1, "text-muted"], [3, "class", 4, "ngFor", "ngForOf"], [3, "app-gear-item", "clicked"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r28); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](9); return ctx.openDialog(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Importeer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AppComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r28); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](11); return ctx.openDialog(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Exporteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, AppComponent_ng_template_8_Template, 13, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, AppComponent_ng_template_10_Template, 11, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "thead", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Slot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Huidige gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, AppComponent_th_19_Template, 2, 1, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](20, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, AppComponent_tr_22_Template, 7, 6, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](20, 3, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.slots);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _click_tooltip_directive__WEBPACK_IMPORTED_MODULE_12__["ClickTooltipDirective"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_13__["CdkCopyToClipboard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _gear_item_gear_item_component__WEBPACK_IMPORTED_MODULE_14__["GearItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]], styles: ["span[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: grey;\n  font-style: italic;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Titc":
/*!*************************************************!*\
  !*** ./src/app/gear-item/gear-popup.service.ts ***!
  \*************************************************/
/*! exports provided: GearPopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearPopupService", function() { return GearPopupService; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _gear_popup_gear_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear-popup/gear-popup.component */ "m7sv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");




class GearPopupService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    open({ x, y }, content) {
        this.close();
        this.ref = this.overlay.create({
            positionStrategy: this.createPositionStrategy(x, y)
        });
        const componentRef = this.ref.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](_gear_popup_gear_popup_component__WEBPACK_IMPORTED_MODULE_1__["GearPopupComponent"]));
        componentRef.instance.tooltip = content;
    }
    createPositionStrategy(x, y) {
        const offset = 15;
        return this.overlay.position()
            .flexibleConnectedTo({ x, y })
            .withPositions([{
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetX: offset,
                offsetY: offset,
            }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
                offsetX: offset,
                offsetY: -offset,
            }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
                offsetX: offset,
                offsetY: 0,
            }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: -offset,
                offsetY: offset,
            }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom',
                offsetX: -offset,
                offsetY: -offset,
            }, {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom',
                offsetX: -offset,
                offsetY: 0,
            }]);
    }
    close() {
        var _a, _b;
        if ((_a = this.ref) === null || _a === void 0 ? void 0 : _a.hasAttached()) {
            (_b = this.ref) === null || _b === void 0 ? void 0 : _b.detach();
        }
    }
    move({ x, y }) {
        var _a;
        (_a = this.ref) === null || _a === void 0 ? void 0 : _a.updatePositionStrategy(this.createPositionStrategy(x, y));
    }
}
GearPopupService.??fac = function GearPopupService_Factory(t) { return new (t || GearPopupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); };
GearPopupService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: GearPopupService, factory: GearPopupService.??fac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _gear_item_gear_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gear-item/gear-item.component */ "vDrq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _gear_item_gear_popup_gear_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gear-item/gear-popup/gear-popup.component */ "m7sv");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _click_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./click-tooltip.directive */ "DLMJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















String.prototype.matchAll = function (re) {
    const value = this;
    const matches = [];
    while (true) {
        const match = re.exec(value);
        if (!match) {
            break;
        }
        matches.push(match);
    }
    return matches;
};
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _gear_item_gear_item_component__WEBPACK_IMPORTED_MODULE_3__["GearItemComponent"],
        _gear_item_gear_popup_gear_popup_component__WEBPACK_IMPORTED_MODULE_5__["GearPopupComponent"],
        _click_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ClickTooltipDirective"],
        _click_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["ClickTooltipComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "m7sv":
/*!**************************************************************!*\
  !*** ./src/app/gear-item/gear-popup/gear-popup.component.ts ***!
  \**************************************************************/
/*! exports provided: GearPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearPopupComponent", function() { return GearPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GearPopupComponent {
}
GearPopupComponent.??fac = function GearPopupComponent_Factory(t) { return new (t || GearPopupComponent)(); };
GearPopupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GearPopupComponent, selectors: [["app-gear-popup"]], decls: 10, vars: 1, consts: [[1, "wowhead-tooltip", "wowhead-tooltip-width-restriction", "wowhead-tooltip-width-320", 2, "visibility", "visible", "max-width", "320px"], [1, "shrink"], [3, "innerHTML"], [2, "background-position", "right top"], [2, "background-position", "left bottom"], [2, "background-position", "right bottom"], [1, "wowhead-tooltip-powered", 2, "display", "block"]], template: function GearPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.tooltip, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
    } }, encapsulation: 2 });


/***/ }),

/***/ "p21n":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! exports provided: Slot, Class, slots, classes, slotKeys, getSlotKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slots", function() { return slots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slotKeys", function() { return slotKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlotKey", function() { return getSlotKey; });
var Slot;
(function (Slot) {
    Slot["head"] = "Head";
    Slot["neck"] = "Neck";
    Slot["shoulder"] = "Shoulder";
    Slot["back"] = "Back (cloak)";
    Slot["chest"] = "Chest";
    Slot["wrist"] = "Wrist";
    Slot["hands"] = "Hands (gloves)";
    Slot["waist"] = "Waist";
    Slot["legs"] = "Legs";
    Slot["feet"] = "Feet";
    Slot["finger1"] = "Finger (ring) 1";
    Slot["finger2"] = "Finger (ring) 2";
    Slot["trinket1"] = "Trinket 1";
    Slot["trinket2"] = "Trinket 2";
    Slot["main_hand"] = "Main hand";
    Slot["off_hand"] = "Off hand";
})(Slot || (Slot = {}));
var Class;
(function (Class) {
    Class["death_knight"] = "death_knight";
    Class["deathknight"] = "deathknight";
    Class["demonhunter"] = "demonhunter";
    Class["demon_hunter"] = "demon_hunter";
    Class["druid"] = "druid";
    Class["hunter"] = "hunter";
    Class["mage"] = "mage";
    Class["monk"] = "monk";
    Class["paladin"] = "paladin";
    Class["priest"] = "priest";
    Class["shaman"] = "shaman";
    Class["rogue"] = "rogue";
    Class["warlock"] = "warlock";
    Class["warrior"] = "warrior";
})(Class || (Class = {}));
const slots = Object.keys(Slot).map(s => Slot[s]);
const classes = Object.keys(Class).map(s => Class[s]);
const slotKeys = Object.keys(Slot);
const getSlotKey = (slot) => {
    var _a;
    return (_a = Object.entries(Slot).find(s => s[1] === slot)) === null || _a === void 0 ? void 0 : _a[0];
};


/***/ }),

/***/ "vDrq":
/*!**************************************************!*\
  !*** ./src/app/gear-item/gear-item.component.ts ***!
  \**************************************************/
/*! exports provided: GearItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GearItemComponent", function() { return GearItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gear_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear-popup.service */ "Titc");



class GearItemComponent {
    constructor(popup) {
        this.popup = popup;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        var _a;
        this.bg = `url('https://wow.zamimg.com/images/wow/icons/medium/${(_a = this.item) === null || _a === void 0 ? void 0 : _a.icon}.jpg')`;
    }
    mouseenter(event) {
        if (this.item) {
            this.popup.open(event, this.item.tooltip);
        }
    }
    mousemove(event) {
        this.popup.move(event);
    }
    mouseleave() {
        this.popup.close();
    }
    click(event) {
        var _a, _b;
        if (event.altKey) {
            window.open(`https://wowhead.com/item=${(_a = this.item) === null || _a === void 0 ? void 0 : _a.id}&bonus=${(_b = this.item) === null || _b === void 0 ? void 0 : _b.bonus.join(':')}`, '_blank');
        }
        else {
            this.clicked.emit(event);
        }
    }
}
GearItemComponent.??fac = function GearItemComponent_Factory(t) { return new (t || GearItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_gear_popup_service__WEBPACK_IMPORTED_MODULE_1__["GearPopupService"])); };
GearItemComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GearItemComponent, selectors: [["app-gear-item"], ["", "app-gear-item", ""]], hostBindings: function GearItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseenter", function GearItemComponent_mouseenter_HostBindingHandler($event) { return ctx.mouseenter($event); })("mousemove", function GearItemComponent_mousemove_HostBindingHandler($event) { return ctx.mousemove($event); })("mouseleave", function GearItemComponent_mouseleave_HostBindingHandler() { return ctx.mouseleave(); })("click", function GearItemComponent_click_HostBindingHandler($event) { return ctx.click($event); });
    } }, inputs: { item: ["app-gear-item", "item"] }, outputs: { clicked: "clicked" }, decls: 2, vars: 4, template: function GearItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background-image", ctx.bg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.item == null ? null : ctx.item.name, " (", ctx.item == null ? null : ctx.item.ilvl, ")");
    } }, styles: ["span[_ngcontent-%COMP%]{background-repeat: no-repeat; background-size: contain; padding-left: 20px;}"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map