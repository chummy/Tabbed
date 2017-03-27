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

import "rxjs/add/operator/map";

// START_CUSTOM_CODE_visitModelComponentImports

// END_CUSTOM_CODE_visitModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-visit",
    templateUrl: "visit.component.html"
        /// component definitions
})

export class VisitComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Visit Details";

        if (this._mode === shared.Modes.ADD) {

            result = "Create";

        } else if (this._mode === shared.Modes.EDIT) {

            result = "Edit";

        } else if (this._mode === shared.Modes.DETAIL) {

            let current: shared.Item = this._currentItem$.getValue();

            result = current.data.mPIDField + "\0";

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

    // START_CUSTOM_CODE_visitModelComponentProperties

    // END_CUSTOM_CODE_visitModelComponentProperties

    /// component additional properties

    constructor(

        // START_CUSTOM_CODE_visitModelComponentConstructorDependencies

        // END_CUSTOM_CODE_visitModelComponentConstructorDependencies

        private _notificationService: shared.NotificationService,

        /// component constructor dependencies

        private _service: common.VisitService
    ) {

        this._mode = shared.Modes.LIST;

        this._items$ = new BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_visitModelComponentConstructorMethod

        // END_CUSTOM_CODE_visitModelComponentConstructorMethod

        /// component constructor method

    }

    ngOnInit() {
        this.onLoad();
        // START_CUSTOM_CODE_visitModelComponentOnInit

        // END_CUSTOM_CODE_visitModelComponentOnInit
    }

    onLoad() {

        this._service.getAll()
            .map(res => res.json())
            .subscribe(
                (data) => {
                    let arr: shared.Item[] = [];
                    if (data.visit) {
                        data.visit.forEach(item => {
                            let newItem: shared.Item = {
                                "id": item.Id,
                                "data": item
                            };

                            arr.push(newItem);
                        });
                        this._items$.next([...arr]);
                        // START_CUSTOM_CODE_visitModelComponentCustomLoad

                        // END_CUSTOM_CODE_visitModelComponentCustomLoad
                    } else {
                        this._notificationService.error('Empty JSON data source!');
                    }

                }, (error) => {
                    this._notificationService.error('Unable to load JSON data source!');
                }
            );

    }

    onSelect(args) {
        this._currentItem$.next(args.item);
        this.onNavigate(shared.Modes.DETAIL);
    }

    onNavigateBack() {

        this.onNavigate(this._mode === shared.Modes.EDIT ? shared.Modes.DETAIL : shared.Modes.LIST);

    }

    onNavigate(mode: shared.Modes) {

        this._mode = mode;
    }
    // START_CUSTOM_CODE_visitModelComponentAdditionalMethods

    // END_CUSTOM_CODE_visitModelComponentAdditionalMethods
    /// component additional methods

}