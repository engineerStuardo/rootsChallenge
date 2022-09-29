import React, {useState} from 'react';
import {View} from 'react-native';
import {trackPromise} from 'react-promise-tracker';

import axios from '../../lib/axiosClient';

import {Search, Results} from '../../Components';

export const Home = () => {
  const [bankISO, setBankISO] = useState('');
  const [bankList, setBankList] = useState([]);

  const searchBanks = async () => {
    const {
      data: {data},
    } = await trackPromise(
      axios.get(`/banks_by_country?country_code=${bankISO}`),
    );
    setBankList(data);
  };

  return (
    <View>
      <Search
        bankISO={bankISO}
        setBankISO={setBankISO}
        searchBanks={searchBanks}
      />
      <Results />
    </View>
  );
};
