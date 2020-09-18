import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/servicesImgs';

const CategoryStyled = styled.ul`
  border-bottom: 1px solid ${props => props.colors.grayDark};
  display: flex;
  font-size: 0;
  justify-content: center;
  width: 100%;

  li {
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    font-size: 24px;
    height: 160px;
    margin-right: 1.5rem;
    padding-top: 5.5rem;
    text-align: center;
    width: 150px;
  
    &:nth-of-type(1) {
      background: url(${urls.label1}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(2) {
      background: url(${urls.label2}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(3) {
      background: url(${urls.label3}) 50% 25%/60px no-repeat;
    }

    &:nth-of-type(4) {
      background: url(${urls.label4}) 50% 25%/60px no-repeat;
      margin-right: 0;
    }
    
    &.active {
      background: url(${urls.label2_selected}) 50% 25%/ 60px no-repeat;
      color: ${props => props.colors.greenDark};
    }
  }

`;

const titles = [
  {
    id: 1,
    class: "",
    title: "도그워킹",
  },
  {
    id: 2,
    class: "active",
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
    >
      {/* 서비스 카테고리 시작 */}
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
      {/* 서비스 카테고리 끝 */}
    </CategoryStyled>
  );
};

export default ServicesCategory;