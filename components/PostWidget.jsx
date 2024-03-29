import React, {useState, useEffect}  from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
    const [relatedPosts,setrelatedPosts] = useState([]);
   
    useEffect(() => {
        if(slug){
            getSimilarPosts(categories,slug)
            .then((result) => setrelatedPosts(result))
        }else{
            getRecentPosts()
            .then((result) => setrelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts);
    return (
        <div className="rounded-lg p-8">
            <h3 className="text-xl mb-8  border-b pb-4 text-center">
                {slug ? "Ähnliche Artikel" : "Neue Artikel"}
            </h3>
            {relatedPosts.map((post)=>(
                <div key={post.title} className="flex itmes-center w-full">
                    <div className ="w-16 flex-none">
                        <img 
                        alt={post.title}
                        heigth="60px"
                        width="60px"
                        className="align-middle rounded-full"
                        src={post.featuredImage.url}
                        />

                    </div>
                    <div className=" flex-grow ml-4">
                        <p className="text-gray-500 font-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                            {post.title}
                        </Link>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default PostWidget


