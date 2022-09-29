import './App.css';
import Header from './components/Header/Header';
/* import Navigation from './components/SideBar/Navigation/Navigation'; */
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
/* import store from './redux/state'; */


function App(props) {
  return (
   <BrowserRouter>
    <div className="App">
      <Header />
      <SideBar state={props.state.sideBar}/>
      <div className='content'>
        <Routes>
          <Route path='/main' element={<Main mainPage={props.state.mainPage} dispatch={props.dispatch}/>}/> 
          <Route path='/dialogs' element={<Dialogs store={props.store}/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
     </BrowserRouter>
  );
}

export default App;
