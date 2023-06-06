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
            <div className="mt-3 mb-3" style={{ marginLeft: '130px' }}>
                <FaComment className="text-secondary" /><span className="text-secondary me-5"> {tuit.replies}</span>
                <FaRetweet className="text-secondary ms-5" /><span className="text-secondary text-decoration-none me-5"> {tuit.retuits}</span>
               
                <span style={{"cursor": "pointer"}} 
                 onClick={() => handleLikeClick(tuit.liked)}>
                    <FaHeart className={likes.tuitLiked ? "wd-red-like" : "wd-no-like"} />
                </span> 
                <span className="text-secondary text-decoration-none me-5"> {likes.tuitLikes}</span>
                <FaUpload className="text-secondary ms-5" />
            </div>
        </>

    );
}
export default TuitsStat;