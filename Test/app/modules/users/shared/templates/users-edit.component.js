"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UsersEditComponent = (function () {
    /// placeholder for field
    function UsersEditComponent() {
        this.update = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(UsersEditComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UsersEditComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    UsersEditComponent.prototype.onUpdate = function () {
        this.update.emit({
            item: this.item
        });
    };
    UsersEditComponent.prototype.onDelete = function () {
        this.delete.emit({
            item: this.item
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], UsersEditComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "update", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "delete", void 0);
    __decorate([
        core_1.ViewChild("passwordField"), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "passwordFieldInst", void 0);
    __decorate([
        core_1.ViewChild("emailField"), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "emailFieldInst", void 0);
    __decorate([
        core_1.ViewChild("usernameField"), 
        __metadata('design:type', Object)
    ], UsersEditComponent.prototype, "usernameFieldInst", void 0);
    UsersEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-users-edit",
            templateUrl: "users-edit.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UsersEditComponent);
    return UsersEditComponent;
}());
exports.UsersEditComponent = UsersEditComponent;
//# sourceMappingURL=users-edit.component.js.map