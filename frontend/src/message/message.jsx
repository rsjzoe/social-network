import { ListStory } from "../ListStory/listStory";
import { MessageItem } from "./components/messageItem";
import "./message.css";

export function Message(props) {
  return (
    <>
      <ListStory />
      <div className="messages">
        <div className="title-container">
          <span className="title">Messages</span>
          <img src="edit.svg" alt="" />
        </div>

        <MessageItem
          src={"image/photo5.png"}
          name={"Soyaaa"}
          msg={`helloo, wassup there? it's been a while
                `}
        />
        <MessageItem
          src={"image/photo4.png"}
          name={"Kaeloo"}
          msg={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi asperiores doloremque ratione amet delectus, est soluta veritatis. Quae, necessitatibus?
                `}
        />
        <MessageItem
          src={"image/photo3.png"}
          name={"Aniesse"}
          msg={`my bad... I have a bigger fish to fry!
                `}
        />
        
      </div>
    </>
  );
}
