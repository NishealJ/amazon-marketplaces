"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CA = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
/**
 * Canada
 */
exports.CA = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.CA,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AMERICA_LOS_ANGELES,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.CAD,
    id: 'A2EUQ1WTGCTBG2',
    name: 'Canada',
    uri: 'https://www.amazon.ca',
    webServiceUri: 'https://mws.amazonservices.ca',
    sellerCentralUri: 'https://sellercentral.amazon.ca',
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.CA),
    launchDate: '2002-06-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.CA,
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
//# sourceMappingURL=ca.js.map