import React from "react";
import styled from "styled-components";
import ReserveWrapper from "components/index/ReserveWrapper";
import IntroBuddyWrapper from "components/index/IntroBuddyWrapper";
import IntroWfWrapper from "components/index/IntroWfWrapper";
import ReviewWrapper from "components/index/ReviewWrapper";
import BannerIndex from "components/index/BannerIndex";
import Help from "components/common/Help";

const IndexStyled = styled.div`
  width: 100%;
`;

const IndexWrapper = ({ colors, onClick }) => {
  return (
    <>
      <IndexStyled
        colors={colors}
        onClick={onClick}
      >
        <ReserveWrapper
          colors={colors}
          className="reserve"
        />
        <IntroBuddyWrapper
          colors={colors}
          className="introBuddy"
        />
        <IntroWfWrapper
          colors={colors}
          className="introWoofoo"
        />
        <ReviewWrapper
          colors={colors}
          className="review"
        />
        <BannerIndex
          colors={colors}
          className="bannerIndex"
        />
      </IndexStyled>
      <Help colors={colors} />
    </>
  );
};

export default IndexWrapper;
