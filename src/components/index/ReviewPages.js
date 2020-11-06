import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReviewDetails from './ReviewDetails';
import { ReviewContext } from 'contexts/ReviewContext';
import ReviewButtons from './ReviewButtons';

const ReviewPageStyled = styled.ul`
  min-height: 350px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .review__contents__page {
    left: 0;
    position: absolute;
    /* transition: 0.5s; */
    width: 100%;
    top: 0;

    /* &:nth-of-type(2) {
      left: calc(100% * 1);
    }

    &:nth-of-type(3) {
      left: calc(100% * 2);
    }

    &:nth-of-type(4) {
      left: calc(100% * 3);
    }

    &:nth-of-type(5) {
      left: calc(100% * 4);
    }

    &:nth-of-type(6) {
      left: calc(100% * 5);
    }

    &:nth-of-type(7) {
      left: calc(100% * 6);
    } */

    &.prev {
      left: -100%;
      transition: 0.5s;
    }

    &.active {
      left: 0;
      transition: 0.5s;
    }

    &.next {
      left: 100%;
      transition: 0.5s;
    }
  }
`;

const ReviewPages = () => {
  const reviews = useContext(ReviewContext);
  let pageCount = useRef(0);
  let bln = true;
  let pageWrapper, pageChildren;

  const setPageDefault = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;
    pageWrapper.firstChild.style = 'left: 0';

    for (let i = 1; i < pageChildren.length; i++) {
      pageChildren[i].style = `left: calc(${i} * 100%);`;
    }
    pageWrapper.lastChild.style = 'left: -100%';
  };

  setTimeout(() => {
    setPageDefault();
  }, 10);

  const nextBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;

    if (bln === true) {
      bln = false;

      if (pageCount.current > pageChildren.length) {
        // 페이지 값 초기화
        pageCount.current = 0;
      }
      pageCount.current++;
      pageWrapper.append(pageWrapper.firstChild);
      setPageDefault();

      setTimeout(() => {
        bln = true;
      }, 300);
    }
  };

  const prevBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;

    if (bln === true) {
      bln = false;
      if (pageCount.current < 0) {
        pageCount.current = pageChildren.length - 1;
      }
      pageCount.current--;
      pageWrapper.prepend(pageWrapper.lastChild);
      setPageDefault();

      setTimeout(() => {
        bln = true;
      }, 300);
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
