"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EG = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.EG = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.EG,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AFRICA_CAIRO,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EGP,
    id: 'ARBP9OOSHTCHU',
    name: 'Egypt',
    uri: 'https://www.amazon.eg',
    vendorCentralUri: 'https://vendorcentral.amazon.me',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2021-09-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.EG,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 70,
                max: 40000,
            },
            sponsoredProducts: {
                min: 15,
                max: 550,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.AFRICA_CAIRO,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=eg.js.map