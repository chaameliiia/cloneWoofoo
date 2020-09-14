import React from 'react';
import styled from 'styled-components';
import Review from './Review';

const ReviewStyled = styled.section`
  ${'' /* // 소비자 후기 시작 */}
  padding: 0 12% 2rem;
  position: relative;
  width: 100%;

  .review__title {
    padding-bottom: 3rem;
  }
  ${'' /* // 소비자 후기 끝 */}
`;

const ReviewWrapper = ({ colors }) => {
  return (
    <ReviewStyled className="review">
      {/* <!-- 소비자 후기 시작 --> */}
      <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
      <Review
        colors={colors}
      />
      {/* <!-- 소비자 후기 끝 --> */}
    </ReviewStyled>
  );
};

export default ReviewWrapper;