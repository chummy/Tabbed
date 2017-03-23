"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var CommentsDetailViewDetailComponent = (function () {
    function CommentsDetailViewDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_commentsDetailViewModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_commentsDetailViewModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(CommentsDetailViewDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    CommentsDetailViewDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return CommentsDetailViewDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentsDetailViewDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], CommentsDetailViewDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentsDetailViewDetailComponent.prototype, "navigate", void 0);
CommentsDetailViewDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-commentsDetailView-detail",
        templateUrl: "commentsDetailView-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], CommentsDetailViewDetailComponent);
exports.CommentsDetailViewDetailComponent = CommentsDetailViewDetailComponent;
var _a, _b;
//# sourceMappingURL=commentsDetailView-detail.component.js.map