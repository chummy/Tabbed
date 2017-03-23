import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";
// START_CUSTOM_CODE_formViewModelServiceImports

// END_CUSTOM_CODE_formViewModelServiceImports
/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class FormViewService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_formViewModelServiceAdditionalProperties

    // END_CUSTOM_CODE_formViewModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_formViewModelServiceConstructorDependencies

        // END_CUSTOM_CODE_formViewModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        // START_CUSTOM_CODE_formViewModelServiceConstructorMethod

        // END_CUSTOM_CODE_formViewModelServiceConstructorMethod
        this._data = _provider.instance.data("Users");
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

    // START_CUSTOM_CODE_formViewModelServiceAdditionalMethods

    // END_CUSTOM_CODE_formViewModelServiceAdditionalMethods
    /// service class

}