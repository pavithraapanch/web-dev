import React from "react";
import PostItem from "./PostItem";
import posts from "./posts.json";

const PostList = () => {
    return (
        <>
            <div className="wd-frame">
                <ul className="list-group p-0">
                    {
                        posts.map(post => {
                            return (<PostItem post={post}/>);
                        })
                    }
                </ul>
            </div>
        </>
    );
}
export default PostList;