import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from "./components/Dialogs/Dialog/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
/* import store from './redux/state'; */
//<SideBar state={props.state.sideBar}/>

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SideBar/>
                <div className='content'>
                    <Routes>
                        <Route path='/main'
                               element={<Main store={props.store}/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/users' element={<UsersContainer store={props.store}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
