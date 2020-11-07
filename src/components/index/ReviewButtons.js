import React from 'react';
import styled from 'styled-components';
import { arrowL, arrowR } from '../common/imgUrls/indexImgs';

const StyledButton = styled.div`
  align-items: center;
  display: flex;
  min-height: 350px;
  justify-content: space-between;
  left: 0;
  padding: 0 5%;
  position: absolute;
  bottom: 2rem;
  width: 100%;

  button {
    border-radius: 50%;
    font-size: 0;
    height: 80px;
    padding: 0;
    width: 80px;

    &:nth-of-type(1) {
      background: url(${arrowL}) center/contain no-repeat;
    }

    &:nth-of-type(2) {
      background: url(${arrowR}) center/contain no-repeat;
    }
  }
`;

const ReviewButtons = ({ clickPrev, clickNext }) => {
  return (
    <StyledButton className="review__btn">
      <button
        type="button"
        key="0"
        onClick={clickPrev}
        className="review__btn__prev"
      >
        prev
      </button>
      <button
        type="button"
        key="1"
        onClick={clickNext}
        className="review__btn__next"
      >
        next
      </button>
    </StyledButton>
  );
};

export default ReviewButtons;
