import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = () => {
  return (
    <div className="servicesWrapper">
      {/* <!-- 본문 시작 --> */}
      <main className="services">
        {/* <!-- 우푸 서비스 소개 시작 --> */}
        <section className="services__vision">
          {/* <!-- 우푸 비전 소개 시작 --> */}
          <h2 className="services__vision__title nonVisible">우푸 소개</h2>
          <div className="services__vision__detail">
            <strong>Love Pet,
            Live Together!</strong>
            <p>우푸는 반려동물을 사랑하는 마음으로 보호자와 반려동물의 행복한 공존, 사람과 반려동물이 함께 어울리는 세상을 만들기 위해 즐거운 일을 합니다.
            
            우리는 보호자를 대신하여 반려동물에게는 스트레스 받지 않고 힐링이 되는 서비스를 제공하고, 보호자에게는 믿고 안심할 수 있는 서비스를 제공하며 더 나아가 우푸 버디에게는 더 많은 일자리를 창출하는 꿈을 가지고 나아가고 있습니다.</p>
          </div>
          <button type="button">첫 이용 할인</button>
          {/* <!-- 우푸 비전 소개 끝 --> */}
        </section>
        <ul className="services__category">
          {/* <!-- 서비스 카테고리 시작 --> */}
          <li className="active">도그워킹</li>
          <li>방문돌봄</li>
          <li>펫시팅</li>
          <li>데이케어</li>
          {/* <!-- 서비스 카테고리 끝 --> */}
        </ul>
        <div className="services__contents">
          <section className="dogWalking active">
            {/* <!-- 도그워킹 서비스 소개 시작 --> */}
            <h2 className="dogWalking__title nonVisible">도그워킹</h2>
            <div className="dogWalking__descript">
              <h3>
                사랑하는 나의 반려견에게 최고의 산책을 선물해 주세요!
              </h3>
              산책은 하루 종일 한 공간에서 지내는 강아지들이
              기분을 전환하고 몸과 마음을 건강하게 만드는 활동입니다.
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
                집을 비워야 하나요? 간편하게 우푸 버디를 불러보세요!
              </h3>
              매일 생활하는 익숙한 공간에서 서비스가 진행되므로 예민한 아이들의 스트레스를 최소화할 수 있는 최적의 서비스입니다.
            </div>
            <div className="doorToDoor__figures">
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
            </div>
            <!-- 방문돌봄 서비스 소개 끝 -->
          </section>
          <section className="privateCare">
            {/* <!-- 프라이빗 펫시팅 서비스 소개 시작 --> */}
            <h2 className="privateCare__title nonVisible">프라이빗 펫시팅</h2>
            <div className="privateCare__descript">
              <h3>
                우리 아이만 돌봐주는 프라이빗 펫시팅 서비스!
              </h3>
              우푸의 프라이빗 서비스는 우푸 버디가 보호자님의 강아지만을 1:1로 케어하기 때문에 안심하고 맡기실 수 있습니다.
            </div>
            <div className="privateCare__figures">
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
            </div>
            {/* <!-- 프라이빗 펫시팅 서비스 소개 끝 --> */}
          </section>
          <section className="dayCare">
            {/* <!-- 데이케어 서비스 소개 시작 --> */}
            <h2 className="dayCare__title nonVisible">데이케어</h2>
            <div className="dayCare__descript">
              <h3>
                소중한 우리 반려견 잠시라도 혼자 둘 수 없다면?
              </h3>
              집에서 가까운 우푸 버디를 찾아 맡겨보세요! 혼자 있을 아이를 걱정할 필요도, 낮선 친구들과 부딪혀 스트레스를 받을 걱정도 없습니다.
            </div>
            <div className="dayCare__figures">
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
            </div>
            {/* <!-- 데이케어 서비스 소개 끝 --> */}
          </section>
        </div>
        {/* <!-- 우푸 서비스 소개 끝 --> */}
      </main>
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
    </div>
  );
};

export default ServicesWrapper;