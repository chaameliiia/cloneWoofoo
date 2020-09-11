import React from 'react';
import styled from 'styled-components';
import * as urls from 'components/common/imgUrls/IndexImgs';
import BuddyContents from './BuddyContents';

const IntroBuddyWrapper = styled.section`
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 70%;

  .introBuddy__title {
    padding: 3rem 0;
  }

  .introBuddy__contents {
    border-bottom: 1px solid ${props => props.colors.grayLight};
    display: flex;
    justify-content: space-between;
    padding-bottom: 5rem;
    width: 100%;

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      width: 30%;

      p {
        padding-top: 7.5rem;
        text-align: center;
        white-space: pre-line;
        width: 300px;
      }
    }

    li:nth-of-type(1) {
      p {
        background: url(${urls.screening}) top/140px no-repeat;
      }
    }

    li:nth-of-type(2) {
      p {
        background: url(${urls.test}) top/140px no-repeat;
      }
    }

    li:nth-of-type(3) {
      p {
        background: url(${urls.identification}) top/140px no-repeat;
      }
    }
  }
`;

const IntroBuddy = ({ colors }) => {
  return (
    <IntroBuddyWrapper
      colors={colors}
      className="introBuddy"
    >
      {/* <!-- 버디 소개 시작 --> */}
      <h2 className="introBuddy__title">믿고 맡기는 우푸 버디</h2>
      <BuddyContents />
      {/* <!-- 버디 소개 끝 --> */}
    </IntroBuddyWrapper>
  );
};

export default IntroBuddy;