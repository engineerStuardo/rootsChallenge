import React from 'react';
import {SafeAreaView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {usePromiseTracker} from 'react-promise-tracker';

import {Home} from './src/Screens';

const App = () => {
  const {promiseInProgress} = usePromiseTracker({delay: 500});

  return (
    <SafeAreaView>
      <Spinner visible={promiseInProgress} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
