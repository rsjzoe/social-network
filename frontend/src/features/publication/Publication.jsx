import { useEffect, useState } from "react";
import { PostUser } from "../../components/postUser/postUser";
import "./Publication.css";
import { serverUrl } from "../../constants";

export function Publication(props) {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    let response = await fetch(`${serverUrl}/publications`, {});
    if (response.ok) {
      let data = await response.json();
      setPosts(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {posts.map((post, i) => (
        <PostUser publication={post} key={i} />
      ))}
    </>
  );
}
