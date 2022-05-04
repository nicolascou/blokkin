import { getPosts } from "../services/index";
import { types } from "../types/types"


export const searchUpdated = (search) => ({
    type: types.searchUpdated,
    payload: search
});

export const getPostsByName = ( name ) => {
    return async(dispatch) => {
        const posts = (await getPosts()) || [];
        
        name = name.toLowerCase();
        let validPosts = posts.filter(post => post.node.excerpt.toLowerCase().includes(name));
        if( name === '') { validPosts = [] }
        
        dispatch( cardSearched(validPosts) )
    }
}

const cardSearched = (cards) => ({
    type: types.cardSearched,
    payload: cards
})

export const resetState = () => ({
    type: types.resetState
})


