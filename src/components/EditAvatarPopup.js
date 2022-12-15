import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault(e);
    onUpdateAvatar({ avatar: avatarInputRef.current.value });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      btnName={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      children={
        <>
          <label className="form__label">
            <input
              id="avatar"
              type="text"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="form__input form__input_place_popup"
              required
              ref={avatarInputRef}
            />
            <span id="avatar-error" className="form__error"></span>
          </label>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
