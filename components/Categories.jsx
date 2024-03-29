import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {getCategories } from '../services' 


const Categories = () => { 
    const [categories, setCategories]= useState([]);

    useEffect(()=> {
        getCategories()
        .then((newCategories) => setCategories(newCategories))

    },[]);
    
    return(
        <div className=" rounded-lg p-8 pb-12">
            <h3 className="text-xl mb-8  border-b pb-4 text-center">
                Kategorien
            </h3>
            {categories.map((category)=>(
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="block cursor-pointer pb-3 mb-3">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}
    


export default Categories
