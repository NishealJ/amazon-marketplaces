export interface AmazonMarketplaceAdvertisingRegion {
    /**
     * Region code.
     */
    code: string;
    /**
     * Region name.
     */
    name: string;
    /**
     * Authorization URI.
     */
    authorizationUri: string;
    /**
     * Access Token URI
     */
    accessTokenUri: string;
    /**
     * Access endpoint URI.
     */
    endpoint: string;
}
export declare class AmazonMarketplaceAdvertisingRegion implements AmazonMarketplaceAdvertisingRegion {
    constructor(data: AmazonMarketplaceAdvertisingRegion);
}
