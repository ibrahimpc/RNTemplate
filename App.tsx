import React from 'react';

import Navigation from './AppModules/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './AppModules/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
