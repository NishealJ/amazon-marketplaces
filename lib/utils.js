"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertMarketplaceHasSellingPartner = exports.assertMarketplaceHasAdvertising = exports.findAmazonMarketplaceOrFail = exports.findAmazonMarketplace = void 0;
const ensure_1 = __importDefault(require("@lavadrop/ensure"));
const marketplaces_1 = require("./marketplaces");
/**
 * Finds an Amazon Marketplace based on provided search parameter.
 */
function findAmazonMarketplace(key, value) {
    return marketplaces_1.amazonMarketplacesList.find((marketplace) => marketplace[key] === value);
}
exports.findAmazonMarketplace = findAmazonMarketplace;
/**
 * Finds an Amazon Marketplace based on provided search parameter.
 *
 * Will throw if marketplace cannot be found.
 */
function findAmazonMarketplaceOrFail(key, value) {
    return (0, ensure_1.default)(findAmazonMarketplace(key, value), `Cannot find Amazon Marketplace by key "${key}" for value "${value}".`);
}
exports.findAmazonMarketplaceOrFail = findAmazonMarketplaceOrFail;
/**
 * Assert function that guards the marketplace and asserts that it has the advertising capability.
 *
 * See [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) docs.
 */
function assertMarketplaceHasAdvertising(marketplace) {
    if (!marketplace.advertising) {
        throw new Error(`Marketplace ${marketplace.id} does not have advertising.`);
    }
}
exports.assertMarketplaceHasAdvertising = assertMarketplaceHasAdvertising;
/**
 * Assert function that guards the marketplace and asserts that it has the selling partner api capability.
 *
 * See [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) docs.
 */
function assertMarketplaceHasSellingPartner(marketplace) {
    if (!marketplace.sellingPartner) {
        throw new Error(`Marketplace ${marketplace.id} does not have Selling Partner API.`);
    }
}
exports.assertMarketplaceHasSellingPartner = assertMarketplaceHasSellingPartner;
//# sourceMappingURL=utils.js.map