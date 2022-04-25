import Head from 'next/head';
import { useSelector } from 'react-redux';
import {PostCard, Categories, PostWidget, Search} from '../components';
import { getPosts } from '../services/index';
import { getPostsByName } from '../selector/getPostsByName';

export default function Home({ posts }) {

    const selector = useSelector(state => state);

    if (selector !== '') {
        const validPosts = async() => {
            setTimeout(() => {
                getPostsByName(selector);
                
            }, 1000);
        }
        console.log(validPosts)
    }
    

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>BLOKKIN' - Blog en español acerca de los aspectos técnicos de la tecnología blockchain</title>
                <meta name='description' content='Blog en español acerca de los aspectos técnicos de la tecnología blockchain, las criptomonedas, los smart contracts, etc.' />

                <link rel="icon" href="/img/favicon.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-10'>
                {
                    (selector !== '') ?
                    <div className='lg:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-10'> 
                        { validPosts.map( (post) => <PostCard post={post.node} key={post.node.title} /> ) }
                    </div> 
                    :
                    <div className='lg:col-span-9 col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {posts.map( (post) => <PostCard post={post.node} key={post.node.title} />)}
                    </div>
                }
                <div className='lg:col-span-3 col-span-1'>
                    <Search />
                    <Categories />
                    <PostWidget />
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    }
}
