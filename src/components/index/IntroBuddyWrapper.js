import React, { useContext } from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/indexImgs';
import { ColorContext } from 'contexts/ColorContext';

const IntroBuddyStyled = styled.section`
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 70%;

  .introBuddy__title {
    padding: 3rem 0;
  }

  .introBuddy__features {
    border-bottom: 1px solid ${props => props.colors.grayLight};
    display: flex;
    justify-content: space-between;
    padding-bottom: 5rem;
    width: 100%;

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      width: 30%;

      p {
        padding-top: 7.5rem;
        text-align: center;
        width: 250px;
        word-break: keep-all;
      }
      
      &:nth-of-type(1) {
        p {
          background: url(${urls.screening}) top/140px no-repeat;
        }
      }

      &:nth-of-type(2) {
        p {
          background: url(${urls.test}) top/140px no-repeat;
        }
      }

      &:nth-of-type(3) {
        p {
          background: url(${urls.identification}) top/140px no-repeat;
        }
      }
    }

  }
`;

const featuresDetail = [
  {
    id: 1,
    descript: "10단계의 까다로운 선발 절차",
  },
  {
    id: 2,
    descript: "도그워킹, 방문돌봄 전문 교육 수료 3개의 버디 테스트 모두 통과",
  },
  {
    id: 3,
    descript: "3단계에 걸친 확실한 신원 인증",
  },
];

const IntroBuddyWrapper = () => {
  const colors = useContext(ColorContext);
  
  return (
    <IntroBuddyStyled colors={colors}>
      {/* <!-- 버디 소개 시작 --> */}
      <h2 className="introBuddy__title">믿고 맡기는 우푸 버디</h2>
      <ul className="introBuddy__features">
        {featuresDetail.map(v => {
          return (
            <li
              key={v.id}
            >
              <p>{v.descript}</p>
            </li>
          )
        })}
      </ul>
      {/* <!-- 버디 소개 끝 --> */}
    </IntroBuddyStyled>
  );
};

export default IntroBuddyWrapper;