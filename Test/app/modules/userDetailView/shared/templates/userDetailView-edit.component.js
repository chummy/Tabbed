"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UserDetailViewEditComponent = (function () {
    /// placeholder for field
    function UserDetailViewEditComponent() {
        this.update = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(UserDetailViewEditComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UserDetailViewEditComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    UserDetailViewEditComponent.prototype.onUpdate = function () {
        this.update.emit({
            item: this.item
        });
    };
    UserDetailViewEditComponent.prototype.onDelete = function () {
        this.delete.emit({
            item: this.item
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserDetailViewEditComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UserDetailViewEditComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserDetailViewEditComponent.prototype, "update", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserDetailViewEditComponent.prototype, "delete", void 0);
    UserDetailViewEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-userDetailView-edit",
            templateUrl: "userDetailView-edit.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailViewEditComponent);
    return UserDetailViewEditComponent;
}());
exports.UserDetailViewEditComponent = UserDetailViewEditComponent;
//# sourceMappingURL=userDetailView-edit.component.js.map