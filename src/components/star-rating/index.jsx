import {FaStar} from "react-icons/fa";
import {useState} from "react";

export default function StarRating({noOfStar=5}){

    const [onMouseHover, setOnMouseHover]=useState(1);


    return (
        <div className="starRating">
            [...Array(noOfStar)].map((_,index) => {
                return <FaStar
                key={index}
                onClick={}
                onMouseMove={}
                onMouseLeave={}
                size={40}
                />
            })
        </div>
    )
}