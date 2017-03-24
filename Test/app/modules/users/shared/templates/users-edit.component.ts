import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnInit
}
from "@angular/core";
import {
    Observable
}
from "rxjs/Observable";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-users-edit",
    templateUrl: "users-edit.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersEditComponent implements OnInit {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() update = new EventEmitter();@
    Output() delete = new EventEmitter();

    /// Add fields instance
@ViewChild("passwordField") passwordFieldInst;
@ViewChild("emailField") emailFieldInst;
@ViewChild("usernameField") usernameFieldInst;

    item: shared.Item;

    /// placeholder for field

    constructor() {
        /// placeholder for component constructor
    }

    ngOnInit() {
        /// placeholder for component init
    }

    onUpdate() {
        this.update.emit({
            item: this.item
        });
    }

    onDelete() {
        this.delete.emit({
            item: this.item
        });
    }

    /// partial additional methods
}