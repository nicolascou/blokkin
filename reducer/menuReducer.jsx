import {types} from '../types/types';

const initialState = {
    menuOn: false
}

export const menuReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.menuOn:
            return {
                ...state,
                menuOn: true
            }

        case types.menuOff:
            return {
                ...state,
                menuOn: false
            }
    
        default:
            return state;
    }
    
}