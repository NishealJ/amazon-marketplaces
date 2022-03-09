import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const TR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.TR,
  currency: AmazonMarketplaceAdvertisingCurrency.TRY,
  id: 'A33AVAJ2PDY3EV',
  name: 'Turkey',
  uri: 'https://www.amazon.com.tr',
  sellerCentralUri: 'https://sellercentral.amazon.com.tr',
  vendorCentralUri: 'https://vendorcentral.amazon.com.tr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.TR,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 20,
        max: 20000,
      },
      sponsoredProducts: {
        min: 5,
        max: 250000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_ISTANBUL,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
