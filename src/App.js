import 'assets/css/_common.scss';
import * as colors from 'components/common/Colors';
import React from 'react';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Footer from 'components/common/Footer';
import Support from 'components/common/Support';
import IndexWrapper from 'components/index/IndexWrapper';
import ServicesWrapper from 'components/services/ServicesWrapper';

const App = () => {
  return (
    <>
      <Header />
      <>
        {/* <IndexWrapper colors={colors} /> */}
        <ServicesWrapper colors={colors} />
      </>
      <Support colors={colors} />
      <Aside />
      <Footer />
    </>
  );
};

export default App;