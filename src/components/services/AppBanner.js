import React from 'react';
import styled from 'styled-components';
import { playStore, appStore } from '../common/imgUrls/servicesImgs.js';

const AppBannerStyled = styled.article`
  background: ${props => props.colors.grayBack};
  padding: 2.5rem 0;
  text-align: center;
  width: 100%;

  .bannerBox__descript {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  .bannerBox__btn {
    button {
      border: 1px solid ${props => props.colors.grayDark};
      border-radius: 32px;
      color: ${props => props.colors.grayDark};
      font-size: 16px;
      padding: .5rem 0;
      text-align: left;
      width: 240px;

      &:nth-of-type(1) {
        background: ${props => props.colors.white} url(${playStore}) 10% 50%/32px no-repeat;
        padding-left: 3rem;
        margin-right: 2rem;
      }

      &:nth-of-type(2) {
        background: ${props => props.colors.white} url(${appStore}) 10% 50%/32px no-repeat;
        padding-left: 3.5rem;
      }

      &:hover {
        background-color: ${props => props.colors.grayDark};
        color: ${props => props.colors.white};
      }

      &:active {
        background-color: ${props => props.colors.grayLight};
        border: 1px solid ${props => props.colors.grayLight};
        color: ${props => props.colors.white};
      }
    }
  }
`;

const AppBanner = ({ colors }) => {
  return (
    <AppBannerStyled
      colors={colors}
      className="bannerBox"
    >
      <h2 className="bannerBox__title nonVisible">앱 다운로드</h2>
      <strong className="bannerBox__descript">
        단 1분만에 예약하는 방법! 앱을 이용해 간편하게 예약하세요.
      </strong>
      <div className="bannerBox__btn">
        <button type="button">플레이 스토어 바로가기</button>
        <button type="button">앱 스토어 바로가기</button>
      </div>
    </AppBannerStyled>
  );
};

export default AppBanner;