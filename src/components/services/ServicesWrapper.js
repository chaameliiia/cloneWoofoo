import React from 'react';
import styled from 'styled-components';
import IntroServices from './IntroServices';
import ServicesFeatures from './ServicesFeatures';

const ServicesStyled = styled.div`
  width: 100%;

  .services {
    width: 100%;
  }
`;

const ServicesWrapper = ({ colors }) => {
  return (
    <ServicesStyled
      colors={colors}
      className="servicesWrapper"
    >
      <IntroServices
        colors={colors}
      />
      <ServicesFeatures
        colors={colors}
      />
    </ServicesStyled>
  );
};

export default ServicesWrapper;