import 'assets/css/_common.scss';
import * as colors from 'components/common/Colors';
import React from 'react';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Footer from 'components/common/Footer';
import Help from 'components/common/Help';
import IndexWrapper from 'components/index/IndexWrapper';
import ServicesWrapper from 'components/services/ServicesWrapper';
import IncruitWrapper from 'components/incruit/IncruitWrapper';

const App = () => {
  return (
    <>
      <Header />
      <>
        <IndexWrapper colors={colors} />
        {/* <ServicesWrapper colors={colors} /> */}
        {/* <IncruitWrapper colors={colors} /> */}
      </>
      <Aside />
      <Footer />
    </>
  );
};

export default App;