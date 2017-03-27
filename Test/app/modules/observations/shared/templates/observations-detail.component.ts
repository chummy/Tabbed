import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-observations-detail",
    templateUrl: "observations-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservationsDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_observationsModelDetailComponentProperties

    // END_CUSTOM_CODE_observationsModelDetailComponentProperties

    /// Add fields instance
@ViewChild("valueField") valueFieldInst;
@ViewChild("typeField") typeFieldInst;
@ViewChild("trackingNoField") trackingNoFieldInst;
@ViewChild("timeField") timeFieldInst;
@ViewChild("mpidfield") mpidfieldInst;
@ViewChild("idfield") idfieldInst;
@ViewChild("dateField") dateFieldInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_observationsModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_observationsModelDetailComponentAdditionalMethods
}