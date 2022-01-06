import React, { useRef, useState, useEffect } from 'react';

import {submitComment} from '../services';


const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl =useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    /*use localstorage for 2nd time visiting*/

    useEffect(()=>{
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');

    }, [])

    const handleCommentSubmission = () =>{
        setError(false);


        const {value: comment} = commentEl.current;
        const {value: name} = nameEl.current;
        const {value: email} = emailEl.current;
        const {checked: storeData} = storeDataEl.current;

        if(!comment|| !name||!email){
            setError(true);
            return;
        }

        const commentObj = {name, email, comment, slug }; 
        if(storeData){
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        }else{
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }
        submitComment(commentObj)
            .then((res)=>{
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    
    return (
        <div className="bg-white shadowlayered rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Verfasse einen Kommentar</h3>
            <div className=" grid grid-cols-1 gap-4 mb-4">
                <textarea
                 ref ={commentEl} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                 name="comment" 
                 placeholder="Kommentar" 
                 
                 
                 />


            </div>
            <div className=" grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
               <input 
               type="text" ref={nameEl}
               className="py-2 px-4 outline-none w-full rounded-lg  focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
               name="name" 
               placeholder="name" 
               />
               <input 
               type="text" ref={emailEl}
               className="py-2 px-4 outline-none w-full rounded-lg  focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
               name="email" 
               placeholder="email" 
               />

            </div>
            <div className=" grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl}type="checkbox" id="storeData" name="storeData"  value="true"
                    />
                    <label className="text-gray-500 cursor-pointer ml-2"htmlFor="storeData"> Email und Namen für weitere Kommentare merken</label>
                </div>


            </div>
            {error && <p className=" text-xs text-red-500">All fields are required</p>}
            <div className=" mt-8">
                <button 
                type="button" 
                onClick={handleCommentSubmission}
                className="transition durration-500 ease hover:bg-pink-900 inline-block bg-darkgreen text-white rounded-lg px-8 py-3"
                > 
                abschicken

                </button>
                {showSuccessMessage && <span className="text-xl float-right"></span>}

            </div>
        </div>
    )
}

export default CommentsForm
