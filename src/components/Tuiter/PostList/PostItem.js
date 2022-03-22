import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "avatarIcon": "././images/egprofile2.jpg",
                                 "userName": "Elon Musk",
                                 "handle": "elonmusk",
                                 "time": "23h",
                                 "title": "Amazing show about @Inspiration4x mission!",
                                 "image": "././images/neu.png",
                                 "imageContentTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                 "imageContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                                 "imageLink": "",
                                 "comment": "4.2K",
                                 "retuit": "3.5K",
                                 "likes": "37.5K"
                             }
}) => {
    return (
        <>
            <div className="wd-flex-container">
                <div className="wd-avatar">
                    <img className="wd-avatar-img" src={post.avatarIcon}/>
                </div>
                <div className="wd-bookmark-post">
                    <div className="wd-post-user-details">
                        <div>{post.userName}</div>
                        <div className="wd-lightgray-color">@{post.handle}</div>
                        <div className="wd-lightgray-color">{post.time}</div>
                    </div>
                    <div className="wd-bookmark-post-card">
                        <div className="wd-bookmark-post-content">
                            {post.title}
                        </div>
                        <div className="wd-bookmark-post-img">
                            <img src={post.image}/>
                            <div className={`wd-bookmark-img-content ${post.imageContentTitle === '' ? " d-none" : ''}`}>
                                <div className="wd-font-bold">
                                    {post.imageContentTitle}
                                </div>
                                <div className="wd-lightgray-color">
                                    {post.imageContent}
                                </div>
                            </div>
                        </div>
                        <div className="wd-bookmark-buttons-panel">
                            <div className="wd-bookmark-button-item">
                                <p className="wd-bookmark-button-item-icon"><a href="#"><i className="wd-lightgray-color fa-regular fa-comment"></i></a></p>
                                <p>{post.comment}</p>
                            </div>
                            <div className="wd-bookmark-button-item">
                                <p className="wd-bookmark-button-item-icon"><a href="#"><i className="wd-lightgray-color fa-solid fa-retweet"></i></a></p>
                                <p>{post.retuit}</p>
                            </div>
                            <div className="wd-bookmark-button-item wd-red-color">
                                <p className="wd-bookmark-button-item-icon"><a href="#"><i className="wd-red-color fa-solid fa-heart"></i></a></p>
                                <p>{post.likes}</p>
                            </div>
                            <div className="wd-bookmark-button-item">
                                <p className="wd-bookmark-button-item-icon"><a href="#"><i className="wd-lightgray-color fa-solid fa-upload"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostSummaryItem;