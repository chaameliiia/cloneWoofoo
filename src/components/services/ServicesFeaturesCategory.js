import React from 'react';
import styled from 'styled-components';

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

const categories = [
  {
    id: 1,
    class: "",
    title: '맞춤 버디 찾기',
  },
  {
    id: 2,
    class: "active",
    title: '채팅방 문의',
  },
  {
    id: 3,
    class: "",
    title: '라이브 트래킹',
  },
  {
    id: 4,
    class: "",
    title: '서비스 일지',
  },
];

const FeaturesCategory = ({ colors }) => {
  return (
    <CategoryStyled
      colors={colors}
    >
      {categories.map(v => {
        return(
          <li
            key={v.id}
            colors={colors}
            className={v.class}
          >
            {v.title}
          </li>
        )
      })}
    </CategoryStyled>
  );
};

export default FeaturesCategory;