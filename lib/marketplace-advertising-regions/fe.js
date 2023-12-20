"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FE = void 0;
const amazon_marketplace_advertising_region_1 = require("../amazon-marketplace-advertising-region");
exports.FE = new amazon_marketplace_advertising_region_1.AmazonMarketplaceAdvertisingRegion({
    accessTokenUri: 'https://api.amazon.co.jp/auth/o2/token',
    authorizationUri: 'https://apac.account.amazon.com/ap/oa',
    code: 'FE',
    endpoint: 'https://advertising-api-fe.amazon.com',
    name: 'Far East',
});
//# sourceMappingURL=fe.js.map