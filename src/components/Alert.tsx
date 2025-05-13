import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onCloseClick: () => void;
}

const Alert = ({ children, onCloseClick }: AlertProps) => {
  function closeAlert() {
    onCloseClick();
  }

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert">
        
      {children}    
      
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => closeAlert()}
      ></button>
    </div>
  );
};

export default Alert;
