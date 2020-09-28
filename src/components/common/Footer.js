import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onClick }) => {
  return (
    <footer
      onClick={onClick}
      className="footer"
    >
      <div className="footer__info">
        <img
          src={require("../../assets/img/img_logoBottom.png")}
          alt="하단 우푸 로고" />
        <ul className="footer__info__serviceTerms">
          <li>
            <Link
              to="/PolicyTerms" 
              itle="이용약관"
            >
              이용약관
            </Link>
          </li>
          |
          <li>
            <Link
              to="/policyPrivacy"
              title="개인정보 처리방침"
            >
              개인정보 처리방침
            </Link>
          </li>
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
          <Link
            to="/"
            title="네이버 블로그 바로가기" />
        </li>
        <li>
          <Link
            to="/"
            title="페이스북 바로가기" />
        </li>
        <li>
          <Link
            to="/"
            title="인스타그램 바로가기" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;