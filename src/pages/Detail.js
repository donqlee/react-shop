import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
    let {id} = useParams(); 
    // localhost:3000/detail/:id  id 부분을 가지고옴
    let shoe = props.shoes.find((val) => val.id == id);
    // 정렬시 id로 id를 찾기 위해서  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;