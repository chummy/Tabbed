import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-activities-detail",
    templateUrl: "activities-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_activitiesModelDetailComponentProperties

    // END_CUSTOM_CODE_activitiesModelDetailComponentProperties

    /// Add fields instance
@ViewChild("trackingNoField") trackingNoFieldInst;
@ViewChild("timeField") timeFieldInst;
@ViewChild("mpid") mpidInst;
@ViewChild("dateField") dateFieldInst;
@ViewChild("activityField") activityFieldInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_activitiesModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_activitiesModelDetailComponentAdditionalMethods
}