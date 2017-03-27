"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
// START_CUSTOM_CODE_observationsModelComponentImports
// END_CUSTOM_CODE_observationsModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var ObservationsComponent = (function () {
    // START_CUSTOM_CODE_observationsModelComponentProperties
    // END_CUSTOM_CODE_observationsModelComponentProperties
    /// component additional properties
    function ObservationsComponent(
        // START_CUSTOM_CODE_observationsModelComponentConstructorDependencies
        // END_CUSTOM_CODE_observationsModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_observationsModelComponentConstructorMethod
        // END_CUSTOM_CODE_observationsModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(ObservationsComponent.prototype, "title", {
        get: function () {
            var result = "Observation Details";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                result = "Edit";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                result = "Observation";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservationsComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservationsComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservationsComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservationsComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ObservationsComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_observationsModelComponentOnInit
        // END_CUSTOM_CODE_observationsModelComponentOnInit
    };
    ObservationsComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var arr = [];
            if (data.observations) {
                data.observations.forEach(function (item) {
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
    ObservationsComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    ObservationsComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    ObservationsComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return ObservationsComponent;
}());
ObservationsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-observations",
        templateUrl: "observations.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _a || Object, typeof (_b = (typeof common !== "undefined" && common).ObservationsService) === "function" && _b || Object])
], ObservationsComponent);
exports.ObservationsComponent = ObservationsComponent;
var _a, _b;
//# sourceMappingURL=observations.component.js.map