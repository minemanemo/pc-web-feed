import { RouterState } from 'connected-react-router';
import { LocationState } from './history';

export interface Store {
  router: RouterState<LocationState>;
}
