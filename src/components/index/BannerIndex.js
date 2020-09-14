import React from 'react';
import styled from 'styled-components';

const BannerStyled = styled.article`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: flex-end;
  margin-top: 5rem;
  width: 100%;

  &__background {
    align-items: flex-end;
    background: $grayLighter;
    display: flex;
    height: 310px;
    justify-content: center;
    width: 100%;

    img {
      height: 400px;
      width: auto;
    }

    &__text {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 3rem 0 0 3rem;
      width: 25%;
      
      span {
        font-size: $font32;
        margin-bottom: 2rem;
        text-align: center;
        width: 100%;
        
        strong {
          color: $greenDark;
          font-size: inherit;
        }
      }

      a {
        background: $greenDark;
        border-radius: 32px;
        color: $white;
        font-size: $font20;
        padding: .8rem 1.5rem;
        text-align: center;
        width: 235px;

        &:hover {
          background: $greenLight;
        }
      }
    }
  }
`;

const BannerIndex = () => {
  return (
    <article className="bannerIndex">
      {/* <!-- 앱 다운로드 배너 시작 --> */}
      <h2 className="bannerIndex__title nonVisible">앱 다운로드</h2>
      <div className="bannerIndex__background">
        <img src="/src/assets/img/main/img_appPreview.png" alt="" className="bannerIndex_img" />
        <div className="bannerIndex__background__text">
          <span>
            새로워진 <strong>우푸</strong>앱을 만나보세요!
          </span>
          <a href="/" title="앱 다운로드">앱 다운로드</a>
        </div>
      </div>
      {/* <!-- 앱 다운로드 배너 끝 --> */}
    </article>
  );
};

export default BannerIndex;