import { types } from '../types/types';

const initialState = {
    search: "",
    cardSearched: []
};

export const searchReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.searchUpdated:
            return {
                ...state,
                search: action.payload
            } 

        case types.cardSearched:
            return {
                ...state,
                cardSearched: action.payload
            }

        case types.resetState:
            return {
                search: "",
                cardSearched: []
            }
    
        default:
            return state;
    }
    
}
