import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-patients-detail",
    templateUrl: "patients-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_patientsModelDetailComponentProperties

    // END_CUSTOM_CODE_patientsModelDetailComponentProperties

    /// Add fields instance
@ViewChild("wardField") wardFieldInst;
@ViewChild("surnameField") surnameFieldInst;
@ViewChild("patientNoField") patientNoFieldInst;
@ViewChild("obsNewField") obsNewFieldInst;
@ViewChild("obsCntField") obsCntFieldInst;
@ViewChild("nameField") nameFieldInst;
@ViewChild("labNewField") labNewFieldInst;
@ViewChild("labCntField") labCntFieldInst;
@ViewChild("hospitalField") hospitalFieldInst;
@ViewChild("genderField") genderFieldInst;
@ViewChild("evtNewField") evtNewFieldInst;
@ViewChild("evtCntField") evtCntFieldInst;
@ViewChild("doctorIdfield") doctorIdfieldInst;
@ViewChild("clnNewField") clnNewFieldInst;
@ViewChild("clnCntField") clnCntFieldInst;
@ViewChild("bedField") bedFieldInst;
@ViewChild("ageField") ageFieldInst;
@ViewChild("trackingNoField") trackingNoFieldInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_patientsModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_patientsModelDetailComponentAdditionalMethods
}