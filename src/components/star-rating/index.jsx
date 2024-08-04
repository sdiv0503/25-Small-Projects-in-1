import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

export default function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [onMouseHover, setOnMouseHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setOnMouseHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setOnMouseHover(rating);
  }

  return (
    <div className="starRating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={
              index <= (onMouseHover || rating) ? "active" : "inactive"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
