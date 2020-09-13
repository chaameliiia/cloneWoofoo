import React from 'react';
import styled from 'styled-components';
import ReserveWrapper from 'components/index/ReserveWrapper';
import IntroBuddyWrapper from 'components/index/IntroBuddyWrapper';
import IntroWfWrapper from 'components/index/IntroWfWrapper';
import ReviewWrapper from 'components/index/ReviewWrapper';

const Box = styled.div`
  border: 2px solid #f00;
  width: 100%;
`;

const MainWrapper = ({ colors }) => {
  return (
    <Box className="MainWrapper"
      colors={colors}
    >
      {/* <!-- 본문 시작 --> */}
      <ReserveWrapper
        colors={colors}
      />
      <IntroBuddyWrapper
        colors={colors}
      />
      <IntroWfWrapper
        colors={colors}
      />
      <ReviewWrapper
        colors={colors}
      />
      <article className="bannerMain">
        {/* <!-- 앱 다운로드 배너 시작 --> */}
        <h2 className="bannerMain__title nonVisible">앱 다운로드</h2>
        <div className="bannerMain__background">
          <img src="/src/assets/img/main/img_appPreview.png" alt="" className="bannerMain_img" />
          <div className="bannerMain__background__text">
            <span>
              새로워진 <strong>우푸</strong>앱을 만나보세요!
            </span>
            <a href="/" title="앱 다운로드">앱 다운로드</a>
          </div>
        </div>
        {/* <!-- 앱 다운로드 배너 끝 --> */}
      </article>
      {/* <!-- 본문 끝 --> */}
    </Box>
  );
};

export default MainWrapper;