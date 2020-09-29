import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import { promoImg, promoFavicon } from '../common/imgUrls/commonImgs';
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdClose
} from 'react-icons/md';

const PromoWrapperStyled = styled.article`
  display: none;

  .promoBox{
    background-color: ${props => props.colors.white};
    background-image: url(${promoFavicon}), url(${promoImg});
    background-position: 58% 61%, 85% 1.5rem;
    background-size: 80px, 180px;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    position: relative;
    width: 560px;

    .promoBox__title {
      color: ${props => props.colors.greenDark};
      font: 60px/1.25 'CookieRunOTF-Bold';
      padding: 1rem 0 1.25rem;
    }

    .promoBox__details {
      padding-bottom: 4rem;
      mark {
        background: ${props => props.colors.marker};
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .promoBox__download {
    width: 100%;
    
    legend {
      color: ${props => props.colors.greenDark};
      font-size: 18px;
      padding: .5rem 0;
    }
    
    .promoBox__download__tel {
      width: 100%;
      
      input[type=tel] {
        border: 1px solid ${props => props.colors.grayDark};
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        font-size: 18px;
        padding: 5px 0 5px 15px;
        width: 75%;
      }

      button {
        background: ${props => props.colors.greenLight};
        border: 1px solid ${props => props.colors.greenDark};
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        color: ${props => props.colors.white};
        font-size: 18px;
        padding: 5px 0;
        text-align: center;
        width: 25%;

        &:hover {
          background: ${props => props.colors.greenDark};
        }
      }
    }

    .promoBox__download__agree {
      padding: 1rem 0;
      width: 100%;

      input[type=radio] {
        display: none;
      }

      label {
        align-items: center;
        display: flex;
        font-size: 14px;
      }
    }

    > p {
      border-top: 1px dotted ${props => props.colors.grayDark};
      color: ${props => props.colors.grayDark};
      font-size: 14px;
      padding-top: .5rem;
    }
  }
  
  &.active {
    align-items: center;
    background: ${props => props.colors.blackAlpha};
    display: flex;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
  }
`;

const icCheckStyle = {
  fontSize: '24px',
  marginRight: '.25rem',
};

const icCloseStyle = {
  fontSize: '28px',
  right: '1rem',
  position: 'absolute',
  top: '1rem',
};

const PromoWrapper = () => {
  const colors = useContext(ColorContext);
  const closeModal = () => {
    document.querySelector('.popPromotion').classList.remove('active')
  };

  return (
      <PromoWrapperStyled
        className="popPromotion"
        // className="popPromotion active"
        colors={colors}
      >
        <h2 className="nonVisible">첫 이용 할인</h2>
        <div className="promoBox">
          <p className="promoBox__title">
            APP
            <br />
            다운로드
          </p>
          <p className="promoBox__details">
            새로워진 우푸 APP에서
            <br />
            <mark>최대 1만원 할인</mark>받고
            <br />
            산책, 돌봄 서비스 이용하자!
          </p>
          <form
            action="/"
            id="agree"
            method="post"
            className="promoBox__download"
          >
            <legend>문자로 앱 다운로드 링크 받기!</legend>
            <div className="promoBox__download__tel">
              <input
                placeholder="휴대폰 번호 11자리를 입력하세요. (- 제외)"
                type="tel"
              />
              <button type="submit">SMS 받기</button>
            </div>
            <div className="promoBox__download__agree">
              <input
                id="agreeSms"
                name="agreeSms"
                type="radio"
                value="agreed"
              />
              <label htmlFor="agreedSms">
                <>
                  <MdRadioButtonUnchecked
                    style={icCheckStyle}
                  />
                  {/* <MdRadioButtonChecked
                    style={icCheckStyle}
                  /> */}
                </>
                SNS 발송 및 부정이용 방지를 위한 개인정보 수집/이용에 동의합니다.
              </label>
            </div>
            <p>
              ※ 한 개의 휴대폰 번호로 하루 최대 3번까지 전송이 가능합니다.
            </p>
          </form>
          <MdClose
            style={icCloseStyle}
            onClick={closeModal}
          />
        </div>
      </PromoWrapperStyled>
  );
};

export default PromoWrapper;