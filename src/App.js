import {useState} from 'react';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js'
import Card from './Components/Card'
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => { navigate('/')}}>ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
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
                                return (<Card shoes={shoes[i]} i={i + 1} key={i + 1}/>)
                            })
                        }
                    </div>
                </div>
            </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}/>
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
