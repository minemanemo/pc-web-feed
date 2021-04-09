import { createBrowserHistory } from 'history';
import { LocationState } from './history.d';

const history = createBrowserHistory<LocationState>();

export default history;
