import React from 'react';
import styled from 'styled-components';
import AppBanner from './AppBanner';
import IntroServices from './IntroServices';
import Help from 'components/common/Help';

const ServicesStyled = styled.div`
  width: 100%;
`;

const ServicesWrapper = ({ colors }) => {
  return (
    <>
      <ServicesStyled
        colors={colors}
        className="mainWrapper"
      >
        <IntroServices colors={colors} />
        <AppBanner colors={colors} />
      </ServicesStyled>
      <Help colors={colors} />
    </>
  );
};

export default ServicesWrapper;