import {
    Injectable
}
from '@angular/core';
import * as connectivity from "connectivity";

const Everlive: any = require('../../sdks/everlive.js');

@
Injectable()

export class backendServicesService {
    private _instance: any;
    private _query: any;
    private _options: {};

    constructor() {
        this._options = {
            offlineStorage: true,
            appId: '3td2js7m7yqcfg32',
            scheme: 'https',
            authentication: {
                persist: true
            }
        }

        this._instance = new Everlive(this._options);
        this._query = new Everlive.Query();
        this.addConectivityListeners();
    }

    addConectivityListeners() {
        connectivity.startMonitoring((newConnectionType: number) => {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    this.instance.offline();
                    break;
                case connectivity.connectionType.wifi:
                    this.instance.online();
                    this.instance.sync();
                    break;
                case connectivity.connectionType.mobile:
                    this.instance.online();
                    this.instance.sync();
                    break;
                default:
                    break;
            }
        });
    }

    get instance() {
        return this._instance;
    }

    get query() {
        return this._query;
    }
}

// START_CUSTOM_CODE_backendServices
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_backendServices