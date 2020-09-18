import React from 'react';
import styled from 'styled-components';
import IntroServicesVision from './IntroServicesVision';
import ServicesCategory from './ServicesCategory';
import ServicesDetails from './ServicesDetails';
import ServicesFeatures from './ServicesFeatures';

const IntrServicesStyled = styled.section`
  width: 100%;
`;

const IntroServices = ({ colors }) => {
  return (
    <IntrServicesStyled
      colors={colors}
      className="services"
    >
      <h2 className="nonVisible">우푸 서비스 소개</h2>
      <IntroServicesVision
        colors={colors}
        className="services__vision"
      />
      <ServicesCategory
        colors={colors}
        className="services__category"
      />
      <ServicesDetails className="services__contents" />
      <ServicesFeatures
        colors={colors}
        className="services__features"
      />
    </IntrServicesStyled>
  );
};

export default IntroServices;