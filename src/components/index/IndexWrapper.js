import React from "react";
import styled from "styled-components";
import ReserveWrapper from "components/index/ReserveWrapper";
import IntroBuddyWrapper from "components/index/IntroBuddyWrapper";
import IntroWfWrapper from "components/index/IntroWfWrapper";
// import ReviewWrapper from "components/index/ReviewWrapper";
import BannerIndex from "components/index/BannerIndex";
import Help from "components/common/Help";

const IndexStyled = styled.div`
  width: 100%;
`;

const IndexWrapper = ({ onClick }) => {
  return (
    <>
      <IndexStyled
        onClick={onClick}
      >
        <ReserveWrapper className="reserve" />
        <IntroBuddyWrapper className="introBuddy" />
        <IntroWfWrapper className="introWoofoo" />
        {/* <ReviewWrapper className="review" /> */}
        <BannerIndex className="bannerIndex" />
      </IndexStyled>
      <Help />
    </>
  );
};

export default IndexWrapper;
