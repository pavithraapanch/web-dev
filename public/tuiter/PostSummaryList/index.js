import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        <div class="row">
            <ul class="list-group p-0">
            ${
                posts.map(post => {
                    return(PostSummaryListItem(post));
                }).join('')
            }
            </ul>
        </div>
    `);
}
export default PostSummaryList;