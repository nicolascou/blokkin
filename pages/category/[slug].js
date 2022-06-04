import React, { useEffect } from 'react'
import { getCategories, getPostsByCategory } from '../../services/index';
import { Categories, PostCard, Search } from '../../components';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../actions/search';
import { menuOff } from '../../actions/menu';


const PostsByCategory = ({ posts }) => {

    const category = posts[0].categories[0].name;
    
    const dispatch = useDispatch();
    const { search, cardSearched } = useSelector(state => state.search);

    useEffect(() => {
        dispatch( resetState() );
        dispatch( menuOff() );
    }, [])
    

    return (
        <>
            <Head>
                <title>Categoría { category } - Buscando por categoría BLOKKIN'</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <div className='container mx-auto px-2 sm:px-10 mb-8 relative'>
                <div className='2xl:hidden'>
                    <Search />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-12 xl:gap-10'>
                    {
                        (search !== '') ?
                        <div className='col-span-12 2xl:col-span-9 
                                    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                                    gap-10 h-fit'> 
                            {
                                cardSearched.map( (post) => <PostCard post={post.node} key={post.node.title} /> )
                            }
                        </div> 
                        :
                        <div className='col-span-12 2xl:col-span-9 
                                    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                                    gap-10 h-fit'>
                            {posts.map( (post) => <PostCard post={post} key={post.title} />)}
                        </div>
                    }
                    <div className='hidden 2xl:block 2xl:col-span-3'>
                        <div className='relative 2xl:sticky top-8'>
                            <Search />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostsByCategory

export async function getStaticProps({params}) {
    const posts = (await getPostsByCategory(params.slug)) || [];
    
    return {
        props: { posts }
    }
}

export async function getStaticPaths() {
    const posts = await getCategories();
    
    return {
        paths: posts.map(({ slug }) => ({ params : {slug}})),
        fallback: false
    }
}