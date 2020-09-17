import React from 'react';
import styled from 'styled-components';
import 
  {
    quotation3,
    quotation4,
    check,
  } from '../common/imgUrls/incruitBuddyImgs';

const EligibilityStyled = styled.section`
  background: ${props => props.colors.grayBack};
  padding-top: 5rem;
  text-align: center;
  width: 100%;

  .eligibility__title {
    background:
      url(${quotation3}) left top/50px no-repeat,
      url(${quotation4}) right bottom/50px no-repeat;
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;
    width: 630px;

    p {
      font-size: 20px;
      padding-top: .5rem;
    }
  }

  .eligibility__details {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 5rem;
    width: 25%;

    li {
      background: url(${check}) left/20px no-repeat;
      margin-bottom: .5rem;
      padding-left: 2rem;
      text-align: left;
    }
  }
`;

const eligibilityDetails = [
  {
    id: 1,
    descript: '만 20세 이상 성별, 학력, 경력 무관',
  },
  {
    id: 2,
    descript: '서울, 경기, 인천 수도권 거주자 우대',
  },
  {
    id: 3,
    descript: '반려견, 반려묘 키워본 경험자 우대',
  },
];

const BuddyEligibility = ({ colors }) => {
  return (
    <EligibilityStyled
      colors={colors}
      className="eligibility"
    >
      {/* <!-- 버디 지원 자격 시작 --> */}
      <h2 className="nonVisible">버디 지원자격</h2>
      <div className="eligibility__title">
        <h3>버디 지원자격</h3>
        <p>
          강아지, 고양이 사랑하는 마음 받고 더블로 가!
        </p>
      </div>
      <ul className="eligibility__details">
        {eligibilityDetails.map(v => {
          return(
            <li key={v.id}>{v.descript}</li>
          )
        })}
      </ul>
      {/* <!-- 버디 지원 자격 끝 --> */}
    </EligibilityStyled>
  );
};

export default BuddyEligibility;