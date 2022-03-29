import tuits from "../data/tuits.json";

const profileData = {
    name: 'Pavithraa Panch', handle: 'pavipanch',
    profilePicture: '././images/egprofile1.jpg', 	bannerPicture: '././images/starship.png',
    bio: 'Movie Buff.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',	dateOfBirth: '3/10/1995',	dateJoined: '4/2009',
    followingCount: 312,	followersCount: 180
}

const profileReducer = (state = profileData, action) => {
    switch(action.type){
        case 'edit-profile':
            //console.log(action.)
            return {
                ...state, ...action.payLoad
            }
        default:
            return state;
    }
};

/*
*
const profileReducer = (state = profileData, action) => {
*   switch (action.type) {
* case 'create-tuit':
*
*
* }
    return state;
};
* */
export default profileReducer;