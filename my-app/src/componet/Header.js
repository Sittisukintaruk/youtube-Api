import React from "react";
import Icons from "./Icons";

const Header = ({ dataimgelish }) => {
  return (
    <nav>
      <div className="icon-ground">

        {dataimgelish.map((value) => (
          <Icons
            key={value.id}
            imgMainSrc={value.img.imgMain}
            imgCircle={value.img.imgCircle}
          />
        ))}
      </div>
    </nav>
  );
};

export default Header;
