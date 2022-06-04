import React, { useEffect, useState } from 'react';
import { Categories, PostWidget} from './';

const SitckySideBar = ({ post }) => {

    const [scrollDown, setScrollDown] = useState(true);

    let prepos = 0;
    let position = 0;

    const handleScroll = () => {
        position = window.pageYOffset;
        console.log(position)
        if (prepos > position) {
            setScrollDown(false);
        } else {
            setScrollDown(true);
        }
        prepos = position;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={"relative xl:sticky transition-all duration-500 " + (scrollDown ? 'negativeTop' : 'top-6')}>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => (category.slug))} />
                <Categories />
            </div>
        </>
    )
}

export default SitckySideBar