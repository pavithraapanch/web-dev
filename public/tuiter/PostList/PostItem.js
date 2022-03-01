const PostSummaryItem = (post) => {
    return(`
        <div class="wd-flex-container">
        <div class="wd-avatar">
            <img class="wd-avatar-img" src="${post.avatarIcon}"/>
        </div>
        <div class="wd-bookmark-post">
            <div class="wd-post-user-details">
                <div>${post.userName}</div>
                <div class="wd-lightgray-color">@${post.handle}</div>
                <div class="wd-lightgray-color">${post.time}</div>
            </div>
            <div class="wd-bookmark-post-card">
                <div class="wd-bookmark-post-content">
                     ${post.title}
                </div>
                <div class="wd-bookmark-post-img">
                    <img src="${post.image}">
                    <div class="wd-bookmark-img-content">
                    <div class="wd-font-bold">
                        ${post.imageContentTitle}
                    </div>
                    <div class="wd-lightgray-color">
                        ${post.imageContent}
                    </div>
                    </div>
                </div>
                <div class="wd-bookmark-buttons-panel">
                    <div class="wd-bookmark-button-item">
                        <p class="wd-bookmark-button-item-icon"><a href="#"><i class="wd-lightgray-color fa-regular fa-comment"></i></a></p>
                        <p>${post.comment}</p>
                    </div>
                    <div class="wd-bookmark-button-item">
                        <p class="wd-bookmark-button-item-icon"><a href="#"><i class="wd-lightgray-color fa-solid fa-retweet"></i></a></p>
                        <p>${post.retuit}</p>
                    </div>
                    <div class="wd-bookmark-button-item wd-red-color">
                        <p class="wd-bookmark-button-item-icon"><a href="#"><i class="wd-red-color fa-solid fa-heart"></i></a></p>
                        <p>${post.likes}</p>
                    </div>
                    <div class="wd-bookmark-button-item">
                        <p class="wd-bookmark-button-item-icon"><a href="#"><i class="wd-lightgray-color fa-solid fa-upload"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `);
}
export default PostSummaryItem;