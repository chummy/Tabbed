import {
    Injectable
}
from '@angular/core';

@
Injectable()

export class jsonProviderService {
    private _url: any;

    constructor() {
        this._url = 'http://emsuat01/Services/new/api/PatientLog/ListDoctorPatients?docID=MP0460982&amp;patType=A';
    }

    get url() {
        return this._url;
    }
}

// START_CUSTOM_CODE_jsonProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_jsonProvider