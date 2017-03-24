"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// START_CUSTOM_CODE_usersModelComponentImports
// END_CUSTOM_CODE_usersModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var UsersComponent = (function () {
    // START_CUSTOM_CODE_usersModelComponentProperties
    // END_CUSTOM_CODE_usersModelComponentProperties
    /// component additional properties
    function UsersComponent(
        // START_CUSTOM_CODE_usersModelComponentConstructorDependencies
        // END_CUSTOM_CODE_usersModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_usersModelComponentConstructorMethod
        // END_CUSTOM_CODE_usersModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(UsersComponent.prototype, "title", {
        get: function () {
            var result = "Users";
            if (this._mode === shared.Modes.ADD) {
                result = "Add";
            }
            else if (this._mode === shared.Modes.EDIT) {
                var current = this._currentItem$.getValue();
                result = current.data.DisplayName + "\0";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.DisplayName + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_usersModelComponentOnInit
        // END_CUSTOM_CODE_usersModelComponentOnInit
    };
    UsersComponent.prototype.onLoad = function () {
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
            // START_CUSTOM_CODE_usersModelComponentCustomLoad
            // END_CUSTOM_CODE_usersModelComponentCustomLoad
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    UsersComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    UsersComponent.prototype.onAdd = function (args) {
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
    UsersComponent.prototype.onUpdate = function (args) {
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
    UsersComponent.prototype.onDelete = function (args) {
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
    UsersComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    UsersComponent.prototype.onNavigate = function (mode) {
        if (mode === shared.Modes.ADD) {
            this._currentItem$.next({
                id: "",
                data: {}
            });
        }
        this._mode = mode;
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-users",
            templateUrl: "users.component.html"
        }), 
        __metadata('design:paramtypes', [common.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map