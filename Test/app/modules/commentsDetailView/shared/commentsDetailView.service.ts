import {
    Injectable
}
from "@angular/core";

import {
    Observable
}
from "rxjs/Observable";
import * as common from "./";

// START_CUSTOM_CODE_commentsDetailViewModelServiceImports

// END_CUSTOM_CODE_commentsDetailViewModelServiceImports

/// service imports

import * as shared from "../../../shared";

@
Injectable()
export class CommentsDetailViewService {

    private _data: any;

    get provider() {
        return this._provider;
    }

    // START_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalProperties

    // END_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalProperties

    constructor(
        // START_CUSTOM_CODE_commentsDetailViewModelServiceConstructorDependencies

        // END_CUSTOM_CODE_commentsDetailViewModelServiceConstructorDependencies
        private _provider: shared.backendServicesService
    ) {
        this._data = _provider.instance.data("Activities");
        // START_CUSTOM_CODE_commentsDetailViewModelServiceConstructorMethods

        // END_CUSTOM_CODE_commentsDetailViewModelServiceConstructorMethods
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

    // START_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalMethods

    // END_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalMethods
    /// service class

}