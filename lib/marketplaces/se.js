"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SE = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.SE = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.SE,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_STOCKHOLM,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.SEK,
    id: 'A2NODRKZP88ZB9',
    name: 'Sweden',
    uri: 'https://www.amazon.se',
    sellerCentralUri: 'https://sellercentral.amazon.se',
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.SE),
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2020-10-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.SE,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 90,
                max: 50000,
            },
            sponsoredProducts: {
                min: 18,
                max: 930000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_STOCKHOLM,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=se.js.map