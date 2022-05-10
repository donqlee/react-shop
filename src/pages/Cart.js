import React from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

const Cart = () => {
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch()

    return (
        <div>
            {state.user}
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
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.count}</td>
                                    <td><button onClick={() => dispatch(changeName())}>+</button></td>
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