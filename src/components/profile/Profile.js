import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src="./img/bmw-logo.png" alt="BMW-Logo" />
      </div>
      <aside className="profile-aside">
        <div className="profile-aside-buttons">
          <h2>BMW</h2>
          <button type="button">Follow</button>
        </div>
        <div className="profile-aside-stats">
          <ul>
            <li>
              674<span>posts</span>
            </li>
            <li>
              5.9m<span>followers</span>
            </li>
            <li>
              58<span>following</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default Profile;
