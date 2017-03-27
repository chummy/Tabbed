"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var ObservationsDetailComponent = (function () {
    function ObservationsDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_observationsModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_observationsModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(ObservationsDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    ObservationsDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return ObservationsDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], ObservationsDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("valueField"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "valueFieldInst", void 0);
__decorate([
    core_1.ViewChild("typeField"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "typeFieldInst", void 0);
__decorate([
    core_1.ViewChild("trackingNoField"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "trackingNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("timeField"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "timeFieldInst", void 0);
__decorate([
    core_1.ViewChild("mpidfield"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "mpidfieldInst", void 0);
__decorate([
    core_1.ViewChild("idfield"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "idfieldInst", void 0);
__decorate([
    core_1.ViewChild("dateField"),
    __metadata("design:type", Object)
], ObservationsDetailComponent.prototype, "dateFieldInst", void 0);
ObservationsDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-observations-detail",
        templateUrl: "observations-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ObservationsDetailComponent);
exports.ObservationsDetailComponent = ObservationsDetailComponent;
var _a, _b;
//# sourceMappingURL=observations-detail.component.js.map