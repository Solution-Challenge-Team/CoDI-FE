import React from "react";

const Login = () => {
  return (
    <div className="LoginPage">
      <div className="loginTitle">
        LOGIN
      </div>

      <div className="loginInput">
        <input type = "text" placeholder="이메일"/>
        <input type = "password" placeholder="비밀번호"/>
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Login;