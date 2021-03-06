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
    selector: "ns-users-add",
    templateUrl: "users-add.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersAddComponent implements OnInit {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() add = new EventEmitter();

    /// Add fields instance
@ViewChild("identityField") identityFieldInst;
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

    onAdd() {
        this.add.emit({
            item: this.item
        });
    }

    /// partial additional methods
}