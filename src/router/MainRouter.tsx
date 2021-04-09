import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Feed from '@pages/Feed';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/feed" component={Feed} />
      <Redirect from="*" to="/feed" />
    </Switch>
  );
};

export default MainRouter;
