import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from "./components/Dialogs/Dialog/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SideBar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer />}/>
                        <Route path='/profile'
                               element={<ProfileContainer />}>
                        </Route>
                        <Route path='/dialogs'
                               element={<DialogsContainer />}/>
                        <Route path='/users'
                               element={<UsersContainer />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
