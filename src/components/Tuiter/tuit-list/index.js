import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./tuit-list-item";
//import './tuits.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    return (
        <>
        <div className="">
        <ul className="list-group p-0">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)

            }
        </ul>
        </div>
        </>
    );
}

export default TuitList;