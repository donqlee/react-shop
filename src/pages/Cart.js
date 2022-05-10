import React from 'react';
import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
    let a = useSelector((state) => {return state});
    console.log(a.item);

    return (
        <div>
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
                        a.item.map((v, i) => {
                            return(
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.count}</td>
                                    <td>안녕</td>
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