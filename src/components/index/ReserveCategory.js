import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "contexts/ColorContext";
import * as urls from "components/common/imgUrls/indexImgs";

const CategoryStyled = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;

    li {
      width: 23%;

      input {
        display: none;
      }

      label {
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: 28px;
        border: 1px solid ${(props) => props.colors.grayLight};
        border-radius: 4px;
        cursor: pointer;
        filter: grayscale(1);
        font-size: 16px;
        padding: 2.5rem 0 0.5rem;
        text-align: center;
        width: 100%;
      }

      &:nth-of-type(1) {
        label {
          background-image: url(${urls.label1Selected});
        }
      }

      &:nth-of-type(2) {
        label {
          background-image: url(${urls.label2Selected});
        }
      }

      &:nth-of-type(3) {
        label {
          background-image: url(${urls.label3Selected});
        }
      }

      &:nth-of-type(4) {
        label {
          background-image: url(${urls.label4Selected});
        }
      }

      &.nonActive {
        label {
          background-color: ${(props) => props.colors.grayLight};
          color: ${(props) => props.colors.grayDark};
          cursor: default;
        }
      }

      &.active {
        label {
          border: 1px solid ${(props) => props.colors.greenDark};
          filter: grayscale(0);
        }
      }
    }
  }
`;

const activeServices = [
  {
    id: 1,
    eng: "dogWalking",
    kor: "도그워킹",
    title: "",
  },
  {
    id: 2,
    eng: "doorToDoor",
    kor: "방문돌봄",
    title: "",
  },
];

const nonActiveServices = [
  {
    id: 3,
    eng: "privateCare",
    kor: "펫시팅",
    title: "서비스 예정입니다.",
  },
  {
    id: 4,
    eng: "dayCare",
    kor: "데이케어",
    title: "서비스 예정입니다.",
  },
];

const ReserveCategory = () => {
  const colors = useContext(ColorContext);
  const toggleClass = (e) => {
    e.preventDefault();
    for (let i = 0; i < activeServices.length; i++) {
      document.querySelectorAll("ul li")[i].classList.remove("active");
    }
    e.target.parentNode.classList.add("active");
  };

  return (
    <CategoryStyled colors={colors}>
      <h3>
        서비스<strong>*</strong>
      </h3>
      <ul>
        {activeServices.map((v) => {
          return (
            <li
              key={v.id}
              title={v.title}
              onClick={toggleClass}
              className={v.eng}
            >
              <input type="checkbox" id={v.eng} name={v.eng} value={v.kor} />
              <label htmlFor={v.eng}>{v.kor}</label>
            </li>
          );
        })}
        {nonActiveServices.map((v) => {
          return (
            <li key={v.id} title={v.title} className={`${v.eng} nonActive`}>
              <input type="checkbox" id={v.eng} name={v.eng} value={v.kor} />
              <label htmlFor={v.eng}>{v.kor}</label>
            </li>
          );
        })}
      </ul>
    </CategoryStyled>
  );
};

export default ReserveCategory;
