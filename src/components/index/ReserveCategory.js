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

      &:nth-of-type(1) {
        label {
          background-image: url(${urls.label1});
        }
      }

      &:nth-of-type(2) {
        label {
          background-image: url(${urls.label2});
        }
      }

      &:nth-of-type(3) {
        label {
          background-image: url(${urls.label3});
        }
      }

      &:nth-of-type(4) {
        label {
          background-image: url(${urls.label4});
        }
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

const ReserveCategory = ({ colors }) => {
  return (
    <CategoryStyled
      colors={colors}
      className="reserve__box__form__category"
    >
      <h3>서비스<strong>*</strong></h3>
      <ul>
        {services.map(v => {
          return (
            <li
              key={v.id}
              title={v.title}
              className={v.class}
            >
              <input
                type="checkbox"
                id={v.eng}
                name={v.eng}
                value={v.kor}
              />
              <label for={v.eng}>
                {v.kor}
              </label>
            </li>
          )
        })}
      </ul>
    </CategoryStyled>
  );
};

export default ReserveCategory;