import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';

import * as urls from '../common/imgUrls/servicesImgs';

const CategoryStyled = styled.ul`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  text-align: center;
  width: 100%;

  li {
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    font-size: 24px;
    line-height: 1.25em;
    margin: 0 1.25rem;
    padding-top: .5rem;

    &.active {
      border-bottom: 8px solid ${props => props.colors.greenLight};
      color: ${props => props.colors.black};
    }
  }
`;

const FeatureContentsStyled = styled.div`
  text-align: center;
  width: 100%;

  section {
    display: none;
    width: 100%;

    h3 {
      font-size: 32px;
      font-weight: 600;
      margin: 0 auto;
      padding-bottom: 1rem;
      width: 100%;
    }

    div {
      font-size: 20px;
      width: 100%;

      p {
        margin: 0 auto;
        width: 400px;
        word-break: keep-all;
      }
    }

    &.active {
      display: block;
    }
  }

  section:nth-of-type(1) {
    div {
      background: url(${urls.matchBuddy}) bottom/auto 500px no-repeat;
      padding-bottom: 540px;
    }
  }

  section:nth-of-type(2) {
    div {
      background: url(${urls.chatSystem}) bottom/auto 440px no-repeat;
      padding-bottom: 490px;
    }
  }

  section:nth-of-type(3) {
    div {
      background: url(${urls.liveTracking}) bottom/auto 445px no-repeat;
      padding-bottom: 470px;
    }
  }

  section:nth-of-type(4) {
    div {
      background: url(${urls.journal}) bottom/auto 485px no-repeat;
      padding-bottom: 530px;
    }
  }
`;

const featuerDescripts = [
  {
    id: 1,
    eng: 'matchBuddy',
    kor: '맞춤 버디 찾기',
    descript: '오직 당신만을 위한, 당신에게 딱 필요한 버디! 원하는 조건에 맞는 우푸 버디를 확인할 수 있습니다.',
  },
  {
    id: 2,
    eng: 'chatSystem',
    kor: '채팅방 문의',
    descript: '필터를 통해 맞춤 도그워커를 찾아보세요. 내 반려견에게 맞는 도그워커를 확인할 수 있습니다.',
  },
  {
    id: 3,
    eng: 'liveTracking',
    kor: '라이브 트래킹',
    descript: '실시간 위치 추적을 통해 반려견의 현재 위치와 사진을 바로바로 확인하실 수 있습니다.',
  },
  {
    id: 4,
    eng: 'journal',
    kor: '서비스 일지',
    descript: '서비스가 종료된 후 버디가 보내주는 서비스 일지를 통해 진행된 서비스를 편하게 확인할 수 있습니다.',
  },
];

const FeaturesDetail = () => {
  const colors = useContext(ColorContext);
  const wfFeaturesTitle = useRef(null);
  const wfFeaturesDetail = useRef(null);
  let dNum = 0;

  useEffect(e => {
    wfFeaturesTitle.current.children[0].classList.add('active');
    wfFeaturesDetail.current.children[0].classList.add('active');
  }, []);

  const selectCategory = e => {
    for(let i = 0; i < wfFeaturesTitle.current.children.length; i++) {
      wfFeaturesTitle.current.children[i].classList.remove('active');
      wfFeaturesDetail.current.children[i].classList.remove('active');
    }

    dNum = e.target.dataset.num;

    wfFeaturesTitle.current.children[dNum].classList.add('active');
    wfFeaturesDetail.current.children[dNum].classList.add('active');
  }

  return (
    <>
      <CategoryStyled
        colors={colors}
        ref={wfFeaturesTitle}
      >
        {featuerDescripts.map((v, i) => {
          return(
            <li
              key={v.id}
              colors={colors}
              data-num={i}
              onClick={selectCategory}
              className={v.eng}
            >
              {v.kor}
            </li>
          )
        })}
      </CategoryStyled>
      <FeatureContentsStyled ref={wfFeaturesDetail} >
        {featuerDescripts.map(v => {
          return(
            <section
              key={v.id}
              className={v.eng}
            >
              <h3 className={`${v.eng}__title`}>
                {v.kor}
              </h3>
              <div className={`${v.eng}__descript`}>
                <p>{v.descript}</p>
              </div>
            </section>
          )
        })}
      </FeatureContentsStyled>
    </>
  );
};

export default FeaturesDetail;