"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var ClinicalDetailComponent = (function () {
    function ClinicalDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_clinicalModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_clinicalModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(ClinicalDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    ClinicalDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return ClinicalDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], ClinicalDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("typeField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "typeFieldInst", void 0);
__decorate([
    core_1.ViewChild("trackingNoField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "trackingNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("seqNoField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "seqNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("mpidfield"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "mpidfieldInst", void 0);
__decorate([
    core_1.ViewChild("dateField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "dateFieldInst", void 0);
__decorate([
    core_1.ViewChild("codeField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "codeFieldInst", void 0);
__decorate([
    core_1.ViewChild("descriptionField"),
    __metadata("design:type", Object)
], ClinicalDetailComponent.prototype, "descriptionFieldInst", void 0);
ClinicalDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-clinical-detail",
        templateUrl: "clinical-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ClinicalDetailComponent);
exports.ClinicalDetailComponent = ClinicalDetailComponent;
var _a, _b;
//# sourceMappingURL=clinical-detail.component.js.map