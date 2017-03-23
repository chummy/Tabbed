import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-patientsDetailView-detail",
    templateUrl: "patientsDetailView-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsDetailViewDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_patientsDetailViewModelDetailComponentProperties

    // END_CUSTOM_CODE_patientsDetailViewModelDetailComponentProperties

    /// Add fields instance
@ViewChild("textBlock") textBlockInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_patientsDetailViewModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_patientsDetailViewModelDetailComponentAdditionalMethods
}