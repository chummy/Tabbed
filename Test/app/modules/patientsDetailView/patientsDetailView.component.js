"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// START_CUSTOM_CODE_patientsDetailViewModelComponentImports
// END_CUSTOM_CODE_patientsDetailViewModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var PatientsDetailViewComponent = (function () {
    // START_CUSTOM_CODE_patientsDetailViewModelComponentProperties
    // END_CUSTOM_CODE_patientsDetailViewModelComponentProperties
    /// component additional properties
    function PatientsDetailViewComponent(
        // START_CUSTOM_CODE_patientsDetailViewModelComponentConstructorDependencies
        // END_CUSTOM_CODE_patientsDetailViewModelComponentConstructorDependencies
        /// component constructor dependencies
        _service) {
        this._service = _service;
        this.modes = shared.Modes;
        this._mode = shared.Modes.LIST;
        this._items$ = new BehaviorSubject_1.BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject_1.BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_patientsDetailViewModelComponentConstructorMethod
        // END_CUSTOM_CODE_patientsDetailViewModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(PatientsDetailViewComponent.prototype, "title", {
        get: function () {
            var result = "My Patients";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                result = "Edit";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.NameField + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsDetailViewComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsDetailViewComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsDetailViewComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsDetailViewComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PatientsDetailViewComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_patientsDetailViewModelComponentOnInit
        // END_CUSTOM_CODE_patientsDetailViewModelComponentOnInit
    };
    PatientsDetailViewComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.get()
            .subscribe(function (data) {
            var arr = [];
            data.forEach(function (item) {
                var newItem = {
                    "id": item.Id,
                    "data": item
                };
                arr.push(newItem);
            });
            _this._items$.next(arr.slice());
            // START_CUSTOM_CODE_patientsDetailViewModelComponentCustomLoad
            // END_CUSTOM_CODE_patientsDetailViewModelComponentCustomLoad
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PatientsDetailViewComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    PatientsDetailViewComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    PatientsDetailViewComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return PatientsDetailViewComponent;
}());
PatientsDetailViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-patientsDetailView",
        templateUrl: "patientsDetailView.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof common !== "undefined" && common).PatientsDetailViewService) === "function" && _a || Object])
], PatientsDetailViewComponent);
exports.PatientsDetailViewComponent = PatientsDetailViewComponent;
var _a;
//# sourceMappingURL=patientsDetailView.component.js.map