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
  const _onClick = e => {
    e.preventDefault();
    console.log('stopped');
    console.log(e.target.className);
  };

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
        onClick={_onClick}
      />
      <div className="contentsWrapper">
        <IndexWrapper
          colors={colors}
          onClick={_onClick}
          className="indexPage"
        />
        {/* <ServicesWrapper
          colors={colors}
          onClick={_onClick}
          className="subServices"
        /> */}
        {/* <IncruitWrapper
          colors={colors}
          onClick={_onClick}
          className="subIncruit"
        /> */}
      </div>
      <Aside onClick={_onClick} />
      <Footer onClick={_onClick} />
      <PromoWrapper
        colors={colors}
        className="subPromotion"
      />
    </>
  );
};

export default App;