import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReviewDetails from './ReviewDetails';
import { ReviewContext } from 'contexts/ReviewContext';
import ReviewButtons from './ReviewButtons';

const ReviewPageStyled = styled.ul`
  min-height: 350px;
  overflow: hidden;
  padding: 8rem;
  position: relative;
  width: 100%;

  .review__contents__page {
    left: 0;
    position: absolute;
    transition: 0.5s;
    width: 100%;
    top: 0;

    &:nth-of-type(2) {
      left: 100%;
    }

    &:nth-of-type(3) {
      left: 100%;
    }

    &:nth-of-type(4) {
      left: 100%;
    }

    &:nth-of-type(5) {
      left: 100%;
    }

    &:nth-of-type(6) {
      left: 100%;
    }

    &:nth-of-type(7) {
      left: 100%;
    }

    &.prev {
      left: -100%;
    }

    &.active {
      left: 0;
    }

    &.next {
      left: 100%;
    }
  }
`;

const ReviewPages = () => {
  const reviews = useContext(ReviewContext);
  const pageCount = useRef(0);
  let pageWrapper, pageChildren;

  // useEffect(() => {
  //   const pageFirst = document.querySelector('.review__contents').firstChild;
  //   pageFirst.classList.add('active');
  // },[]);

  const nextBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;
    pageCount.current += 1;
    if (pageCount.current === pageChildren.length) {
      // i값 초기화
      pageCount.current = 0;
      for (let i = 0; i < pageChildren.length - 1; i++) {
        pageChildren[i + 1].classList.remove('prev');
      }
    }

    for (let i = 0; i < pageChildren.length; i++) {
      pageChildren[i].classList.remove('active');
    }

    pageChildren[pageCount.current].classList.add('active');

    if (pageCount.current > 0) {
      // 페이지 번호 1 이상일 때
      pageChildren[pageCount.current - 1].classList.add('prev');
    }
  };

  const prevBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;
    pageCount.current -= 1;
    if (pageCount.current < 0) {
      // i값 초기화
      pageCount.current = pageChildren.length - 1;
    }
    console.log('prev', pageCount.current);

    for (let i = pageCount.current; i < 0; i--) {
      pageChildren[i].classList.remove('active');
    }

    pageChildren[pageCount.current].classList.add('active');

    if (pageCount.current < pageChildren.length - 1) {
      pageChildren[pageCount.current - 1].classList.add('next');
    }
  };

  return (
    <>
      <ReviewPageStyled className="review__contents">
        {reviews.map((v, i) => {
          return (
            <li key={i} className="review__contents__page">
              {i}
              <ReviewDetails reviews={v} />
            </li>
          );
        })}
      </ReviewPageStyled>
      <ReviewButtons clickPrev={prevBtn} clickNext={nextBtn} />
    </>
  );
};

export default ReviewPages;
