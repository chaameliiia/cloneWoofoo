import React from 'react';
import styled from 'styled-components';
import IntroServicesVision from './IntroServicesVision';
import ServicesDetails from './ServicesDetails';
import ServicesFeatures from './ServicesFeatures';

const IntrServicesStyled = styled.section`
  width: 100%;
`;

const IntroServices = () => {
  return (
    <IntrServicesStyled className="services" >
      <h2 className="nonVisible">우푸 서비스 소개</h2>
      <IntroServicesVision />
      <ServicesDetails />
      <ServicesFeatures />
    </IntrServicesStyled>
  );
};

export default IntroServices;