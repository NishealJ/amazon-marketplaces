"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BR = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const marketplace_advertising_regions_1 = require("../marketplace-advertising-regions");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.BR = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.BR,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.AMERICA_SAO_PAULO,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.BRL,
    id: 'A2Q3Y263D00KWC',
    name: 'Brazil',
    uri: 'https://www.amazon.com.br',
    sellerCentralUri: 'https://sellercentral.amazon.com.br',
    vendorCentralUri: 'https://vendorcentral.amazon.com.br',
    webServiceUri: 'https://mws.amazonservices.com',
    launchDate: '2012-12-01',
    advertising: {
        countryCode: amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.BR,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.NA,
        bids: {
            sponsoredBrands: {
                min: 53,
                max: 20000,
            },
            sponsoredProducts: {
                min: 7,
                max: 370000,
            },
        },
        timeZone: amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.AMERICA_SAO_PAULO,
    },
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.NA,
    },
});
//# sourceMappingURL=br.js.map