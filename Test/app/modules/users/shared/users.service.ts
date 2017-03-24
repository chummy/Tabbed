import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";

// START_CUSTOM_CODE_usersModelServiceImports

// END_CUSTOM_CODE_usersModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class UsersService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_usersModelServiceAdditionalProperties

    // END_CUSTOM_CODE_usersModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_usersModelServiceConstructorDependencies

        // END_CUSTOM_CODE_usersModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        this._data = _provider.instance.data("Users");
        // START_CUSTOM_CODE_usersModelServiceConstructorMethods

        // END_CUSTOM_CODE_usersModelServiceConstructorMethods
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

    // START_CUSTOM_CODE_usersModelServiceAdditionalMethods

    // END_CUSTOM_CODE_usersModelServiceAdditionalMethods
    /// service class

}