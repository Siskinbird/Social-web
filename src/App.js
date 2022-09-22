import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, BrowserRouter, Route} from 'react-router-dom';


function App(props) {
  return (
   <BrowserRouter>
    <div className="App">
      <Header/>
      <Navigation/>
      <div className='content'>
        <Routes>
          <Route path='/main' element={<Main posts={props.posts}/>} /> 
          <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
     </BrowserRouter>
  );
}

export default App;
