import { AmazonMarketplace, AmazonMarketplaceAdvertising, AmazonSellingPartner } from './amazon-marketplace';
type Key = keyof Omit<AmazonMarketplace, 'uri' | 'webServiceUri' | 'advertising'>;
/**
 * Finds an Amazon Marketplace based on provided search parameter.
 */
export declare function findAmazonMarketplace<K extends Key>(key: K, value: AmazonMarketplace[K]): AmazonMarketplace | undefined;
/**
 * Finds an Amazon Marketplace based on provided search parameter.
 *
 * Will throw if marketplace cannot be found.
 */
export declare function findAmazonMarketplaceOrFail<K extends Key>(key: K, value: AmazonMarketplace[K]): AmazonMarketplace;
/**
 * Assert function that guards the marketplace and asserts that it has the advertising capability.
 *
 * See [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) docs.
 */
export declare function assertMarketplaceHasAdvertising(marketplace: AmazonMarketplace): asserts marketplace is AmazonMarketplace & {
    advertising: AmazonMarketplaceAdvertising;
};
/**
 * Assert function that guards the marketplace and asserts that it has the selling partner api capability.
 *
 * See [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) docs.
 */
export declare function assertMarketplaceHasSellingPartner(marketplace: AmazonMarketplace): asserts marketplace is AmazonMarketplace & {
    sellingPartner: AmazonSellingPartner;
};
export {};
