"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TR = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.TR = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.TR,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_ISTANBUL,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.TRY,
    id: 'A33AVAJ2PDY3EV',
    name: 'Turkey',
    uri: 'https://www.amazon.com.tr',
    sellerCentralUri: 'https://sellercentral.amazon.com.tr',
    vendorCentralUri: 'https://vendorcentral.amazon.com.tr',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2018-09-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.TR,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 20,
                max: 20000,
            },
            sponsoredProducts: {
                min: 5,
                max: 250000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_ISTANBUL,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=tr.js.map