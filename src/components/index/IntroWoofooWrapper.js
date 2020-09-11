import React from 'react';
import styled from 'styled-components';
import WoofooCategories from './WoofooCategories';
import WoofooDetails from './WoofooDetails';

const IntroWoofooStyled = styled.section`
  // 우푸 특징 소개 시작
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 70%;

  .introWoofoo__title {
    padding-bottom: 3rem;
  }
  // 우푸 특징 소개 끝
`;

const IntroWoofooWrapper = ({ colors }) => {
  return (
    <IntroWoofooStyled
      colors={colors}
      className="introWoofoo"
    >
      {/* <!-- 우푸 특징 소개 시작 --> */}
      <h2 className="introWoofoo__title">언제나 안심되는 우푸 서비스</h2>
      <WoofooCategories
        colors={colors}
      />
      <WoofooDetails
        colors={colors}
      />  
      {/* <!-- 우푸 특징 소개 끝 --> */}
    </IntroWoofooStyled>
  );
};

export default IntroWoofooWrapper;