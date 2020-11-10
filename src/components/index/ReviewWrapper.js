import React from 'react';
import styled from 'styled-components';
import ReviewPages from './ReviewPages';
import Reviews from '../../contexts/ReviewContext';

const ReviewStyled = styled.section`
  min-height: 29rem;
  padding: 0 8rem 2rem;
  position: relative;
  width: 100%;

  .review__title {
    padding-bottom: 3rem;
    width: 100%;
  }
`;

const ReviewWrapper = e => {
  let bln = true;
  let pageWrapper, listLoof;

  const _nextBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    if (bln && pageWrapper) {
      bln = false;
      pageWrapper.append(pageWrapper.firstChild);
      pageWrapper.style.transition = 'all 0s ease 0s';
      pageWrapper.style.left = '100%';

      setTimeout(() => {
        pageWrapper.style.transition = 'all 1s ease 0s';
        pageWrapper.style.left = '0';
      }, 10);

      setTimeout(() => {
        bln = true;
      }, 500);
    }
  };

  const _prevBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    if (bln && pageWrapper) {
      bln = false;
      pageWrapper.prepend(pageWrapper.lastChild);
      pageWrapper.style.transition = 'all 0s ease 0s';
      pageWrapper.style.left = '-100%';

      setTimeout(() => {
        pageWrapper.style.transition = 'all 1s ease 0s';
        pageWrapper.style.left = '0';
      }, 10);

      setTimeout(() => {
        bln = true;
      }, 500);
    }
  };

  const startLoof = () => {
    listLoof = setInterval(() => {
      _nextBtn();
    }, 5000);
  };
  startLoof();

  const clearLoof = () => {
    clearInterval(listLoof);
  };

  return (
    <Reviews>
      <ReviewStyled onMouseEnter={clearLoof} onMouseLeave={startLoof}>
        {/* <!-- 소비자 후기 시작 --> */}
        <h2 className="review__title">믿고 맡기는 100% 리얼 후기</h2>
        <ReviewPages nextBtn={_nextBtn} prevBtn={_prevBtn} />
        {/* <!-- 소비자 후기 끝 --> */}
      </ReviewStyled>
    </Reviews>
  );
};

export default ReviewWrapper;