import React, {useState} from 'react';
import {View} from 'react-native';
import {trackPromise} from 'react-promise-tracker';
import {showMessage} from 'react-native-flash-message';

import axios from '../../lib/axiosClient';

import {Search, Results} from '../../Components';

export const Home = () => {
  const [bankISO, setBankISO] = useState('');
  const [bankList, setBankList] = useState([]);

  const isInvalidISO = () => {
    if (bankISO.length < 2) {
      showMessage({
        message: 'Country ISO must be 2 characters.',
        type: 'danger',
        autoHide: true,
      });
      return true;
    }
    return false;
  };

  const searchBanks = async () => {
    if (isInvalidISO()) {
      return;
    }

    try {
      const {
        data: {data},
      } = await trackPromise(
        axios.get(`/banks_by_country?country_code=${bankISO}`),
      );
      setBankList(data);
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Something went wrong. Try again with diferent Country ISO',
        type: 'danger',
        autoHide: true,
      });
    }
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
