import 'assets/css/_common.scss';
import * as colors from 'components/common/Colors';
import React, { useState } from 'react';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Footer from 'components/common/Footer';
import IndexWrapper from 'components/index/IndexWrapper';
import ServicesWrapper from 'components/services/ServicesWrapper';
import IncruitWrapper from 'components/incruit/IncruitWrapper';
import PromoWrapper from 'components/common/PromoWrapper';

const App = () => {
  const stopClick = e => {
    e.preventDefault();
    console.log('stopped');
  };

  const clickPromotion = () => {
    
  }

  const [_subPage, _setSubPage] = useState([
    {
      id: 1,
      pageName: 'indexPage',
    },
    {
      id: 2,
      pageName: 'subPromotion'
    },
    {
      id: 3,
      pageName: 'subServices'
    },
    {
      id: 4,
      pageName: 'subHelp',
    },
    {
      id: 5,
      pageName: 'subIncruit',
    },
  ]);

  return (
    <>
      <Header
        subPage={_subPage}
        onClick={stopClick}
      />
      <>
        {/* <IndexWrapper
          colors={colors}
          onClick={stopClick}
        /> */}
        {/* <ServicesWrapper
          colors={colors}
          onClick={stopClick}
        /> */}
        <IncruitWrapper
          colors={colors}
          onClick={stopClick}
        />
      </>
      {/* <Aside onClick={stopClick} /> */}
      {/* <Footer onClick={stopClick} /> */}
      <PromoWrapper
        colors={colors}
      />
    </>
  );
};

export default App;