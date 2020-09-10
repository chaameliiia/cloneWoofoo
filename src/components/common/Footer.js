import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <!-- 푸터 시작 --> */}
      <div className="footer__info">
        <img src="/img/img_logoBottom.png" alt="" />
        <ul className="footer__info__serviceTerms">
          <li><a href="/" title="이용약관">이용약관</a></li>
          |
          <li><a href="/" title="개인정보 처리방침">개인정보 처리방침</a></li>
        </ul>
        <p className="footer__info__company">
          (주) 워키도기
          <br />
          대표자: 김용재ㅣ개인정보책임자 : 조성득
          <br />
          서울시 서대문구 통일로 484, 본관동 3층 18호
          <br />
          대표전화 : 1877-4166ㅣ대표메일 : help@woofoo.kr
          <br />
          <br />
          사업자등록번호 : 272-81-00389
          <br />
          통신판매신고번호 : 2019-서울서대문-0149
          <br />

          © 2019 Woofoo. All Rights Reserved.</p>
      </div>
      <ul className="footer__socialChannels">
        <li>
          <a href="/" title="네이버 블로그 바로가기"></a>
        </li>
        <li>
          <a href="/" title="페이스북 바로가기"></a>
        </li>
        <li>
          <a href="/" title="인스타그램 바로가기"></a>
        </li>
      </ul>
      {/* <!-- 푸터 끝 --> */}
    </footer>
  );
};

export default Footer;