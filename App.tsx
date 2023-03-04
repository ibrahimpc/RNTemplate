import React from 'react';

import Navigation from './AppModules/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './AppModules/Redux/Store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
