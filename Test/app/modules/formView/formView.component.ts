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
// START_CUSTOM_CODE_formViewModelComponentImports

// END_CUSTOM_CODE_formViewModelComponentImports
/// component additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-formView",
    templateUrl: "formView.component.html"
        /// component definitions
})

export class FormViewComponent

implements OnInit
/// component inheritance

{
    get title() {
        let result: string = "Form";

        /// component custom title

        return result;
    }

    // START_CUSTOM_CODE_formViewModelComponentProperties

    // END_CUSTOM_CODE_formViewModelComponentProperties

    item: any = {};

    get service() {
            return this._service;
        }
        /// Add fields instance
@ViewChild("textField2") textField2Inst;
@ViewChild("textField1") textField1Inst;
@ViewChild("textField") textFieldInst;
        /// placeholder for field
        /// component additional properties

    constructor(

        // START_CUSTOM_CODE_formViewModelComponentConstructorDependencies

        // END_CUSTOM_CODE_formViewModelComponentConstructorDependencies

        private _notificationService: shared.NotificationService,

        /// component constructor dependencies

        private _service: common.FormViewService
    ) {

        // START_CUSTOM_CODE_formViewModelComponentConstructorMethod

        // END_CUSTOM_CODE_formViewModelComponentConstructorMethod

        this.item.data = {};

        /// placeholder for component constructor
        /// component constructor method

    }

    ngOnInit() {

        /// placeholder for component init
        // START_CUSTOM_CODE_formViewModelComponentOnInit

        // END_CUSTOM_CODE_formViewModelComponentOnInit
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

        // START_CUSTOM_CODE_formViewModelComponentOnConfirm

        // END_CUSTOM_CODE_formViewModelComponentOnConfirm
    }

    onCancel() {
        // START_CUSTOM_CODE_formViewModelComponentOnCancel

        // END_CUSTOM_CODE_formViewModelComponentOnCancel
    }

    /// partial additional methods
    // START_CUSTOM_CODE_formViewModelComponentAdditionalMethods

    // END_CUSTOM_CODE_formViewModelComponentAdditionalMethods
    /// component additional methods

}