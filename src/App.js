import 'assets/css/_common.scss';
import * as colors from 'components/common/Colors';
import React from 'react';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Footer from 'components/common/Footer';
import Support from 'components/common/Support';
import MainWrapper from 'components/common/MainWrapper';

const App = () => {
  return (
    <>
      <Header />
      <MainWrapper
        colors={colors}
      />
      <Support />
      <Aside />
      <Footer />
    </>
  );
};

export default App;