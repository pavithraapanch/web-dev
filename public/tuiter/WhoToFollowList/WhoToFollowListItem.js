const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item p-0 px-3 py-1">
            <div class="row px-1">
                 <div class="col-lg-2 col-xl-2 col-xxl-2 p-0">
                    <img class="img-fluid rounded-circle" src="${who.avatarIcon}"/>
                 </div>
                 <div class="col-lg-6 col-xl-7 col-xxl-7 p-0 px-1">
                    <div class="row">
                        <span class="wd-font-heading">${who.userName}<i class="fa-solid fa-circle-check ps-1"></i></span>
                    </div>
                    <div class="row">
                        <span>@${who.handle}</span>
                    </div>
                 </div>
                 <div class="col-lg-4 col-xl-3 col-xxl-3 p-0">
                    <button class="btn btn-primary rounded-pill py-1 mt-1">Follow</button>
                 </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;