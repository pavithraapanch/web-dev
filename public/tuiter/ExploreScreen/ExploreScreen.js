import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar("explore")}
        </div>
        <div class="col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7 pb-3">
            ${ExploreComponent()}
        </div>
        <div class="col-lg-4 col-xl-4 col-xxl-3 d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
