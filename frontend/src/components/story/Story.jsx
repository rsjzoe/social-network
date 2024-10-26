import "./Story.css";
export function Story({ src, name, addStory }) {
  return (
    <>
      <div className="story">
        <span className="image">
          <img src={src} alt="" />
        </span>
        <span className="name">{name}</span>
      </div>
    </>
  );
}
