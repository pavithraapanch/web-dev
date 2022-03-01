import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <!-- search field and cog -->
           <div class="row">
                <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-search-bar">
                    <div class="input-group rounded-pill p-1 wd-search-group">
                        <div class="input-group-prepend">
                            <i class="input-group-text fa fa-search fa-1x border-0 p-1 ps-2"></i>
                        </div>
                        <input type="text" class="border-0 ps-3" placeholder="Search Tuiter" id="search" name="search">
                    </div>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 wd-search-settings">
                    <a href="explore-settings.html">
                        <i class="fa-solid fa-gear p-0"></i></a>
                </div>
           </div>
           <!-- tabs -->
           <div class="row my-2 wd-nav-tabs">
                <ul class="nav nav-tabs">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
           <!-- image with overlaid text -->
           <div class="row">
                <div class="col-xxl-12 card bg-white text-white p-0">
                    <img src="../images/starship.png" class="card-img" alt="">
                    <div class="card-img-overlay">
                        <h2 class="card-title wd-bottom-align fw-bold">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

