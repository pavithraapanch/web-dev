import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '././images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
}) => {
    return(
        <>
        <li className="list-group-item p-0 px-3 py-1">
            <div className="row px-1">
                 <div className="col-lg-2 col-xl-2 col-xxl-2 p-0">
                    <img className="img-fluid rounded-circle" src={who.avatarIcon}/>
                 </div>
                 <div className="col-lg-6 col-xl-7 col-xxl-7 p-0 px-1">
                    <div className="row">
                        <span className="wd-font-heading">{who.userName}<i className="fa-solid fa-circle-check ps-1"></i></span>
                    </div>
                    <div className="row">
                        <span>@{who.handle}</span>
                    </div>
                 </div>
                 <div className="col-lg-4 col-xl-3 col-xxl-3 p-0">
                    <button className="btn btn-primary rounded-pill py-1 mt-1">Follow</button>
                 </div>
            </div>
        </li>
        </>
    );
}
export default WhoToFollowListItem;