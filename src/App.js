/* eslint-disable */
import './App.css';
import Header from './component/a태그/Header';
import Main from './component/a태그/Main';
import Cards from './component/a태그/Cards';
import Footer from './component/a태그/Footer';
import Blog from './component/Blog/Blog';
import { Routes, Route, Link } from 'react-router-dom';
import About from './component/Router/About';
import Home from './component/Router/Home';
import Products from './component/Router/Products';
import ProductDetail from './component/Router/ProductDetail';
import UseModal from './component/UseModal';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  // useEffect 함수가 매개변수 두 개를 받는다.
  // 1. 콜백함수
  // 2. [] array
  useEffect(() => {
    console.log('useEffect1')
  }, [])

  // Array에 state 값을 넣으면 리액트가 그 값을 주시하고 있다가
  // count가 업데이트 되면 render State 업데이트 됐다고 알려준다.
  useEffect(() => {
    console.log('useEffect2', count)
  }, [count])

  return (
    <div className="App">
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={() => {
        setCount((c) => c + 1)
      }}>Click</button>

      <UseModal></UseModal>
     <Routes>
      {/* Route안에 속성값이 두개가 들어간다 path/element
          1. path : 페이지의 주소 URL
          2. element : path 주소로 이동 했을 때 보여줄 페이지
          / : 기본경로
       */}
      <Route path='/' element={<Home></Home>}></Route>

       {/* nested Routes */}
       {/* Outlet */}
      <Route path='/about' element={<About></About>}>
        <Route path='/about/member' element={<h1>멤버</h1>}></Route>
        <Route path='/about/location' element={<h1>로케이션</h1>}></Route>
      </Route>

      {/* <Route path='/about' element={<About></About>}></Route>
      <Route path='/about/member' element={<h1>멤버</h1>}></Route>
      <Route path='/about/location' element={<h1>로케이션</h1>}></Route> */}

      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/products/:id' element={<ProductDetail></ProductDetail>}></Route>
     </Routes>
    </div>
  );
}

export default App;