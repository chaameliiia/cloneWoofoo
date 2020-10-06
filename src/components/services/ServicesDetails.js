import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import * as urls from '../common/imgUrls/servicesImgs';

const CategoryStyled = styled.form`
  border-bottom: 1px solid ${props => props.colors.grayDark};
  display: flex;
  font-size: 0;
  justify-content: center;
  width: 100%;

  button {
    border: none;
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    filter: grayscale(1);
    font-size: 24px;
    height: 160px;
    margin-right: 1.5rem;
    padding-top: 5.5rem;
    text-align: center;
    width: 160px;
  
    &:nth-of-type(1) {
      background: url(${urls.label1_selected}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(2) {
      background: url(${urls.label2_selected}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(3) {
      background: url(${urls.label3_selected}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(4) {
      background: url(${urls.label4_selected}) 50% 25%/60px no-repeat;
      margin-right: 0;
    }
    
    &.active {
      color: ${props => props.colors.greenDark};
      filter: grayscale(0);
    }
  }

`;

const ContentsSteyled = styled.div`
  margin: 0 auto;
  width: 1010px;
  
  section {
    display: none;
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
    width: 100%;
    
    > div {
      font-size: 20px;
      margin: 0 auto;
      padding: 3rem 0;
      width: 575px;
      word-break: keep-all;

      h3 {
        font-size: 32px;
        font-weight: 600;
        padding:1rem 0 2rem;
        width: 100%;
      }
    }
    
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;

      li {
        font-size: 26px;
        padding: 500px 2rem 0;
        width: 320px;
        word-break: keep-all;
      }
    }
  
    &.active {
      display: block;
    }
  }

  section:nth-of-type(1) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.feed}) top/100% no-repeat;
      }

      li:nth-of-type(3) {
        background: url(${urls.course}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(2) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.cleaning}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }

      li:nth-of-type(3) {
        background: url(${urls.catSitting}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(3) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }

      li:nth-of-type(3) {
        background: url(${urls.grooming}) top/100% no-repeat;
      }
    }
  }

  section:nth-of-type(4) {
    ul {
      li:nth-of-type(1) {
        background: url(${urls.walk}) top/100% no-repeat;
      }
      
      li:nth-of-type(2) {
        background: url(${urls.playTime}) top/100% no-repeat;
      }
      li:nth-of-type(3) {
        background: url(${urls.grooming}) top/100% no-repeat;
      }
    }
  }
`;

const services = [
  {
    id: 0,
    eng: 'dogWalking',
    kor: '도그워킹',
    title1: '사랑하는 나의 반려견에게',
    title2: '최고의 산책을 선물해 주세요!',
    descript: '산책은 하루 종일 한 공간에서 지내는 강아지들이 기분을 전환하고 몸과 마음을 건강하게 만드는 활동입니다.',
    feature1: '전문가와 함께하는 안전한 산책',
    feature2: '걱정 없이 다녀오세요! 사료 챙겨주기',
    feature3: '보호자와 함께 짜는 맞춤형 산책 코스',
  },
  {
    id: 1,
    eng: 'doorToDoor',
    kor: '방문돌봄',
    title1: '집을 비워야 하나요?',
    title2: '간편하게 우푸 버디를 불러보세요!',
    descript: '매일 생활하는 익숙한 공간에서 서비스가 진행되므로 예민한 아이들의 스트레스를 최소화할 수 있는 최적의 서비스입니다.',
    feature1: '혼자 있는 집도 청결하게 환경 정리',
    feature2: '어깨가 들썩들썩 신나는 놀이시간',
    feature3: '1일 집사의 완벽한 캣시팅',
  },
  {
    id: 2,
    eng: 'privateCare',
    kor: '프라이빗 펫시팅',
    title1: '우리 아이만 돌봐주는',
    title2: '프라이빗 펫시팅 서비스!',
    descript: '우푸의 프라이빗 서비스는 우푸 버디가 보호자님의 강아지만을 1:1로 케어하기 때문에 안심하고 맡기실 수 있습니다.',
    feature1: '전문가와 함께하는 안전한 산책',
    feature2: '어깨가 들썩들썩 신나는 놀이시간',
    feature3: '혈액순환에 도움을 주는 그루밍',
  },
  {
    id: 3,
    eng: 'dayCare',
    kor: '데이케어',
    title1: '소중한 우리 반려견',
    title2: '잠시라도 혼자 둘 수 없다면?',
    descript: '집에서 가까운 우푸 버디를 찾아 맡겨보세요! 혼자 있을 아이를 걱정할 필요도, 낮선 친구들과 부딪혀 스트레스를 받을 걱정도 없습니다.',
    feature1: '전문가와 함께하는 안전한 산책',
    feature2: '어깨가 들썩들썩 신나는 놀이시간',
    feature3: '혈액순환에 도움을 주는 그루밍',
  },
];

const ServicesDetails = () => {
  const colors = useContext(ColorContext);
  const serviceTitle = useRef(null);
  const serviceDetail = useRef(null);
  let dNum = 0;
  let [selectedCategory, setSelectCategory] = useState({
    value: '',
  });

  useEffect(() => {
    serviceTitle.current.children[0].classList.add('active');
    serviceDetail.current.children[0].classList.add('active');
  }, []);

  const clickCategory = e => {
    e.preventDefault();
    dNum = e.target.dataset.num;

    for(let i = 0; i < serviceTitle.current.children.length; i++) {
      serviceTitle.current.children[i].classList.remove('active');
      serviceDetail.current.children[i].classList.remove('active');
    }

    serviceTitle.current.children[dNum].classList.add('active');
    serviceDetail.current.children[dNum].classList.add('active');
  };

  const submitCategory = e => {
    e.preventDefault();
    setSelectCategory = {
      value: e.target.className,
    };
    this.onSubmit(selectedCategory);
  }
  
  return (
    <>
      <CategoryStyled
        colors={colors}
        ref={serviceTitle}
        action="/subServices"
        method="post"
        onSubmit={submitCategory}
      >
        {/* 서비스 카테고리 시작 */}
        {services.map(v => {
          return(
            <button
              type="submit"
              key={v.id}
              data-num={v.id}
              onClick={clickCategory}
              className={v.eng}
            >
              {v.kor}
            </button>
          )
        })}
        {/* 서비스 카테고리 끝 */}
      </CategoryStyled>
      <ContentsSteyled
        ref={serviceDetail}
      >
        {services.map(v => {
          return (
            <section
              key={v.id}
              data-num={v.id}
              className={v.eng}
            >
              <h2 className={`${v.eng}__title nonVisible`}>{v.kor}</h2>
              <div className={`${v.eng}__descript`}>
                <h3>
                  {v.title1}
                  <br />
                  {v.title2}
                </h3>
                {v.descript}
              </div>
              <ul className={`${v.eng}__figures`}>
                <li>{v.feature1}</li>
                <li>{v.feature2}</li>
                <li>{v.feature3}</li>
              </ul>
            </section>
          )
        })}
      </ContentsSteyled>
    </>
  );
};

export default ServicesDetails;