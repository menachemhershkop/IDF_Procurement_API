
import { Items } from './transactions.entity';

export const itemsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: Items,
  },
];
