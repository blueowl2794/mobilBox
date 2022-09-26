import { configureStore } from '@reduxjs/toolkit'

import info from './reducer';


const store = configureStore({
    reducer:{
        info
    }
});

export default store;