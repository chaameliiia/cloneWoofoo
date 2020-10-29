import React from 'react';
import styled from 'styled-components';
import ReviewPages from './ReviewPages';
import Reviews from "../../contexts/ReviewContext";

const ReviewStyled = styled.section`
  padding: 0 8rem 2rem;
  position: relative;
  width: 100%;

  .review__title {
    padding-bottom: 3rem;
    width: 100%;
  }
`;

const ReviewWrapper = (e) => {
  return (
    <Reviews>
      <ReviewStyled>
        {/* <!-- 소비자 후기 시작 --> */}
        <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
        <ReviewPages />
        {/* <!-- 소비자 후기 끝 --> */}
      </ReviewStyled>
    </Reviews>
  );
};

export default ReviewWrapper;