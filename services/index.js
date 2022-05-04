import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(
                orderBy: createdAt_DESC
            ) {
                edges {
                    node {
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }   
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
      }
    `

    const results = await request(graphqlAPI, query);

    return results.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: {slug: $slug}) {
                author {
                    bio
                    id
                    name
                    photo {
                        url
                    }
                }   
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
                content {
                    raw
                }
            }
        }
    `;

    const results = await request(graphqlAPI, query, {slug});
    return results.post;
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]){
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
            ){
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const results = await request(graphqlAPI, query, {categories, slug});
    return results.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories(
                orderBy: name_ASC
            ) {
                name
                slug
            }
        }
    `

    const results = await request(graphqlAPI, query);
    return results.categories;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });
    
    return result.json();
}

export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug } }) {
                name 
                createdAt
                comment
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug });
    return results.comments;
}

export const getPostsByCategory = async (slug) => {
    const query = gql`
        query GetPostsByCategory($slug: String!){
            posts(
                where: { categories_some: { slug: $slug } }
                orderBy: createdAt_DESC
            ){
                author {
                    bio
                    id
                    name
                    photo {
                        url
                    }
                }   
                createdAt
                slug
                title
                excerpt
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
            }
        }
    `

    const results = await request(graphqlAPI, query, { slug });
    return results.posts;
}