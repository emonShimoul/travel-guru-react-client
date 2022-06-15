import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import backgroundImg from './images/background.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import News from './components/News/News';

function App() {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${backgroundImg})`, 
      width:'100%', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat' 
    }} 
    className="App"
    >
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
