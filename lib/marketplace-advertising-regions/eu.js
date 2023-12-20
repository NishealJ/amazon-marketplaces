"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EU = void 0;
const amazon_marketplace_advertising_region_1 = require("../amazon-marketplace-advertising-region");
exports.EU = new amazon_marketplace_advertising_region_1.AmazonMarketplaceAdvertisingRegion({
    accessTokenUri: 'https://api.amazon.co.uk/auth/o2/token',
    authorizationUri: 'https://eu.account.amazon.com/ap/oa',
    code: 'EU',
    endpoint: 'https://advertising-api-eu.amazon.com',
    name: 'Europe',
});
//# sourceMappingURL=eu.js.map