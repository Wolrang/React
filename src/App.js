/* eslint-disable */
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Blog from './component/Blog/Blog';
import { Routes, Route } from 'react-router-dom';
import Sub1 from './component/Sub1';
import Menu2 from './component/Menu2';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/menu1' element={<h1>menu1 페이지</h1>}></Route>
        <Route path='/menu2' element={<Menu2></Menu2>}></Route>
        <Route path='/menu3' element={<h1>menu3 페이지</h1>}></Route>
      </Routes>
      {/* <Blog></Blog> */}
    </div>
  );
}

export default App;