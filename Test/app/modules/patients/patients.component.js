"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
// START_CUSTOM_CODE_patientsModelComponentImports
// END_CUSTOM_CODE_patientsModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var PatientsComponent = (function () {
    // START_CUSTOM_CODE_patientsModelComponentProperties
    // END_CUSTOM_CODE_patientsModelComponentProperties
    /// component additional properties
    function PatientsComponent(
        // START_CUSTOM_CODE_patientsModelComponentConstructorDependencies
        // END_CUSTOM_CODE_patientsModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_patientsModelComponentConstructorMethod
        // END_CUSTOM_CODE_patientsModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(PatientsComponent.prototype, "title", {
        get: function () {
            var result = "Patients";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                var current = this._currentItem$.getValue();
                result = current.data.PatMPIDField + "\0";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.PatMPIDField + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientsComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PatientsComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_patientsModelComponentOnInit
        // END_CUSTOM_CODE_patientsModelComponentOnInit
    };
    PatientsComponent.prototype.onLoad = function () {
        var _this = this;
        this._service.getAll()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var arr = [];
            if (data.Patient) {
                data.Patient.forEach(function (item) {
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
    PatientsComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    PatientsComponent.prototype.onAdd = function (args) {
        var _this = this;
        this._service.post(args.item.data)
            .subscribe(function (data) {
            var arr = _this._items$.getValue();
            if (!data.Id) {
                return;
            }
            args.item.id = data.Id;
            arr.push(args.item);
            _this._items$.next(arr.slice());
            _this._currentItem$.next({
                id: "",
                data: {}
            });
            _this.onNavigate(shared.Modes.LIST);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PatientsComponent.prototype.onUpdate = function (args) {
        var _this = this;
        this._service.put(args.item.data)
            .subscribe(function (data) {
            var arr = _this._items$.getValue();
            arr.forEach(function (itm, idx) {
                if (itm.id === args.item.id) {
                    arr[idx] = args.item;
                }
            });
            _this._items$.next(arr.slice());
            _this._currentItem$.next(args.item);
            _this.onNavigate(shared.Modes.DETAIL);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PatientsComponent.prototype.onDelete = function (args) {
        var _this = this;
        this._service.delete(args.item.data)
            .subscribe(function (data) {
            var arr = _this._items$.getValue();
            arr.forEach(function (itm, idx) {
                if (itm.id === args.item.id) {
                    arr.splice(idx, 1);
                }
            });
            _this._items$.next(arr.slice());
            _this._currentItem$.next({
                id: "",
                data: {}
            });
            _this.onNavigate(shared.Modes.LIST);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    PatientsComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    PatientsComponent.prototype.onNavigate = function (mode) {
        if (mode === shared.Modes.ADD) {
            this._currentItem$.next({
                id: "",
                data: {}
            });
        }
        this._mode = mode;
    };
    PatientsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patients",
            templateUrl: "patients.component.html"
        }), 
        __metadata('design:paramtypes', [shared.NotificationService, common.PatientsService])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=patients.component.js.map