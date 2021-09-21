import ActionTypes from "../../action/ActionTypes";

const intialState = {
    selectedItemList :[],
    itemList:[]
}

const selecteItemReducer = (state=intialState, action) => {
 
    switch(action.type){
        case ActionTypes.SELECTED_ITEM:
            return{
                ...state,
                selectedItemList:action.payload
            }
        case ActionTypes.ITEM_LIST:
            return{
                ...state,
                itemList:action.payload
            }
            default:
                return state;
    }
}

export default selecteItemReducer;