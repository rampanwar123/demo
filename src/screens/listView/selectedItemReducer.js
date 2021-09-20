import ActionTypes from "../../action/ActionTypes";

const intialState = {
    selectedItemList :[]
}

const selecteItemReducer = (state=intialState, action) => {
 
    switch(action.type){
        case ActionTypes.SELECTED_ITEM:
            return{
                ...state,
                selectedItemList:action.payload
            }
            default:
                return state;
    }
}

export default selecteItemReducer;