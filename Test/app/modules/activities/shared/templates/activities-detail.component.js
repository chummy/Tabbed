"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var ActivitiesDetailComponent = (function () {
    function ActivitiesDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_activitiesModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_activitiesModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(ActivitiesDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    ActivitiesDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return ActivitiesDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], ActivitiesDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("trackingNoField"),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "trackingNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("timeField"),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "timeFieldInst", void 0);
__decorate([
    core_1.ViewChild("mpid"),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "mpidInst", void 0);
__decorate([
    core_1.ViewChild("dateField"),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "dateFieldInst", void 0);
__decorate([
    core_1.ViewChild("activityField"),
    __metadata("design:type", Object)
], ActivitiesDetailComponent.prototype, "activityFieldInst", void 0);
ActivitiesDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-activities-detail",
        templateUrl: "activities-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ActivitiesDetailComponent);
exports.ActivitiesDetailComponent = ActivitiesDetailComponent;
var _a, _b;
//# sourceMappingURL=activities-detail.component.js.map