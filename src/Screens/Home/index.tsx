import React, {useState} from 'react';
import {View} from 'react-native';

import {Search, Results} from '../../Components';

export const Home = () => {
  const [text, setText] = useState('');

  const searchBanks = () => {};

  return (
    <View>
      <Search text={text} setText={setText} searchBanks={searchBanks} />
      <Results />
    </View>
  );
};
