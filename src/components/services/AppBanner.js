import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import { playStore, appStore } from '../common/imgUrls/commonImgs.js';

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

const AppBanner = () => {
  const colors = useContext(ColorContext);
  const playStoreLink = "https://play.google.com/store/apps/details?id=net.walkydoggy.walkydoggytest";
  const appStoreLink = "https://apps.apple.com/kr/app/%EC%9A%B0%ED%91%B8-%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC-%EC%82%B0%EC%B1%85-%EB%B0%A9%EB%AC%B8%EB%8F%8C%EB%B4%84-%ED%8E%AB%EC%8B%9C%ED%84%B0/id1261747950";

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
        <Link to={playStoreLink}>플레이 스토어 바로가기</Link>
        <Link to={appStoreLink}>앱 스토어 바로가기</Link>
      </div>
    </AppBannerStyled>
  );
};

export default AppBanner;