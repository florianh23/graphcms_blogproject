import React from 'react'; 
import Image from 'next/image';
const Author = ({author}) => {
    return (
        <div className=" shadowlayered text-center pl-20 mt-20 mx-10 ml-12 mb-8 p-12 relative rounded-lg bg-darkgreen">
            <div className="absolute -left-10 top-10 bottom-0 ">
                <Image 
                    src={author.photo.url}
                    unoptimized 
                    alt={author.name}
                    height="120px"
                    width="120px"
                    className="align-middle rounded-lg"
                    />
            </div>
            <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
            <p className="text-white text-lg">{author.bio}</p>
        </div>
    )
}

export default Author

