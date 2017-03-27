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

// START_CUSTOM_CODE_observationsModelServiceImports

// END_CUSTOM_CODE_observationsModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class ObservationsService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_observationsModelServiceAdditionalProperties

    // END_CUSTOM_CODE_observationsModelServiceAdditionalProperties
    constructor(
        // START_CUSTOM_CODE_observationsModelServiceConstructorDependencies

        // END_CUSTOM_CODE_observationsModelServiceConstructorDependencies
        private _provider: shared.jsonProviderService,
        private _http: Http
    ) {
        // START_CUSTOM_CODE_observationsModelServiceConstructorMethods

        // END_CUSTOM_CODE_observationsModelServiceConstructorMethods
    }

    getAll(): Observable < any > {
        let res,
            headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(this._provider.url, {
            headers: headers
        });

    }

    // START_CUSTOM_CODE_observationsModelServiceAdditionalMethods

    // END_CUSTOM_CODE_observationsModelServiceAdditionalMethods
    /// service class

}