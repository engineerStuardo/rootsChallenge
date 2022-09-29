import React from 'react';

import {Search, Results} from '../../Components';
import {useHome} from '../../hooks/useHome';

export const Home = () => {
  const {bankISO, setBankISO, searchBanks, bankList} = useHome();

  return (
    <>
      <Search
        bankISO={bankISO}
        setBankISO={setBankISO}
        searchBanks={searchBanks}
      />
      <Results bankList={bankList} />
    </>
  );
};
