import React from 'react';
import styled from 'styled-components';
import AppBanner from './AppBanner';
import IntroServices from './IntroServices';
import Help from 'components/common/Help';

const ServicesStyled = styled.div`
  width: 100%;
`;

const ServicesWrapper = ({ onClick }) => {
  return (
    <>
      <ServicesStyled
        onClick={onClick}
      >
        <IntroServices />
        <AppBanner />
      </ServicesStyled>
      <Help />
    </>
  );
};

export default ServicesWrapper;