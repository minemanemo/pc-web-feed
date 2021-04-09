import { createBrowserHistory } from 'history';

import { LocationState } from '@type/history';

const history = createBrowserHistory<LocationState>();

export default history;
