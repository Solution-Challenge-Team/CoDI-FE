import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Main from "pages/main/Main";
import Signup from "pages/signup/Signup";
import Login from "pages/login/Login";
import Hiring from "pages/hiring/Hiring";
import Community from "pages/community/Community";
import Hospital from "pages/hospital/hospital";
import HospitalDetail from "pages/hospital/HospitalDetail";
import ReviewEditor from "pages/hospital/ReviewEditor";
import Nav from "../layout/nav/Nav";

const Routers = () => {
  return (
    <div>
      <Router>
        <Nav />
        {/* Link는 개발의 편의를 위해 임시로 만든 링크입니다. */}
        <Link to="/">(메인페이지) </Link>
        <Link to="/hiring"> (채용페이지) </Link>
        <Link to="/login"> (로그인) </Link>
        <Link to="/signup"> (회원가입) </Link>
        <Link to="/hospital"> (병원추천) </Link>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/community" element={<Community />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/ReviewEditor" element={<ReviewEditor/>}/>
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
