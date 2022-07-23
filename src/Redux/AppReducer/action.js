import * as types from "./actionTypes";
import axios from "axios";
export const getDataRequest=()=>({
    type:types.GET_DATA_REQUEST
});
export const getDataSuccess=(payload)=>({
    type:types.GET_DATA_SUCCESS,payload
});
export const getDataFailure=()=>({
    type:types.GET_DATA_FAILURE
});

export const getCartData=()=>dispatch=>{
    dispatch({type:types.GET_CARTDATA_REQUEST})
    axios.get("http://localhost:8080/cart")
    .then((r)=>dispatch({type:types.GET_CARTDATA_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:types.GET_CARTDATA_FAILURE,payload:err}))
}

export const addCartData=(payload)=>dispatch=>{
    dispatch({type:types.ADD_CARTDATA_REQUEST})
    axios.post("http://localhost:8080/cart",payload)
    .then((r)=>dispatch({type:types.ADD_CARTDATA_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:types.ADD_CARTDATA_FAILURE,payload:err}))
}