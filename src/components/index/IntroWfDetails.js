import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import { trainer, insurance, safetyZone, liveTracking } from '../common/imgUrls/indexImgs';

const TitlesStyled = styled.ul`
  padding-bottom: 5rem;
  text-align: center;
  width: 100%;

  .introWoofoo__details__title {
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    font-size: 20px;
    line-height: 1.25em;
    margin-right: 1.5rem;
    padding-bottom: .2em;
  
    &.active {
      border-bottom: 4px solid ${props => props.colors.greenLight};
      color: ${props => props.colors.black};
    }
  }
`;

const DetailsStyled = styled.ul`
  width: 100%;
  
  .introWoofoo__details__detail {
    align-items: center;
    border-bottom: 1px solid ${props => props.colors.grayLight};
    display: none;
    height: 22.5rem;
    justify-content: flex-end;
    width: 100%;

    h4 {
      color: ${props => props.colors.greenDark};
      font-size: 26px;
      padding-bottom: 1rem;
      width: 16rem;
    }

    p {
      margin-bottom: 5rem;
      width: 16rem;
      word-break: keep-all;
    }

    &.active {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }
    
    &:nth-of-type(1){
      background: url(${trainer}) left top/499px no-repeat;
    }

    &:nth-of-type(2){
      background: url(${insurance}) left top/499px no-repeat;
    }

    &:nth-of-type(3){
      background: url(${safetyZone}) left top/499px no-repeat;
    }

    &:nth-of-type(4){
      background: url(${liveTracking}) left top/499px no-repeat;
    }
  }
`;

const detailsList = [
  {
    id: 0,
    title: "전문 훈련사 출동 서비스",
    descript: "서비스 진행 중 도움이 필요할 경우, 전문 훈련사가 직접 찾아갑니다. (수도권 한정)",
  },
  {
    id: 1,
    title: "반려동물 안전 보험",
    descript: "서비스를 이용하는 모든 반려동물에게 우푸에서 제공하는 체계적인 안전 보험이 적용됩니다.",
  },
  {
    id: 2,
    title: "안심존 케어",
    descript: "들어가지 않았으면 하는 공간은 안심 스티커를 붙여주세요. 버디는 보호자가 설정한 안심존에서만 서비스를 진행합니다",
  },
  {
    id: 3,
    title: "라이브 트래킹",
    descript: "실시간 위치 추적을 통해 반려동물의 현재 위치와 사진을 빠르게 확인하세요.",
  },
];

const IntroWfDetails = () => {
  const colors = useContext(ColorContext);
  const wooFooTitle = useRef(null);
  const wooFooDetail = useRef(null);

  useEffect(() => {
    wooFooTitle.current.children[0].classList.add('active');
    wooFooDetail.current.children[0].classList.add('active');
  }, []);

  const selectList = (e) => {
    const dNum = e.target.dataset.num;;
    for(let i = 0; i < wooFooTitle.current.children.length; i++) {
      wooFooTitle.current.children[i].classList.remove('active');
      wooFooDetail.current.children[i].classList.remove('active');
    }
    wooFooTitle.current.children[dNum].classList.add('active');
    wooFooDetail.current.children[dNum].classList.add('active');
  };
  
  return (
    <>
      <TitlesStyled
        colors={colors}
        ref={wooFooTitle}
      >
        {detailsList.map(v => {
          return(
            <li
              key={v.id}
              colors={colors}
              onClick={selectList}
              data-num={v.id}
              className="introWoofoo__details__title"
            >
              {v.title}
            </li>
          )
        })}
      </TitlesStyled>
      <DetailsStyled
        colors={colors}
        ref={wooFooDetail}
      >
        {detailsList.map(v => {
          return(
            <li
              key={v.id}
              className="introWoofoo__details__detail"
            >
              <h4>{v.title}</h4>
              <p>
                {v.descript}
              </p>
            </li>
          )
        })}
      </DetailsStyled>
    </>
  );
};

export default IntroWfDetails;