import {
    Injectable
}
from '@angular/core';

@
Injectable()

export class yahooProviderService {
    private _url: any;

    constructor() {
        this._url = 'https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text=&#39;chicago, il&#39;)&amp;format=json';
    }

    get url() {
        return this._url;
    }
}

// START_CUSTOM_CODE_yahooProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_yahooProvider