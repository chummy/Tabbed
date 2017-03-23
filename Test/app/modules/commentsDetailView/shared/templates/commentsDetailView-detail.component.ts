import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-commentsDetailView-detail",
    templateUrl: "commentsDetailView-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsDetailViewDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_commentsDetailViewModelDetailComponentProperties

    // END_CUSTOM_CODE_commentsDetailViewModelDetailComponentProperties

    /// Add fields instance

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_commentsDetailViewModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_commentsDetailViewModelDetailComponentAdditionalMethods
}