import { AmazonMarketplace } from '../amazon-marketplace'
import { DE } from './DE'

export const FR = new AmazonMarketplace({
  countryCode: 'FR',
  currency: 'EUR',
  id: 'A13V1IB3VIYZZH',
  name: 'France',
  uri: 'https://www.amazon.fr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: Object.assign({}, DE.advertising),
})
