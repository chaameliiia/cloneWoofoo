import React from 'react';
import styled from 'styled-components';
import FeaturesCategory from './FeaturesCategory';
import FeaturesDetail from './FeaturesDetail';

const FeaturesStyled = styled.section`
  margin: 0 auto;
  width: 930px;
`;

const ServicesFeatures = ({ colors }) => {
  return (
    <FeaturesStyled
      colors={colors}
      className="features"
    >
      <FeaturesCategory
        colors={colors}
      />
      <FeaturesDetail />
      {/* <!-- 우푸 서비스 소개 끝 --> */}
    </FeaturesStyled>
  );
};

export default ServicesFeatures;