import React from 'react';
import styled from 'styled-components';
import * as urls from '../common/imgUrls/servicesImgs';

const ContentsSteyled = styled.div`
  section {
    display: none;
    margin: 0 auto;
    text-align: center;
    width: 80%;
    
    > div {
      font-size: 20px;
      margin: 0 auto;
      padding: 3rem 0;
      width: 50%;
      word-break: keep-all;

      h3 {
        font-size: 32px;
        font-weight: 600;
        padding:1rem 0 2rem;
        white-space: pre-line;
      }
    }
    
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;

      li {
        padding-top: 480px;
        width: 320px;

        span {
          font-size: 26px;
          padding: 1rem 2rem;
          word-break: keep-all;
        }
      }
    }
  
    &.active {
      display: block;
    }
  }



  section:nth-of-type(1) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.feed}) top/100% no-repeat;
      }
      li:nth-of-type(3) {
        background: url(${urls.course}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(2) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.cleaning}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }
      li:nth-of-type(3) {
        background: url(${urls.catSitting}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(3) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }
      li:nth-of-type(3) {
        background: url(${urls.grooming}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(4) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }
      li:nth-of-type(3) {
        background: url(${urls.grooming}) top/100% no-repeat;
      }
    }
  }
`;


const ServicesDetails = () => {
  return (
    <ContentsSteyled
      className="services__contents"
    >
      <section className="dogWalking active">
        {/* <!-- 도그워킹 서비스 소개 시작 --> */}
        <h2 className="dogWalking__title nonVisible">도그워킹</h2>
        <div className="dogWalking__descript">
          <h3>
            사랑하는 나의 반려견에게 최고의
            <br />
            산책을 선물해 주세요!
          </h3>
          산책은 하루 종일 한 공간에서 지내는 강아지들이 기분을 전환하고 몸과 마음을 건강하게 만드는 활동입니다.
        </div>
        <ul className="dogWalking__figures">
          <li>
            {/* <img src="/src/assets/img/services/dogWalking/img_walk.jpg" alt=""> */}
            <span>전문가와 함께하는 안전한 산책</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/dogWalking/img_feed.jpg" alt=""> */}
            <span>걱정 없이 다녀오세요! 사료 챙겨주기</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/dogWalking/img_course.jpg" alt=""> */}
            <span>보호자와 함께 짜는 맞춤형 산책 코스</span>
          </li>
        </ul>
        {/* <!-- 도그워킹 서비스 소개 끝 --> */}
      </section>
      <section className="doorToDoor">
        {/* <!-- 방문돌봄 서비스 소개 시작 --> */}
        <h2 className="doorToDoor__title nonVisible">방문돌봄</h2>
        <div className="doorToDoor__descript">
          <h3>
            집을 비워야 하나요?
            <br />
            간편하게 우푸 버디를 불러보세요!
          </h3>
          매일 생활하는 익숙한 공간에서 서비스가 진행되므로 예민한 아이들의 스트레스를 최소화할 수 있는 최적의 서비스입니다.
        </div>
        <ul className="doorToDoor__figures">
          <li>
            {/* <img src="/src/assets/img/services/doorToDoor/img_cleaning.jpg" alt=""> */}
            <span>혼자 있는 집도 청결하게 환경 정리</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/doorToDoor/img_playTime.jpg" alt=""> */}
            <span>어깨가 들썩들썩 신나는 놀이시간</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/doorToDoor/img_catSitting.jpg" alt=""> */}
            <span>1일 집사의 완벽한 캣시팅</span>
          </li>
        </ul>
        {/* <!-- 방문돌봄 서비스 소개 끝 --> */}
      </section>
      <section className="privateCare">
        {/* <!-- 프라이빗 펫시팅 서비스 소개 시작 --> */}
        <h2 className="privateCare__title nonVisible">프라이빗 펫시팅</h2>
        <div className="privateCare__descript">
          <h3>
            우리 아이만 돌봐주는
            <br />
            프라이빗 펫시팅 서비스!
          </h3>
          우푸의 프라이빗 서비스는 우푸 버디가 보호자님의 강아지만을 1:1로 케어하기 때문에 안심하고 맡기실 수 있습니다.
        </div>
        <ul className="privateCare__figures">
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_walk.jpg" alt=""> */}
            <span>전문가와 함께하는 안전한 산책</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_playTime.jpg" alt=""> */}
            <span>어깨가 들썩들썩 신나는 놀이시간</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_grooming.jpg" alt=""> */}
            <span>혈액순환에 도움을 주는 그루밍</span>
          </li>
        </ul>
        {/* <!-- 프라이빗 펫시팅 서비스 소개 끝 --> */}
      </section>
      <section className="dayCare">
        {/* <!-- 데이케어 서비스 소개 시작 --> */}
        <h2 className="dayCare__title nonVisible">데이케어</h2>
        <div className="dayCare__descript">
          <h3>
            소중한 우리 반려견
            <br />
            잠시라도 혼자 둘 수 없다면?
          </h3>
          집에서 가까운 우푸 버디를 찾아 맡겨보세요! 혼자 있을 아이를 걱정할 필요도, 낮선 친구들과 부딪혀 스트레스를 받을 걱정도 없습니다.
        </div>
        <ul className="dayCare__figures">
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_walk.jpg" alt=""> */}
            <span>전문가와 함께하는 안전한 산책</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_playTime.jpg" alt=""> */}
            <span>어깨가 들썩들썩 신나는 놀이시간</span>
          </li>
          <li>
            {/* <img src="/src/assets/img/services/privateCare/img_grooming.jpg" alt=""> */}
            <span>혈액순환에 도움을 주는 그루밍</span>
          </li>
        </ul>
        {/* <!-- 데이케어 서비스 소개 끝 --> */}
      </section>
    </ContentsSteyled>
  );
};

export default ServicesDetails;