import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";

const EditProfileScreen = ({}) => {
    const profile = useSelector(
        state => state.profile);
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        const modifiedData = { name, bio, location, website, dateOfBirth };
        dispatch({ payLoad: modifiedData, type: "edit-profile" });
        //navigate("/tuiter/profile");
    }
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);

    return(
        <>
            <div className="row">
                <div className="row">
                    <div className="col-sm-1 col-md-1 col-lg-1">
                        <Link to="/tuiter/profile"><i className="fa-solid fa-x"></i></Link>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9">
                        <div className="row">
                            <h5 className="p-0 m-0"><b>Edit Profile</b></h5>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <button type="button" className="btn btn-outline-dark rounded-pill" onClick={editProfileClickHandler}>
                            Save
                        </button>
                    </div>
                </div>
                <div className="row wd-banner-div mt-2">
                    <div className="col-12">
                    <img className="wd-cover-img p-0" src={profile.bannerPicture}/>
                    <div >
                        <img className="wd-profile-img p-0" src={profile.profilePicture}/>
                    </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder={profile.name} id="name" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea type="text" className="form-control" placeholder={profile.bio} id="bio" onChange={(event) => setBio(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" placeholder={profile.location} id="location" onChange={(event) => setLocation(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input type="text" className="form-control" id="website" onChange={(event) => setWebsite(event.target.value)} placeholder={profile.website}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="text" className="form-control" id="dob" onChange={(event) => setDOB(event.target.value)} placeholder={profile.dateOfBirth}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default EditProfileScreen;