import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import { bgMain } from 'components/common/imgUrls/indexImgs';
import ReserveForm from './ReserveForm';

const ReserveStyled = styled.main`
  background: url(${bgMain}) center/auto 960px no-repeat;
  min-height: 960px;
  width: 100%;

  .reserve__box {
    background: ${props => props.colors.white};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: 0 6em;
    padding: 6em 1em 2.5em;
    width: 570px;

    .reserve__box__title {
      font-weight: 400;
      padding-bottom: 2rem;
      white-space: pre-line;

      strong {
        color: ${props => props.colors.greenDark};
        font-size: inherit;
      }
    }
  }
`;

const ReserveWrapper = ({ onClick }) => {
  const colors = useContext(ColorContext);
  return (
    <ReserveStyled
      colors={colors}
    >
      {/* <!-- 서비스 예약 시작 --> */}
      <section
        className="reserve__box"
      >
        <h2 className="reserve__box__title">
          반려동물 힐링케어 <strong>우푸!</strong>
          <br />
          맞춤 펫시터를 만나보세요!
        </h2>
       <ReserveForm
          colors={colors}
          className="reserve__box__form"
        />
      </section>
    {/* <!-- 서비스 예약 끝 --> */}
    </ReserveStyled>
  );
};

export default ReserveWrapper;