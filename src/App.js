/* eslint-disable */
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Blog from './component/Blog/Blog';
import { Routes, Route } from 'react-router-dom';
import Sub1 from './component/Sub1';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Blog></Blog> */}
    </div>
  );
}

export default App;