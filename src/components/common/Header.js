import React from 'react';

const Header = ({ onClick }) => {
  return (
    // <header className="header" onClick={onClick}>
    <header
      onClick={onClick}
      className="header fixed"
    >
    {/* 헤더 시작 */}
      <h1 className="header__logo">
        <a
          href="/"
          title="홈페이지 바로가기"
          className="indexPage"
        >
          <img
            src={require("../../assets/img/img_logo.png")}
            alt="우푸 로고"
          />
        </a>
      </h1>
      <nav className="header__gnb">
        <a
          href="/"
          title="첫 이용 할인"
          className="subPromotion"
        >첫 이용 할인
        </a>
        <a
          href="/"
          title="서비스 소개"
          className="subServices"
        >
          서비스 소개
        </a>
        <a
          href="/"
          title="고객센터"
          className="subHelpP"
        >
          고객센터
        </a>
        <a
          href="/"
          title="우푸 버디 지원하기"
          className="subIncruit"
        >
          우푸 버디 지원하기
        </a>
      </nav>
      {/* 헤더 끝 */}
    </header>
  );
};

export default Header;