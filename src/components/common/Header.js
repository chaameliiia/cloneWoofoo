import React from 'react';

const Header = () => {
  return (
    // <header className="header">
    <header className="header fixed">
      {/* <!-- 헤더 시작 --> */}
      <h1 className="header__logo">
        <a href="/" title="홈페이지 바로가기">
          <img
            src={require("../../assets/img/img_logo.png")}
            alt="로고"
          />
        </a>
      </h1>
      <nav className="header__gnb">
        <a href="/" title="첫 이용 할인">첫 이용 할인</a>
        <a href="/" title="서비스 소개">서비스 소개</a>
        <a href="/" title="고객센터">고객센터</a>
        <a href="/" title="우푸 버디 지원하기">우푸 버디 지원하기</a>
      </nav>
      {/* <!-- 헤더 끝 --> */}
    </header>
  );
};

export default Header;