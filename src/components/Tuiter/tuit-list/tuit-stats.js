import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit}
    from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="wd-bookmark-buttons-panel">
                <div className="wd-bookmark-button-item">
                    <p className="wd-bookmark-button-item-icon"><a href="#"><i
                        className="wd-lightgray-color fa-regular fa-comment"></i></a></p>
                    <p>{tuit.stats.comments}</p>
                </div>
                <div className="wd-bookmark-button-item">
                    <p className="wd-bookmark-button-item-icon"><a href="#"><i
                        className="wd-lightgray-color fa-solid fa-retweet"></i></a></p>
                    <p>{tuit.stats.retuits}</p>
                </div>
                <div className="wd-bookmark-button-item">
                    <p className="wd-bookmark-button-item-icon">
                        <span>
                            {
                                tuit.liked &&
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    liked: false,
                                    stats: {
                                        ...tuit.stats,
                                        likes: tuit.stats.likes - 1
                                    }
                                })} className="fas fa-thumbs-up pe-1"
                                   style={{color: 'blue'}}></i>
                            }
                            {
                                !tuit.liked &&
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    liked: true,
                                    stats: {
                                        ...tuit.stats,
                                        likes: tuit.stats.likes + 1
                                    }
                                })} className="fas fa-thumbs-up pe-1"></i>
                            }
                            {tuit.stats && tuit.stats.likes}
                        </span>
                    </p>
                </div>
                <div className="wd-bookmark-button-item">
                    <p className="wd-bookmark-button-item-icon">
                        <span>
                            {
                                tuit.disliked  &&
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    disliked: false,
                                    stats: {
                                        ...tuit.stats,
                                        dislikes: tuit.stats.dislikes - 1
                                    }
                                })} className="fas fa-thumbs-down pe-1"
                                   style={{color: 'blue'}}></i>
                            }
                            {
                                !tuit.disliked &&
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    disliked: true,
                                    stats: {
                                        ...tuit.stats,
                                        dislikes: tuit.stats.dislikes + 1
                                    }
                                })} className="fas fa-thumbs-down pe-1"></i>
                            }
                            {tuit.stats && tuit.stats.dislikes}
                        </span>
                    </p>
                </div>
                <div className="wd-bookmark-button-item">
                    <p className="wd-bookmark-button-item-icon"><a href="#"><i
                        className="wd-lightgray-color fa-solid fa-upload"></i></a></p>
                </div>
            </div>
        </>
    );
}
export default TuitStats;

