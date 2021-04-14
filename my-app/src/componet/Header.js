import React from "react";
import Icons from "./Icons";

const Header = ({ dataimgelish }) => {
  const showdata = () => {
    const show = dataimgelish.map((value, number) => (
      <Icons
        key={number}
        imgMainSrc={value.video.thumbnails}
        imgCircle={value.thumbnails}
      />
    ));
    return show
  };

  return (
    <nav>
      <div className="icon-ground">
        {showdata()}
        {/* {console.log(dataimgelish)} */}
      </div>
    </nav>
  );
};

export default Header;
