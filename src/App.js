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

function App() {
  return (
    <div className="App">
     <Routes>
      {/* Route안에 속성값이 두개가 들어간다 path/element
          1. path : 페이지의 주소 URL
          2. element : path 주소로 이동 했을 때 보여줄 페이지
          / : 기본경로
       */}
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;