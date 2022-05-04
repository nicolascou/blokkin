import React, { useEffect } from 'react'
import { getCategories, getPostsByCategory } from '../../services/index';
import { Categories, PostCard, Search } from '../../components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../actions/search';
import { menuOff } from '../../actions/menu';


const PostsByCategory = ({ posts }) => {

    const { query } = useRouter();
    const slugUrl = query.slug; 
    
    const dispatch = useDispatch();
    const { search, cardSearched } = useSelector(state => state.search);

    useEffect(() => {
        dispatch( resetState() );
        dispatch( menuOff() );
        
    }, [])
    

    return (
        <>
            <Head>
                <title>Categoría { slugUrl.charAt(0).toUpperCase() + slugUrl.slice(1) } - Buscando por categoría BLOKKIN'</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <div className='container mx-auto px-10 mb-8'>
                <div className='xl:hidden'>
                    <Search />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-12'>
                    <div className='col-span-1 xl:col-span-9'>
                        {
                            (search !== '') ?
                            <div className='xl:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 h-fit'> 
                                {
                                    cardSearched.map( (post) => <PostCard post={post.node} key={post.node.title} /> )
                                }
                            </div> 
                            :
                            <div className='xl:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 h-fit'>
                                {posts.map( (post) => <PostCard post={post} key={post.title} />)}
                            </div>
                        }
                    </div>
                    <div className='hidden xl:block xl:col-span-3'>
                        <div className='relative xl:sticky top-8'>
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