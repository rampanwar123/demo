import ActionTypes from "../../action/ActionTypes";

export const selectedItem = (payload) =>{

    return{
        type:ActionTypes.SELECTED_ITEM,
        payload

    }
}

export const itemList = (payload) => {
    console.log('paload',payload)
    return{
        type:ActionTypes.ITEM_LIST,
        payload
    }
}
