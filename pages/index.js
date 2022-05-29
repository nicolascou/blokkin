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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            </Head>
            <div className="container mx-auto px-10 mb-8 relative">
                <div className='xl:hidden'>
                    <Search />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-12 xl:gap-10'>
                    {
                        (search !== '') ?
                        <div className='xl:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 h-fit'> 
                            {
                                cardSearched.map( (post) => <PostCard post={post.node} key={post.node.title} /> )
                            }
                        </div> 
                        :
                        <div className='xl:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 h-fit'>
                            {posts.map( (post) => <PostCard post={post.node} key={post.node.title} />)}
                        </div>
                    }
                    <div className='xl:col-span-3 xl:block hidden'>
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

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    }
}
