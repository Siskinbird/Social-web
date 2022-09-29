import { createStore, combineReducers} from "redux";
import mainReducer from './mainReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers({
    mainPage: mainReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;