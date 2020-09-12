import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/IndexImgs';
import ReserveCategory from './ReserveCategory';
import ReserveInputs from './ReserveInputs';

const ReserveStyled = styled.main`
  background: url(${urls.bgMain}) center/auto 960px no-repeat;
  min-height: 960px;
  width: 100%;
`;

const ReserveBox = styled.section`
  background: ${props => props.colors.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: 0 6em;
  padding: 6em 1em 2.5em;
  width: 45%;

  .reserve__box__title {
    font-weight: 400;
    padding-bottom: 2rem;
    white-space: pre-line;

    strong {
      color: ${props => props.colors.greenDark};
      font-size: inherit;
    }
  }
`;

const ReserveFormStyled = styled.form`
  width: 100%;
        
  h4 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  > div {
    margin-bottom: 1rem;
    width: 100%;

    strong {
      color: ${props => props.colors.pointColor};
    }
  }

  input[type=submit] {
    background: ${props => props.colors.greenDark};
    border-radius: 4px;
    color: ${props => props.colors.white};
    margin-top: 1rem;
    padding: .5rem 0;
    width: 100%;

    &:hover {
      background: ${props => props.colors.greenLight};
    }

    &:active {
      background: ${props => props.colors.greenDark};
    }
  }
`;

const ReserveWrapper = ({ colors }) => {
  return (
    <ReserveStyled
      colors={colors}
      className="reserve"
    >
      {/* <!-- 서비스 예약 시작 --> */}
      <ReserveBox
        colors={colors}
        className="reserve__box"
      >
        <h2 className="reserve__box__title">
          반려동물 힐링케어 <strong>우푸!</strong>
          <br />
          맞춤 펫시터를 만나보세요!
        </h2>
        <ReserveFormStyled
          action="/"
          method="post"
          colors={colors}
          className="reserve__box__form"
          id="reservation"
        >
          <ReserveCategory
            colors={colors}
          />
          <ReserveInputs
            colors={colors}
          />
          <input
            type="submit"
            value="우리집 근처 버디 조회"
          />
        </ReserveFormStyled>
      </ReserveBox>
    </ReserveStyled>
    // <!-- 서비스 예약 끝 -->
  );
};

export default ReserveWrapper;