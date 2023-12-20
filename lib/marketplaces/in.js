"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IN = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.IN = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.IN,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_INDIA,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.INR,
    id: 'A21TJRUUN4KGV',
    name: 'India',
    uri: 'https://www.amazon.in',
    sellerCentralUri: 'https://sellercentral.amazon.in',
    vendorCentralUri: 'https://vendorcentral.amazon.in',
    webServiceUri: 'https://mws.amazonservices.in',
    launchDate: '2013-06-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.IN,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 100,
                max: 200000,
            },
            sponsoredProducts: {
                min: 100,
                max: 500000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.ASIA_INDIA,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=in.js.map