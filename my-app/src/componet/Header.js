import React from "react";
import Icons from "./Icons";

const Header = ({ dataimgelish }) => {
  return (
    <nav>
      <div className="icon-ground">
        {dataimgelish.map((value,number) => (
          <Icons
            key={number}
            imgMainSrc={value.thumbnails}
            imgCircle={value.thumbnails}
          />
        ))}
        {/* {console.log(dataimgelish)} */}
      </div>
    </nav>
  );
};

export default Header;
