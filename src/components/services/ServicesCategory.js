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
    background-image: url(${urls.label1}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(2) {
    background-image: url(${urls.label2}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(3) {
    background-image: url(${urls.label3}) 50% 25%/60px no-repeat;
  }

  li:nth-of-type(4) {
    background-image: url(${urls.label4}) 50% 25%/60px no-repeat;
  }
  
  li.active {
    background: url(${urls.label1_selected}) 50% 25%/ 60px no-repeat;
    color: ${props => props.colors.greenDark};
  }
`;

const ServicesCategory = ({ colors }) => {
  return (
    <CategoryStyled
      colors={colors}
      className="services__category"
    >
      {/* <!-- 서비스 카테고리 시작 --> */}
      <li className="active">도그워킹</li>
      <li>방문돌봄</li>
      <li>펫시팅</li>
      <li>데이케어</li>
      {/* <!-- 서비스 카테고리 끝 --> */}
    </CategoryStyled>
  );
};

export default ServicesCategory;