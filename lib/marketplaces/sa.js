"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SA = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.SA = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.SA,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_RIYADH,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.SAR,
    id: 'A17E79C6D8DWNP',
    name: 'Saudi Arabia',
    uri: 'https://www.amazon.sa',
    sellerCentralUri: 'https://sellercentral.amazon.sa',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2020-06-01',
    advertising: {
        // UNDEFINED by Amazon
        bids: {
            sponsoredBrands: {
                min: 1,
                max: 1,
            },
            sponsoredProducts: {
                min: 1,
                max: 1,
            },
        },
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.SA,
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.ASIA_RIYADH,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=sa.js.map