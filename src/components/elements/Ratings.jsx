import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export const Ratings = ({rating}) => {
  let ratingArray = Array(5).fill(false);
  for(let i=0; i<rating; i++){
      ratingArray[i] = true;
  }

return (
  <div className="flex">
      { ratingArray.map((value, index) => (
          value ? (
              <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1">
                  <FaStar />
              </i>
          ) : (
              <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1">
                  <FaRegStar />
              </i>
          )
      )) }
  </div>
)
}