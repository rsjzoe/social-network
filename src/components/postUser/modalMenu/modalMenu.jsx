import React, { useState } from "react";
import { Modal } from "antd";
import "./modalMenu.css";
const ModalMenu = ({ isModalMenuOpen, modalMenuCancel }) => {
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
            <span>Report</span>
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
