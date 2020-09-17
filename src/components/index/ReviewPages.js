import React from 'react';
import styled from 'styled-components';
import ReviewDetails from './ReviewDetails';

const ReviewPageStyled = styled.ul`
  margin: 0 auto;
  min-height: 350px;
  overflow: hidden;
  position: relative;
  width: 960px;

  .review__contents__page {
    font-size: 0;
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

const pages = [1, 2, 3, 4, 5, 6, 7];

const ReviewPages = ({ colors }) => {
  return (
    <ReviewPageStyled
      className="review__contents"
    >
      {pages.map((v) => {
        return(
          <li
            key={v}
            className="review__contents__page"
          >
            {v}
            <ReviewDetails colors={colors} />
          </li>
        )
      })}
    </ReviewPageStyled>
  );
};

export default ReviewPages;