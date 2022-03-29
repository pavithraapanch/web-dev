import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";

const ProfileScreen = ({}) => {
    const profile = useSelector(
        state => state.profile);
    return(
        <>
            <div className="row">
                <div className="row">
                    <div className="col-sm-1 col-md-1 col-lg-1">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="col-sm-11 col-md-11 col-lg-11">
                        <div className="row">
                            <h5 className="p-0 m-0"><b>{profile.name}</b></h5>
                        </div>
                        <div className="row">
                            500 Tuits
                        </div>
                    </div>
                </div>
                <div className="row wd-banner-div">
                    <div className="col-12">
                        <img className="wd-cover-img p-0" src={profile.bannerPicture}/>
                        <div >
                        <img className="wd-profile-img p-0" src={profile.profilePicture}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-grid d-md-flex justify-content-md-end">
                        <Link to="/tuiter/edit-profile"><button type="button" className="btn btn-outline-dark rounded-pill text-white">
                            <b>Edit Profile</b>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="row ps-4 pt-3">
                    <div className="row"><h4 className="p-0"><b>{profile.name}</b></h4></div>
                    <div className="row">@{profile.handle}</div>
                    <div className="row text-white">{profile.bio}</div>
                    <div className="wd-profile-details-panel">
                        <div className="wd-profile-item">
                            <p className="wd-profile-item-icon"><a href="#"><i className="fa-regular fa-compass"></i></a></p>
                            <p>{profile.location}</p>
                        </div>
                        <div className="wd-profile-item">
                            <p className="wd-profile-item-icon"><a href="#"><i className="fa-solid fa-cake-candles"></i></a></p>
                            <p>{profile.dateOfBirth}</p>
                        </div>
                        <div className="wd-profile-item">
                            <p className="wd-profile-item-icon"><a href="#"><i className="fa-regular fa-calendar-days"></i></a></p>
                            <p>Joined {profile.dateJoined}</p>
                        </div>
                    </div>
                    <div className="wd-follower-details-panel">
                        <div className="wd-profile-item">
                            <p className="wd-profile-item-icon text-white"><b>{profile.followingCount}</b></p>
                            <p className="wd-profile-item-icon">Following</p>
                        </div>
                        <div className="wd-profile-item">
                            <p className="wd-profile-item-icon text-white"><b>{profile.followersCount}</b></p>
                            <p className="wd-profile-item-icon">Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileScreen