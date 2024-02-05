import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="LoginPage">
      <div className="loginTitle">
        LOGIN
      </div>

      <div className="loginInput">
        <input className="loginEmail" type = "text" placeholder="이메일"/>
        <input className="loginPassword" type = "password" placeholder="비밀번호"/>
        <button className="loginBtn">로그인</button>
      </div>

      <div className="loginSep">
        <div className="customHr"/>
        <span className="orText">또는</span>
        <div className="customHr" />
      </div>

      <div className="loginGoogle">

      </div>
    </div>
  );
};

export default Login;