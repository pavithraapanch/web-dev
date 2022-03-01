import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <div class="container p-0 p-2 wd-follow-container">
            <ul class="list-group">
            <li class="list-group-item"><h6 class="wd-font-heading m-0">Who to follow</h6></li>
            ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
            </ul>
            </div>
`); }

export default WhoToFollowList;