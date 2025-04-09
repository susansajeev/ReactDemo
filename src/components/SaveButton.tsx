import React, { useState } from "react";

interface ButtonProps {
  title: string;
  onButtonClick: (country: string) => void;
}

const SaveButton = ({ title, onButtonClick }: ButtonProps) => {
  function onSaveButton(titlee: string) {
    onButtonClick(titlee);
  }

  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => onSaveButton(title)}
    >
      {title}
    </button>
  );
};

export default SaveButton;
