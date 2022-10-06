import { createStore, combineReducers} from "redux";
import mainReducer from './mainReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;