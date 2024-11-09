import { useState } from "react";
import { Story } from "../../components/story/Story";

export function ListStory(props) {
  const [translate, setTranslate] = useState(0);
  return (
    <>
      <div className="story-container">
        <img
          src="chevron-left-svgrepo-com.svg"
          className="chevron left"
          onClick={() => {
            setTranslate(translate >= 0 ? 0 : translate + 260);
          }}
          alt=""
        />
        <img
          src="chevron-right-svgrepo-com.svg"
          className="chevron right"
          onClick={() => {
            setTranslate(translate - 260);
          }}
          alt=""
        />
        <div
          className="story-translate"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          <Story src={"image/photo.png"} name={"youu"} />
          <Story src={"image/photo4.png"} name={"Soyaaa"} />
          <Story src={"image/photo5.png"} name={"Jennie"} />
          <Story src={"image/photo.png"} name={"youu"} />
          <Story src={"image/photo4.png"} name={"Soyaaa"} />
          <Story src={"image/photo5.png"} name={"Jennie"} />
          <Story src={"image/photo.png"} name={"youu"} />
          <Story src={"image/photo4.png"} name={"Soyaaa"} />
          <Story src={"image/photo5.png"} name={"Jennie"} />
          <Story src={"image/photo.png"} name={"youu"} />
          <Story src={"image/photo4.png"} name={"Soyaaa"} />
          <Story src={"image/photo5.png"} name={"Jennie"} />
          <Story src={"image/photo.png"} name={"youu"} />
          <Story src={"image/photo4.png"} name={"Soyaaa"} />
          <Story src={"image/photo5.png"} name={"Jennie"} />
        </div>
      </div>
    </>
  );
}
