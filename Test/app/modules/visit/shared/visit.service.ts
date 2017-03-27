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

// START_CUSTOM_CODE_visitModelServiceImports

// END_CUSTOM_CODE_visitModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class VisitService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_visitModelServiceAdditionalProperties

    // END_CUSTOM_CODE_visitModelServiceAdditionalProperties
    constructor(
        // START_CUSTOM_CODE_visitModelServiceConstructorDependencies

        // END_CUSTOM_CODE_visitModelServiceConstructorDependencies
        private _provider: shared.jsonProviderService,
        private _http: Http
    ) {
        // START_CUSTOM_CODE_visitModelServiceConstructorMethods

        // END_CUSTOM_CODE_visitModelServiceConstructorMethods
    }

    getAll(): Observable < any > {
        let res,
            headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(this._provider.url, {
            headers: headers
        });

    }

    // START_CUSTOM_CODE_visitModelServiceAdditionalMethods

    // END_CUSTOM_CODE_visitModelServiceAdditionalMethods
    /// service class

}