"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PL = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.PL = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.PL,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_WARSAW,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.PLN,
    id: 'A1C3SOZRARQ6R3',
    name: 'Poland',
    uri: 'https://www.amazon.pl',
    sellerCentralUri: 'https://sellercentral.amazon.pl',
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.PL),
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2021-03-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.PL,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 20,
                max: 20000,
            },
            sponsoredProducts: {
                min: 4,
                max: 200000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_WARSAW,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=pl.js.map