import React from 'react';
import styled from 'styled-components';
import BuddyBenefits from './BuddyBenefits';
import BuddyEligibility from './BuddyEligibility';
import BuddyIncruit from './BuddyIncruit';
import BuddyProcess from './BuddyProcess';

const IncWrapperStyled = styled.div`
  height: auto;
  width: 100%;
`;

const IncruitWrapper = ({ colors }) => {
  return (
    <IncWrapperStyled
      colosr={colors}
      className="mainWrapper"
    >
      {/* <!-- 본문 시작 --> */}
      <BuddyIncruit
        colors={colors}
      />
      <BuddyBenefits />
      <BuddyEligibility
        colors={colors}
      />
      <BuddyProcess />
      {/* <!-- 본문 끝 --> */}
    </IncWrapperStyled>
  );
};

export default IncruitWrapper;