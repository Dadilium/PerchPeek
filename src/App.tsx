import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import AppNavigation from './AppNavigation';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;