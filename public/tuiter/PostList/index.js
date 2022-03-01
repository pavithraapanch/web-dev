import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
        <div class="wd-frame">
            <ul class="list-group p-0">
            ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
            </ul>
        </div>
    `);
}
export default PostList;