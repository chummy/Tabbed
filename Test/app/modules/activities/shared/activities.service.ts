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

// START_CUSTOM_CODE_activitiesModelServiceImports

// END_CUSTOM_CODE_activitiesModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class ActivitiesService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_activitiesModelServiceAdditionalProperties

    // END_CUSTOM_CODE_activitiesModelServiceAdditionalProperties
    constructor(
        // START_CUSTOM_CODE_activitiesModelServiceConstructorDependencies

        // END_CUSTOM_CODE_activitiesModelServiceConstructorDependencies
        private _provider: shared.jsonProviderService,
        private _http: Http
    ) {
        // START_CUSTOM_CODE_activitiesModelServiceConstructorMethods

        // END_CUSTOM_CODE_activitiesModelServiceConstructorMethods
    }

    getAll(): Observable < any > {
        let res,
            headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this._http.get(this._provider.url, {
            headers: headers
        });

    }

    // START_CUSTOM_CODE_activitiesModelServiceAdditionalMethods

    // END_CUSTOM_CODE_activitiesModelServiceAdditionalMethods
    /// service class

}