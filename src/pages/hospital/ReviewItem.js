import './review.css';
const ReviewItem = ({id, userName, evaluation, symptom, content}) =>{
  return(
    <div className="ReviewItem">
      <div className="reviewItemInfo">
        <span className='reviewUserName'>{userName}님</span>
      </div>
    </div>
  )
}
export default ReviewItem;