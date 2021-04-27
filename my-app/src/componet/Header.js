import React from "react";
import Icons from "./Icons";
import PropTypes from "prop-types";

const Header = ({ dataimgelish, handlerOnclick }) => {
  const [handlerClick, handlerOncancle] = handlerOnclick;
  const showdata = () => {
    const show = dataimgelish.map((value, number) => (
      <Icons
        key={number}
        imgMainSrc={value.video.thumbnails}
        imgCircle={value.thumbnails}
        titile={value.channelTitle}
        channelID={value.channelId}
        onclick={handlerClick}
        oncancle={handlerOncancle}
      />
    ));
    return show;
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

Header.propTypes = {
  dataimgelish: PropTypes.array.isRequired,
};

export default Header;
