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

// START_CUSTOM_CODE_usersModelComponentImports

// END_CUSTOM_CODE_usersModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-users",
    templateUrl: "users.component.html"
        /// component definitions
})

export class UsersComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Users";

        if (this._mode === shared.Modes.ADD) {

            result = "Add";

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

    // START_CUSTOM_CODE_usersModelComponentProperties

    // END_CUSTOM_CODE_usersModelComponentProperties

    /// component additional properties

    constructor(

        // START_CUSTOM_CODE_usersModelComponentConstructorDependencies

        // END_CUSTOM_CODE_usersModelComponentConstructorDependencies

        /// component constructor dependencies

        private _service: common.UsersService
    ) {

        this._mode = shared.Modes.LIST;

        this._items$ = new BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_usersModelComponentConstructorMethod

        // END_CUSTOM_CODE_usersModelComponentConstructorMethod

        /// component constructor method

    }

    ngOnInit() {
        this.onLoad();
        // START_CUSTOM_CODE_usersModelComponentOnInit

        // END_CUSTOM_CODE_usersModelComponentOnInit
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
                    // START_CUSTOM_CODE_usersModelComponentCustomLoad

                    // END_CUSTOM_CODE_usersModelComponentCustomLoad
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
    // START_CUSTOM_CODE_usersModelComponentAdditionalMethods

    // END_CUSTOM_CODE_usersModelComponentAdditionalMethods
    /// component additional methods

}