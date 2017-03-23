import {
    Component

    , OnInit
    /// component core modules

}
from "@angular/core";

import {
    BehaviorSubject
}
from "rxjs/BehaviorSubject";

// START_CUSTOM_CODE_userDetailViewModelComponentImports

// END_CUSTOM_CODE_userDetailViewModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-userDetailView",
    templateUrl: "userDetailView.component.html"
        /// component definitions
})

export class UserDetailViewComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "User Detail";

        if (this._mode === shared.Modes.ADD) {

            result = "Create";

        } else if (this._mode === shared.Modes.EDIT) {

            let current: shared.Item = this._currentItem$.getValue();

            result = current.data.DisplayName + "\0";

        } else if (this._mode === shared.Modes.DETAIL) {

            let current: shared.Item = this._currentItem$.getValue();

            result = current.data.DisplayName + "\0";

        }
        /// component custom title

        return result;
    }

    private _items$: BehaviorSubject < shared.Item[] > ;
    private _currentItem$: BehaviorSubject < shared.Item > ;
    private _mode: shared.Modes;

    modes = shared.Modes;

    get service() {
        return this._service;
    }

    get mode() {
        return this._mode;
    }

    get items$() {
        return this._items$.asObservable();
    }

    get currentItem$() {
        return this._currentItem$.asObservable();
    }

    // START_CUSTOM_CODE_userDetailViewModelComponentProperties

    // END_CUSTOM_CODE_userDetailViewModelComponentProperties

    /// component additional properties

    constructor(

        // START_CUSTOM_CODE_userDetailViewModelComponentConstructorDependencies

        // END_CUSTOM_CODE_userDetailViewModelComponentConstructorDependencies

        /// component constructor dependencies

        private _service: common.UserDetailViewService
    ) {

        this._mode = shared.Modes.LIST;

        this._items$ = new BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_userDetailViewModelComponentConstructorMethod

        // END_CUSTOM_CODE_userDetailViewModelComponentConstructorMethod

        /// component constructor method

    }

    ngOnInit() {
        this.onLoad();
        // START_CUSTOM_CODE_userDetailViewModelComponentOnInit

        // END_CUSTOM_CODE_userDetailViewModelComponentOnInit
    }

    onLoad() {

        this._service.get()
            .subscribe(
                (data) => {
                    let arr: shared.Item[] = [];

                    data.forEach((item) => {
                        let newItem: shared.Item = {
                            "id": item.Id,
                            "data": item
                        };

                        arr.push(newItem);
                    });

                    this._items$.next([...arr]);
                    // START_CUSTOM_CODE_userDetailViewModelComponentCustomLoad

                    // END_CUSTOM_CODE_userDetailViewModelComponentCustomLoad
                }, (error) => {
                    console.log(JSON.stringify(error));
                }
            );

    }

    onSelect(args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    }

    onAdd(args) {

        this._service.post(args.item.data)

        .subscribe(
            (data) => {
                let arr: shared.Item[] = this._items$.getValue();

                if (!data.Id) {
                    return;
                }
                args.item.id = data.Id;

                arr.push(args.item);

                this._items$.next([...arr]);
                this._currentItem$.next({
                    id: "",
                    data: {}
                });

                this.onNavigate(shared.Modes.LIST);

            }, (error) => {
                console.log(JSON.stringify(error));
            }
        );
    }

    onUpdate(args) {
        this._service.put(args.item.data)
            .subscribe(
                (data) => {
                    let arr: shared.Item[] = this._items$.getValue();

                    arr.forEach((itm, idx) => {
                        if (itm.id === args.item.id) {
                            arr[idx] = args.item;
                        }
                    });

                    this._items$.next([...arr]);
                    this._currentItem$.next(args.item);

                    this.onNavigate(shared.Modes.DETAIL);
                }, (error) => {
                    console.log(JSON.stringify(error));
                }
            );
    }

    onDelete(args) {
        this._service.delete(args.item.data)
            .subscribe(
                (data) => {
                    let arr: shared.Item[] = this._items$.getValue();

                    arr.forEach((itm, idx) => {
                        if (itm.id === args.item.id) {
                            arr.splice(idx, 1);
                        }
                    });

                    this._items$.next([...arr]);
                    this._currentItem$.next({
                        id: "",
                        data: {}
                    });

                    this.onNavigate(shared.Modes.LIST);

                }, (error) => {
                    console.log(JSON.stringify(error));
                }
            );
    }

    onNavigateBack() {

        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);

    }

    onNavigate(mode: shared.Modes) {

        if (mode === shared.Modes.ADD) {
            this._currentItem$.next({
                id: "",
                data: {}
            });
        }

        this._mode = mode;
    }
    // START_CUSTOM_CODE_userDetailViewModelComponentAdditionalMethods

    // END_CUSTOM_CODE_userDetailViewModelComponentAdditionalMethods
    /// component additional methods

}