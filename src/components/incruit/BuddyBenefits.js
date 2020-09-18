import React from 'react';
import styled from 'styled-components';
import * as urls from '../common/imgUrls/incruitBuddyImgs';

const BenefitsStyled = styled.section`
  margin: 0 auto;
  padding-top: 8rem;
  width: 630px;

  .benefits__title {
    background:
      url(${urls.quotation1}) left top/50px no-repeat,
      url(${urls.quotation2}) right bottom/50px no-repeat;
    margin-bottom: 4rem;
    text-align: center;
    width: 100%;
    
    p {
      font-size: 20px;
      padding-top: .5rem;
    }
  }

  .benefits__details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 5rem;
    width: 100%;

    section {
      padding-bottom: 5rem;
      text-align: center;
      width: 260px;

      h4 {
        font-size: 20px;
        font-weight: 600;
        padding: 100px 0 .5rem;
      }

      span {
        font-size: 16px;
        width: 250px;
        word-break: keep-all;
      }
    
      &:nth-of-type(1) {
        h4 {
          background: url(${urls.revenue}) 50% 10px/80px no-repeat;
        }
      }

      &:nth-of-type(2) {
        h4 {
          background: url(${urls.supervise}) 50% 10px/80px no-repeat;
        }
      }

      &:nth-of-type(3) {
        h4 {
          background: url(${urls.buddyInsurance}) 50% 10px/80px no-repeat;
        }
      }

      &:nth-of-type(4) {
        h4 {
          background: url(${urls.education}) 50% 10px/80px no-repeat;
          padding-bottom: 0;
        }
      }
    }
  }
`;

const benefitsDetail = [
  {
    id: 1,
    eng: 'revenue',
    title: '원하는 수익금 설정 가능',
    descript: '스스로 서비스 제공 금액을 정하고, 최대 이윤을 창출하세요!'
  },
  {
    id: 2,
    eng: 'supervise',
    title: '우푸의 수퍼바이징 서비스',
    descript: '우푸의 전문 훈련사가 직접 찾아가 도움을 드립니다.'
  },
  {
    id: 3,
    eng: 'buddyInsurance',
    title: '버디 안전보험 적용',
    descript: '모든 활동 버디에게 체계적인 안전보험이 적용됩니다!'
  },
  {
    id: 4,
    eng: 'education',
    title: '전문 교육 및 물품 지원',
    descript: '도그워킹, 방문돌봄 전문 교육 및 활동 물품을 지원해 드립니다.'
  },
];

const BuddyBenefits = () => {
  return (
    <BenefitsStyled>
      {/* <!-- 버디 활동 혜택 시작 --> */}
      <h2 className="nonVisible">버디 활동 혜택</h2>
      <div className="benefits__title">
        <h3>버디 활동 혜택</h3>
        <p>
          일에만 집중하세요, 나머지는 우푸가 다 할게요!
        </p>
      </div>
      <div className="benefits__details">
        {benefitsDetail.map(v => {
          return(
            <section
              key={v.id}
              className={v.eng}
            >
              <h4
                className={`${v.eng}__title`}
              >
                {v.title}
              </h4>
              <span
                className={`${v.eng}__descript`}
              >
                {v.descript}
              </span>
            </section>
          )
        })}
      </div>
      {/* <!-- 버디 활동 혜택 끝 --> */}
    </BenefitsStyled>
  );
};

export default BuddyBenefits;