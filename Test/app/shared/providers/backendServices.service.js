"use strict";
var core_1 = require("@angular/core");
var connectivity = require("connectivity");
var Everlive = require('../../sdks/everlive.js');
var backendServicesService = (function () {
    function backendServicesService() {
        this._options = {
            offlineStorage: true,
            appId: '3td2js7m7yqcfg32',
            scheme: 'https',
            authentication: {
                persist: true
            }
        };
        this._instance = new Everlive(this._options);
        this._query = new Everlive.Query();
        this.addConectivityListeners();
    }
    backendServicesService.prototype.addConectivityListeners = function () {
        var _this = this;
        connectivity.startMonitoring(function (newConnectionType) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    _this.instance.offline();
                    break;
                case connectivity.connectionType.wifi:
                    _this.instance.online();
                    _this.instance.sync();
                    break;
                case connectivity.connectionType.mobile:
                    _this.instance.online();
                    _this.instance.sync();
                    break;
                default:
                    break;
            }
        });
    };
    Object.defineProperty(backendServicesService.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(backendServicesService.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    return backendServicesService;
}());
backendServicesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], backendServicesService);
exports.backendServicesService = backendServicesService;
// START_CUSTOM_CODE_backendServices
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
// END_CUSTOM_CODE_backendServices 
//# sourceMappingURL=backendServices.service.js.map