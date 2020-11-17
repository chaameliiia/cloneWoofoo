import React from 'react';
import { Link } from 'react-router-dom';
import PromoWrapper from './PromoWrapper';

const Header = () => {
  const openModal = () => {
    document.querySelector('.popPromotion').classList.add('active');
  };

  return (
    <>
      {/* <header className="header"> */}
      <header className="header fixed">
        {/* 헤더 시작 */}
        <h1 className="header__logo">
          <Link to="/index" title="홈페이지 바로가기" className="index">
            <img
              src={require('../../assets/img/img_logo.png')}
              alt="우푸 로고"
            />
          </Link>
        </h1>
        <nav className="header__gnb">
          <button title="첫 이용 할인" onClick={openModal}>
            첫 이용 할인
          </button>
          <Link to="/subServices" title="서비스 소개" className="subServices">
            서비스 소개
          </Link>
          <Link to="/subHelp" title="고객센터" className="subHelpP">
            고객센터
          </Link>
          <Link
            to="/subIncruit"
            title="우푸 버디 지원하기"
            className="subIncruit"
          >
            우푸 버디 지원하기
          </Link>
        </nav>
        {/* 헤더 끝 */}
      </header>
      <PromoWrapper className="popPromotion" />
    </>
  );
};

export default Header;
