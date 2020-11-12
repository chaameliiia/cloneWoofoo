import React, { useState } from 'react';
import styled from 'styled-components';
import IntroServicesVision from './IntroServicesVision';
// import ServicesDetails from './ServicesDetails';
import ServicesDetailsReducer from './ServicesDetailsReducer';
import ServicesFeatures from './ServicesFeatures';

const IntrServicesStyled = styled.section`
  width: 100%;
`;

const IntroServices = e => {
  // const [category, setCategory] = useState('');
  // const _onSubmit = (value) => {
  //   setCategory(value);
  // };
  return (
    <IntrServicesStyled className="services">
      <h2 className="nonVisible">우푸 서비스 소개</h2>
      {/* <IntroServicesVision selected={category} /> */}
      {/* 유즈리듀서 활용 프롭 전달 구현 중 */}
      <IntroServicesVision />
      {/* <ServicesDetails onSubmit={_onSubmit} /> */}
      <ServicesDetailsReducer />
      {/* 유즈리듀서 활용 프롭 전달 구현 중 */}
      <ServicesFeatures />
    </IntrServicesStyled>
  );
};

export default IntroServices;
