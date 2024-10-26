import { useNavigate } from "react-router-dom";
import "./chatbox.css";
import { ChatItem } from "./components/chatItem";
import { Typing } from "./components/typing";
export function Chatbox(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="chatBox">
        <div className="head">
          <img
            src="left-arrow-svgrepo-com.svg"
            alt=""
            className="chevron"
            onClick={() => {
              navigate(-1);
            }}
          />
          <img src="image/photo5.png" alt="" className="user-head" />
          <span className="name-user">Soyaaa</span>
        </div>
        <div className="list-chat">
          <ChatItem
            image={"image/photo5.png"}
            text={<Typing/>}
            me={false}
           
          />
          <ChatItem
            image={"image/photo5.png"}
            text={`helloo, wassup there? it's been a while`}
            me={false}
          />
          <ChatItem image={"image/photo5.png"} text={`Coucou`} me={false} />
          <ChatItem
            text={`hi there!!,,not much  Optio itaque reprehenderit aliq reiciendis `}
            me
          />
          <ChatItem
            image={"image/photo5.png"}
            text={`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio itaque reprehenderit aliquam reiciendis,`}
            me={false}
          />
          <ChatItem text={`Lorem ipsum dolor sit `} me />
          <ChatItem
            image={"image/photo5.png"}
            text={`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio itaque reprehenderit aliquam reiciendis,`}
            me={false}
          />
          <ChatItem
            text={`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio itaque reprehenderit aliquam reiciendis,`}
            me
          />
          <ChatItem text={`mba valio le msg nay eee`} me />
          <ChatItem
            image={"image/photo5.png"}
            text={`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio itaque reprehenderit aliquam reiciendis,`}
            me={false}
          />
          <ChatItem image={"image/photo5.png"} text={`de aonaa`} me={false} />
          <ChatItem
            text={`Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio itaque reprehenderit aliquam reiciendis,`}
            me
          />
        </div>
        <div className="input-msg">
          <img src="plus-circle-svgrepo-com.svg" alt="" className="icon" />
          <img src="cam.svg" alt="" className="icon" />
          <input type="text" placeholder="write message..." />
          <img src="send1.svg" alt="" className="icon" />
        </div>
      </div>
    </>
  );
}
