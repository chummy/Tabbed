"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var PatientsDetailViewDetailComponent = (function () {
    function PatientsDetailViewDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_patientsDetailViewModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_patientsDetailViewModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(PatientsDetailViewDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    PatientsDetailViewDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return PatientsDetailViewDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PatientsDetailViewDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], PatientsDetailViewDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PatientsDetailViewDetailComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("textBlock"),
    __metadata("design:type", Object)
], PatientsDetailViewDetailComponent.prototype, "textBlockInst", void 0);
PatientsDetailViewDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-patientsDetailView-detail",
        templateUrl: "patientsDetailView-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], PatientsDetailViewDetailComponent);
exports.PatientsDetailViewDetailComponent = PatientsDetailViewDetailComponent;
var _a, _b;
//# sourceMappingURL=patientsDetailView-detail.component.js.map