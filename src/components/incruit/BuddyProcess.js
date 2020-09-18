import React from 'react';
import styled from 'styled-components';
import * as urls from '../common/imgUrls/incruitBuddyImgs';

const ProcessStyled = styled.section`
  padding: 5rem 0 6rem;
  width: 100%;

  .process__title {
    background: 
      url(${urls.quotation1}) left top/50px no-repeat,
      url(${urls.quotation2}) right bottom/50px no-repeat;
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;
    width: 630px;
  }

  .process__details {
    ${`background:
      url(${urls.filledArrowR}) 132px 50%/10px no-repeat,
      url(${urls.filledArrowR}) calc(132px + 160px) 50%/10px no-repeat,
      url(${urls.filledArrowR}) calc(132px + (160px * 2)) 50%/10px no-repeat,
      url(${urls.filledArrowR}) calc(132px + (160px * 3)) 50%/10px no-repeat;`}
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 60%;

    li {
      padding-top: 130px;
      text-align: center;
      width: 120px;
    
      &:nth-of-type(1) {
        background: url(${urls.process1}) center top/100% no-repeat;
      }

      &:nth-of-type(2) {
        background: url(${urls.process2}) center top/100% no-repeat;
      }

      &:nth-of-type(3) {
        background: url(${urls.process3}) center top/100% no-repeat;
      }

      &:nth-of-type(4) {
        background: url(${urls.process4}) center top/100% no-repeat;
      }

      &:nth-of-type(5) {
        background: url(${urls.process5}) center top/100% no-repeat;
      }
    }

  }
`;

const processDetails = [
  {
    id: 1,
    descript: '온라인 지원',
  },
  {
    id: 2,
    descript: '화상 면접',
  },
  {
    id: 3,
    descript: '온라인 교육',
  },
  {
    id: 4,
    descript: '오프라인 교육',
  },
  {
    id: 5,
    descript: '최종 등록',
  },
];

const BuddyProcess = () => {
  return (
    <ProcessStyled>
      {/* <!-- 버디 지원 절차 시작 --> */}
      <h2 className="nonVisible">버디 지원 절차</h2>
      <h3 className="process__title">
        버디 지원 절차
      </h3>
      <ul className="process__details">
        {processDetails.map(v => {
          return(
            <li key={v.id}>
              {v.descript}
            </li>
          )
        })}
      </ul>
      {/* <!-- 버디 지원 절차 끝 --> */}
    </ProcessStyled>
  );
};

export default BuddyProcess;