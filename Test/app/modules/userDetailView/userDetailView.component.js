"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// START_CUSTOM_CODE_userDetailViewModelComponentImports
// END_CUSTOM_CODE_userDetailViewModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var UserDetailViewComponent = (function () {
    // START_CUSTOM_CODE_userDetailViewModelComponentProperties
    // END_CUSTOM_CODE_userDetailViewModelComponentProperties
    /// component additional properties
    function UserDetailViewComponent(
        // START_CUSTOM_CODE_userDetailViewModelComponentConstructorDependencies
        // END_CUSTOM_CODE_userDetailViewModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_userDetailViewModelComponentConstructorMethod
        // END_CUSTOM_CODE_userDetailViewModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(UserDetailViewComponent.prototype, "title", {
        get: function () {
            var result = "User Detail";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
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
    Object.defineProperty(UserDetailViewComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailViewComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailViewComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailViewComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserDetailViewComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_userDetailViewModelComponentOnInit
        // END_CUSTOM_CODE_userDetailViewModelComponentOnInit
    };
    UserDetailViewComponent.prototype.onLoad = function () {
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
            // START_CUSTOM_CODE_userDetailViewModelComponentCustomLoad
            // END_CUSTOM_CODE_userDetailViewModelComponentCustomLoad
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    UserDetailViewComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    UserDetailViewComponent.prototype.onAdd = function (args) {
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
    UserDetailViewComponent.prototype.onUpdate = function (args) {
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
    UserDetailViewComponent.prototype.onDelete = function (args) {
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
    UserDetailViewComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    UserDetailViewComponent.prototype.onNavigate = function (mode) {
        if (mode === shared.Modes.ADD) {
            this._currentItem$.next({
                id: "",
                data: {}
            });
        }
        this._mode = mode;
    };
    UserDetailViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-userDetailView",
            templateUrl: "userDetailView.component.html"
        }), 
        __metadata('design:paramtypes', [common.UserDetailViewService])
    ], UserDetailViewComponent);
    return UserDetailViewComponent;
}());
exports.UserDetailViewComponent = UserDetailViewComponent;
//# sourceMappingURL=userDetailView.component.js.map