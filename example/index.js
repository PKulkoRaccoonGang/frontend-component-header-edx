import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContext, AppProvider } from '@edx/frontend-platform/react';
import { initialize, getConfig, subscribe, APP_READY } from '@edx/frontend-platform';
import Header from '@edx/frontend-component-header';

import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      {/* We can fake out authentication by including another provider here with the data we want */}
      <AppContext.Provider value={{
        authenticatedUser: null,
        config: getConfig(),
      }}>
        <Header />
      </AppContext.Provider>
      <h5 className="mt-2 mb-5">Logged out state</h5>

      {/* We can fake out authentication by including another provider here with the data we want */}
      <AppContext.Provider value={{
        authenticatedUser: {
          userId: '123abc',
          username: 'testuser',
          roles: [],
          administrator: false,
        },
        config: getConfig(),
      }}>
        <Header />
      </AppContext.Provider>
      <h5 className="mt-2">Logged in state</h5>
    </AppProvider>,
    document.getElementById('root'),
  );
});

initialize({
  messages: []
});
