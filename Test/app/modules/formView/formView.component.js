"use strict";
var core_1 = require("@angular/core");
// START_CUSTOM_CODE_formViewModelComponentImports
// END_CUSTOM_CODE_formViewModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var FormViewComponent = (function () {
    /// placeholder for field
    /// component additional properties
    function FormViewComponent(
        // START_CUSTOM_CODE_formViewModelComponentConstructorDependencies
        // END_CUSTOM_CODE_formViewModelComponentConstructorDependencies
        _notificationService, 
        /// component constructor dependencies
        _service) {
        // START_CUSTOM_CODE_formViewModelComponentConstructorMethod
        this._notificationService = _notificationService;
        this._service = _service;
        // START_CUSTOM_CODE_formViewModelComponentProperties
        // END_CUSTOM_CODE_formViewModelComponentProperties
        this.item = {};
        // END_CUSTOM_CODE_formViewModelComponentConstructorMethod
        this.item.data = {};
        /// placeholder for component constructor
        /// component constructor method
    }
    Object.defineProperty(FormViewComponent.prototype, "title", {
        get: function () {
            var result = "Form";
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormViewComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    FormViewComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
        // START_CUSTOM_CODE_formViewModelComponentOnInit
        // END_CUSTOM_CODE_formViewModelComponentOnInit
    };
    FormViewComponent.prototype.onConfirm = function () {
        var _this = this;
        this._service.post(this.item.data)
            .subscribe(function (data) {
            _this._notificationService.success("Successfully added item!");
            console.log(JSON.stringify(data));
        }, function (error) {
            _this._notificationService.error(JSON.stringify(error));
            console.log(JSON.stringify(error));
        });
        // START_CUSTOM_CODE_formViewModelComponentOnConfirm
        // END_CUSTOM_CODE_formViewModelComponentOnConfirm
    };
    FormViewComponent.prototype.onCancel = function () {
        // START_CUSTOM_CODE_formViewModelComponentOnCancel
        // END_CUSTOM_CODE_formViewModelComponentOnCancel
    };
    __decorate([
        core_1.ViewChild("textField2"), 
        __metadata('design:type', Object)
    ], FormViewComponent.prototype, "textField2Inst", void 0);
    __decorate([
        core_1.ViewChild("textField1"), 
        __metadata('design:type', Object)
    ], FormViewComponent.prototype, "textField1Inst", void 0);
    __decorate([
        core_1.ViewChild("textField"), 
        __metadata('design:type', Object)
    ], FormViewComponent.prototype, "textFieldInst", void 0);
    FormViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-formView",
            templateUrl: "formView.component.html"
        }), 
        __metadata('design:paramtypes', [shared.NotificationService, common.FormViewService])
    ], FormViewComponent);
    return FormViewComponent;
}());
exports.FormViewComponent = FormViewComponent;
//# sourceMappingURL=formView.component.js.map