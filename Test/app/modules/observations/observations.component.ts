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

// START_CUSTOM_CODE_observationsModelComponentImports

// END_CUSTOM_CODE_observationsModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-observations",
    templateUrl: "observations.component.html"
        /// component definitions
})

export class ObservationsComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Observation Details";

        if (this._mode === shared.Modes.ADD) {

            result = "Create";

        } else if (this._mode === shared.Modes.EDIT) {

            result = "Edit";

        } else if (this._mode === shared.Modes.DETAIL) {

            result = "Observation";

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

    // START_CUSTOM_CODE_observationsModelComponentProperties

    // END_CUSTOM_CODE_observationsModelComponentProperties

    /// component additional properties

    constructor(

        // START_CUSTOM_CODE_observationsModelComponentConstructorDependencies

        // END_CUSTOM_CODE_observationsModelComponentConstructorDependencies

        private _notificationService: shared.NotificationService,

        /// component constructor dependencies

        private _service: common.ObservationsService
    ) {

        this._mode = shared.Modes.LIST;

        this._items$ = new BehaviorSubject([]);
        this._currentItem$ = new BehaviorSubject({
            id: "",
            data: {}
        });
        // START_CUSTOM_CODE_observationsModelComponentConstructorMethod

        // END_CUSTOM_CODE_observationsModelComponentConstructorMethod

        /// component constructor method

    }

    ngOnInit() {
        this.onLoad();
        // START_CUSTOM_CODE_observationsModelComponentOnInit

        // END_CUSTOM_CODE_observationsModelComponentOnInit
    }

    onLoad() {

        this._service.getAll()
            .map(res => res.json())
            .subscribe(
                (data) => {
                    let arr: shared.Item[] = [];
                    if (data.observations) {
                        data.observations.forEach(item => {
                            let newItem: shared.Item = {
                                "id": item.Id,
                                "data": item
                            };

                            arr.push(newItem);
                        });
                        this._items$.next([...arr]);
                        // START_CUSTOM_CODE_observationsModelComponentCustomLoad

                        // END_CUSTOM_CODE_observationsModelComponentCustomLoad
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
    // START_CUSTOM_CODE_observationsModelComponentAdditionalMethods

    // END_CUSTOM_CODE_observationsModelComponentAdditionalMethods
    /// component additional methods

}