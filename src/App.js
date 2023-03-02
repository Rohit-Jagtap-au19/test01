import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Ask_Doubt from './pages/Ask_Doubt'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/dashbaord' element={<Dashboard/>}></Route>
      <Route exact path='/settings' element={<Settings/>}></Route>
      <Route exact path='/askdoubt' element={<Ask_Doubt/>}></Route>
      <Route exact path='/analytics' element={<Analytics/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
