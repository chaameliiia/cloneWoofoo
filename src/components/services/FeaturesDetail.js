import React from 'react';
import styled from 'styled-components';
import * as urls from '../common/imgUrls/servicesImgs';

const FeatureContentsStyled = styled.div`
  text-align: center;
  width: 100%;

  section {
    display: none;
    width: 100%;

    h3 {
      font-size: 32px;
      font-weight: 600;
      padding-bottom: .5rem;
      width: 100%;
    }

    p {
      font-size: 20px;
      width: 100%;
    }

    &.active {
      display: block;
    }
  }

  section:nth-of-type(1) {
    p {
      background: url(${urls.matchBuddy}) bottom/auto 500px no-repeat;
      padding-bottom: 540px;
    }
  }

  section:nth-of-type(2) {
    p {
      background: url(${urls.chatSystem}) bottom/auto 440px no-repeat;
      padding-bottom: 490px;
    }
  }

  section:nth-of-type(3) {
    p {
      background: url(${urls.liveTracking}) bottom/auto 445px no-repeat;
      padding-bottom: 470px;
    }
  }

  section:nth-of-type(4) {
    p {
      background: url(${urls.journal}) bottom/auto 485px no-repeat;
      padding-bottom: 530px;
    }
  }
`;

const descripts = [
  {
    id: 1,
    eng: 'matchBuddy',
    class: 'active',
    title: '맞춤 버디 찾기',
    firstLine: '오직 당신만을 위한, 당신에게 딱 필요한 버디!',
    secondLine: '원하는 조건에 맞는 우푸 버디를 확인할 수 있습니다.',
  },
  {
    id: 2,
    eng: 'chatSystem',
    class: '',
    title: '채팅방 문의',
    firstLine: '필터를 통해 맞춤 도그워커를 찾아보세요.',
    secondLine: '내 반려견에게 맞는 도그워커를 확인할 수 있습니다.',
  },
  {
    id: 3,
    eng: 'liveTracking',
    class: '',
    title: '라이브 트래킹',
    firstLine: '실시간 위치 추적을 통해 반려견의',
    secondLine: '현재 위치와 사진을 바로바로 확인하실 수 있습니다.',
  },
  {
    id: 4,
    eng: 'journal',
    class: '',
    title: '서비스 일지',
    firstLine: '서비스가 종료된 후 버디가 보내주는 서비스 일지를 통해',
    secondLine: '진행된 서비스를 편하게 확인할 수 있습니다.',
  },
];

const FeaturesDetail = () => {
  return (
    <FeatureContentsStyled
      className="features__contents"
    >
      {descripts.map(v => {
        return(
          <section className={`${v.eng} ${v.class}`}>
            <h3 className={`${v.eng}__title`}>
              {v.title}
            </h3>
            <p className={`${v.eng}__descript`}>
              {v.firstLine}
              <br />
              {v.secondLine}
            </p>
          </section>
        )
      })}
    </FeatureContentsStyled>
  );
};

export default FeaturesDetail;