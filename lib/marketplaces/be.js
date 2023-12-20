"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BE = void 0;
const amazon_marketplace_1 = require("../amazon-marketplace");
const european_advertising_factory_1 = require("../european-advertising-factory");
const selling_partner_api_regions_1 = require("../selling-partner-api-regions");
exports.BE = new amazon_marketplace_1.AmazonMarketplace({
    countryCode: amazon_marketplace_1.AmazonMarketplaceCountryCode.BE,
    timeZone: amazon_marketplace_1.AmazonMarketplaceTimeZone.EUROPE_BRUSSELS,
    currency: amazon_marketplace_1.AmazonMarketplaceAdvertisingCurrency.EUR,
    id: 'AMEN7PMS3EDWL',
    name: 'Belgium',
    /**
     * This marketplace will lunch in the coming months.
     *
     * @see: https://www.aboutamazon.eu/news/job-creation-and-investment/amazon-announces-plans-to-launch-amazon-com-be-in-the-coming-months
     */
    uri: 'https://www.amazon.com.be',
    sellerCentralUri: 'https://sellercentral.amazon.com.be',
    vendorCentralUri: 'https://vendorcentral.amazon.com.be',
    webServiceUri: 'https://mws-eu.amazonservices.com',
    launchDate: '2022-10-01',
    advertising: (0, european_advertising_factory_1.europeanAdvertisingFactory)(amazon_marketplace_1.AmazonMarketplaceAdvertisingCountryCode.BE, amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_BRUSSELS),
    sellingPartner: {
        region: selling_partner_api_regions_1.sellingPartnerRegions.EU,
    },
});
//# sourceMappingURL=be.js.map