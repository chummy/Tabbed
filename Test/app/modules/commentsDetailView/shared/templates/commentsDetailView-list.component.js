"use strict";
var core_1 = require("@angular/core");
var CommentsDetailViewListComponent = (function () {
    function CommentsDetailViewListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    CommentsDetailViewListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    CommentsDetailViewListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return CommentsDetailViewListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentsDetailViewListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentsDetailViewListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentsDetailViewListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentsDetailViewListComponent.prototype, "navigate", void 0);
CommentsDetailViewListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-commentsDetailView-list",
        templateUrl: "commentsDetailView-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], CommentsDetailViewListComponent);
exports.CommentsDetailViewListComponent = CommentsDetailViewListComponent;
//# sourceMappingURL=commentsDetailView-list.component.js.map