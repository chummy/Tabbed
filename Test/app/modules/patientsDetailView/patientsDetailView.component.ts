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

// START_CUSTOM_CODE_patientsDetailViewModelComponentImports

// END_CUSTOM_CODE_patientsDetailViewModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-patientsDetailView",
    templateUrl: "patientsDetailView.component.html"
        /// component definitions
})

export class PatientsDetailViewComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "My Patients";

        if (this._mode === shared.Modes.ADD) {

            result = "Create";

        } else if (this._mode === shared.Modes.EDIT) {

            result = "Edit";

        } else if (this._mode === shared.Modes.DETAIL) {

            let current: shared.Item = this._currentItem$.getValue();

            result = current.data.NameField + "\0";

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

    // START_CUSTOM_CODE_patientsDetailViewModelComponentProperties

    // END_CUSTOM_CODE_patientsDetailViewModelComponentProperties

    /// component additional properties

    constructor(

        // START_CUSTOM_CODE_patientsDetailViewModelComponentConstructorDependencies

        // END_CUSTOM_CODE_patientsDetailViewModelComponentConstructorDependencies

        /// component constructor dependencies

        private _service: common.PatientsDetailViewService
    ) {

        this._mode = shared.Modes.LIST;

        this._items$ = new BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_patientsDetailViewModelComponentConstructorMethod

        // END_CUSTOM_CODE_patientsDetailViewModelComponentConstructorMethod

        /// component constructor method

    }

    ngOnInit() {
        this.onLoad();
        // START_CUSTOM_CODE_patientsDetailViewModelComponentOnInit

        // END_CUSTOM_CODE_patientsDetailViewModelComponentOnInit
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
                    // START_CUSTOM_CODE_patientsDetailViewModelComponentCustomLoad

                    // END_CUSTOM_CODE_patientsDetailViewModelComponentCustomLoad
                }, (error) => {
                    console.log(JSON.stringify(error));
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
    // START_CUSTOM_CODE_patientsDetailViewModelComponentAdditionalMethods

    // END_CUSTOM_CODE_patientsDetailViewModelComponentAdditionalMethods
    /// component additional methods

}