import ReviewItem from "./ReviewItem";
import './review.css';

const ReviewList = ({reviewList}) =>{
  console.log(reviewList);
  return(
    <div className="ReviewList">
      <h2 className="reviewListTitle">[병원 리뷰 리스트]</h2>
      
      <div className="reviewListMain">
        {reviewList.map((it)=>(
          <ReviewItem key = {it.id} {...it}/>
        ))}
      </div>
    </div>
  )
}

ReviewList.defaultProps = {
  reviewList: []
}

export default ReviewList;