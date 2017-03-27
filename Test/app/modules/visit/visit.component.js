"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
// START_CUSTOM_CODE_visitModelComponentImports
// END_CUSTOM_CODE_visitModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var VisitComponent = (function () {
    // START_CUSTOM_CODE_visitModelComponentProperties
    // END_CUSTOM_CODE_visitModelComponentProperties
    /// component additional properties
    function VisitComponent(
        // START_CUSTOM_CODE_visitModelComponentConstructorDependencies
        // END_CUSTOM_CODE_visitModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_visitModelComponentConstructorMethod
        // END_CUSTOM_CODE_visitModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(VisitComponent.prototype, "title", {
        get: function () {
            var result = "Visit Details";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                result = "Edit";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.mPIDField + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    VisitComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_visitModelComponentOnInit
        // END_CUSTOM_CODE_visitModelComponentOnInit
    };
    VisitComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var arr = [];
            if (data.visit) {
                data.visit.forEach(function (item) {
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
    VisitComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    VisitComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    VisitComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return VisitComponent;
}());
VisitComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-visit",
        templateUrl: "visit.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _a || Object, typeof (_b = (typeof common !== "undefined" && common).VisitService) === "function" && _b || Object])
], VisitComponent);
exports.VisitComponent = VisitComponent;
var _a, _b;
//# sourceMappingURL=visit.component.js.map