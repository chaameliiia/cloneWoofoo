import React from 'react';
import styled from 'styled-components';

import Review from './Review';

const ReviewStyled = styled.section`
  ${'' /* // 소비자 후기 시작 */}
  padding: 0 12% 2rem;
  position: relative;
  width: 100%;

  &__title {
    padding-bottom: 3rem;
  }

  

  &__btn {
    @include setAbsolTop(0, 25%, 0);
    align-items: center;
    display: flex;
    height: 350px;
    justify-content: space-between;
    padding: 0 5%;
    width: 100%;

    button {
      border-radius: 50%;
      height: 80px;
      padding: 0;
      width: 80px;
    }

    $btnUrl: (
      1: '/src/assets/img/main/ic_arrowLeft.png',
      2: '/src/assets/img/main/ic_arrowRight.png',
    );

    @each $idx, $val in $btnUrl {
      button:nth-of-type(#{$idx}) {
        background: url(#{$val}) center/contain no-repeat;
      }
    };
  }
  ${'' /* // 소비자 후기 끝 */}
`;

const ReviewWrapper = ({ colors }) => {
  return (
    <section className="review">
      {/* <!-- 소비자 후기 시작 --> */}
      <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
      <Review
        colors={colors}
      />
      {/* <!-- 소비자 후기 끝 --> */}
    </section>
  );
};

export default ReviewWrapper;