import './hospital.css';
const Hospital = () => {
  return (
    <div className="hospitalPage">
      <div className="hospitalLocation">
        <span className="locationSpan">위치</span>
        <select className="locationSelect">
          <option value="whole">전체</option>
          <option value="seoul">서울</option>
          <option value="seoul">경기도</option>
          <option value="seoul">강원도</option>
          <option value="seoul">충청북도</option>
          <option value="seoul">충청남도</option>
          <option value="seoul">전라북도</option>
          <option value="seoul">전라남도</option>
          <option value="seoul">경상북도</option>
          <option value="seoul">경상남도</option>
          <option value="seoul">제주도</option>
        </select>
      </div>
    </div>
  )
};

export default Hospital;