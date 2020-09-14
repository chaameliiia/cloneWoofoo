import React from 'react';
import styled from 'styled-components';
import ReserveWrapper from 'components/index/ReserveWrapper';
import IntroBuddyWrapper from 'components/index/IntroBuddyWrapper';
import IntroWfWrapper from 'components/index/IntroWfWrapper';
import ReviewWrapper from 'components/index/ReviewWrapper';
import BannerIndex from 'components/index/BannerIndex';

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
      <BannerIndex />
      {/* <!-- 본문 끝 --> */}
    </Box>
  );
};

export default MainWrapper;