"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AE = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.AE = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.AE,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_DUBAI,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.AED,
    id: 'A2VIGQ35RCS4UG',
    name: 'United Arab Emirates',
    uri: 'https://www.amazon.ae',
    sellerCentralUri: 'https://sellercentral.amazon.ae',
    vendorCentralUri: 'https://vendorcentral.amazon.me',
    webServiceUri: 'https://mws.amazonservices.ae',
    launchDate: '2019-05-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.AE,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 40,
                max: 18400,
            },
            sponsoredProducts: {
                min: 24,
                max: 18400,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.ASIA_DUBAI,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=ae.js.map