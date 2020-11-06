import React from 'react';
import styled from 'styled-components';
import ServicesFeaturesDetail from './ServicesFeaturesDetail';

const FeaturesStyled = styled.section`
  margin: 0 auto;
  width: 930px;
`;

const ServicesFeatures = () => {
  return (
    <FeaturesStyled className="services__features">
      {/* <!-- 우푸 서비스 특징 소개 시작 --> */}
      <ServicesFeaturesDetail className="features__details" />
      {/* <!-- 우푸 서비스 특징 소개 끝 --> */}
    </FeaturesStyled>
  );
};

export default ServicesFeatures;