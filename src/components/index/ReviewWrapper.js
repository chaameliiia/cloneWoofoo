import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewDetails from './ReviewDetails';
import { arrowL, arrowR } from '../common/imgUrls/indexImgs';
import Reviews from "../../contexts/ReviewContext";

const ReviewPageStyled = styled.ul`
  border: 1px solid #f00;
  margin: 0 auto;
  min-height: 350px;
  /* overflow: hidden; */
  position: relative;
  transition: .5s;
  width: 960px;

  .review__contents__page {
    border: 1px solid #00f;
    position: relative;
    vertical-align: top;
    width: 100%;

    &:nth-of-type(1) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 0), 0);
    }
    
    &:nth-of-type(2) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 1), 0);
    }
    
    &:nth-of-type(3) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 2), 0);
    }
    
    &:nth-of-type(4) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 3), 0);
    }
    
    &:nth-of-type(5) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 4), 0);
    }
    
    &:nth-of-type(6) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 5), 0);
    }
    
    &:nth-of-type(7) {
      left: 0;
      position: absolute;
      top: 0;
      transform: translate(calc(100% * 6), 0);
    }
  }
`;

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
        <ReviewPageStyled
          className="review__contents"
        >
          <li 
            key="0"
            className="review__contents__slide"
          >
            <ReviewDetails />
          </li>
          <li 
            key="1"
            className="review__contents__slide"
          >
            <ReviewDetails />
          </li>
          <li 
            key="2"
            className="review__contents__slide"
          >
            <ReviewDetails />
          </li>
        </ReviewPageStyled>
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