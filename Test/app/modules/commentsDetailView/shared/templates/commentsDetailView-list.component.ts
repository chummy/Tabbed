import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-commentsDetailView-list",
    templateUrl: "commentsDetailView-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsDetailViewListComponent {@
    Input() service: any;@
    Input() items: any;

    @
    Output() select = new EventEmitter();@
    Output() navigate = new EventEmitter();

    /// Add fields instance

    onSelect(item: shared.Item) {
        this.select.emit({
            item: item
        });
    }

    onAdd() {
        this.navigate.emit();
    }

    /// partial additional methods
}