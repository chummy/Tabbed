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

// START_CUSTOM_CODE_clinicalModelServiceImports

// END_CUSTOM_CODE_clinicalModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class ClinicalService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_clinicalModelServiceAdditionalProperties

    // END_CUSTOM_CODE_clinicalModelServiceAdditionalProperties
    constructor(
        // START_CUSTOM_CODE_clinicalModelServiceConstructorDependencies

        // END_CUSTOM_CODE_clinicalModelServiceConstructorDependencies
        private _provider: shared.jsonProviderService,
        private _http: Http
    ) {
        // START_CUSTOM_CODE_clinicalModelServiceConstructorMethods

        // END_CUSTOM_CODE_clinicalModelServiceConstructorMethods
    }

    getAll(): Observable < any > {
        let res,
            headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(this._provider.url, {
            headers: headers
        });

    }

    // START_CUSTOM_CODE_clinicalModelServiceAdditionalMethods

    // END_CUSTOM_CODE_clinicalModelServiceAdditionalMethods
    /// service class

}