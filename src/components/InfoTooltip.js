import React from "react";
import { Link } from "react-router-dom";
function InfoTooltip({
  isOpen,
  onClose,
  imageInfoTooltip,
  textInfoTooltip,
  linkInfoTooltip,
  // loggedIn,
}) {
  // if (loggedIn) {
  //   return;
  // } else {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_theme_light`}
      onClick={onClose}
    >
      <div className="popup__container popup__container_type_form">
        <Link to={linkInfoTooltip} className="popup__title">
          <div
            className={`popup__image-info ${
              imageInfoTooltip
                ? "popup__image-info_type_ok"
                : "popup__image-info_type_nok"
            }`}
          ></div>
          {textInfoTooltip}
          <button
            type="button"
            aria-label="Закрыть"
            className="button popup__close"
            onClick={onClose}
          ></button>
        </Link>
      </div>
    </div>
  );
  //}
}

export default InfoTooltip;
