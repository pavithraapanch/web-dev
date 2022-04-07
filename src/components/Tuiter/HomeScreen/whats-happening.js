import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    const [newTuit, setNewTuit]
        = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    return (
        <>
            <div className="row my-2">
                <div className="row p-0 px-1 mb-2">
                <div className="col-sm-1 col-md-2 col-lg-2">
                    <div className="wd-profile-avatar">
                        <img className="wd-avatar-img" src={"././images/egprofile1.jpg"}/>
                    </div>
                </div>
                <div className="col-sm-11 col-md-10 col-lg-10 p-0">
                      <textarea placeholder="What's happening? " className="wd-text-whats"
                                onChange={(event) =>
                                    setNewTuit({...newTuit,
                                        tuit: event.target.value})}>
                      </textarea>
                    <hr/>
                </div>
                </div>
                <div className="d-grid d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary btn-block rounded-pill" onClick={() => createTuit(dispatch, newTuit)}>
                        Tuit
                </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;

