import React from 'react';
import styled from 'styled-components';

const ReviewPagesStyled = styled.li`
  ${'' /* // 소비자 후기 페이지 별 컨테이너 시작 */}
  font-size: 0;
  ${'' /* // 페이지 번호 숨김 */}
  height: auto;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    li {
      ${'' /* // 사용자별 컨테이너 시작 */}
      border: 1px solid ${props => props.colors.grayDark};
      border-radius: 4px;
      min-height: 350px;
      padding: 1rem;
      width: 32%;

      .profile {
        ${'' /* // 프로필 정보 시작 */}
        display: flex;
        margin-bottom: 1rem;
        width: 100%;
        
        .profile__pic {
          border-radius: 50%;
          height: 44px;
          width: 44px;
        }

        .profile__details {
          display: flex;
          flex-direction: column;
          padding-left: .5rem;
          width: 100%;

          div {
            width: 100%;

            span {
              height: auto;
              color: ${props => props.colors.grayDark};
              font-size: 16px;

              img {
                height: auto;
                width: 16px;
              }
            }
          }
        }
        /* // 프로필 정보 끝 */
      }

      .descript {
        ${'' /* // 후기 내용 시작 */}
        font-size: 16px;
        word-break: keep-all;
        ${'' /* // 후기 내용 끝 */}
      }
      ${'' /* // 사용자별 컨테이너 끝 */}
    }
  }
  ${'' /* // 소비자 후기 페이지 별 컨테이너 끝 */}
  
  .review__contents__page:nth-of-type(1) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 0), 0);
  }
  
  .review__contents__page:nth-of-type(2) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 1), 0);
  }
  
  .review__contents__page:nth-of-type(3) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 2), 0);
  }
  
  .review__contents__page:nth-of-type(4) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 3), 0);
  }
  
  .review__contents__page:nth-of-type(5) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 4), 0);
  }
  
  .review__contents__page:nth-of-type(6) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 5), 0);
  }
  
  .review__contents__page:nth-of-type(7) {
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(100% * 6), 0);
  }
`;

const pages = [1, 2, 3, 4, 5, 6, 7];

const review = [
  {
    id: 1,
    profilePic: require('../../assets/img/index/review/img_reviewer1.jpg'),
    writer: '쿠미 보호자님',
    date: '오늘',
    descript: '감사합니다.',
  },
  {
    id: 2,
    profilePic: require('../../assets/img/index/review/img_reviewer2.jpg'),
    writer: '조이 보호자님',
    date: '오늘',
    descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
  },
  {
    id: 3,
    profilePic: require('../../assets/img/index/review/img_reviewer3.jpg'),
    writer: '망고 보호자님',
    date: '1일 전',
    descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
  },
];

const ReviewGroup = ({ colors, page }) => {
  return (
    <ul
      page={page}
      colors={colors}
    >{page}
      {review.map(v => {
        return(
          <ReviewIndividual
            key={v.id}
            colors={colors}
            _profilePic={v.profilePic}
            _writer={v.writer}
            _date={v.date}
            _descript={v.descript}
          />
        )
      })}
    </ul>
  );
}

const ReviewIndividual = ({
  colors,
  _profilePic, 
  _writer,
  _date,
  _descript,
}) => {
  return (
    <li
      colors={colors}
    >
      <div className="profile">
        <img src={_profilePic} alt="" className="profile__pic" />
        <div className="profile__details">
          <p>{_writer}</p>
          <div>
            <span>
              <img src="/public/img/index/review/ic_starOn.png" alt="" />
              <img src="/public/img/index/review/ic_starOn.png" alt="" />
              <img src="/public/img/index/review/ic_starOn.png" alt="" />
              <img src="/public/img/index/review/ic_starOn.png" alt="" />
              <img src="/public/img/index/review/ic_starOn.png" alt="" />
            </span>
            <span>{_date}</span>
          </div>
        </div>
      </div>
      <p className="descript">
        {_descript}
      </p>
    </li>
  );
};

const ReviewPages = ({ colors }) => {
  return (
    <>
      {pages.map((v) => {
        return(
          <ReviewPagesStyled
            key={v}
            colors={colors}
            className="review__contents__page"
          >
            <ReviewGroup
              colors={colors}
              page={v}
            />
          </ReviewPagesStyled>
        )
      })}
    </>
  );
};

export default ReviewPages;