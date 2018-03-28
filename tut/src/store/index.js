import {createStore, combineReducers, applyMiddleware} from 'redux';

const logger = store => next => action => {
    let result;
    console.log('이전상태', store.getState());
    console.log('액션', action);
    result = next(action);
    console.log(result);
    console.log('다음상태', store.getState());
}

const storeFactory = (initialState ={}) => {
    return  applyMiddleware(logger)(createStore)(
                combineReducers({colors: (state=[],action)=>{
                    return state;
                }}),
                initialState
            );
}

export default storeFactory;