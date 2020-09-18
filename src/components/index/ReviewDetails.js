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

const ReviewDetails = ({ colors, reviews }) => {
  return (
    <ReviewDetailStyled
      colors={colors}
    >
      {reviews.map(v => {
        return(
          <li
            key={v.id}
          >
            <div className="profile">
              {v.id}
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