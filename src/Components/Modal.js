import React from "react";
import Button from "./Button";

const Modal = ({ handleCancel, handleDelete }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h3 className="medium-text grey-300" style={{ marginTop: "8px" }}>
            Do you really want to delete this product ?
          </h3>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "48px",
            }}
          >
            <Button
              label="Cancel"
              buttonStyle="secondary"
              onClick={handleCancel}
            />
            &nbsp;&nbsp;&nbsp;
            <Button
              label="Yes, Delete"
              buttonStyle="delete-solid"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
