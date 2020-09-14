import React from 'react';
import styled from 'styled-components';
import IntroServices from './IntroServices';
import IntroVisionWrapper from './IntroVisionWrapper';

const ServicesStyled = styled.div`
  width: 100%;

  .services {
    width: 100%;
  }
`;

const ServicesWrapper = ({ colors }) => {
  return (
    <ServicesStyled
      colors={colors}
      className="servicesWrapper"
    >
      {/* <!-- 본문 시작 --> */}
        {/* <!-- 우푸 서비스 소개 시작 --> */}
      <IntroVisionWrapper
        colors={colors}
      />
      <IntroServices
        colors={colors}
      />
      <section className="features">
        {/* <!-- 우푸 특징 소개 시작 --> */}
        <ul className="features__category">
          <li className="active">맞춤 버디 찾기</li>
          <li>채팅방 문의</li>
          <li>라이브 트래킹</li>
          <li>서비스 일지</li>
        </ul>
        <div className="features__contents">
          <section className="matchBuddy active">
            <h3 className="matchBuddy__title">맞춤 버디 찾기</h3>
            <p className="matchBuddy__descript">
              오직 당신만을 위한, 당신에게 딱 필요한 버디! 원하는 조건에 맞는 우푸 버디를 확인할 수 있습니다.
            </p>
            {/* <img src="/src/assets/img/services/img_matchBuddy.png" alt=""> */}
          </section>
          <section className="chatSystem">
            <h3 className="chatSystem__title">채팅방 문의</h3>
            <p className="chatSystem__descript">
              필터를 통해 맞춤 도그워커를 찾아보세요. 내 반려견에게 맞는 도그워커를 확인할 수 있습니다.
            </p>
            {/* <img src="/src/assets/img/services/img_chatSystem.png" alt="" className="shallow"> */}
          </section>
          <section className="liveTracking">
            <h3 className="liveTracking__title">라이브 트래킹</h3>
            <p className="liveTracking__descript">
              실시간 위치 추적을 통해 반려견의 현재 위치와 사진을 바로바로 확인하실 수 있습니다.
            </p>
            {/* <img src="/src/assets/img/services/img_liveTracking.png" alt="" className="shallow"> */}
          </section>
          <section className="journal">
            <h3 className="journal__title">서비스 일지</h3>
            <p className="journal__descript">
              서비스가 종료된 후 버디가 보내주는 서비스 일지를 통해 진행된 서비스를 편하게 확인할 수 있습니다.
            </p>
            {/* <img src="/src/assets/img/services/img_journal.png" alt=""> */}
          </section>
          {/* <!-- 우푸 특징 소개 시작 --> */}
        </div>
        {/* <!-- 우푸 서비스 소개 끝 --> */}
      </section>
      {/* <!-- 본문 끝 --> */}
    </ServicesStyled>
  );
};

export default ServicesWrapper;