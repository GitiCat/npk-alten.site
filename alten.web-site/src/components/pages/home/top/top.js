import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Header() {
  return (
    <div className="top d-flex flex-dir--row row-vp-center row-hp-start">
      <div className="top_bg-image abs-fscreen"></div>
      <div className="t-button"><div><ArrowDropDownIcon/></div></div>
      <div className="top_content article__title">
        <h1>
					Акционерное общество
        </h1>
        <h1>
					Научно-производственный комплекс
        </h1>
        <h1>
					«Альтернативная Энергетика»
        </h1>
        <p>
					Разработка и производство химических источников тока
        </p>
      </div>
    </div>
  );
}