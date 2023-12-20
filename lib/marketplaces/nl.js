"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NL = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const amazon_vendor_central_uri_factory_1 = require("../amazon-vendor-central-uri-factory");
const european_advertising_factory_1 = require("../european-advertising-factory");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
const de_1 = require("./de");
exports.NL = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.NL,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_AMSTERDAM,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EUR,
    id: 'A1805IZSGTT6HS',
    name: 'Netherlands',
    uri: 'https://www.amazon.nl',
    sellerCentralUri: 'https://sellercentral.amazon.nl',
    vendorCentralUri: (0, amazon_vendor_central_uri_factory_1.amazonVendorCentralUriFactory)(amazon_marketplace_1.AmazonMarketplaceCountryCode.NL),
    webServiceUri: de_1.DE.webServiceUri,
    launchDate: '2014-11-01',
    advertising: (0, european_advertising_factory_1.europeanAdvertisingFactory)(amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.NL, amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_AMSTERDAM),
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=nl.js.map