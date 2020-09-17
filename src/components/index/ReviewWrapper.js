import React from 'react';
import styled from 'styled-components';
import { arrowL, arrowR } from '../common/imgUrls/indexImgs';
import ReviewPages from './ReviewPages';

const ReviewStyled = styled.section`
  padding: 0 12% 2rem;
  position: relative;
  width: 100%;

  .review__title {
    padding-bottom: 3rem;
  }

  .review__btn {
    align-items: center;
    display: flex;
    height: 350px;
    justify-content: space-between;
    left: 0;
    padding: 0 5%;
    position: absolute;
    top: 25%;
    transform: translate(0, 0);
    width: 100%;

    button {
      border-radius: 50%;
      height: 80px;
      padding: 0;
      width: 80px;
      
      &:nth-of-type(1) {
        background: url(${arrowL}) center/contain no-repeat;
      }

      &:nth-of-type(2) {
        background: url(${arrowR}) center/contain no-repeat;
      }
    }
  }
`;

const btnList = [
  {
    id: 1,
    class: 'left',
  },
  {
    id: 2,
    class: 'right',
  },
];

const ReviewWrapper = ({ colors }) => {
  return (
    <ReviewStyled className="review">
      {/* <!-- 소비자 후기 시작 --> */}
      <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
      <ReviewPages colors={colors} />
      <div className="review__btn">
        {btnList.map(v => {
          return (
            <button
              type="button"
              className={`review__btn__${v.class}`}
            >
            </button>
          )
        })}
      </div>
      {/* <!-- 소비자 후기 끝 --> */}
    </ReviewStyled>
  );
};

export default ReviewWrapper;