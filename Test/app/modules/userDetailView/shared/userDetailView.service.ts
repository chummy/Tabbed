import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";

// START_CUSTOM_CODE_userDetailViewModelServiceImports

// END_CUSTOM_CODE_userDetailViewModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class UserDetailViewService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_userDetailViewModelServiceAdditionalProperties

    // END_CUSTOM_CODE_userDetailViewModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_userDetailViewModelServiceConstructorDependencies

        // END_CUSTOM_CODE_userDetailViewModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        this._data = _provider.instance.data("Users");
        // START_CUSTOM_CODE_userDetailViewModelServiceConstructorMethods

        // END_CUSTOM_CODE_userDetailViewModelServiceConstructorMethods
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

    post(item: any): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .create(item)
                    .then(data => resolve(data.result))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    put(item: any): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .updateSingle(item)
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    delete(item: any): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .destroySingle(item)
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            }
        );

        return Observable.fromPromise(promise);
    }

    // START_CUSTOM_CODE_userDetailViewModelServiceAdditionalMethods

    // END_CUSTOM_CODE_userDetailViewModelServiceAdditionalMethods
    /// service class

}