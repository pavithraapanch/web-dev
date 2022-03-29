import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <>
            <div className="wd-flex-container">
                <div className="wd-avatar">
                    <img className="wd-avatar-img" src={tuit["avatar-image"]}/>
                </div>
                <div className="wd-bookmark-post">
                    <div className="wd-post-user-details">
                        <div>{tuit.postedBy.username}</div>
                        <div className="wd-lightgray-color">@{tuit.handle}</div>
                        <div className="wd-lightgray-color">{tuit.time}</div>
                        <div className="wd-delete-btn"><i onClick={() => deleteTuit(tuit)} className="fa-solid fa-x"></i></div>
                    </div>
                    <div className="wd-bookmark-post-card">
                        <div className="wd-bookmark-post-content">
                            {tuit.title}
                        </div>
                        <div className="wd-bookmark-post-img">
                            <img src={tuit["logo-image"]}/>
                            <div className={`wd-bookmark-img-content ${tuit.imageContentTitle === '' ? " d-none" : ''}`}>
                                <div className="wd-font-bold">
                                    {tuit.tuit}
                                </div>
                                <div className="wd-lightgray-color">
                                    {tuit.imageContentTitle}
                                </div>
                            </div>
                        </div>
                        <TuitStats key={tuit._id}
                                      tuit={tuit}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TuitListItem;