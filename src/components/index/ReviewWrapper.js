import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewPages from './ReviewPages';
import { arrowL, arrowR } from '../common/imgUrls/indexImgs';
import Reviews, { ReviewContext } from "../../contexts/ReviewContext";

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
      font-size: 0;
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

const ReviewWrapper = (e) => {
  let pageCount = 0;
  const nextPage = () => {
    pageCount += 1;
    console.log('next', pageCount);
  };

  const prevPage = () => {
    pageCount -= 1;
    console.log('prev', pageCount);
  };
  
  return (
    <Reviews>
      <ReviewStyled>
        {/* <!-- 소비자 후기 시작 --> */}
        <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
        <ReviewPages className="review__contents" />
        <div className="review__btn">
          <button
            type="button"
            key="0"
            onClick={prevPage}
            className="review__btn__prev"
          >
            prev
          </button>
          <button
            type="button"
            key="1"
            onClick={nextPage}
            className="review__btn__next"
          >
            next
          </button>
        </div>
        {/* <!-- 소비자 후기 끝 --> */}
      </ReviewStyled>
    </Reviews>
  );
};

export default ReviewWrapper;