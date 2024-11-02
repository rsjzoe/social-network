import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { message, Upload } from "antd";
import "./modal.css";

const { TextArea } = Input;

const ModalPublication = ({ isOpen, handleCancel }) => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  async function onShare() {
    if (content.length == 0 || file == null) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", "");
    formData.append("content", content);
    formData.append("userId", 3);

    const response = await fetch("http://localhost:3000/publications", {
      method: "post",
      body: formData,
    });
    if (response.ok) {
      handleCancel();
      location.reload();
    }
  }

  return (
    <>
      <Modal
        title="Create Post"
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            style={{ width: "100%" }}
            onClick={onShare}
          >
            Share
          </Button>,
        ]}
        centered
        className="modal-create-pub"
      >
        <div className="create-pub">
          <TextArea
            rows={4}
            placeholder="Write Legends..."
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <input
            type="file"
            onChange={(e) => {
              setFile(e.currentTarget.files[0]);
            }}
          />
        </div>
      </Modal>
    </>
  );
};
export default ModalPublication;
