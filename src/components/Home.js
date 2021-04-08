import React from "react";
import Mainlogo from "../img/instagram.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <main>
        <article>
          <div>
            <div className="login">
              <h6>여기부터 Home.js</h6>
              <div className="mainLogo">
                <img src={Mainlogo} width="175" height="51" alt="mainlogo" />
              </div>
              <form className="beColumn beCenter">
                <input
                  type="string"
                  className="A B"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input type="password" className="A B" placeholder="비밀번호" />
                <button className="A B2 bdRadius noneBorder"> 로그인</button>
                <div className="beRow">
                  <div className="beLine"> </div>
                  <div id="or">또는</div>
                  <div className="beLine"> </div>
                </div>
                <button> 페이스북으로 로그인 </button>
                <a href="#"> 비밀번호를 잊으셨나요?</a>
              </form>
            </div>

            <div className=" beColumn beCenter">
              <div>
                <p className="txCenter">
                  "계정이 없으신가요?" <a href="#">가입하기</a>
                </p>
              </div>
            </div>
            <div className="  beColumn beCenter">
              <p className="txCenter">앱을 다운로드 하세요</p>
              <div>
                <a href="#">
                  <img
                    src={Mainlogo}
                    width="136"
                    height="40"
                    alt="일단네이버"
                  />
                </a>
                <a href="#">
                  <img
                    src={Mainlogo}
                    width="136"
                    height="40"
                    alt="일단네이버"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <div className="beRow justifyCenter">
          <div className="foot_link foot_link_margin">소개</div>
          <div className="foot_link foot_link_margin">블로그</div>
          <div className="foot_link foot_link_margin">채용 정보</div>
          <div className="foot_link foot_link_margin">도움말</div>
          <div className="foot_link foot_link_margin">API</div>
          <div className="foot_link foot_link_margin">개인정보처리방침</div>
          <div className="foot_link foot_link_margin">약관</div>
          <div className="foot_link foot_link_margin">인기 계정</div>
          <div className="foot_link foot_link_margin">해시태그</div>
          <div className="foot_link foot_link_margin">위치</div>
        </div>
        <div className="beRow justifyCenter">
          <div className="foot_link foot_link_margin">뷰티</div>
          <div className="foot_link foot_link_margin">댄스 및 공연</div>
          <div className="foot_link foot_link_margin">피트니스</div>
          <div className="foot_link foot_link_margin">식음료</div>
          <div className="foot_link foot_link_margin">집 및 정원</div>
        </div>

        <div className="beRow justifyCenter">
          <div className="foot_link foot_link_margin">한국어</div>
          <div className="foot_link foot_link_margin">
            &copy; 2021 Instagram from Facebook
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
