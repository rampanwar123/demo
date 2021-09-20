import ActionTypes from "../../action/ActionTypes";

export const selectedItem = (payload) =>{

    return{
        type:ActionTypes.SELECTED_ITEM,
        payload

    }
}
