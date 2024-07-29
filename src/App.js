import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route,} from 'react-router-dom'
import Cards from './components/Cards'
import CardsDetails from './components/CardsDetails';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>

    <Route path='/' element={<Cards/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/cart/:id' element={<CardsDetails/>}/>

    </Routes>
    </div>
  );
}

export default App;
