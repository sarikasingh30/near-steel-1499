// import * as types from "./actionTypes"
const initialState={
    // .............add key-value pair
    isLoading:false,
    isError:false
}
const reducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
    //  write cases here
        default:
            return state;
    }
}
export {reducer}