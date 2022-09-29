import React from 'react';
import {View} from 'react-native';

import {Search, Results} from '../../Components';

export const Home = () => {
  return (
    <View>
      <Search />
      <Results />
    </View>
  );
};
