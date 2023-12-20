"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.US = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.US = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.US,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AMERICA_LOS_ANGELES,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.USD,
    id: 'ATVPDKIKX0DER',
    name: 'United States',
    uri: 'https://www.amazon.com',
    sellerCentralUri: 'https://sellercentral.amazon.com',
    vendorCentralUri: 'https://vendorcentral.amazon.com',
    webServiceUri: 'https://mws.amazonservices.com',
    launchDate: '1995-07-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.US,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.NA,
        bids: {
            sponsoredBrands: {
                min: 10,
                max: 4900,
            },
            sponsoredProducts: {
                min: 2,
                max: 100000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.NA,
    },
});
//# sourceMappingURL=us.js.map