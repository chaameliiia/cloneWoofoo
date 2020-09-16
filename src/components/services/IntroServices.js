import React from 'react';
import styled from 'styled-components';
import ServicesCategory from './ServicesCategory';
import ServicesDetails from './ServicesDetails';

const ServicesStyled = styled.main`
  width: 100%;
`;

const IntroServices = ({ colors }) => {
  return (
    <ServicesStyled
      colors={colors}
      className="services"
    >
      <ServicesCategory
        colors={colors}
      />
      <ServicesDetails />
    </ServicesStyled>
  );
};

export default IntroServices;