import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
   
    <div className="App">
      <Header/>
      <Navigation/>
      <div className='content'>
         <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main />} /> 
          <Route path='/dialogs' element={<Dialogs />} />
        </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
