import React from 'react';
import styled from 'styled-components';
import ReviewPages from './ReviewPages';

const ReviewStyled = styled.ul`
  ${'' /* // 소비자 후기 전체 컨테이너 시작 */}
  height: 350px;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;
  ${'' /* // 소비자 후기 전체 컨테이너 끝 */}
`;

const Review = ({ colors }) => {
  return (
    <>
      <ReviewStyled
        colors={colors}
        className="review__contents"
      >
        <ReviewPages
          colors={colors}
        />
      </ReviewStyled>
      <div className="review__btn">
        <button type="button"></button>
        <button type="button"></button>
      </div>
    </>
  );
};

export default Review;