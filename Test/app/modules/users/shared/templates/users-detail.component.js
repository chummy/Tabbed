"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UsersDetailComponent = (function () {
    function UsersDetailComponent() {
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(UsersDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UsersDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UsersDetailComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UsersDetailComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UsersDetailComponent.prototype, "navigate", void 0);
    UsersDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-users-detail",
            templateUrl: "users-detail.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UsersDetailComponent);
    return UsersDetailComponent;
}());
exports.UsersDetailComponent = UsersDetailComponent;
//# sourceMappingURL=users-detail.component.js.map