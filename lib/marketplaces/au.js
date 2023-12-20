"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AU = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.AU = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.AU,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AUSTRALIA_SYDNEY,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.AUD,
    id: 'A39IBJ37TRP1C6',
    name: 'Australia',
    uri: 'https://www.amazon.com.au',
    sellerCentralUri: 'https://sellercentral.amazon.com.au',
    vendorCentralUri: 'https://vendorcentral.amazon.com.au',
    webServiceUri: 'https://mws.amazonservices.com.au',
    launchDate: '2017-11-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.AU,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.FE,
        bids: {
            sponsoredBrands: {
                min: 10,
                max: 7000,
            },
            sponsoredProducts: {
                min: 10,
                max: 141000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.AUSTRALIA_SYDNEY,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.FE,
    },
});
//# sourceMappingURL=au.js.map