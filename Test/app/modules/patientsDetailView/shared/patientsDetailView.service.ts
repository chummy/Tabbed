import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";

// START_CUSTOM_CODE_patientsDetailViewModelServiceImports

// END_CUSTOM_CODE_patientsDetailViewModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class PatientsDetailViewService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalProperties

    // END_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_patientsDetailViewModelServiceConstructorDependencies

        // END_CUSTOM_CODE_patientsDetailViewModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        this._data = _provider.instance.data("Patients");
        // START_CUSTOM_CODE_patientsDetailViewModelServiceConstructorMethods

        // END_CUSTOM_CODE_patientsDetailViewModelServiceConstructorMethods
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
        let db = this._provider.instance.data(dbName);

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

    // START_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalMethods

    // END_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalMethods
    /// service class

}