import React from 'react';
import styled from 'styled-components';
import IntroServicesVision from './IntroServicesVision';
import ServicesDetails from './ServicesDetails';
import ServicesFeatures from './ServicesFeatures';

const IntrServicesStyled = styled.section`
  width: 100%;
`;

const IntroServices = (e) => {
  const selectCategory = value => {
    console.log(value);
  };
  
  return (
    <IntrServicesStyled className="services" >
      <h2 className="nonVisible">우푸 서비스 소개</h2>
      <IntroServicesVision className="services__vision" />
      <ServicesDetails
        onClick={selectCategory}
        className="services__contents"
      />
      <ServicesFeatures className="services__features" />
    </IntrServicesStyled>
  );
};

export default IntroServices;