import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
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
                        <span onClick={likeTuit}>
                            {
                                tuit.liked &&
                                <i className="fa-solid fa-heart pe-1"
                                   style={{color: 'red'}}></i>
                            }
                            {
                                !tuit.liked &&
                                <i className="fa-solid fa-heart pe-1"></i>
                            }
                            {tuit.stats && tuit.stats.likes}
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

