import {useState} from 'react';
import {trackPromise} from 'react-promise-tracker';
import {showMessage} from 'react-native-flash-message';

import axios from '../lib/axiosClient';
import {AxiosError} from 'axios';
import {errorMessageHandler} from '../lib/errorHandler';

export const useHome = () => {
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

  const fetchBanks = async () => {
    try {
      const {
        data: {data},
      } = await trackPromise(
        axios.get(`/banks_by_country?country_code=${bankISO}`),
      );
      setBankList(data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setBankList([]);
        showMessage({
          message: errorMessageHandler(error.message),
          type: 'danger',
          autoHide: true,
        });
      }
    }
  };

  const searchBanks = async () => {
    if (isInvalidISO()) {
      return;
    }
    await fetchBanks();
  };

  return {bankISO, setBankISO, searchBanks, bankList};
};
