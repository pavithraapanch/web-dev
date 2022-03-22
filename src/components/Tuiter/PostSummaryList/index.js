import React from "react";
import PostSummaryListItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (
        <>
        <div className="row">
            <ul className="list-group p-0">
            {
                posts.map(post => {
                    return(<PostSummaryListItem post={post}/>);
                })
            }
            </ul>
        </div>
        </>
    );
}
export default PostSummaryList;