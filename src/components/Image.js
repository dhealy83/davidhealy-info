import React from "react";
import profileImage from "../assets/profile-image.jpg";

function Image() {
  return (
    <div class="container  ">
      <div class="imageInfo ">
        <img
          src={profileImage}
          class="proPhoto img-thumbnail rounded-circle "
          alt="Black and white photo of David Healy."
        />
        <div class="icons text-dark text-end">ICONS ICONS ICONS ICONS</div>
      </div>
    </div>
  );
}

export default Image;
