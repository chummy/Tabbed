import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-login-sign-up",
    templateUrl: "login-sign-up.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginSignUpComponent {@
    Input() set user(value: shared.User) {
        this.selectedUser = ( < any > Object).assign({}, value);
    }

    @
    Output() signup = new EventEmitter();@
    Output() navigate = new EventEmitter();

    selectedUser: shared.User;

    constructor(
        private _notificationService: shared.NotificationService
    ) {}

    onSignUp() {
        if (!this.selectedUser.username || !this.selectedUser.password) {
            this._notificationService.error("Missing credentials.");

            return;
        }

        this.signup.emit({
            user: this.selectedUser
        });
    }

    onNavigate() {
        this.navigate.emit();
    }
}