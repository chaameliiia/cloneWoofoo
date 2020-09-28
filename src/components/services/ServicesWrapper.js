import React from 'react';
import styled from 'styled-components';
import * as _colors from 'components/common/Colors';
import AppBanner from './AppBanner';
import IntroServices from './IntroServices';
import Help from 'components/common/Help';

const ServicesStyled = styled.div`
  width: 100%;
`;

const ServicesWrapper = ({ onClick }) => {
  const colors = _colors;
  return (
    <>
      <ServicesStyled
        colors={colors}
        onClick={onClick}
      >
        <IntroServices colors={colors} />
        <AppBanner colors={colors} />
      </ServicesStyled>
      <Help colors={colors} />
    </>
  );
};

export default ServicesWrapper;