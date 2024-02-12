import './review.css';
const ReviewEditor = () =>{
  return (
    <div className="reviewEditor">
      <div className='editorTitle'>
        <span className='editorTitleSpan'>[병원 리뷰 쓰기]</span>
      </div>
      <div className="reviewInput">
        <textarea className="reviewTextarea"/>
        <div className='reviewSymptomEval'>
          <select className="reviewsymptomSelect">
            <option value="visual">시각장애</option>
            <option value="hearing">청각장애</option>
            <option value="physical">지체장애</option>
            <option value="speech">언어장애</option>
            <option value="developmental">발달장애</option>
            <option value="mental">정신장애</option>
            <option value="etc">기타</option>
          </select>
          <div className='reviewEval'>
            <span className='reviewEvalTitle'>별점: </span>
            <input className='reviewEvalInput'/>
            <span className='reviewEvalSpan'> / 5</span>
          </div>
          <div className='reviewBtn'>
            <button className='reviewEnrollBtn'>리뷰 등록</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewEditor;