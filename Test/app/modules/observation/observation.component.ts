import {
    Component

    , ViewChild, OnInit
    /// component core modules

}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
// START_CUSTOM_CODE_observationModelComponentImports

// END_CUSTOM_CODE_observationModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-observation",
    templateUrl: "observation.component.html"
        /// component definitions
})

export class ObservationComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Observation";

        /// component custom title

        return result;
    }

    // START_CUSTOM_CODE_observationModelComponentProperties

    // END_CUSTOM_CODE_observationModelComponentProperties

    item: any = {};

    get service() {
            return this._service;
        }
        /// Add fields instance
@ViewChild("hyperlink") hyperlinkInst;
@ViewChild("userDropDown") userDropDownInst;
@ViewChild("commentField") commentFieldInst;
        /// placeholder for field
userDropDownDropDown: any = new Object();

            onSelectedPickerChanged(picker, dropdown, dataBind) {
                this.item.data[dataBind] = this[dropdown].itemsIndicators[picker.selectedIndex];
            }
        /// component additional properties

    constructor(

        // START_CUSTOM_CODE_observationModelComponentConstructorDependencies

        // END_CUSTOM_CODE_observationModelComponentConstructorDependencies

        private _notificationService: shared.NotificationService,

        /// component constructor dependencies

        private _service: common.ObservationService
    ) {

        // START_CUSTOM_CODE_observationModelComponentConstructorMethod

        // END_CUSTOM_CODE_observationModelComponentConstructorMethod

        this.item.data = {};

        /// placeholder for component constructor

        this.userDropDownDropDown.items$ = new Observable(Object);
        this.userDropDownDropDown.itemsIndicators = new Array<Object>();
        
        /// component constructor method

    }

    ngOnInit() {

        /// placeholder for component init

            this.userDropDownDropDown.items$ = this.service.getDbCollection('Users').map(data => data.map((item, index) => {
            if (this.item.data.UserId === item.Id) {
                this.userDropDownDropDown.index = index;
            }

            this.userDropDownDropDown.itemsIndicators.push(item.Id);
            return item.Username ;
        }));
        // START_CUSTOM_CODE_observationModelComponentOnInit

        // END_CUSTOM_CODE_observationModelComponentOnInit
    }

    onConfirm() {

        this._service.post(this.item.data)
            .subscribe(
                (data) => {
                    this._notificationService.success("Successfully added item!");
                    console.log(JSON.stringify(data));
                }, (error) => {
                    this._notificationService.error(JSON.stringify(error));
                    console.log(JSON.stringify(error));
                }
            );

        // START_CUSTOM_CODE_observationModelComponentOnConfirm

        // END_CUSTOM_CODE_observationModelComponentOnConfirm
    }

    onCancel() {
        // START_CUSTOM_CODE_observationModelComponentOnCancel

        // END_CUSTOM_CODE_observationModelComponentOnCancel
    }

    /// partial additional methods
    // START_CUSTOM_CODE_observationModelComponentAdditionalMethods

    // END_CUSTOM_CODE_observationModelComponentAdditionalMethods
    /// component additional methods

}