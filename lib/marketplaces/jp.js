"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JP = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.JP = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.JP,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_TOKYO,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.JPY,
    id: 'A1VC38T7YXB528',
    name: 'Japan',
    uri: 'https://www.amazon.co.jp',
    sellerCentralUri: 'https://sellercentral.amazon.co.jp',
    vendorCentralUri: 'https://vendorcentral.amazon.co.jp',
    webServiceUri: 'https://mws.amazonservices.jp',
    launchDate: '2000-11-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.JP,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.FE,
        bids: {
            sponsoredBrands: {
                min: 1000,
                max: 776000,
            },
            sponsoredProducts: {
                min: 200,
                max: 10000000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.ASIA_TOKYO,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.FE,
    },
});
//# sourceMappingURL=jp.js.map