import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import storeFactory from './store';

const Root = () => { 
    const store = storeFactory();
    return (
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    );
}

export default Root;