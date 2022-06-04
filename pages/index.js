import Head from 'next/head';
import { useSelector } from 'react-redux';
import {PostCard, Categories, Search} from '../components';
import { getPosts } from '../services/index';

export default function Home({ posts }) {

    const { search, cardSearched } = useSelector(state => state.search);

    return (
        <>
            <Head>
                <title>BLOKKIN' - Blog en español acerca de los aspectos técnicos de la tecnología blockchain</title>
                <meta name='description' content='Blog en español sobre programación. Explicaciones sobre conceptos teóricos de la programación y nuevas tecnologías' />

                <link rel="icon" href="/img/favicon.ico" />
            </Head>
            <div className="container mx-auto px-2 sm:px-10 mb-8 relative">
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
                            {posts.map( (post) => <PostCard post={post.node} key={post.node.title} />)}
                        </div>
                    }
                    <div className='hidden 2xl:col-span-3 2xl:block'>
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

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    }
}
