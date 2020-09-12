import React from 'react';
import styled from 'styled-components';
import IntroWfTitles from './IntroWfTitles';
import IntroWfDetails from './IntroWfDetails';

const IntroWfStyled = styled.section`
  // 우푸 특징 소개 시작
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 70%;

  .introWoofoo__title {
    padding-bottom: 3rem;
  }
  // 우푸 특징 소개 끝
`;

const IntroWfWrapper = ({ colors }) => {
  return (
    <IntroWfStyled
      colors={colors}
      className="introWoofoo"
    >
      {/* <!-- 우푸 특징 소개 시작 --> */}
      <h2 className="introWoofoo__title">언제나 안심되는 우푸 서비스</h2>
      <IntroWfTitles
        colors={colors}
      />
      <IntroWfDetails
        colors={colors}
      />  
      {/* <!-- 우푸 특징 소개 끝 --> */}
    </IntroWfStyled>
  );
};

export default IntroWfWrapper;