import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/indexImgs';

const CategoryStyled = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;

    li {
      width: 23%;
    
      label {
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: 28px;
        border: 1px solid ${props => props.colors.grayLight};
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        padding: 2.5rem 0 .5rem;
        text-align: center;
        width: 100%;
      }

      &.nonActive {
        label {
          background-color: ${props => props.colors.grayLight};
          color: ${props => props.colors.grayDark};
          cursor: default;
        }
      }

      &.active {
        label {
          background-image: url(${urls.label1Selected});
          border: 1px solid ${props => props.colors.greenDark};
        }
      }
    }

    li:nth-of-type(1) {
      label {
        ${'' /* background-image: url(${urls.label1}); */}
      }
    }

    li:nth-of-type(2) {
      label {
        background-image: url(${urls.label2});
      }
    }

    li:nth-of-type(3) {
      label {
        background-image: url(${urls.label3});
      }
    }

    li:nth-of-type(4) {
      label {
        background-image: url(${urls.label4});
      }
    }
  }

`;

const services = [
  {
    id: 1,
    class: "active",
    eng: "dogWalking",
    kor: "도그워킹",
    title: "",
  },
  {
    id: 2,
    class: "",
    eng: "doorToDoor",
    kor: "방문돌봄",
    title: "",
  },
  {
    id: 3,
    class: "nonActive",
    eng: "privateCare",
    kor: "펫시팅",
    title: "서비스 예정입니다.",
  },
  {
    id: 4,
    class: "nonActive",
    eng: "dayCare",
    kor: "데이케어",
    title: "서비스 예정입니다.",
  },
];

const Service = ({ _class, _eng, _kor, _title }) => {
  return (
    <li
      className={_class}
      title={_title}
    >
      <input
        type="checkbox"
        id={_eng}
        name={_eng}
        value={_kor}
      />
      <label for={_eng}>{_kor}</label>
    </li>
  );
};

const ServicesList = () => {
  return (
    <ul>
      {services.map(v => {
        return (
          <Service
            key={v.id}
            _class={v.class}
            _eng={v.eng}
            _kor={v.kor}
            _title={v.title}
          />
        )
      })}
    </ul>
  );
};

const ReserveCategory = ({ colors }) => {
  return (
    <CategoryStyled
      colors={colors}
      className="reserve__box__form__category"
    >
      <h4>서비스<strong>*</strong></h4>
      <ServicesList />
    </CategoryStyled>
  );
};

export default ReserveCategory;