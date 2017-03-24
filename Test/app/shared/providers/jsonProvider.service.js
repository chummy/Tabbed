"use strict";
var core_1 = require('@angular/core');
var jsonProviderService = (function () {
    function jsonProviderService() {
        this._url = 'http://emsuat01/Services/new/api/PatientLog/ListDoctorPatients?docID=MP0460982&amp;patType=A';
    }
    Object.defineProperty(jsonProviderService.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    jsonProviderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], jsonProviderService);
    return jsonProviderService;
}());
exports.jsonProviderService = jsonProviderService;
// START_CUSTOM_CODE_jsonProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
// END_CUSTOM_CODE_jsonProvider 
//# sourceMappingURL=jsonProvider.service.js.map