import React from "react";
import './home.css';
import NavigationSidebar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-xxl-7 pb-3"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="col-lg-4 col-xl-3 col-xxl-3 d-none d-lg-block">
                <PostSummaryList/>
            </div>
        </div>
    );
};

export default HomeScreen;