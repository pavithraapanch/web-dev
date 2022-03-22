import React  from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
           <div className="row">
                <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-search-bar">
                    <div className="input-group rounded-pill p-1 wd-search-group">
                        <div className="input-group-prepend">
                            <i className="input-group-text fa fa-search fa-1x border-0 p-1 ps-2"></i>
                        </div>
                        <input type="text" className="border-0 ps-3" placeholder="Search Tuiter" id="search" name="search"/>
                    </div>
                </div>
                <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 wd-search-settings">
                    <a href="explore-settings.html">
                        <i className="fa-solid fa-gear p-0"></i></a>
                </div>
           </div>
           <div className="row my-2 wd-nav-tabs">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
           <div className="row">
                <div className="col-xxl-12 card bg-white text-white p-0">
                    <img src="././images/starship.png" className="card-img" alt=""/>
                    <div className="card-img-overlay">
                        <h2 className="card-title wd-bottom-align fw-bold">SpaceX's Starship</h2>
                    </div>
                </div>
            </div>
           <PostSummaryList/>
    </>
    );
}
export default ExploreComponent;