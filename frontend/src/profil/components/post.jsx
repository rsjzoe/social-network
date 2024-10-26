import "./post.css";
export function Post(props) {
  return (
    <>
      <div className="posts">
        <div className="no-posts">
          <div className="img-circle">
            <img src="camera-svgrepo-com.svg" alt="" />
          </div>
          <span>No posts yet</span>
        </div>
      </div>
    </>
  );
}
