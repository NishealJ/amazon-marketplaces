"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SG = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.SG = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.SG,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.ASIA_SINGAPORE,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.SGD,
    id: 'A19VAU5U5O7RUS',
    name: 'Singapore',
    uri: 'https://www.amazon.sg',
    sellerCentralUri: 'https://sellercentral.amazon.sg',
    vendorCentralUri: 'https://vendorcentral.amazon.com.sg',
    webServiceUri: 'https://mws-fe.amazonservices.com',
    launchDate: '2017-07-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.SG,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.FE,
        bids: {
            sponsoredBrands: {
                min: 14,
                max: 10000,
            },
            sponsoredProducts: {
                min: 2,
                max: 110000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.ASIA_SINGAPORE,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.FE,
    },
});
//# sourceMappingURL=sg.js.map