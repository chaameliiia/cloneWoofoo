import React from 'react';
import styled from 'styled-components';
import { arrowLeft, arrowRight } from 'components/common/imgUrls/indexImgs';

const NavigatorStyled = styled.div`
  align-items: center;
  display: flex;
  height: 350px;
  justify-content: space-between;
  left: 0;
  padding: 0 5%;
  position: absolute;
  top: 25%;
  transform: translate(0, 0);
  width: 100%;

  button {
    border-radius: 50%;
    height: 80px;
    padding: 0;
    width: 80px;
  }

  button:nth-of-type(1) {
    background: url(${arrowLeft}) center/contain no-repeat;
  }

  button:nth-of-type(2) {
    background: url(${arrowRight}) center/contain no-repeat;
  }
`;

const ReviewNavigator = () => {
  return (
    <NavigatorStyled className="review__btn">
      <button type="button"></button>
      <button type="button"></button>
    </NavigatorStyled>
  );
};

export default ReviewNavigator;