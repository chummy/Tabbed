"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
// START_CUSTOM_CODE_activitiesModelComponentImports
// END_CUSTOM_CODE_activitiesModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var ActivitiesComponent = (function () {
    // START_CUSTOM_CODE_activitiesModelComponentProperties
    // END_CUSTOM_CODE_activitiesModelComponentProperties
    /// component additional properties
    function ActivitiesComponent(
        // START_CUSTOM_CODE_activitiesModelComponentConstructorDependencies
        // END_CUSTOM_CODE_activitiesModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_activitiesModelComponentConstructorMethod
        // END_CUSTOM_CODE_activitiesModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(ActivitiesComponent.prototype, "title", {
        get: function () {
            var result = "Activity Details";
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
    Object.defineProperty(ActivitiesComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivitiesComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivitiesComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivitiesComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_activitiesModelComponentOnInit
        // END_CUSTOM_CODE_activitiesModelComponentOnInit
    };
    ActivitiesComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var arr = [];
            if (data.activities) {
                data.activities.forEach(function (item) {
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
    ActivitiesComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    ActivitiesComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    ActivitiesComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-activities",
        templateUrl: "activities.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _a || Object, typeof (_b = (typeof common !== "undefined" && common).ActivitiesService) === "function" && _b || Object])
], ActivitiesComponent);
exports.ActivitiesComponent = ActivitiesComponent;
var _a, _b;
//# sourceMappingURL=activities.component.js.map