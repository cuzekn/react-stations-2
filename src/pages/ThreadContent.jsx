import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ThreadContent = () => {
  const [threadsList, setThreadsList] = useState([]);
  const [threadTitle, setThreadTitle] = useState([]);
  const [threadPosts, setThreadPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const location = useLocation();
  const threadId = location.pathname.split("/")[2];
  
  useEffect(() => {
    axios
      .get(
        `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=${postCount}`
      )
      .then((res) => {
        const data = res.data;
        const list = res.data.posts.map((post) => ({
          id: post.id,
          post: post.post,
        }));
        setThreadsList(list);
        setThreadTitle(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postCount, threadPosts]);

  const addPost = () => {
    axios
      .post(
        `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`,
        {
          post: threadPosts,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(threadPosts);
    setThreadPosts("");
  };

  return (
    <div>
      <h2>
        {threadTitle.threadId} : {threadTitle.title}
      </h2>
      {threadsList.map((thread) => (
        <ul key={thread.id}>
          <li>
            {thread.id}番 : {thread.post}
          </li>
        </ul>
      ))}

      <button onClick={() => setPostCount(postCount - 10)}>back</button>
      <button onClick={() => setPostCount(postCount + 10)}>next</button>
      <button onClick={() => setPostCount(0)}>Top</button>

      <form onSubmit={addPost}>
        <label>コメント</label>
        <input
          type="text"
          value={threadPosts}
          onChange={(e) => setThreadPosts(e.target.value)}
          required
        />
        <input type="submit" value="投稿" />
      </form>
    </div>
  );
};
