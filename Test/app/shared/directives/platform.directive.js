"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var IfAndroidDirective = (function () {
    function IfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfAndroidDirective = __decorate([
        core_1.Directive({ selector: "[nsIfAndroid]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof platform_1.Device !== 'undefined' && platform_1.Device) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _c) || Object])
    ], IfAndroidDirective);
    return IfAndroidDirective;
    var _a, _b, _c;
}());
exports.IfAndroidDirective = IfAndroidDirective;
var IfIosDirective = (function () {
    function IfIosDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    IfIosDirective = __decorate([
        core_1.Directive({ selector: "[nsIfIos]" }),
        __param(0, core_1.Inject(platform_providers_1.DEVICE)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof platform_1.Device !== 'undefined' && platform_1.Device) === 'function' && _a) || Object, (typeof (_b = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _b) || Object, (typeof (_c = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _c) || Object])
    ], IfIosDirective);
    return IfIosDirective;
    var _a, _b, _c;
}());
exports.IfIosDirective = IfIosDirective;
//# sourceMappingURL=platform.directive.js.map