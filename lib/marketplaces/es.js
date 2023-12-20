"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ES = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const european_advertising_factory_1 = require("../european-advertising-factory");
const european_seller_central_uri_factory_1 = require("../european-seller-central-uri-factory");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.ES = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.ES,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_PARIS,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EUR,
    id: 'A1RKKUPIHCS9HS',
    name: 'Spain',
    uri: 'https://www.amazon.es',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    sellerCentralUri: (0, european_seller_central_uri_factory_1.europeanSellerCentralUriFactory)(),
    launchDate: '2011-09-01',
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.ES),
    advertising: (0, european_advertising_factory_1.europeanAdvertisingFactory)(amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.ES),
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=es.js.map