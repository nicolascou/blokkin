import { getPosts } from "../services/index";


export const getPostsByName = async( name ) => {

    const posts = (await getPosts()) || [];

    name = name.toLowerCase();
    let validPosts = posts.filter(post => post.node.title.toLowerCase().includes(name));
    
    console.log(validPosts)
    
    return validPosts;

}