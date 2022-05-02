import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%"/> {/* html에서 public폴더 이미지 사용할 땐 그냥 /이미지 경로 */}
            <h5>{props.shoes.title}</h5>
            <p>{[props.shoes.price]}</p>
        </div>
    )
}

export default Card;