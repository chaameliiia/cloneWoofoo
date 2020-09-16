import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/servicesImgs';

const CategoryStyled = styled.ul`
  border-bottom: 1px solid ${props => props.colors.grayDark};
  display: flex;
  justify-content: center;
  font-size: 0;
  width: 100%;

  li {
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    font-size: 24px;
    height: 160px;
    padding: 5.5rem 3.5rem 0;
  }

  li:nth-of-type(1) {
    background: url(${urls.label1}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(2) {
    background: url(${urls.label2}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(3) {
    background: url(${urls.label3}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(4) {
    background: url(${urls.label4}) 50% 25%/60px no-repeat;
  }
  
  li.active {
    background: url(${urls.label1_selected}) 50% 25%/ 60px no-repeat;
    color: ${props => props.colors.greenDark};
  }
`;

const titles = [
  {
    id: 1,
    class: "active",
    title: "도그워킹",
  },
  {
    id: 2,
    class: "",
    title: "방문돌봄",
  },
  {
    id: 3,
    class: "",
    title: "펫시팅",
  },
  {
    id: 4,
    class: "",
    title: "데이케어",
  },
];

const ServicesCategory = ({ colors }) => {
  return (
    <CategoryStyled
      colors={colors}
      className="services__category"
    >
      {titles.map(v => {
        return(
          <li
            key={v.id}
            className={v.class}
          >
            {v.title}
          </li>
        )
      })}
    </CategoryStyled>
  );
};

export default ServicesCategory;