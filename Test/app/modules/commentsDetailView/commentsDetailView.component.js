"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// START_CUSTOM_CODE_commentsDetailViewModelComponentImports
// END_CUSTOM_CODE_commentsDetailViewModelComponentImports
/// component additional imports
var common = require("./shared");
var shared = require("../../shared");
var CommentsDetailViewComponent = (function () {
    // START_CUSTOM_CODE_commentsDetailViewModelComponentProperties
    // END_CUSTOM_CODE_commentsDetailViewModelComponentProperties
    /// component additional properties
    function CommentsDetailViewComponent(
        // START_CUSTOM_CODE_commentsDetailViewModelComponentConstructorDependencies
        // END_CUSTOM_CODE_commentsDetailViewModelComponentConstructorDependencies
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
        // START_CUSTOM_CODE_commentsDetailViewModelComponentConstructorMethod
        // END_CUSTOM_CODE_commentsDetailViewModelComponentConstructorMethod
        /// component constructor method
    }
    Object.defineProperty(CommentsDetailViewComponent.prototype, "title", {
        get: function () {
            var result = "Comments Detail";
            if (this._mode === shared.Modes.ADD) {
                result = "Create";
            }
            else if (this._mode === shared.Modes.EDIT) {
                result = "Edit";
            }
            else if (this._mode === shared.Modes.DETAIL) {
                var current = this._currentItem$.getValue();
                result = current.data.Text + "\0";
            }
            /// component custom title
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDetailViewComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDetailViewComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDetailViewComponent.prototype, "items$", {
        get: function () {
            return this._items$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommentsDetailViewComponent.prototype, "currentItem$", {
        get: function () {
            return this._currentItem$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CommentsDetailViewComponent.prototype.ngOnInit = function () {
        this.onLoad();
        // START_CUSTOM_CODE_commentsDetailViewModelComponentOnInit
        // END_CUSTOM_CODE_commentsDetailViewModelComponentOnInit
    };
    CommentsDetailViewComponent.prototype.onLoad = function () {
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
            // START_CUSTOM_CODE_commentsDetailViewModelComponentCustomLoad
            // END_CUSTOM_CODE_commentsDetailViewModelComponentCustomLoad
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    CommentsDetailViewComponent.prototype.onSelect = function (args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    };
    CommentsDetailViewComponent.prototype.onNavigateBack = function () {
        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);
    };
    CommentsDetailViewComponent.prototype.onNavigate = function (mode) {
        this._mode = mode;
    };
    return CommentsDetailViewComponent;
}());
CommentsDetailViewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-commentsDetailView",
        templateUrl: "commentsDetailView.component.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof common !== "undefined" && common).CommentsDetailViewService) === "function" && _a || Object])
], CommentsDetailViewComponent);
exports.CommentsDetailViewComponent = CommentsDetailViewComponent;
var _a;
//# sourceMappingURL=commentsDetailView.component.js.map