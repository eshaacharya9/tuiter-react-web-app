import React, { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaUpload } from 'react-icons/fa';
import './index.css';
import {useDispatch} from "react-redux";
import { likeButton } from "../reducers/tuits-reducer";

const TuitsStat = ( tuit ) => {
    const [likes, setLikes] = useState({tuitId: tuit.index, tuitLikes: tuit.likes, tuitLiked: tuit.liked})
    
    const dispatch = useDispatch();
    const handleLikeClick = (id) => {
        if(likes.tuitLiked) {
            setLikes({...likes, tuitLikes: likes.tuitLikes - 1, tuitLiked: false});
        } else {
            setLikes({...likes, tuitLikes: likes.tuitLikes + 1, tuitLiked: true});
        }
        dispatch(likeButton(likes));
    };
    return (
        <>
            <div className="mt-2 mb-2" style={{ marginLeft: '130px' }}>
                <FaComment className="text-secondary" /><span className="text-secondary me-5 d-none d-md-inline"> {tuit.replies}</span>
                <FaRetweet className="text-secondary ms-sm-2 ms-md-4 ms-lg-5" /><span className="text-secondary text-decoration-none me-5 d-none d-md-inline"> {tuit.retuits}</span>
               
                <span style={{"cursor": "pointer"}} 
                 onClick={() => handleLikeClick(tuit.liked)}>
                    <FaHeart className={likes.tuitLiked ? "wd-red-like" : "wd-no-like"} />
                </span> 
                <span className="text-secondary text-decoration-none me-5 d-none d-md-inline"> {likes.tuitLikes}</span>
                <FaUpload className="text-secondary me-sm-1 me-md-1 me-lg-6" />
            </div>
        </>

    );
}
export default TuitsStat;