import React, { useState } from "react";
import { Modal } from "antd";
const ModalMenu = ({ isModalMenuOpen, modalMenuCancel }) => {
  return (
    <>
      <Modal
        title={null}
        centered
        open={isModalMenuOpen}
        onCancel={modalMenuCancel}
        footer={[]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalMenu;
