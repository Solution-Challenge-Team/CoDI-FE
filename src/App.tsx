import "./App.css";
import Routers from "Routers/Routers";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      {/* 브라우저끼리 여백 등 기본제공 css를 reset하는 라이브러리 입니다 */}
      <Routers />
    </div>
  );
}

export default App;
