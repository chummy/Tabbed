"use strict";
var core_1 = require("@angular/core");
var yahooProviderService = (function () {
    function yahooProviderService() {
        this._url = 'https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text=&#39;chicago, il&#39;)&amp;format=json';
    }
    Object.defineProperty(yahooProviderService.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    return yahooProviderService;
}());
yahooProviderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], yahooProviderService);
exports.yahooProviderService = yahooProviderService;
// START_CUSTOM_CODE_yahooProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
// END_CUSTOM_CODE_yahooProvider 
//# sourceMappingURL=yahooProvider.service.js.map