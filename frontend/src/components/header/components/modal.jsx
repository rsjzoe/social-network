import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import './modal.css'

const { TextArea } = Input;
const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ModalPublication = ({ isOpen, handleCancel }) => {
  return (
    <>
      <Modal
        title="Create Post"
        open={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" style={{ width: "100%" }}>
            Share
          </Button>,
        ]}
        centered
        className="modal-create-pub"
      >
        <div className="create-pub">
          <TextArea rows={4} placeholder="Write Legends..." />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
      </Modal>
    </>
  );
};
export default ModalPublication;
