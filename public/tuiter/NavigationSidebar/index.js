const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <li class="list-group-item"><i class="fa-brands fa-twitter"></i></li>
                <li class="list-group-item ${active === "home" ? 'active' : ''}"><i class="fa-solid fa-house-chimney"></i><a class="d-none d-xl-inline" href="../HomeScreen/home.html">Home</a></li>
                <li class="list-group-item ${active === "explore" ? 'active' : ''}"><i class="fa-solid fa-hashtag"></i><a class="d-none d-xl-inline" href="../ExploreScreen/explore.html">Explore</a></li>
                <li class="list-group-item"><i class="fa-solid fa-bell"></i><a class="d-none d-xl-inline" href="../notifications.html">Notifications</a></li>
                <li class="list-group-item"><i class="fa-solid fa-envelope"></i><a class="d-none d-xl-inline" href="../messages.html">Messages</a></li>
                <li class="list-group-item"><i class="fa-solid fa-bookmark"></i><a class="d-none d-xl-inline" href="../bookmarks.html">Bookmarks</a></li>
                <li class="list-group-item"><i class="fa-solid fa-list"></i><a class="d-none d-xl-inline" href="../lists.html">Lists</a></li>
                <li class="list-group-item"><i class="fa-solid fa-user"></i><a class="d-none d-xl-inline" href="../profile.html">Profile</a></li>
                <li class="list-group-item">
                    <span class="fa-stack p-0">
                        <i class="fa-regular fa-circle fa-stack-1x wd-fa-stack-icon"></i>
                        <i class="fa-solid fa-ellipsis"></i>
                    </span>
                    <a class="d-none d-xl-inline" href="#">More</a>
                </li>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;

