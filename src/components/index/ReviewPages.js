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
    width: 100%;
    top: 0;
/* 
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
    } */

    &.prev {
      left: -100%;
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

  useEffect(() => {
    const pageLists = document.querySelectorAll('.review__contents__page');
    for(let i = 1; i < pageLists.length; i++) {
      pageLists[i].classList.add('next');
    };

    for(let i = 0; i < pageLists.length; i++) {
      pageLists[i].style = "transition: .5s";
    }
  }, []);

  const nextBtn = () => {
    pageWrapper = document.querySelector('.review__contents');
    pageChildren = pageWrapper.children;
    pageCount.current += 1;
    if(pageCount.current > pageWrapper.length - 1) {
      // li page보다 i 커질 경우
      pageCount.current = 0;
      for(let i = 1; i < pageWrapper.length; i++) {
        pageChildren[pageCount.current].classList.add('next')
      }
    }
    console.log('next', pageCount.current);

    // for(let i = 0; i < pageChildren.length; i++) {
    //   pageChildren[i].classList.remove('selected');
    // }
    pageChildren[pageCount.current].classList.remove('next');
    
    if(pageCount.current !== 0) {
      pageChildren[pageCount.current - 1].classList.add('prev');
    }
  };

  const prevBtn = () => {
    if(pageCount.current < 0) {
      pageCount.current = reviews.length - 1;
    }
    pageCount.current -= 1;
    console.log('prev', pageCount.current);
  };
  
  return (
    <>
      <ReviewPageStyled className="review__contents">
        {reviews.map((v, i) => {
          return(
            <li
              key={i}
              className="review__contents__page"
            >
              {i}
              <ReviewDetails
                reviews={v}
              />
            </li>
          )
        })}
      </ReviewPageStyled>
      <ReviewButtons
        clickPrev={prevBtn}
        clickNext={nextBtn}
      />
    </>
  );
};

export default ReviewPages;