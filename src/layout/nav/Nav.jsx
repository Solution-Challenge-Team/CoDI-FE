import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import hamburger from "../../assets/hamburger.png";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  // 모바일 사이즈인지 파악하는 상태 (1024px를 기준)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 햄버거 버튼의 메뉴 열림, 닫힘 파악 상태

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    // 창너비 변경시 이벤트 핸들러 등록
    return () => {
      window.removeEventListener("resize", handleResize);
      // 언마운트 시에 이벤트 삭제
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "mobile" : ""}`}>
      {isMobile ? (
        // 햄버거 버튼과 모바일 메뉴 아이템들
        <div>
          <button
            // style={{ border: "none", backgroundColor: "white" }}
            className="burger-button"
            onClick={handleMenuToggle}
          >
            <img src={hamburger} width={"24px"} height={"24px"} />
          </button>
          {isMenuOpen && (
            <div className="mobile-menu">
              {/* 모바일 메뉴 아이템들 */}
              <button>Menu Item 1</button>
              <button>Menu Item 2</button>
            </div>
          )}
        </div>
      ) : (
        // 데스크탑 네비게이션 바 아이템들
        <>
          <div>
            <Link to={"/community"}>커뮤니티</Link>
          </div>
          <div>
            <Link to={"/hiring"}>채용공고</Link>
          </div>
          <div>
            <Link to={"/"}>추천병원</Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
