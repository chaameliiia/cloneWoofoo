import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/IndexImgs';

const WoofooDetailStyled = styled.ul`
  width: 100%;
  
  li {
    align-items: center;
    border-bottom: 1px solid ${props => props.colors.grayLight};
    display: none;
    ${'' /* display: flex; */}
    justify-content: flex-end;
    ${'' /* margin-bottom: 5rem; */}
    padding: 5rem 0;
    width: 100%;

    p {
      width: 16rem;
      word-break: keep-all;

      strong {
        color: ${props => props.colors.greenDark};
        font-size: 26px;
        padding-bottom: 1rem;
        width: 100%;
      }
    }

    &.active {
      display: flex;
    }
  }

  li:nth-of-type(1){
    background: url(${urls.trainer}) left/auto 100% no-repeat;
  }

  li:nth-of-type(2){
    background: url(${urls.insurance}) left/auto 100% no-repeat;
  }

  li:nth-of-type(3){
    background: url(${urls.safetyZone}) left/auto 100% no-repeat;
  }

  li:nth-of-type(4){
    background: url(${urls.liveTracking}) left/auto 100% no-repeat;
  }
`;



const detailsList = [
  {
    id: 1,
    class: "active",
    title: "전문 훈련사 출동 서비스",
    line: "서비스 진행 중 도움이 필요할 경우, 전문 훈련사가 직접 찾아갑니다. (수도권 한정)",
  },
  {
    id: 2,
    class: "",
    title: "반려동물 안전 보험",
    line: "서비스를 이용하는 모든 반려동물에게 우푸에서 제공하는 체계적인 안전 보험이 적용됩니다.",
  },
  {
    id: 3,
    class: "",
    title: "안심존 케어",
    line: "들어가지 않았으면 하는 공간은 안심 스티커를 붙여주세요. 버디는 보호자가 설정한 안심존에서만 서비스를 진행합니다",
  },
  {
    id: 4,
    class: "",
    title: "라이브 트래킹",
    line: "실시간 위치 추적을 통해 반려동물의 현재 위치와 사진을 빠르게 확인하세요.",
  },
];

const DetailsContents = ({
  _class,
  _title,
  _line
}) => {
  return (
    <li
      className={_class}>
      <p>
        <strong>{_title}</strong>
        {_line}
      </p>
    </li>
  );
}

const WoofooDetails = ({ colors }) => {
  return (
    <WoofooDetailStyled
      colors={colors}
      className="introWoofoo__details"
    >
      {detailsList.map(v => {
        return(
          <DetailsContents
            key={v.id}
            _class={v.class}
            _title={v.title}
            _line={v.line}
          />
        )
      })}
    </WoofooDetailStyled>
  );
};

export default WoofooDetails;