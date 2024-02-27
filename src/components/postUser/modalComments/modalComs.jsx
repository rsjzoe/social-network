import React, { useState } from "react";
import { Modal } from "antd";
import "./modalComs.css";
import { Commentaire } from "./components/commentaire";
const ModalComs = ({ isModalcomsOpen, modalcomsCancel }) => {
  return (
    <>
      <Modal
        title={"commentaires"}
        centered
        open={isModalcomsOpen}
        onCancel={modalcomsCancel}
        footer={[]}
        className="modal-coms"
      >
        <Commentaire
          srcImg={"image/photo4.png"}
          nameUser={"coco "}
          comment={"i'm so excited! when's it coming out?"}
        />
      </Modal>
    </>
  );
};
export default ModalComs;
