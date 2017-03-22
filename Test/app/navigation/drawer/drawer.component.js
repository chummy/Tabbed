"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var shared = require("../../shared");
var DrawerMenuComponent = (function () {
    function DrawerMenuComponent(_navigationService, _changeDetectionRef, _router) {
        this._navigationService = _navigationService;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this.navigationItems = this._navigationService.routes;
    }
    DrawerMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._navigationService.openDrawer$.subscribe(function (data) {
            if (!_this._drawer)
                return;
            _this._drawer.toggleDrawerState();
        });
        this._router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this._drawer.closeDrawer();
            }
        });
    };
    DrawerMenuComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', (typeof (_a = typeof angular_1.RadSideDrawerComponent !== 'undefined' && angular_1.RadSideDrawerComponent) === 'function' && _a) || Object)
    ], DrawerMenuComponent.prototype, "drawerComponent", void 0);
    DrawerMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-drawer-menu",
            templateUrl: "drawer.component.html"
        }), 
        __metadata('design:paramtypes', [shared.NavigationService, (typeof (_b = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], DrawerMenuComponent);
    return DrawerMenuComponent;
    var _a, _b, _c;
}());
exports.DrawerMenuComponent = DrawerMenuComponent;
//# sourceMappingURL=drawer.component.js.map