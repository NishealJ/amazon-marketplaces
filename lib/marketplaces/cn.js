"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CN = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
exports.CN = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.CN,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_SHANGHAI,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.CNY,
    id: 'AAHKV2X7AFYLW',
    name: 'China',
    uri: 'https://www.amazon.cn',
    webServiceUri: 'https://mws.amazonservices.com.cn',
    launchDate: '2004-09-01',
});
//# sourceMappingURL=cn.js.map