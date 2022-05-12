import React from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName } from '../store/useSlice.js';
import { changeCount } from '../store.js';

const Cart = () => {
    let state = useSelector((state) => {return state}); //redux store를 가져와줌
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name}의 장바구니 나이는 {state.user.age}</h6>
            <button onClick={() => dispatch(changeAge(10))}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((v, i) => {
                            return(
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.count}</td>
                                    <td><button onClick={() => {
                                        dispatch(changeCount(state.cart[i].id))
                                        
                                    }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                    
                   
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;