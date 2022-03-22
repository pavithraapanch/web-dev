import React from "react";
const PostSummaryListItem = ({
                                 post = {
                                     "topic": "Web Development",
                                     "userName": "ReactJS",
                                     "time": "2h",
                                     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                     "image": "././images/react-blue.png"
                                 }
}) => {
    return(
        <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-sm-9 col-md-10 col-lg-10 col-xl-9 col-xxl-10">
                    <div className="row"><span className="wd-lightgray-color">{post.topic}</span></div>
                    <div className="row"><span><span className="wd-font-heading">{post.userName}</span><i className="fa-solid fa-circle-check ps-1"></i><span className="wd-lightgray-color">{post.time}</span></span></div>
                    <div className="row"><span className="fw-bold">{post.title}</span></div>
                    <div className="row"><span className="wd-lightgray-color">{post.tuits}</span></div>
                </div>
                <div className="col-sm-3 col-md-2 col-lg-2 col-xl-3 col-xxl-2 p-0 p-2 d-flex justify-content-center">
                    <img className="wd-post-image bg-white" src={post.image}/>
                </div>
            </div>
        </li>
        </>
    );
}
export default PostSummaryListItem;