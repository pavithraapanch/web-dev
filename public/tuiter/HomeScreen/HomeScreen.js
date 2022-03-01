import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar("home")}
        </div>
        <div class="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-xxl-7 pb-3">
            ${PostList()}
        </div>
        <div class="col-lg-4 col-xl-3 col-xxl-3 d-none d-lg-block">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);