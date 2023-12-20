"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DE = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const european_advertising_factory_1 = require("../european-advertising-factory");
const european_seller_central_uri_factory_1 = require("../european-seller-central-uri-factory");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.DE = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.DE,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_PARIS,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EUR,
    id: 'A1PA6795UKMFR9',
    name: 'Germany',
    uri: 'https://www.amazon.de',
    sellerCentralUri: (0, european_seller_central_uri_factory_1.europeanSellerCentralUriFactory)(),
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.DE),
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '1998-10-01',
    advertising: (0, european_advertising_factory_1.europeanAdvertisingFactory)(amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.DE),
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=de.js.map