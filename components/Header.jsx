import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {getCategories } from '../services' 



const Header = () => {
        const [categories, setCategories]= useState([]);
    
        useEffect(()=> {
            getCategories()
            .then((newCategories) => setCategories(newCategories))
    
        },[]);
    return (
        <div className="container mx-auto px-10 mb-8 top">
            <div className="border-b w-full flex border-darkgreen py-8">
                <div className="flex-3 flex align-center justify-start">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-xl text-darkgreen">
                            vasc. 
                        </span>
                    </Link>
                </div>
                <div className="topCenter ">
                    <ul className="flex justify-center list-none">
                        <li className='mr-20 font-semi text-xl'><Link href="/">HOME</Link> </li>
                        <li className='mr-20 font-medium text-xl'><Link href="/">KATEGORIEN</Link> </li>
                        <li className='mr-20 font-medium text-xl'><Link href="/about">ABOUT</Link> </li>  
                    </ul>
                </div>
              {/*
              
                <div className="flex-3 flex align-center justify-end">
                    {categories.map((category)=>(
                        <Link key={category.slug} href={`category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold coursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}


                </div>
                    */} 
            </div>
            
        </div>
    )
}

export default Header
