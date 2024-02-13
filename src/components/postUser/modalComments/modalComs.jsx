import React, { useState } from "react";
import { Modal } from "antd";
import "./modalComs.css";
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
        <div className="commentaire-container">
          <div className="coms-container">
            <img src="image/photo4.png" alt="" />
            <div className="coms-repondre">
              <div className="commentaire">
                <span>Camella</span>
                <p>Im So excited ! when's it coming out?</p>
              </div>
              <div className="repondre">
                <span>14min</span>
                <span>Like</span>
                <span>answer</span>
              </div>
            </div>
          </div>

        </div>
        <div className="footer-input">
          <img src="cam.svg" alt="" className="icon" />
          <input type="text" placeholder="write comment..." />
          <img src="send1.svg" alt="" className="icon" />
        </div>
      </Modal>
    </>
  );
};
export default ModalComs;
