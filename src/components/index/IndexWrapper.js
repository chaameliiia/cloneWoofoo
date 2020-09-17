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

const IndexWrapper = ({ colors }) => {
  return (
    <>
      <IndexStyled colors={colors} className="MainWrapper">
        <ReserveWrapper colors={colors} />
        <IntroBuddyWrapper colors={colors} />
        <IntroWfWrapper colors={colors} />
        <ReviewWrapper colors={colors} />
        <BannerIndex colors={colors} />
      </IndexStyled>
      <Help colors={colors} />
    </>
  );
};

export default IndexWrapper;
