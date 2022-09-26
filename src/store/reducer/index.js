import { createSlice } from '@reduxjs/toolkit';

export const reduceSlice = createSlice({

    name: "info",

    initialState: {
        infos: [],
        infosFilter: [],
        profile:[],
        datos:[],
    },

    reducers: {
        setInfo:(state,action) => {
            state.infos = action.payload;
            state.infosFilter = action.payload.users;   
        },
        setProfile:(state,action) => {
            state.profile = action.payload;  
        },
        setFilter:(state,action) => {
            state.infosFilter = state.infos?.users.filter( i =>  i.profile === +action.payload) 
        },
        setFilterState:(state,action) => {
            state.infosFilter = state.infos?.users.filter( i =>  i.state === +action.payload)
        },
        setFilterName:(state,action) => {
            state.infosFilter = state.infos?.users.filter( i => internalFunctionIncludes(i.name.toLowerCase(), action.payload.toString().toLowerCase()))//i.state === +action.payload)
        },
        setFilterEmail:(state,action) => {
            state.infosFilter = state.infos?.users.filter( i => internalFunctionIncludes(i.email.toLowerCase(), action.payload.toString().toLowerCase()))//i.state === +action.payload)
        },
        setDatos:(state,action) => {
            console.log("action.payload",action.payload) 
            state.datos = action.payload;  
        },
        clearFilter:(state,action) => {
            state.infosFilter = state.infos.users
        },

    },

});

export const { setInfo, setProfile, setFilter, setFilterState, setFilterName, setFilterEmail, clearFilter, setDatos } = reduceSlice.actions;

export default reduceSlice.reducer;

export const getInfo = (name) => async(dispatch) => {
    const filtro = name?name:""
    const API = "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152694253/users";//esta deberia estar en el .env(obvio...xd)

    await fetch(API)
    .then(res=> res.json())
    .then((c)=>{
        dispatch(setInfo(c));
    }).catch((err)=>{
        console.error(err);
    });
    
}
export const getProfile = () => async(dispatch) => {
    const API = "http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/profiles";//esta deberia estar en el .env(obvio...xd)
    await fetch(API)
    .then(res=> res.json())
    .then((c)=>{
        dispatch(setProfile(c.profiles));
    }).catch((err)=>{
        console.error(err);
    });
    
}
export const getData = (id) => async(dispatch) => {
    const API = `http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152694253/users/${id}`;//esta deberia estar en el .env(obvio...xd)
    await fetch(API)
    .then(res=> res.json())
    .then((c)=>{
        console.log(c);
        dispatch(setDatos(c.user));
    }).catch((err)=>{
        console.error(err);
    });
    
}





const internalFunctionIncludes = (str, action) => {
    let palabra = []
    let contador = 0
    const compare = str.split("")
    const arr = action.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(compare[contador])) {
            palabra.push(arr[i])
            contador++
        }else{
            return palabra = false;
        }      

    }
    return true;
}
