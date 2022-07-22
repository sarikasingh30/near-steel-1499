import * as types from "./actionTypes";
export const getDataRequest=()=>({
    type:types.GET_DATA_REQUEST
});
export const getDataSuccess=(payload)=>({
    type:types.GET_DATA_SUCCESS,payload
});
export const getDataFailure=()=>({
    type:types.GET_DATA_FAILURE
});