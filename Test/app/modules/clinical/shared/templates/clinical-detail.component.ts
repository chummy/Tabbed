import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-clinical-detail",
    templateUrl: "clinical-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClinicalDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_clinicalModelDetailComponentProperties

    // END_CUSTOM_CODE_clinicalModelDetailComponentProperties

    /// Add fields instance
@ViewChild("typeField") typeFieldInst;
@ViewChild("trackingNoField") trackingNoFieldInst;
@ViewChild("seqNoField") seqNoFieldInst;
@ViewChild("mpidfield") mpidfieldInst;
@ViewChild("dateField") dateFieldInst;
@ViewChild("codeField") codeFieldInst;
@ViewChild("descriptionField") descriptionFieldInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_clinicalModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_clinicalModelDetailComponentAdditionalMethods
}