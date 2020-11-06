import React, { useContext } from 'react';
import styled from 'styled-components';
import * as urls from '../common/imgUrls/servicesImgs';
import { ColorContext } from 'contexts/ColorContext';

const IntrVisionStyled = styled.main`
  align-items: center;
  background: url(${urls.bgDogWalking}) top/auto 820px no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 820px;
  text-align: center;
  width: 100%;

  .services__vision__detail {
    color: ${props => props.colors.white};
    width: 60%;

    strong {
      color: inherit;
      font-size: 100px;
      font-weight: 600;
      line-height: 1.25em;
      padding: 7rem 0 3rem;
      white-space: pre-line;
    }

    p {
      color: inherit;
      font-size: 20px;
      padding-bottom: 4rem;
      white-space: pre-line;
      word-break: keep-all;
    }
  }

  button {
    background: ${props => props.colors.white};
    border: 1px solid ${props => props.colors.greenDark};
    border-radius: 30px;
    color: ${props => props.colors.greenDark};
    font-size: 24px;
    padding: 0.4rem 2.5rem;

    &:hover {
      background: ${props => props.colors.greenDark};
      color: ${props => props.colors.white};
    }
  }
`;

const IntroServicesVision = () => {
  const colors = useContext(ColorContext);

  return (
    <IntrVisionStyled
      colors={colors}
      className="services__vision"
    >
      {/* 우푸 비전 소개 시작 */}
      <h2 className="nonVisible">우푸 소개</h2>
      <div className="services__vision__detail">
        <strong>
          Love Pet,
          <br />
          Live Together!
        </strong>
        <p>
          우푸는 반려동물을 사랑하는 마음으로 보호자와 반려동물의 행복한 공존,
          사람과 반려동물이 함께 어울리는 세상을 만들기 위해 즐거운 일을 합니다.
          <br />
          <br />
          우리는 보호자를 대신하여 반려동물에게는 스트레스 받지 않고 힐링이 되는
          서비스를 제공하고, 보호자에게는 믿고 안심할 수 있는 서비스를 제공하며
          더 나아가 우푸 버디에게는 더 많은 일자리를 창출하는 꿈을 가지고
          나아가고 있습니다
        </p>
      </div>
      <button type="button">첫 이용 할인</button>
      {/* 우푸 비전 소개 끝 */}
    </IntrVisionStyled>
  );
};

export default IntroServicesVision;
