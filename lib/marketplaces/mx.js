"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MX = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.MX = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.MX,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AMERICA_LOS_ANGELES,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.MXN,
    id: 'A1AM78C64UM0Y8',
    name: 'Mexico',
    uri: 'https://www.amazon.com.mx',
    sellerCentralUri: 'https://sellercentral.amazon.com.mx',
    vendorCentralUri: 'https://vendorcentral.amazon.com.mx',
    webServiceUri: 'https://mws.amazonservices.com.mx',
    launchDate: '2013-08-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.MX,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.NA,
        bids: {
            sponsoredBrands: {
                min: 10,
                max: 2000000,
            },
            sponsoredProducts: {
                min: 10,
                max: 2000000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.NA,
    },
});
//# sourceMappingURL=mx.js.map