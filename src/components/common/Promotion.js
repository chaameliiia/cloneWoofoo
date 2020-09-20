import React from 'react';
import styled from 'styled-components';
import { promoImg } from '../common/imgUrls/commonImgs';

const EventPageStyled = styled.article`
  display: none;

  &.active {
    background: rgba(0, 0, 0, .4);
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
  }

  .promoWrapper {
    .promo{
      background: ${props => props.colors.white};
      height: 395px;
      margin: 0 auto;
      padding: 2rem;
      width: 650px;

      .promo__descrpt {
        .promo__descript__title {
          color: ${props => props.colors.greenDark};
          font: 60px/1.25 'CookieRunOTF-Bold';
          padding-bottom: 1.25rem;
        }

        .promo__descript__details {
          mark {
            background: ${props => props.colors.marker};
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }

  .promo__download {
  
  }
`;

const Promotion = ({ colors }) => {
  console.log('event');
  return (
    <>
      <EventPageStyled
        colors={colors}
        className="promoWrapper active"
      >
        <h2 className="nonVisible">첫 이용 할인</h2>
        <div className="promo">
          <div className="promo__descript">
            <p className="promo__descript__title">
              APP
              <br />
              다운로드
            </p>
            <p className="promo__descript__details">
              새로워진 우푸 APP에서
              <br />
              <mark>최대 1만원 할인</mark>받고
              <br />
              산책, 돌봄 서비스 이용하자!
            </p>
          </div>
            {/* <legend>문자로 앱 다운로드 링크 받기!</legend> */}
          <form className="promo__download">
            <p>
              <input type="tel" />
              <button type="submit">SMS 받기</button>
            </p>
            <input type="radio" id="agreedSms" naem="agreeSms" value="agreed" />
            <label htmlFor="agreedSms">SNS 발송 및 부정이용 방지를 위한 개인정보 수집/이용에 동의합니다.</label>
          </form>
        </div>
      </EventPageStyled>
    </>
  );
};

export default Promotion;