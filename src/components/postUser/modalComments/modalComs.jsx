import React, { useState } from "react";
import { Modal } from "antd";
const ModalComs = ({ isModalcomsOpen, modalcomsCancel }) => {
  return (
    <>
      <Modal
        title={"commentaires"}
        centered
        open={isModalcomsOpen}
        onCancel={modalcomsCancel}
        footer={[]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalComs;
