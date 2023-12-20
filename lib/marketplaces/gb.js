"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GB = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const european_seller_central_uri_factory_1 = require("../european-seller-central-uri-factory");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
const de_1 = require("./de");
if (!de_1.DE.advertising) {
    throw new Error('Missing DE.advertising');
}
exports.GB = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.GB,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_LONDON,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.GBP,
    id: 'A1F83G8C2ARO7P',
    name: 'United Kingdom',
    uri: 'https://www.amazon.co.uk',
    sellerCentralUri: (0, european_seller_central_uri_factory_1.europeanSellerCentralUriFactory)(),
    vendorCentralUri: 'https://vendorcentral.amazon.co.uk',
    webServiceUri: de_1.DE.webServiceUri,
    launchDate: '1998-10-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.UK,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 10,
                max: 3100,
            },
            sponsoredProducts: {
                min: 2,
                max: 100000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_LONDON,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=gb.js.map