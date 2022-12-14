import React from 'react';
import {SafeAreaView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {usePromiseTracker} from 'react-promise-tracker';
import FlashMessage from 'react-native-flash-message';

import {Home} from './src/Screens';

const App = () => {
  const {promiseInProgress} = usePromiseTracker({delay: 500});

  return (
    <SafeAreaView>
      <Spinner visible={promiseInProgress} />
      <Home />
      <FlashMessage position="top" duration={3000} />
    </SafeAreaView>
  );
};

export default App;
