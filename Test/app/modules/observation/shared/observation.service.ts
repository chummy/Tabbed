import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";
// START_CUSTOM_CODE_observationModelServiceImports

// END_CUSTOM_CODE_observationModelServiceImports
/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class ObservationService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_observationModelServiceAdditionalProperties

    // END_CUSTOM_CODE_observationModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_observationModelServiceConstructorDependencies

        // END_CUSTOM_CODE_observationModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        // START_CUSTOM_CODE_observationModelServiceConstructorMethod

        // END_CUSTOM_CODE_observationModelServiceConstructorMethod
        this._data = _provider.instance.data("Comments");
    }

    post(item: any): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .create(item)
                    .then(data => resolve(data.result || {}))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    get(): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .get()
                    .then(data => resolve(data.result || []))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    getDbCollection(dbName: String): Observable < any > {
        let db = this.provider.instance.data(dbName);

        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                db
                    .get()
                    .then(data => resolve(data.result || []))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    // START_CUSTOM_CODE_observationModelServiceAdditionalMethods

    // END_CUSTOM_CODE_observationModelServiceAdditionalMethods
    /// service class

}