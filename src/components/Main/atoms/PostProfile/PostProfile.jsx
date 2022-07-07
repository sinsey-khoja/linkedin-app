import React from "react";
import "./PostProfile.scss";

function PostProfile({img,name,bio}) {
  return (
  <div className="post-profile">
    <img src={img} alt="" />
    <div className="user-info">
      <h4 className="">{name}</h4>
      <p>{bio}</p>
    </div>
  </div>
  )
}
export default PostProfile;
