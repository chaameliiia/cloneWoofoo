import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewDetails from './ReviewDetails';
import { ReviewContext } from 'contexts/ReviewContext';
import ReviewButtons from './ReviewButtons';

const ReviewPageStyled = styled.ul`
  display: flex;
  left: 0;
  min-height: 350px;
  overflow: hidden;
  position: absolute;
  top: 6rem;
  width: 100%;

  .review__contents__page {
    min-width: 100%;
    padding: 0 9rem;
  }
`;

const ReviewPages = ({ nextBtn, prevBtn }) => {
  const reviews = useContext(ReviewContext);

  return (
    <>
      {/* 수정 필 */}
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
      {/* 수정 필 */}
      <ReviewButtons clickPrev={prevBtn} clickNext={nextBtn} />
    </>
  );
};

export default ReviewPages;
