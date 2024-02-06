import React from "react";
import "./Signup.css"
import setting from '../../assets/setting.png';

const Signup = () => {
  return (
    <div className="SignUpPage">
      <div className="signupTitle">
        SIGN UP
      </div>

      <div className="signupProfile">
        <div className="profileImg"></div>
        <img className="profileSettingImg" src = {setting}></img>
      </div>

      <div className="signupInput">
        <div className="signupEmailDiv">
          <span className="signemailSpan">이메일</span>
          <input className="signupEmail" type = "text"/>
        </div>
        <div className="signupPasswordDiv">
          <span className="signpasswordSpan">비밀번호</span>
          <input className="signupPassword" type = "password"/>
        </div>
        <div className="signupNicknameDiv">
          <span className="signnickNameSpan">닉네임</span>
          <input className="signupNickName" type = "text"/>
        </div>
      </div>

      <div className="signupComplete">
        <button className="signupBtn">회원가입 완료</button>
      </div>
    </div>
  )
};

export default Signup;
