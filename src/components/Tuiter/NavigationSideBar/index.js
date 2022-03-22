import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
            <>
            <div className="list-group">
                <Link to="/" className="list-group-item"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}><i className="fa-solid fa-house-chimney"></i><a className="d-none d-xl-inline" href="../HomeScreen"> Home</a></Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}><i className="fa-solid fa-hashtag"></i><a className="d-none d-xl-inline" href="../ExploreScreen"> Explore</a></Link>
                <li className="list-group-item"><i className="fa-solid fa-bell"></i><a className="d-none d-xl-inline" href="../notifications.html"> Notifications</a></li>
                <li className="list-group-item"><i className="fa-solid fa-envelope"></i><a className="d-none d-xl-inline" href="../messages.html"> Messages</a></li>
                <li className="list-group-item"><i className="fa-solid fa-bookmark"></i><a className="d-none d-xl-inline" href="../bookmarks.html"> Bookmarks</a></li>
                <li className="list-group-item"><i className="fa-solid fa-list"></i><a className="d-none d-xl-inline" href="../lists.html"> Lists</a></li>
                <li className="list-group-item"><i className="fa-solid fa-user"></i><a className="d-none d-xl-inline" href="../profile.html"> Profile</a></li>
                <li className="list-group-item">
                    <span className="fa-stack p-0">
                        <i className="fa-regular fa-circle fa-stack-1x wd-fa-stack-icon"></i>
                        <i className="fa-solid fa-ellipsis"></i>
                    </span>
                    <a className="d-none d-xl-inline" href="#"> More</a>
                </li>
            </div>
            <div className="d-grid mt-2">
                <a href="../tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
            </>
    );
}
export default NavigationSidebar;

