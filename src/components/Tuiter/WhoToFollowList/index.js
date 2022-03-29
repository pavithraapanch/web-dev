import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = ({}) => {
    const who = useSelector((state) => state.who);
    return (
        <>
            <div className="container p-0 p-2 wd-follow-container">
            <ul className="list-group">
            <li className="list-group-item"><h6 className="wd-font-heading m-0">Who to follow</h6></li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
            </ul>
            </div>
        </>
);
}
export default WhoToFollowList;