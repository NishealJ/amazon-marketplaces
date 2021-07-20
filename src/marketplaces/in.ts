import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import {
  sellerCentralAuthUris,
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'

export const IN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IN,
  currency: AmazonMarketplaceAdvertisingCurrency.INR,
  id: 'A21TJRUUN4KGV',
  name: 'India',
  uri: 'https://www.amazon.in',
  sellerCentralUri: 'https://sellercentral.amazon.in',
  vendorCentralUri: 'https://www.vendorcentral.in',
  webServiceUri: 'https://mws.amazonservices.in',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
