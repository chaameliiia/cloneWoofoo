import React from 'react';
import styled from 'styled-components';
import { bgIncruit, incruitBuddy } from '../common/imgUrls/incruitBuddyImgs';

const IncBuddyStyled = styled.main`
  align-items: center;
  background: url(${bgIncruit}) top/100% 100% no-repeat;
  display: flex;
  justify-content: flex-start;
  padding-top: 180px;
  width: 100%;

  .incruitBuddy__text {
    background: url(${incruitBuddy}) right top/auto 435px no-repeat;
    margin-left: 14rem; 
    text-align: center;
    padding: 7rem 385px 11rem 0;

    p {
      font-size: 28px;
      padding-bottom: 2rem;
      white-space: pre-line;

      strong {
        font-size: 48px;
      }
    }
    
    button {
      background: ${props => props.colors.greenDark};
      border-radius: 8px;
      color: ${props => props.colors.white};
      font-size: 24px;
      padding: .5rem 0;
      width: 260px;

      &:hover {
        background: ${props => props.colors.greenLight};
      }
    }
  }
`;

const BuddyIncruit = ({ colors }) => {
  return (
    <IncBuddyStyled colors={colors}>
      {/* <!-- 버디 모집 예정 시작--> */}
      <div className="incruitBuddy__text">
        <p>
          전문 도그워커, 방문돌봄 펫시터
          <br />
          <strong>우푸와 함께하세요!</strong>
        </p>
        <button type="button">버디 모집 예정</button>
      </div>
      {/* <!-- 버디 모집 예정 끝--> */}
    </IncBuddyStyled>
  );
};

export default BuddyIncruit;