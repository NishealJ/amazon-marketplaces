"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FR = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const european_advertising_factory_1 = require("../european-advertising-factory");
const european_seller_central_uri_factory_1 = require("../european-seller-central-uri-factory");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.FR = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.FR,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_PARIS,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EUR,
    id: 'A13V1IB3VIYZZH',
    name: 'France',
    uri: 'https://www.amazon.fr',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2000-08-01',
    sellerCentralUri: (0, european_seller_central_uri_factory_1.europeanSellerCentralUriFactory)(),
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.FR),
    advertising: (0, european_advertising_factory_1.europeanAdvertisingFactory)(amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.FR),
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=fr.js.map