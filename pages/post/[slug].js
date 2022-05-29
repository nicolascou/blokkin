import React, { useEffect } from 'react'
import { getPosts, getPostDetails } from '../../services/index';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { resetState } from '../../actions/search';
import { menuOff } from '../../actions/menu';


const PostDetails = ({post}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( resetState() );
        dispatch( menuOff() );
        
    }, [])

    return (
        <>
            <Head>
                <title>{post.title} - Post de BLOKKIN'</title>
                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <div className='container mx-auto px-10 mb-8'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-12'>
                    <div className='col-span-1 xl:col-span-8'>
                        <PostDetail post={post} />
                        <Author author={post.author} />
                        <CommentsForm slug={post.slug} />
                        <Comments slug={post.slug} />
                    </div>
                    <div className='hidden xl:block xl:col-span-4'>
                        <div className='relative xl:sticky top-8'>
                            <PostWidget slug={post.slug} categories={post.categories.map((category) => (category.slug))} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({node: {slug}}) => ({ params: {slug} })),
        fallback: false
    }
}