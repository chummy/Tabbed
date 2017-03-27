import {
    Component, ChangeDetectionStrategy, Input, Output, EventEmitter, NgZone, ViewChild
}
from "@angular/core";

import * as common from "../";
import * as shared from "../../../../shared";

@
Component({
    moduleId: module.id,
    selector: "ns-visit-detail",
    templateUrl: "visit-detail.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitDetailComponent {@
    Input() service: any;@
    Input() set current(value: shared.Item) {
        this.item = ( < any > Object).assign({}, value);
    }

    @
    Output() navigate = new EventEmitter();

    // START_CUSTOM_CODE_visitModelDetailComponentProperties

    // END_CUSTOM_CODE_visitModelDetailComponentProperties

    /// Add fields instance
@ViewChild("workTelField") workTelFieldInst;
@ViewChild("trackingNoField1") trackingNoField1Inst;
@ViewChild("surnameField1") surnameField1Inst;
@ViewChild("suburbField") suburbFieldInst;
@ViewChild("streetField") streetFieldInst;
@ViewChild("provinceField") provinceFieldInst;
@ViewChild("postalCodeField") postalCodeFieldInst;
@ViewChild("mobileField") mobileFieldInst;
@ViewChild("medicalAidPlanField") medicalAidPlanFieldInst;
@ViewChild("medicalAidNoField") medicalAidNoFieldInst;
@ViewChild("medicalAidField") medicalAidFieldInst;
@ViewChild("mPidfield") mPidfieldInst;
@ViewChild("locIdfield") locIdfieldInst;
@ViewChild("homeTelField") homeTelFieldInst;
@ViewChild("genderField1") genderField1Inst;
@ViewChild("garWorkTelField") garWorkTelFieldInst;
@ViewChild("garSurnameField") garSurnameFieldInst;
@ViewChild("garSuburbField") garSuburbFieldInst;
@ViewChild("garStreetField") garStreetFieldInst;
@ViewChild("garRelation") garRelationInst;
@ViewChild("garPcodeField") garPcodeFieldInst;
@ViewChild("garMobile") garMobileInst;
@ViewChild("garInitField") garInitFieldInst;
@ViewChild("garHomeTelField") garHomeTelFieldInst;
@ViewChild("garEmailField") garEmailFieldInst;
@ViewChild("garCityField") garCityFieldInst;
@ViewChild("firstnameField") firstnameFieldInst;
@ViewChild("emailField1") emailField1Inst;
@ViewChild("dischargedField") dischargedFieldInst;
@ViewChild("dischargeReasonField") dischargeReasonFieldInst;
@ViewChild("dependantNoField") dependantNoFieldInst;
@ViewChild("deceasedField") deceasedFieldInst;
@ViewChild("dObfield") dObfieldInst;
@ViewChild("cityField") cityFieldInst;
@ViewChild("bedField1") bedField1Inst;
@ViewChild("ageField1") ageField1Inst;
@ViewChild("admittedField") admittedFieldInst;
@ViewChild("accNoField") accNoFieldInst;
@ViewChild("idnoField") idnoFieldInst;
@ViewChild("hospitalField") hospitalFieldInst;

    item: shared.Item;

    onEdit() {
        this.navigate.emit();
    }

    /// partial additional methods

    // START_CUSTOM_CODE_visitModelDetailComponentAdditionalMethods

    // END_CUSTOM_CODE_visitModelDetailComponentAdditionalMethods
}