"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var PatientsDetailViewDetailComponent = (function () {
    function PatientsDetailViewDetailComponent() {
        this.navigate = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsDetailViewDetailComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PatientsDetailViewDetailComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsDetailViewDetailComponent.prototype, "navigate", void 0);
    __decorate([
        core_1.ViewChild("textBlock"), 
        __metadata('design:type', Object)
    ], PatientsDetailViewDetailComponent.prototype, "textBlockInst", void 0);
    PatientsDetailViewDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patientsDetailView-detail",
            templateUrl: "patientsDetailView-detail.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsDetailViewDetailComponent);
    return PatientsDetailViewDetailComponent;
}());
exports.PatientsDetailViewDetailComponent = PatientsDetailViewDetailComponent;
//# sourceMappingURL=patientsDetailView-detail.component.js.map