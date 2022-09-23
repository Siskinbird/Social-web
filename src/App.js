import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/SideBar/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';


function App(props) {
  return (
   <BrowserRouter>
    <div className="App">
      <Header />
      <SideBar state={props.state.sideBar}/>
      <div className='content'>
        <Routes>
          <Route path='/main' element={<Main state={props.state.mainPage}/>} /> 
          <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage}/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
     </BrowserRouter>
  );
}

export default App;
