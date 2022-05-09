import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {Nav} from 'react-bootstrap';

// props로 컴포넌트 재활용가능
let Btn = styled.button `
    background : ${props => props.bg}; 
    color : ${props => props.bg === 'blue'
    ? 'white'
    : 'black'}; 
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
    let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);
    let [tab, setTab] = useState(0);

    useEffect(() => {
        console.log(1);
        let a = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return() => {
            // 기존 코드를 치우는거 여기에 많이 작성함 clean up function 이라고 함
            clearTimeout(a)
        }
        // useEffect 동작 전에 실행 되는 return () => {} (참고) clean up function은 mount시 실행안됨
        // unmount시 실행됨

    }, [count])
    // useEffect dependency dependency 없을때 : mount, update시 실행됨 (재랜더링마다) dependency
    // [count] : mount 될때 한번, count라는 state가 변할때만 실행됨 dependency [] : mount에만 실행됨
    // useEffect 쓰는 이유 html 렌더링 후에 동작

    let {id} = useParams();
    // localhost:3000/detail/:id  id 부분을 가지고옴
    let shoe = props
        .shoes
        .find((val) => val.id == id);
    // 정렬시 id로 id를 찾기 위해서
    return (
        <div className="container">
            {/* <Btn bg="blue">버튼</Btn>
            <Btn bg="orange">버튼</Btn>
            <NewBtn bg='red'>뉴버튼</NewBtn> */
            }
            {
                alert == true
                    ? <div className="alert alert-warning">2초이내 구매시 할인</div>
                    : null
            }

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

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => setTab(0)}>Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => setTab(1)}>Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => setTab(2)}>Disabled</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    )
}
const TabContent = (props) => {
    if(props.tab === 0){
        return <div>내용0</div>
    }else if(props.tab === 1){
        return <div>내용1</div>
    }else{
        return <div>내용2</div>
    }

    //편법 
    //return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
}

export default Detail;