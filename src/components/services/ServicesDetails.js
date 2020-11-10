import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';
import * as urls from '../common/imgUrls/servicesImgs';
import services from './servicesList';

const CategoryStyled = styled.form`
  border-bottom: 1px solid ${props => props.colors.grayDark};
  display: flex;
  font-size: 0;
  justify-content: center;
  padding-top: 0.5rem;
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
        padding: 1rem 0 2rem;
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

const ServicesDetails = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const colors = useContext(ColorContext);
  const serviceTitle = useRef(null);
  const serviceDetail = useRef(null);
  let dNum = 0;

  useEffect(() => {
    serviceTitle.current.children[0].classList.add('active');
    serviceDetail.current.children[0].classList.add('active');
  }, []);

  const clickCategory = e => {
    e.preventDefault();
    dNum = e.target.dataset.num;

    for (let i = 0; i < serviceTitle.current.children.length; i++) {
      serviceTitle.current.children[i].classList.remove('active');
      serviceDetail.current.children[i].classList.remove('active');
    }

    serviceTitle.current.children[dNum].classList.add('active');
    serviceDetail.current.children[dNum].classList.add('active');

    setSelectedCategory(e.target.classList.value.split(' ')[0]);
  };

  const formSubmit = category => {
    onSubmit(category);
  };

  return (
    <>
      <CategoryStyled
        colors={colors}
        ref={serviceTitle}
        action="/subServices"
        method="get"
        onSubmit={formSubmit(selectedCategory)}
        className="services__contents"
      >
        {/* 서비스 카테고리 시작 */}
        {services.map(v => {
          return (
            <button
              type="submit"
              key={v.id}
              name={v.eng}
              data-num={v.id}
              onClick={clickCategory}
              className={v.eng}
            >
              {v.kor}
            </button>
          );
        })}
        {/* 서비스 카테고리 끝 */}
      </CategoryStyled>
      <ContentsSteyled ref={serviceDetail}>
        {services.map(v => {
          return (
            <section key={v.id} data-num={v.id} className={v.eng}>
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
          );
        })}
      </ContentsSteyled>
    </>
  );
};

export default ServicesDetails;
