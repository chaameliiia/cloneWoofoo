import React from 'react';
import styled from 'styled-components';
import ReserveWrapper from 'components/index/ReserveWrapper';
import IntroBuddy from 'components/index/IntroBuddy';

const Box = styled.div`
  border: 2px solid #f00;
  width: 100%;
`;

const IndexWrapper = ({ colors }) => {
  return (
    <Box className="MainWrapper"
      colors={colors}
    >
      {/* <!-- 본문 시작 --> */}
      <ReserveWrapper
        colors={colors}
      />
      <IntroBuddy
        colors={colors}
      />
      <section className="introService">
        {/* <!-- 우푸 특징 소개 시작 --> */}
        <h2 className="introService__title">언제나 안심되는 우푸 서비스</h2>
        <ul className="introService__category">
          <li className="active">전문 훈련사 출동 서비스</li>
          <li>반려동물 안전 보험</li>
          <li>안심존 케어</li>
          <li>라이브 트래킹</li>
        </ul>
        <ul className="introService__details">
          <li className="active">
            <img src="/src/assets/img/main/ic_trainer.png" alt="" />
            <p>
              <strong>전문 훈련사 출동 서비스</strong>
              서비스 진행 중 도움이 필요할 경우, 전문 훈련사가 직접 찾아갑니다.(수도권 한정)
            </p>
          </li>
          <li>
            <img src="/src/assets/img/main/ic_insurance.png" alt="" />
            <p>
              <strong>반려동물 안전 보험</strong>
              서비스를 이용하는 모든 반려동물에게 우푸에서 제공하는 체계적인 안전 보험이 적용됩니다.
            </p>
          </li>
          <li>
            <img src="/src/assets/img/main/ic_safetyZone.png" alt="" />
            <p>
              <strong>안심존 케어</strong>
              들어가지 않았으면 하는 공간은 안심 스티커를 붙여주세요. 버디는 보호자가 설정한 안심존에서만 서비스를 진행합니다.
            </p>
          </li>
          <li>
            <img src="/src/assets/img/main/ic_liveTracking.png" alt="" />
            <p>
              <strong>라이브 트래킹</strong>
              실시간 위치 추적을 통해 반려동물의 현재 위치와 사진을 빠르게 확인하세요.
            </p>
          </li>
        </ul>
        {/* <!-- 우푸 특징 소개 끝 --> */}
      </section>
      <section className="review">
        {/* <!-- 소비자 후기 시작 --> */}
        <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
        <ul className="review__contents">
          <li className="review__contents__page">1
          {/* <!-- 1 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 1 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">2
          {/* <!-- 2 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 2 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">3
          {/* <!-- 3 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 3 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">4
          {/* <!-- 4 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 4 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">5
          {/* <!-- 5 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 5 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">6
          {/* <!-- 6 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 6 페이지 끝 --> */}
          </li>
          <li className="review__contents__page">7
          {/* <!-- 7 페이지 시작 --> */}
            <ul>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer1.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>쿠미 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  감사합니다
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer2.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>조이 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>1일 전</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~
                </p>
              </li>
              <li>
                <div className="profile">
                  <img src="/src/assets/img/main/review/img_reviewer3.jpg" alt="" className="profile__pic" />
                  <div className="profile__details">
                    <p>망고 보호자님</p>
                    <div>
                      <span>
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                        <img src="/src/assets/img/main/review/ic_starOn.png" alt="" />
                      </span>
                      <span>오늘</span>
                    </div>
                  </div>
                </div>
                <p className="descript">
                  습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~
                </p>
              </li>
            </ul>
            {/* <!-- 7 페이지 끝 --> */}
          </li>
        </ul>
        <div className="review__btn">
          <button type="button"></button>
          <button type="button"></button>
        </div>
        {/* <!-- 소비자 후기 끝 --> */}
      </section>
      <article className="bannerMain">
        {/* <!-- 앱 다운로드 배너 시작 --> */}
        <h2 className="bannerMain__title nonVisible">앱 다운로드</h2>
        <div className="bannerMain__background">
          <img src="/src/assets/img/main/img_appPreview.png" alt="" className="bannerMain_img" />
          <div className="bannerMain__background__text">
            <span>
              새로워진 <strong>우푸</strong>앱을 만나보세요!
            </span>
            <a href="/" title="앱 다운로드">앱 다운로드</a>
          </div>
        </div>
        {/* <!-- 앱 다운로드 배너 끝 --> */}
      </article>
      {/* <!-- 본문 끝 --> */}
    </Box>
  );
};

export default IndexWrapper;