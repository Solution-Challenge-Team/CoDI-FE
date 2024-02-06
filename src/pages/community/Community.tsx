import React, { useState } from "react";

const Community = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (categoryName: string) => {
    setCategory(categoryName);
  };

  return (
    <div className="Community">
      <div className="community-category">
        {/* 시각장애, 청각장애, 지체장애, 언어장애, 발달장애, 정신장애, 기타 */}
        {/* <button className="category-btn" onClick={handleCategory()}>
          a
        </button>
        <button className="category-btn" onClick={handleCategory()}>
          b
        </button>
        <button className="category-btn" onClick={handleCategory()}>
          c
        </button>
        <button className="category-btn" onClick={handleCategory()}>
          d
        </button>
        <button className="category-btn" onClick={handleCategory()}>
          e
        </button> */}
      </div>
      <h2>커뮤니티</h2>
      <div>{/* 커뮤니티 list */}</div>
    </div>
  );
};

export default Community;
