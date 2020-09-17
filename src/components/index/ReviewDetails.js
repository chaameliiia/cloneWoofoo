import React from 'react';
import styled from 'styled-components';
import { starOn } from '../common/imgUrls/indexImgs';

const ReviewDetailStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  li {
    border: 1px solid ${props => props.colors.grayDark};
    border-radius: 4px;
    min-height: 350px;
    padding: 1rem;
    width: 32%;

    .profile {
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
            
            &:nth-of-type(1) {
              background:
                url(${starOn}) left/16px no-repeat,
                url(${starOn}) 25%/16px no-repeat,
                url(${starOn}) center/16px no-repeat,
                url(${starOn}) 75%/16px no-repeat,
                url(${starOn}) right/16px no-repeat;
              height: 14px;
              width: 80px;
            }

            &:nth-of-type(2) {
              padding-left: .3rem;
            }
          }

        }
      }
    }

    .descript {
      font-size: 16px;
      word-break: keep-all;
    }
  }
`;

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

const ReviewDetails = ({ colors }) => {
  return (
    <ReviewDetailStyled
      colors={colors}
    >
      {review.map(v => {
        return(
          <li
            key={v.id}
          >
            <div className="profile">
              <img
                src={v.profilePic}
                alt=""
                className="profile__pic" />
              <div className="profile__details">
                <p>{v.writer}</p>
                <div>
                  <span className="profile__details__score"></span>
                  <span className="profile__details__date">{v.date}</span>
                </div>
              </div>
            </div>
            <p className="descript">
              {v.descript}
            </p>
          </li>
        )
      })}
    </ReviewDetailStyled>
  );
};

export default ReviewDetails;