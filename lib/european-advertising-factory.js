"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.europeanAdvertisingFactory = void 0;
const amazon_marketplace_1 = require("./amazon-marketplace");
const marketplace_advertising_regions_1 = require("./marketplace-advertising-regions");
function europeanAdvertisingFactory(countryCode, tz) {
    return {
        countryCode,
        region: marketplace_advertising_regions_1.marketplaceAdvertisingRegions.EU,
        bids: {
            sponsoredBrands: {
                min: 10,
                max: 3900,
            },
            sponsoredProducts: {
                min: 2,
                max: 100000,
            },
        },
        timeZone: tz || amazon_marketplace_1.AmazonMarketplaceAdvertisingTimeZone.EUROPE_PARIS,
    };
}
exports.europeanAdvertisingFactory = europeanAdvertisingFactory;
//# sourceMappingURL=european-advertising-factory.js.map