import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit}
    from "../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="wd-flex-container">
                <div className="wd-avatar">
                    <img className="wd-avatar-img" src={tuit["avatar-image"] ? tuit["avatar-image"] : "././images/nasa.png"}/>
                </div>
                <div className="wd-bookmark-post">
                    <div className="wd-post-user-details">
                        <div>{tuit.postedBy.username}</div>
                        <div className="wd-lightgray-color">@{tuit.handle}</div>
                        <div className="wd-lightgray-color">{tuit.time}</div>
                        <div className="wd-delete-btn"><i onClick={() => deleteTuit(dispatch, tuit)} className="fa-solid fa-x"></i></div>
                    </div>
                    <div className="wd-bookmark-post-card">
                        <div className="wd-bookmark-post-content">
                            {tuit.title ? tuit.title : tuit.tuit}
                        </div>
                        <div className={`wd-bookmark-post-img ${tuit["logo-image"] ? '' : " d-none"}`}>
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