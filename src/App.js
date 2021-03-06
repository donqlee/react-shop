import {createContext, useState, useEffect} from 'react';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js'
import Card from './Components/Card'
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import Cart from './pages/Cart.js'
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';

// ContextAPI
// 셋팅1. createContext()
// 셋팅2. <Context>로 원하는 컴포넌트 감싸기
// 셋팅3. value={{state1, state2...}}

export let Context1 = createContext();

function App() {
    useEffect(() => {
        if(!localStorage.getItem('watched')){
            localStorage.setItem('watched', JSON.stringify([]))
        }
        
    }, []);

    let [shoes, setShoes] = useState(data);
    let [stock, setStock] = useState([10, 11, 12]);
    let navigate = useNavigate();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => { navigate('/')}}>ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/detail/0')}}>Detail</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
                        {/* navigate(-1)을 적으면 뒤로 간다. navigate(1)을 적으면 앞으로 간다. */}
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route
                    path="/"
                    element={
                    <> 
                      <div className = "main-bg"> </div>
                      <div className="container">
                        <div className="row">
                        {
                            shoes.map((v, i) => {
                                return (<Card shoes={shoes[i]} i={i + 1} key={i + 1} />)
                            })
                        }
                        </div>
                        <button onClick={ () => {
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                            .then((result) => {
                                setShoes((prev) => {
                                return [...prev, ...result.data];
                            })})
                            .catch(() => console.log('fail'))
                            // 서버로 데이터 전송하는 POST 요청
                            // axios.post('/blahblah.com', {name: 'kim})

                            // 동시에 ajax 요청 여러개하려면
                            // Promise.all([axios.get('https://codingapple1.github.io/shop/data2.json'), axios.get('https://codingapple1.github.io/shop/data3.json')])
                            // .then((data) => {
                            //     console.log(data)
                            // })

                            //서버와 데이터를 주고 받은때 문자자료만 주고 받을수 있음 (JSON)

                            //fetch
                            // fetch('https://codingapple1.github.io/shop/data3.json')
                            // .then((data) => data.json())
                        }}>
                            더보기</button>
                      </div>
                    </>
                    }
                />
                <Route path="/detail/:id" element={
                    <Context1.Provider value={{stock, shoes}}>
                        <Detail shoes={shoes}></Detail>
                    </Context1.Provider>
                }/>
                <Route path="/cart" element={
                    <Cart></Cart>
                }/>
                {/* 페이지 여러개 만들고 싶으면 :URL파라미터 써도 됩니다. */}
                <Route path="/about" element={<About />}>
                    {/* Nested Routes */}
                    <Route path="member" element={<div>멤버임</div>} /> 
                    {/* /about/member, Outlet을 통해 About에 멤버임을 넣어줌 */}
                    <Route path="location" element={<div>장소임</div>} />
                    {/* /about/location */}
                </Route>
                <Route path="*" element={<div>없는페이지요</div>}/>
                {/* 별표를 적을 시 지정한 페이지 외 모든페이지를 지칭함 */}
            </Routes>

        </div>
    );
}

export default App;
