import { AvailablePlaces } from 'src/constants/places.enum';
import { PlacePrices } from 'src/constants/place-prices.enum';

export class PlaceBuilder {
  readonly name: AvailablePlaces;
  private readonly price: (typeof PlacePrices)[AvailablePlaces];

  constructor(values: Pick<PlaceBuilder, 'name'>) {
    this.name = values.name;
    this.price = PlacePrices[this.name];
    return this;
  }
}
