import { Typing } from "./typing";

export function ChatItem({ text, image, me, typing }) {
  return (
    <>
      <div className={"chat-item " + (me ? "me" : "")}>
        <div className="chat">
          {me ? null : <img src={image} alt="" />}
          <p className="text">{text} </p>
        </div>
      </div>
      {/* <Typing/> */}
    </>
  );
}
