"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_observationModelComponentImports
// END_CUSTOM_CODE_observationModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var ObservationComponent = (function () {
    /// component additional properties
    function ObservationComponent(
        // START_CUSTOM_CODE_observationModelComponentConstructorDependencies
        // END_CUSTOM_CODE_observationModelComponentConstructorDependencies
        _notificationService, 
        /// component constructor dependencies
        _service) {
        // START_CUSTOM_CODE_observationModelComponentConstructorMethod
        this._notificationService = _notificationService;
        this._service = _service;
        // START_CUSTOM_CODE_observationModelComponentProperties
        // END_CUSTOM_CODE_observationModelComponentProperties
        this.item = {};
        /// placeholder for field
        this.userDropDownDropDown = new Object();
        // END_CUSTOM_CODE_observationModelComponentConstructorMethod
        this.item.data = {};
        /// placeholder for component constructor
        this.userDropDownDropDown.items$ = new Observable_1.Observable(Object);
        this.userDropDownDropDown.itemsIndicators = new Array();
        /// component constructor method
    }
    Object.defineProperty(ObservationComponent.prototype, "title", {
        get: function () {
            var result = "Observation";
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservationComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    ObservationComponent.prototype.onSelectedPickerChanged = function (picker, dropdown, dataBind) {
        this.item.data[dataBind] = this[dropdown].itemsIndicators[picker.selectedIndex];
    };
    ObservationComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
        var _this = this;
        this.userDropDownDropDown.items$ = this.service.getDbCollection('Users').map(function (data) { return data.map(function (item, index) {
            if (_this.item.data.UserId === item.Id) {
                _this.userDropDownDropDown.index = index;
            }
            _this.userDropDownDropDown.itemsIndicators.push(item.Id);
            return item.Username;
        }); });
        // START_CUSTOM_CODE_observationModelComponentOnInit
        // END_CUSTOM_CODE_observationModelComponentOnInit
    };
    ObservationComponent.prototype.onConfirm = function () {
        var _this = this;
        this._service.post(this.item.data)
            .subscribe(function (data) {
            _this._notificationService.success("Successfully added item!");
            console.log(JSON.stringify(data));
        }, function (error) {
            _this._notificationService.error(JSON.stringify(error));
            console.log(JSON.stringify(error));
        });
        // START_CUSTOM_CODE_observationModelComponentOnConfirm
        // END_CUSTOM_CODE_observationModelComponentOnConfirm
    };
    ObservationComponent.prototype.onCancel = function () {
        // START_CUSTOM_CODE_observationModelComponentOnCancel
        // END_CUSTOM_CODE_observationModelComponentOnCancel
    };
    __decorate([
        core_1.ViewChild("hyperlink"), 
        __metadata('design:type', Object)
    ], ObservationComponent.prototype, "hyperlinkInst", void 0);
    __decorate([
        core_1.ViewChild("userDropDown"), 
        __metadata('design:type', Object)
    ], ObservationComponent.prototype, "userDropDownInst", void 0);
    __decorate([
        core_1.ViewChild("commentField"), 
        __metadata('design:type', Object)
    ], ObservationComponent.prototype, "commentFieldInst", void 0);
    ObservationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-observation",
            templateUrl: "observation.component.html"
        }), 
        __metadata('design:paramtypes', [shared.NotificationService, common.ObservationService])
    ], ObservationComponent);
    return ObservationComponent;
}());
exports.ObservationComponent = ObservationComponent;
//# sourceMappingURL=observation.component.js.map