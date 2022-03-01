const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-sm-9 col-md-10 col-lg-10 col-xl-9 col-xxl-10">
                    <div class="row"><span class="wd-lightgray-color">${post.topic}</span></div>
                    <div class="row"><span><span class="wd-font-heading">${post.userName}</span><i class="fa-solid fa-circle-check ps-1"></i><span class="wd-lightgray-color">${post.time}</span></span></div>
                    <div class="row"><span class="fw-bold">${post.title}</span></div>
                    <div class="row"><span class="wd-lightgray-color">${post.tuits}</span></div>
                </div>
                <div class="col-sm-3 col-md-2 col-lg-2 col-xl-3 col-xxl-2 p-0 p-2 d-flex justify-content-center">
                    <img class="wd-post-image bg-white" src="${post.image}"/>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryListItem;