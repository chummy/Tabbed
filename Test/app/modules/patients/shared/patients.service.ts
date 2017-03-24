import {
    Injectable
}
from "@angular/core";

import {
    Http, Headers, Response
}
from "@angular/http";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";

// START_CUSTOM_CODE_patientsModelServiceImports

// END_CUSTOM_CODE_patientsModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class PatientsService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_patientsModelServiceAdditionalProperties

    // END_CUSTOM_CODE_patientsModelServiceAdditionalProperties
    constructor(
        // START_CUSTOM_CODE_patientsModelServiceConstructorDependencies

        // END_CUSTOM_CODE_patientsModelServiceConstructorDependencies
        private _provider: shared.jsonProviderService,
        private _http: Http
    ) {
        // START_CUSTOM_CODE_patientsModelServiceConstructorMethods

        // END_CUSTOM_CODE_patientsModelServiceConstructorMethods
    }

    getAll(): Observable < any > {
        let res,
            headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(this._provider.url, {
            headers: headers
        });

    }

    // START_CUSTOM_CODE_patientsModelServiceAdditionalMethods

    // END_CUSTOM_CODE_patientsModelServiceAdditionalMethods
    /// service class

}