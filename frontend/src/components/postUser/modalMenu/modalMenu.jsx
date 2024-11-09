import React, { useState } from "react";
import { Modal } from "antd";
import "./modalMenu.css";
import { serverUrl } from "../../../constants";
const ModalMenu = ({ isModalMenuOpen, modalMenuCancel, publication }) => {
  async function onDelete(id) {
    let response = await fetch(`${serverUrl}/publications/${id}`, {
      method: "delete",
    });
    if (response.ok) {
      location.reload()
    }
  }

  return (
    <>
      <div className="modal-menu">
        <Modal
          title={null}
          centered
          open={isModalMenuOpen}
          onCancel={modalMenuCancel}
          footer={[]}
          className="modal-menue"
        >
          <div className="List-menu">
            <span>Unfollow</span>
            <span
              onClick={() => {
                onDelete(publication.id);
              }}
            >
              Delete
            </span>
            <span>Share to...</span>
            <span>Copy Link</span>
            <span className="cancel">Cancel</span>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default ModalMenu;
