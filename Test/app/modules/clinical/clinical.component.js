"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
// START_CUSTOM_CODE_clinicalModelComponentImports
// END_CUSTOM_CODE_clinicalModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var ClinicalComponent = (function () {
    // START_CUSTOM_CODE_clinicalModelComponentProperties
    // END_CUSTOM_CODE_clinicalModelComponentProperties
    /// component additional properties
    function ClinicalComponent(
        // START_CUSTOM_CODE_clinicalModelComponentConstructorDependencies
        // END_CUSTOM_CODE_clinicalModelComponentConstructorDependencies
        _notificationService, 
        /// component constructor dependencies
        _service) {
        this._notificationService = _notificationService;
        this._service = _service;
        this.modes = shared.Modes;
        this._mode = shared.Modes.LIST;
        this._items$ = new BehaviorSubject_1.BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject_1.BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_clinicalModelComponentConstructorMethod
        // END_CUSTOM_CODE_clinicalModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(ClinicalComponent.prototype, "title", {
        get: function () {
            var result = "Clinical Details";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                result = "Edit";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.MPIDField + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClinicalComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ClinicalComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_clinicalModelComponentOnInit
        // END_CUSTOM_CODE_clinicalModelComponentOnInit
    };
    ClinicalComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var arr = [];
            if (data.clinical) {
                data.clinical.forEach(function (item) {
                    var newItem = {
                        "id": item.Id,
                        "data": item
                    };
                    arr.push(newItem);
                });
                _this._items$.next(arr.slice());
            }
            else {
                _this._notificationService.error('Empty JSON data source!');
            }
        }, function (error) {
            _this._notificationService.error('Unable to load JSON data source!');
        });
    };
    ClinicalComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    ClinicalComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    ClinicalComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return ClinicalComponent;
}());
ClinicalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-clinical",
        templateUrl: "clinical.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _a || Object, typeof (_b = (typeof common !== "undefined" && common).ClinicalService) === "function" && _b || Object])
], ClinicalComponent);
exports.ClinicalComponent = ClinicalComponent;
var _a, _b;
//# sourceMappingURL=clinical.component.js.map