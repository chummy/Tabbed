"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UserDetailViewDetailComponent = (function () {
    function UserDetailViewDetailComponent() {
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(UserDetailViewDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UserDetailViewDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserDetailViewDetailComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UserDetailViewDetailComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserDetailViewDetailComponent.prototype, "navigate", void 0);
    UserDetailViewDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-userDetailView-detail",
            templateUrl: "userDetailView-detail.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailViewDetailComponent);
    return UserDetailViewDetailComponent;
}());
exports.UserDetailViewDetailComponent = UserDetailViewDetailComponent;
//# sourceMappingURL=userDetailView-detail.component.js.map