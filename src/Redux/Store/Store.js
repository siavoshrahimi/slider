import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import AuthReducer from '../Reducer/AuthReducer';

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
            isAuth:AuthReducer,
        }
        ),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}
