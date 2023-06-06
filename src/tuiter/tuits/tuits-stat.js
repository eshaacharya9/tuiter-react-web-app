import React from "react";

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
    return (
        <>
            <div className="mt-3 mb-3" style={{marginLeft: '70px'}}>
                <i className="fa fa-comment text-secondary"></i><span
                className="text-secondary me-5"> {tuit.replies}</span>
                <i className="fa fa-retweet text-secondary ms-5"></i><span
                className="text-secondary text-decoration-none me-5"> {tuit.retuits}</span>

                {
                    tuit.liked && <i className="fa fa-heart ms-5 text-danger"></i>
                }
                {
                    !tuit.liked && <i className="fa fa-heart ms-5 text-secondary"></i>
                }
                <span
                    className="text-secondary text-decoration-none me-5"> {tuit.likes}</span>
                <i className="fa fa-upload text-secondary ms-5"></i>
            </div>
        </>

    );
}
export default TuitsStat;