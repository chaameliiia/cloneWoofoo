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

const IncruitWrapper = ({ colors, onClick }) => {
  return (
    <IncWrapperStyled
      colosr={colors}
      onClick={onClick}
    >
      {/* <!-- 본문 시작 --> */}
      <BuddyIncruit
        colors={colors}
        className="incruitBuddy"
      />
      <BuddyBenefits className="benefits" />
      <BuddyEligibility
        colors={colors}
        className="eligibility"
      />
      <BuddyProcess className="process" />
      {/* <!-- 본문 끝 --> */}
    </IncWrapperStyled>
  );
};

export default IncruitWrapper;