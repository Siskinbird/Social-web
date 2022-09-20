import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      {/* <Main/> */}
      <div className='content'>
         <Dialogs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
