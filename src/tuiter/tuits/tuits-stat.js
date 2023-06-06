import React, { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaUpload } from 'react-icons/fa';

const TuitsStat = (
    {
        tuit = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 12345,
            "handle": "@spacex",

        }
    }
) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);
  
    const handleLikeClick = () => {
    
      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      setLiked(!liked);
    };
    return (
        <>
            <div className="mt-3 mb-3" style={{ marginLeft: '70px' }}>
                <FaComment className="text-secondary" /><span className="text-secondary me-5"> {tuit.replies}</span>
                <FaRetweet className="text-secondary ms-5" /><span className="text-secondary text-decoration-none me-5"> {tuit.retuits}</span>

                {tuit.liked ? (
                    <FaHeart onClick={handleLikeClick} className="ms-5 text-danger" />
                        ) : (
                    <FaHeart onClick={handleLikeClick} className="ms-5 text-secondary" />
                )}

                <span className="text-secondary text-decoration-none me-5"> {likes}</span>
                <FaUpload className="text-secondary ms-5" />
            </div>
        </>

    );
}
export default TuitsStat;