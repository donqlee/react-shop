import React from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// props로 컴포넌트 재활용가능
let Btn = styled.button`
    background : ${props => props.bg}; 
    color : ${props => props.bg === 'blue' ? 'white' : 'black'}; 
    padding : 10px;
`
//상속 가능 
let NewBtn = styled(Btn)`
    margin : 20px;
`


// styled-components 장점
// 1. css파일 안열어도 된다.
// 2. 스타일이 다른 js파일로 오염되지 않음 (오염방지하려면 컴포넌트.module.css도 가능)
// 3. 페이지 로딩시간 단축 (<style></style>로 넣어줌)

const Detail = (props) => {
    let {id} = useParams(); 
    // localhost:3000/detail/:id  id 부분을 가지고옴
    let shoe = props.shoes.find((val) => val.id == id);
    // 정렬시 id로 id를 찾기 위해서  
    return (
        <div className="container">
            {/* <Btn bg="blue">버튼</Btn>
            <Btn bg="orange">버튼</Btn>
            <NewBtn bg='red'>뉴버튼</NewBtn> */}
            
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